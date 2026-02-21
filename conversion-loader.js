(function() {
    'use strict';

    // JSON-encoded CSS to avoid template literal parsing issues
    const cssContent = JSON.parse('{"styles":"@import url(\'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap\');\\n\\n#conversion-landing-wrapper * {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n#conversion-landing-wrapper {\\n  font-family: \'Inter\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n#conversion-landing-wrapper .hero-gradient {\\n  background: linear-gradient(180deg, #ffffff 0%, #f8f9fb 100%);\\n}\\n\\n#conversion-landing-wrapper .btn-primary {\\n  background: #00e;\\n  box-shadow: 0 4px 14px rgba(0, 0, 238, 0.25);\\n  transition: all 0.3s ease;\\n}\\n\\n#conversion-landing-wrapper .btn-primary:hover {\\n  transform: translateY(-2px);\\n  box-shadow: 0 8px 24px rgba(0, 0, 238, 0.35);\\n  background: #0000cc;\\n}\\n\\n#conversion-landing-wrapper .feature-card {\\n  transition: all 0.3s ease;\\n  border: 1px solid #e5e7eb;\\n}\\n\\n#conversion-landing-wrapper .feature-card:hover {\\n  transform: translateY(-4px);\\n  box-shadow: 0 12px 32px rgba(0, 0, 238, 0.08);\\n  border-color: #00e;\\n}\\n\\n#conversion-landing-wrapper .stat-card {\\n  background: white;\\n  border: 1px solid #e5e7eb;\\n  transition: all 0.3s ease;\\n}\\n\\n#conversion-landing-wrapper .stat-card:hover {\\n  transform: translateY(-4px);\\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\\n}\\n\\n#conversion-landing-wrapper .headline {\\n  font-size: 3.5rem;\\n  line-height: 1.1;\\n  font-weight: 800;\\n  letter-spacing: -0.02em;\\n}\\n\\n@media (max-width: 768px) {\\n  #conversion-landing-wrapper .headline {\\n    font-size: 2.25rem;\\n  }\\n}"}');

    // JSON-encoded HTML content with updated copy only
    const htmlContent = JSON.parse('{"html":"<section class=\\"hero-gradient py-24 px-4 sm:px-6 lg:px-8\\"><div class=\\"max-w-7xl mx-auto\\"><div class=\\"text-center max-w-4xl mx-auto\\"><div class=\\"inline-block mb-8 px-6 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold\\">$50M Saved Across Our Top 20 Accounts</div><h1 class=\\"headline text-gray-900 mb-6\\">PointFive Shows You How to<br><span class=\\"text-blue-600\\">Safely Reduce Waste</span></h1><p class=\\"text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto\\">400+ optimization types across 850+ services. Detect hidden inefficiencies, eliminate waste, and optimize your cloud infrastructure with confidence.</p><div class=\\"flex flex-col sm:flex-row gap-4 justify-center\\"><a href=\\"#demo\\" class=\\"btn-primary inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg text-lg\\">Get Started<svg class=\\"ml-2 w-5 h-5\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M13 7l5 5m0 0l-5 5m5-5H6\\"></path></svg></a><a href=\\"#learn\\" class=\\"inline-flex items-center justify-center px-8 py-4 text-gray-700 font-semibold rounded-lg text-lg border-2 border-gray-300 hover:border-blue-600 transition-colors bg-white\\">Learn More</a></div></div></div></section><section class=\\"py-20 px-4 sm:px-6 lg:px-8 bg-white\\"><div class=\\"max-w-7xl mx-auto\\"><div class=\\"grid md:grid-cols-3 gap-8 mb-20\\"><div class=\\"stat-card text-center p-8 rounded-xl\\"><div class=\\"text-5xl font-black text-blue-600 mb-3\\">400+</div><div class=\\"text-lg font-semibold text-gray-900 mb-2\\">Optimization Types</div><div class=\\"text-gray-600\\">Comprehensive coverage</div></div><div class=\\"stat-card text-center p-8 rounded-xl\\"><div class=\\"text-5xl font-black text-blue-600 mb-3\\">850+</div><div class=\\"text-lg font-semibold text-gray-900 mb-2\\">Services Covered</div><div class=\\"text-gray-600\\">Across all major platforms</div></div><div class=\\"stat-card text-center p-8 rounded-xl\\"><div class=\\"text-5xl font-black text-blue-600 mb-3\\">$50M</div><div class=\\"text-lg font-semibold text-gray-900 mb-2\\">Total Savings</div><div class=\\"text-gray-600\\">Top 20 accounts</div></div></div><div class=\\"text-center mb-16\\"><h2 class=\\"text-4xl font-bold text-gray-900 mb-4\\">How PointFive Works</h2><p class=\\"text-xl text-gray-600 max-w-3xl mx-auto\\">Three pillars of autonomous infrastructure efficiency</p></div><div class=\\"grid md:grid-cols-3 gap-8\\"><div class=\\"feature-card bg-white p-8 rounded-xl\\"><div class=\\"w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6\\"><svg class=\\"w-8 h-8 text-blue-600\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4\\"></path></svg></div><h3 class=\\"text-2xl font-bold text-gray-900 mb-4\\">InfraFabric</h3><p class=\\"text-gray-600 leading-relaxed mb-4\\">Continuous system capture and context. Agentless architecture across compute, storage, AI, and data platforms.</p><ul class=\\"text-sm text-gray-600 space-y-2\\"><li class=\\"flex items-start\\"><svg class=\\"w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 13l4 4L19 7\\"></path></svg>Read-only access</li><li class=\\"flex items-start\\"><svg class=\\"w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 13l4 4L19 7\\"></path></svg>Multi-source intelligence</li><li class=\\"flex items-start\\"><svg class=\\"w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 13l4 4L19 7\\"></path></svg>Extensible architecture</li></ul></div><div class=\\"feature-card bg-white p-8 rounded-xl\\"><div class=\\"w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6\\"><svg class=\\"w-8 h-8 text-blue-600\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\\"></path></svg></div><h3 class=\\"text-2xl font-bold text-gray-900 mb-4\\">DeepWaste™</h3><p class=\\"text-gray-600 leading-relaxed mb-4\\">Deep, research-driven inefficiency detection. 400+ optimization types with context-aware analysis.</p><ul class=\\"text-sm text-gray-600 space-y-2\\"><li class=\\"flex items-start\\"><svg class=\\"w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 13l4 4L19 7\\"></path></svg>Supervised AI</li><li class=\\"flex items-start\\"><svg class=\\"w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 13l4 4L19 7\\"></path></svg>10 new detections weekly</li><li class=\\"flex items-start\\"><svg class=\\"w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 13l4 4L19 7\\"></path></svg>Comprehensive playbooks</li></ul></div><div class=\\"feature-card bg-white p-8 rounded-xl\\"><div class=\\"w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6\\"><svg class=\\"w-8 h-8 text-blue-600\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M13 10V3L4 14h7v7l9-11h-7z\\"></path></svg></div><h3 class=\\"text-2xl font-bold text-gray-900 mb-4\\">Agentic</h3><p class=\\"text-gray-600 leading-relaxed mb-4\\">Autonomous efficiency resolution at scale. Context-powered agents with engineering-grade execution.</p><ul class=\\"text-sm text-gray-600 space-y-2\\"><li class=\\"flex items-start\\"><svg class=\\"w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 13l4 4L19 7\\"></path></svg>1-click remediation</li><li class=\\"flex items-start\\"><svg class=\\"w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 13l4 4L19 7\\"></path></svg>IaC compatible</li><li class=\\"flex items-start\\"><svg class=\\"w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 13l4 4L19 7\\"></path></svg>Workflow integration</li></ul></div></div></div></section><section class=\\"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700\\"><div class=\\"max-w-4xl mx-auto text-center\\"><h2 class=\\"text-4xl sm:text-5xl font-bold text-white mb-6\\">Ready to Get Started?</h2><p class=\\"text-xl text-blue-100 mb-10\\">See how PointFive safely reduces waste in your infrastructure</p><div class=\\"flex flex-col sm:flex-row gap-4 justify-center\\"><a href=\\"#\\" class=\\"inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg text-lg hover:bg-gray-50 transition-colors\\">Schedule Demo<svg class=\\"ml-2 w-5 h-5\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M13 7l5 5m0 0l-5 5m5-5H6\\"></path></svg></a><a href=\\"#\\" class=\\"inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors\\">Contact Sales</a></div></div></section>"}');

    // Function to load Tailwind CSS
    function loadTailwind() {
        if (!document.querySelector('script[src*="tailwindcss"]')) {
            const script = document.createElement('script');
            script.src = 'https://cdn.tailwindcss.com';
            document.head.appendChild(script);
        }
    }

    // Function to inject CSS
    function injectCSS() {
        if (!document.getElementById('conversion-landing-styles')) {
            const style = document.createElement('style');
            style.id = 'conversion-landing-styles';
            style.textContent = cssContent.styles;
            document.head.appendChild(style);
        }
    }

    // Function to inject HTML
    function injectHTML() {
        const container = document.getElementById('conversion-landing-container');
        if (container && !document.getElementById('conversion-landing-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.id = 'conversion-landing-wrapper';
            wrapper.innerHTML = htmlContent.html;
            container.appendChild(wrapper);
        }
    }

    // Initialize
    function init() {
        loadTailwind();
        injectCSS();
        
        // Wait for Tailwind to load before injecting HTML
        const checkTailwind = setInterval(function() {
            if (typeof tailwind !== 'undefined' || document.querySelector('script[src*="tailwindcss"]')) {
                clearInterval(checkTailwind);
                setTimeout(injectHTML, 100);
            }
        }, 100);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
