(function () {
  const MOUNT_ID = 'homepage-mount';
  const HTML_URL = 'https://pointfive-marketing.github.io/pointfive-homepage.html';

  const mount = document.getElementById(MOUNT_ID);
  if (!mount) {
    console.warn('[homepage-loader] Mount element #' + MOUNT_ID + ' not found.');
    return;
  }

  // Hide Webflow's native nav and footer so they don't conflict
  const wfHideStyle = document.createElement('style');
  wfHideStyle.textContent = `
    /* Hide Webflow chrome when homepage-mount is present */
    .navbar, .nav-bar, [data-wf-page] > nav, [data-wf-page] > footer,
    .w-nav, .w-footer { display: none !important; }
    body { margin: 0 !important; padding: 0 !important; }
    #${MOUNT_ID} { display: block; width: 100%; }
  `;
  document.head.appendChild(wfHideStyle);

  fetch(HTML_URL)
    .then(function (res) {
      if (!res.ok) throw new Error('Failed to fetch homepage HTML: ' + res.status);
      return res.text();
    })
    .then(function (html) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Inject <style> blocks from the fetched page
      const styles = doc.querySelectorAll('style');
      styles.forEach(function (s) {
        const styleEl = document.createElement('style');
        styleEl.textContent = s.textContent;
        document.head.appendChild(styleEl);
      });

      // Inject Google Fonts links if not already present
      const links = doc.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(function (l) {
        if (!document.querySelector('link[href="' + l.href + '"]')) {
          const linkEl = document.createElement('link');
          linkEl.rel = 'stylesheet';
          linkEl.href = l.href;
          document.head.appendChild(linkEl);
        }
      });

      // Inject body content into mount
      mount.innerHTML = doc.body.innerHTML;

      // Re-execute any inline scripts in the injected content
      const scripts = mount.querySelectorAll('script');
      scripts.forEach(function (oldScript) {
        const newScript = document.createElement('script');
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    })
    .catch(function (err) {
      console.error('[homepage-loader]', err);
    });
})();
