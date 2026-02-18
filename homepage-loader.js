(function() {
  var mountId = 'homepage-mount';
  var mount = document.getElementById(mountId);
  if (!mount) { console.warn('[PointFive] No #' + mountId + ' element found.'); return; }

  // Inject styles
  var style = document.createElement('style');
  style.textContent = `:root {
      --blue: #0000ee;
      --blue-light: #cde3ff;
      --black: #000;
      --gray: #4a5565;
      --border: #e9efef;
      --bg: #fff;
      --font: 'DM Sans', -apple-system, sans-serif;
      --mono: 'DM Mono', monospace;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: var(--font);
      background: var(--bg);
      color: var(--black);
      overflow-x: hidden;
    }

    /* NAV */
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 48px;
      height: 64px;
      background: rgba(255,255,255,0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }

    .nav-logo {
      font-size: 20px;
      font-weight: 700;
      color: var(--black);
      letter-spacing: -0.5px;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .nav-logo svg {
      width: 28px;
      height: 28px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
      list-style: none;
    }

    .nav-links a {
      font-size: 14px;
      font-weight: 500;
      color: var(--gray);
      text-decoration: none;
      transition: color 0.15s;
    }

    .nav-links a:hover { color: var(--black); }

    .nav-cta {
      background: var(--blue);
      color: #fff !important;
      padding: 8px 20px;
      border-radius: 6px;
      font-weight: 600 !important;
      font-size: 14px !important;
      transition: opacity 0.15s !important;
    }

    .nav-cta:hover { opacity: 0.85; }

    /* HERO */
    .hero {
      padding: 140px 48px 80px;
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--blue-light);
      color: var(--blue);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 100px;
      margin-bottom: 32px;
    }

    .hero-badge::before {
      content: '';
      width: 6px;
      height: 6px;
      background: var(--blue);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }

    .hero h1 {
      font-size: clamp(48px, 7vw, 84px);
      font-weight: 700;
      line-height: 1.05;
      letter-spacing: -2px;
      color: var(--black);
      max-width: 900px;
      margin: 0 auto 24px;
    }

    .hero h1 em {
      font-style: normal;
      color: var(--blue);
    }

    .hero p {
      font-size: 20px;
      line-height: 1.6;
      color: var(--gray);
      max-width: 600px;
      margin: 0 auto 40px;
      font-weight: 400;
    }

    .hero-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .btn-primary {
      background: var(--blue);
      color: #fff;
      padding: 14px 32px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
      transition: opacity 0.15s, transform 0.15s;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .btn-primary:hover { opacity: 0.85; transform: translateY(-1px); }

    .btn-secondary {
      color: var(--black);
      padding: 14px 32px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      text-decoration: none;
      border: 1.5px solid var(--border);
      transition: border-color 0.15s, transform 0.15s;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .btn-secondary:hover { border-color: #999; transform: translateY(-1px); }

    /* HERO STATS */
    .hero-stats {
      display: flex;
      justify-content: center;
      gap: 48px;
      margin-top: 64px;
      padding-top: 40px;
      border-top: 1px solid var(--border);
      flex-wrap: wrap;
    }

    .stat {
      text-align: center;
    }

    .stat-num {
      font-size: 36px;
      font-weight: 700;
      color: var(--black);
      letter-spacing: -1px;
      line-height: 1;
      display: block;
    }

    .stat-label {
      font-size: 13px;
      color: var(--gray);
      margin-top: 4px;
      font-weight: 400;
    }

    /* DASHBOARD */
    .dashboard-section {
      width: 100%;
      background: #000;
      padding: 0;
      overflow: hidden;
      position: relative;
    }

    .dashboard-header {
      text-align: center;
      padding: 64px 48px 48px;
    }

    .dashboard-header h2 {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.4);
      margin-bottom: 0;
    }

    .dashboard-ui {
      width: 100%;
      background: #0a0a0f;
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 32px;
      min-height: 560px;
      position: relative;
    }

    /* Simulated dashboard */
    .dash-topbar {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(255,255,255,0.07);
    }

    .dash-logo {
      font-size: 15px;
      font-weight: 700;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .dash-nav-items {
      display: flex;
      gap: 4px;
      margin-left: 24px;
    }

    .dash-nav-item {
      font-size: 13px;
      color: rgba(255,255,255,0.4);
      padding: 6px 14px;
      border-radius: 6px;
      cursor: default;
      font-family: var(--mono);
    }

    .dash-nav-item.active {
      background: rgba(0,0,238,0.3);
      color: #7da9ff;
    }

    .dash-body {
      display: grid;
      grid-template-columns: 260px 1fr;
      gap: 20px;
      height: 440px;
    }

    /* LEFT PANEL */
    .dash-sidebar {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .waste-summary-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      padding: 20px;
    }

    .waste-summary-card h4 {
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.35);
      margin-bottom: 12px;
      font-family: var(--mono);
    }

    .waste-big-num {
      font-size: 38px;
      font-weight: 700;
      color: #fff;
      letter-spacing: -1.5px;
      line-height: 1;
    }

    .waste-sub {
      font-size: 12px;
      color: rgba(255,255,255,0.4);
      margin-top: 4px;
    }

    .waste-bar-container {
      margin-top: 14px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .waste-bar-row {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: rgba(255,255,255,0.45);
    }

    .waste-bar-label { width: 80px; flex-shrink: 0; }

    .waste-bar-track {
      flex: 1;
      height: 4px;
      background: rgba(255,255,255,0.08);
      border-radius: 2px;
      overflow: hidden;
    }

    .waste-bar-fill {
      height: 100%;
      border-radius: 2px;
      background: var(--blue);
    }

    .waste-bar-val { width: 32px; text-align: right; font-family: var(--mono); }

    /* opportunity list */
    .opp-list-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      padding: 16px;
      flex: 1;
      overflow: hidden;
    }

    .opp-list-card h4 {
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.35);
      margin-bottom: 12px;
      font-family: var(--mono);
    }

    .opp-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .opp-item:last-child { border-bottom: none; }

    .opp-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .opp-text {
      font-size: 11px;
      color: rgba(255,255,255,0.6);
      flex: 1;
      line-height: 1.3;
    }

    .opp-amt {
      font-size: 11px;
      font-family: var(--mono);
      color: #4ade80;
      font-weight: 600;
      flex-shrink: 0;
    }

    .severity-critical { background: #ef4444; }
    .severity-high { background: #f97316; }
    .severity-medium { background: #eab308; }
    .severity-low { background: #6b7280; }

    /* RIGHT PANEL */
    .dash-main {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .dash-metrics-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }

    .metric-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      padding: 16px;
    }

    .metric-label {
      font-size: 11px;
      color: rgba(255,255,255,0.35);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-family: var(--mono);
      margin-bottom: 8px;
    }

    .metric-value {
      font-size: 26px;
      font-weight: 700;
      color: #fff;
      letter-spacing: -0.5px;
      line-height: 1;
    }

    .metric-delta {
      font-size: 11px;
      margin-top: 4px;
      color: #4ade80;
      display: flex;
      align-items: center;
      gap: 3px;
    }

    .metric-delta.neg { color: #f87171; }

    /* detection table */
    .detection-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      padding: 0;
      flex: 1;
      overflow: hidden;
    }

    .detection-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.07);
    }

    .detection-card-header span {
      font-size: 12px;
      font-weight: 600;
      color: rgba(255,255,255,0.6);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-family: var(--mono);
    }

    .badge-new {
      background: rgba(0,0,238,0.4);
      color: #7da9ff;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 3px 8px;
      border-radius: 4px;
    }

    .detection-table {
      width: 100%;
    }

    .detection-row {
      display: grid;
      grid-template-columns: 1fr 100px 80px 100px 90px;
      padding: 10px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.04);
      align-items: center;
      transition: background 0.1s;
      cursor: default;
    }

    .detection-row:hover { background: rgba(255,255,255,0.03); }
    .detection-row.header { opacity: 0.4; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; font-family: var(--mono); }
    .detection-row.header:hover { background: transparent; }

    .detection-name {
      font-size: 12px;
      color: rgba(255,255,255,0.75);
      line-height: 1.3;
    }

    .detection-service {
      font-size: 11px;
      color: rgba(255,255,255,0.35);
      font-family: var(--mono);
    }

    .detection-saving {
      font-size: 13px;
      font-weight: 600;
      color: #4ade80;
      font-family: var(--mono);
    }

    .severity-badge {
      font-size: 10px;
      font-weight: 600;
      padding: 3px 8px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: inline-block;
    }

    .sev-critical { background: rgba(239,68,68,0.2); color: #fca5a5; }
    .sev-high { background: rgba(249,115,22,0.2); color: #fdba74; }
    .sev-medium { background: rgba(234,179,8,0.2); color: #fde047; }

    .action-btn {
      font-size: 11px;
      color: #7da9ff;
      border: 1px solid rgba(0,0,238,0.4);
      border-radius: 5px;
      padding: 4px 10px;
      cursor: default;
      font-family: var(--mono);
      font-weight: 500;
      display: inline-block;
      transition: background 0.1s;
    }

    .action-btn:hover { background: rgba(0,0,238,0.2); }

    /* LOGOS */
    .logos-section {
      padding: 64px 48px;
      border-bottom: 1px solid var(--border);
    }

    .logos-label {
      text-align: center;
      font-size: 13px;
      font-weight: 500;
      color: rgba(0,0,0,0.35);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 40px;
    }

    .logos-track {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 56px;
      flex-wrap: wrap;
    }

    .logo-item {
      font-size: 18px;
      font-weight: 700;
      color: rgba(0,0,0,0.25);
      letter-spacing: -0.5px;
      transition: color 0.2s;
      cursor: default;
    }

    .logo-item:hover { color: rgba(0,0,0,0.65); }

    /* HOW IT WORKS */
    .how-section {
      padding: 100px 48px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-eyebrow {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--blue);
      margin-bottom: 16px;
      display: block;
    }

    .section-title {
      font-size: clamp(36px, 4vw, 52px);
      font-weight: 700;
      letter-spacing: -1.5px;
      line-height: 1.1;
      color: var(--black);
      max-width: 560px;
      margin-bottom: 64px;
    }

    .pillars-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
      border: 1px solid var(--border);
      border-radius: 16px;
      overflow: hidden;
    }

    .pillar {
      padding: 36px 28px;
      border-right: 1px solid var(--border);
      position: relative;
      transition: background 0.2s;
    }

    .pillar:last-child { border-right: none; }
    .pillar:hover { background: #f8fafc; }

    .pillar-number {
      font-size: 11px;
      font-family: var(--mono);
      color: rgba(0,0,0,0.2);
      font-weight: 500;
      margin-bottom: 20px;
      display: block;
    }

    .pillar-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      font-size: 20px;
    }

    .pillar-icon-1 { background: #e0f2fe; }
    .pillar-icon-2 { background: #ede9fe; }
    .pillar-icon-3 { background: var(--blue-light); }
    .pillar-icon-4 { background: #dcfce7; }
    .pillar-icon-5 { background: #fef3c7; }

    .pillar h3 {
      font-size: 15px;
      font-weight: 700;
      color: var(--black);
      line-height: 1.3;
      margin-bottom: 10px;
      letter-spacing: -0.2px;
    }

    .pillar p {
      font-size: 13px;
      color: var(--gray);
      line-height: 1.55;
    }

    .pillar-connector {
      position: absolute;
      right: -12px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      width: 22px;
      height: 22px;
      background: var(--blue);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
    }

    .pillar:last-child .pillar-connector { display: none; }

    /* ROI SECTION */
    .roi-section {
      background: var(--black);
      color: #fff;
      padding: 100px 48px;
    }

    .roi-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .roi-content .section-eyebrow {
      color: #7da9ff;
    }

    .roi-content h2 {
      font-size: clamp(36px, 4vw, 52px);
      font-weight: 700;
      letter-spacing: -1.5px;
      line-height: 1.1;
      color: #fff;
      margin-bottom: 24px;
    }

    .roi-content p {
      font-size: 18px;
      color: rgba(255,255,255,0.55);
      line-height: 1.6;
      margin-bottom: 40px;
    }

    .roi-stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: rgba(255,255,255,0.08);
      border-radius: 16px;
      overflow: hidden;
    }

    .roi-stat {
      background: rgba(255,255,255,0.04);
      padding: 36px 32px;
      transition: background 0.2s;
    }

    .roi-stat:hover { background: rgba(255,255,255,0.07); }

    .roi-stat-num {
      font-size: 48px;
      font-weight: 700;
      letter-spacing: -2px;
      line-height: 1;
      color: #fff;
      display: block;
    }

    .roi-stat-label {
      font-size: 13px;
      color: rgba(255,255,255,0.4);
      margin-top: 6px;
      line-height: 1.4;
    }

    .testimonial {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 28px;
      margin-top: 32px;
    }

    .testimonial blockquote {
      font-size: 17px;
      font-style: italic;
      color: rgba(255,255,255,0.75);
      line-height: 1.55;
      margin-bottom: 16px;
    }

    .testimonial-author {
      font-size: 13px;
      color: rgba(255,255,255,0.4);
    }

    .testimonial-author strong {
      color: rgba(255,255,255,0.7);
      font-weight: 600;
    }

    /* CTA FOOTER */
    .cta-section {
      padding: 120px 48px;
      text-align: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .cta-section h2 {
      font-size: clamp(40px, 5vw, 64px);
      font-weight: 700;
      letter-spacing: -2px;
      line-height: 1.05;
      margin-bottom: 24px;
    }

    .cta-section h2 em {
      font-style: normal;
      color: var(--blue);
    }

    .cta-section p {
      font-size: 19px;
      color: var(--gray);
      max-width: 500px;
      margin: 0 auto 40px;
      line-height: 1.55;
    }

    footer {
      border-top: 1px solid var(--border);
      padding: 24px 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      color: rgba(0,0,0,0.35);
    }

    footer a {
      color: rgba(0,0,0,0.35);
      text-decoration: none;
    }

    footer a:hover { color: var(--black); }

    /* Animations */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .hero > * {
      animation: fadeUp 0.6s ease both;
    }

    .hero-badge { animation-delay: 0.05s; }
    .hero h1 { animation-delay: 0.1s; }
    .hero p { animation-delay: 0.18s; }
    .hero-actions { animation-delay: 0.24s; }
    .hero-stats { animation-delay: 0.3s; }

    /* Responsive */
    @media (max-width: 1024px) {
      .pillars-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .pillar:nth-child(2) { border-right: none; }
      .pillar:nth-child(3) { border-top: 1px solid var(--border); }
      .pillar:nth-child(4) { border-top: 1px solid var(--border); border-right: none; }
      .dash-metrics-row { grid-template-columns: repeat(2,1fr); }
      .roi-inner { grid-template-columns: 1fr; gap: 48px; }
    }

    @media (max-width: 768px) {
      nav { padding: 0 24px; }
      .nav-links { display: none; }
      .hero { padding: 100px 24px 60px; }
      .how-section, .logos-section { padding: 64px 24px; }
      .roi-section { padding: 64px 24px; }
      .cta-section { padding: 80px 24px; }
      footer { padding: 24px; flex-direction: column; gap: 8px; text-align: center; }
      .pillars-grid { grid-template-columns: 1fr; border-radius: 12px; }
      .pillar { border-right: none; border-bottom: 1px solid var(--border); }
      .pillar:last-child { border-bottom: none; }
      .pillar-connector { display: none !important; }
      .roi-stats-grid { grid-template-columns: 1fr; }
      .dash-body { grid-template-columns: 1fr; height: auto; }
      .dash-sidebar { display: none; }
      .detection-row { grid-template-columns: 1fr 80px 70px; }
      .detection-row > :nth-child(4), .detection-row > :nth-child(5) { display: none; }
    }`;
  document.head.appendChild(style);

  // Inject HTML
  mount.innerHTML = `<!-- NAV -->
<nav>
  <a href="#" class="nav-logo">
    <svg viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="6" fill="#0000ee"/>
      <path d="M7 8h14v4H7V8zm0 8h10v4H7v-4z" fill="white" opacity="0.9"/>
      <circle cx="20" cy="20" r="2.5" fill="white"/>
    </svg>
    PointFive
  </a>
  <ul class="nav-links">
    <li><a href="#">Platform</a></li>
    <li><a href="#">DeepWaste™</a></li>
    <li><a href="#">Technology</a></li>
    <li><a href="#">Customers</a></li>
    <li><a href="#">Resources</a></li>
    <li><a href="#" class="nav-cta">Get a Demo →</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-badge">Infrastructure & AI Efficiency Management</div>
  <h1>Stop wasting time<br>and money in<br><em>the cloud</em></h1>
  <p>PointFive's DeepWaste™ Detection Engine finds and eliminates cloud inefficiencies your current tools can't even see.</p>
  <div class="hero-actions">
    <a href="#" class="btn-primary">Get a Demo →</a>
    <a href="#" class="btn-secondary">See it in action ↓</a>
  </div>
  <div class="hero-stats">
    <div class="stat">
      <span class="stat-num">1200%+</span>
      <span class="stat-label">Average customer ROI</span>
    </div>
    <div class="stat">
      <span class="stat-num">$50M</span>
      <span class="stat-label">Total savings delivered</span>
    </div>
    <div class="stat">
      <span class="stat-num">400+</span>
      <span class="stat-label">Detection types</span>
    </div>
    <div class="stat">
      <span class="stat-num">10 days</span>
      <span class="stat-label">Time to full ROI</span>
    </div>
  </div>
</section>

<!-- DASHBOARD -->
<div class="dashboard-section">
  <div class="dashboard-header">
    <h2>The PointFive Platform</h2>
  </div>
  <div class="dashboard-ui">
    <div class="dash-topbar">
      <div class="dash-logo">
        <svg viewBox="0 0 20 20" width="20" height="20" fill="none">
          <rect width="20" height="20" rx="4" fill="#0000ee"/>
          <path d="M5 6h10v3H5V6zm0 5h7v3H5v-3z" fill="white"/>
          <circle cx="14" cy="14" r="1.8" fill="white"/>
        </svg>
        PointFive
      </div>
      <div class="dash-nav-items">
        <span class="dash-nav-item active">Opportunities</span>
        <span class="dash-nav-item">Coverage</span>
        <span class="dash-nav-item">Remediation</span>
        <span class="dash-nav-item">Reports</span>
      </div>
    </div>
    <div class="dash-body">
      <!-- LEFT SIDEBAR -->
      <div class="dash-sidebar">
        <div class="waste-summary-card">
          <h4>Total Waste Detected</h4>
          <div class="waste-big-num">$2.4M</div>
          <div class="waste-sub">annual opportunity / 847 findings</div>
          <div class="waste-bar-container">
            <div class="waste-bar-row">
              <span class="waste-bar-label">Compute</span>
              <div class="waste-bar-track"><div class="waste-bar-fill" style="width:78%"></div></div>
              <span class="waste-bar-val">$1.1M</span>
            </div>
            <div class="waste-bar-row">
              <span class="waste-bar-label">Kubernetes</span>
              <div class="waste-bar-track"><div class="waste-bar-fill" style="width:55%;background:#6366f1"></div></div>
              <span class="waste-bar-val">$620K</span>
            </div>
            <div class="waste-bar-row">
              <span class="waste-bar-label">Data</span>
              <div class="waste-bar-track"><div class="waste-bar-fill" style="width:42%;background:#06b6d4"></div></div>
              <span class="waste-bar-val">$410K</span>
            </div>
            <div class="waste-bar-row">
              <span class="waste-bar-label">Storage</span>
              <div class="waste-bar-track"><div class="waste-bar-fill" style="width:22%;background:#8b5cf6"></div></div>
              <span class="waste-bar-val">$190K</span>
            </div>
            <div class="waste-bar-row">
              <span class="waste-bar-label">Network</span>
              <div class="waste-bar-track"><div class="waste-bar-fill" style="width:14%;background:#10b981"></div></div>
              <span class="waste-bar-val">$80K</span>
            </div>
          </div>
        </div>
        <div class="opp-list-card">
          <h4>High Priority</h4>
          <div class="opp-item">
            <div class="opp-dot severity-critical"></div>
            <span class="opp-text">EKS node overprovisioning — prod-cluster-us-east</span>
            <span class="opp-amt">$42K/mo</span>
          </div>
          <div class="opp-item">
            <div class="opp-dot severity-critical"></div>
            <span class="opp-text">Snowflake warehouse auto-suspend misconfigured</span>
            <span class="opp-amt">$28K/mo</span>
          </div>
          <div class="opp-item">
            <div class="opp-dot severity-high"></div>
            <span class="opp-text">RDS Multi-AZ idle — analytics-staging</span>
            <span class="opp-amt">$18K/mo</span>
          </div>
          <div class="opp-item">
            <div class="opp-dot severity-high"></div>
            <span class="opp-text">EC2 m5.2xlarge CPU &lt;4% — 23 instances</span>
            <span class="opp-amt">$14K/mo</span>
          </div>
          <div class="opp-item">
            <div class="opp-dot severity-medium"></div>
            <span class="opp-text">S3 storage class drift — 147 buckets</span>
            <span class="opp-amt">$8K/mo</span>
          </div>
        </div>
      </div>
      <!-- MAIN -->
      <div class="dash-main">
        <div class="dash-metrics-row">
          <div class="metric-card">
            <div class="metric-label">Opportunities</div>
            <div class="metric-value">847</div>
            <div class="metric-delta">↑ 23 new this week</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Remediated (30d)</div>
            <div class="metric-value">124</div>
            <div class="metric-delta">$340K saved</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Cloud Coverage</div>
            <div class="metric-value">100%</div>
            <div class="metric-delta">AWS · Azure · GCP · K8s</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Detection Types</div>
            <div class="metric-value">400+</div>
            <div class="metric-delta">+10 added this week</div>
          </div>
        </div>
        <div class="detection-card">
          <div class="detection-card-header">
            <span>DeepWaste™ Detections</span>
            <span class="badge-new">Live • 847 active</span>
          </div>
          <div class="detection-table">
            <div class="detection-row header">
              <span>Detection</span>
              <span>Service</span>
              <span>Savings/yr</span>
              <span>Severity</span>
              <span>Action</span>
            </div>
            <div class="detection-row">
              <span class="detection-name">EKS nodes overprovisioned — CPU requests 12× actual usage</span>
              <span class="detection-service">AWS EKS</span>
              <span class="detection-saving">$504K</span>
              <span><span class="severity-badge sev-critical">Critical</span></span>
              <span><span class="action-btn">Remediate →</span></span>
            </div>
            <div class="detection-row">
              <span class="detection-name">Snowflake warehouse running continuously — zero activity 67% of day</span>
              <span class="detection-service">Snowflake</span>
              <span class="detection-saving">$336K</span>
              <span><span class="severity-badge sev-critical">Critical</span></span>
              <span><span class="action-btn">Remediate →</span></span>
            </div>
            <div class="detection-row">
              <span class="detection-name">Aurora reader instances at 1% utilization — cross-AZ query routing</span>
              <span class="detection-service">AWS RDS</span>
              <span class="detection-saving">$216K</span>
              <span><span class="severity-badge sev-high">High</span></span>
              <span><span class="action-btn">Remediate →</span></span>
            </div>
            <div class="detection-row">
              <span class="detection-name">NAT Gateway data processing — internal S3 traffic not using VPC endpoint</span>
              <span class="detection-service">AWS VPC</span>
              <span class="detection-saving">$180K</span>
              <span><span class="severity-badge sev-high">High</span></span>
              <span><span class="action-btn">Remediate →</span></span>
            </div>
            <div class="detection-row">
              <span class="detection-name">Databricks clusters not using spot instances for batch jobs</span>
              <span class="detection-service">Databricks</span>
              <span class="detection-saving">$144K</span>
              <span><span class="severity-badge sev-medium">Medium</span></span>
              <span><span class="action-btn">Remediate →</span></span>
            </div>
            <div class="detection-row">
              <span class="detection-name">CloudWatch log retention unlimited — 2.4TB logs never queried</span>
              <span class="detection-service">AWS CW</span>
              <span class="detection-saving">$96K</span>
              <span><span class="severity-badge sev-medium">Medium</span></span>
              <span><span class="action-btn">Remediate →</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- LOGOS -->
<section class="logos-section">
  <div class="logos-label">Trusted by engineering teams at</div>
  <div class="logos-track">
    <span class="logo-item">Nubank</span>
    <span class="logo-item">Wix</span>
    <span class="logo-item">monday.com</span>
    <span class="logo-item">Fiverr</span>
    <span class="logo-item">ironSource</span>
    <span class="logo-item">Lightricks</span>
    <span class="logo-item">Skai</span>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="how-section">
  <span class="section-eyebrow">How It Works</span>
  <h2 class="section-title">Four steps to autonomous efficiency</h2>
  <div class="pillars-grid">
    <!-- 1 -->
    <div class="pillar">
      <span class="pillar-number">01</span>
      <div class="pillar-icon pillar-icon-1">🔍</div>
      <h3>Discover — InfraFabric</h3>
      <p>Instantly see everything running across your infrastructure and AI stack with a simple, agentless setup — creating one unified source of truth.</p>
      <div class="pillar-connector">→</div>
    </div>
    <!-- 2 -->
    <div class="pillar">
      <span class="pillar-number">02</span>
      <div class="pillar-icon pillar-icon-2">🔬</div>
      <h3>Detect — DeepWaste™ Detection</h3>
      <p>Continuously uncover inefficiencies with full context, clear ownership, and prioritized opportunities that drive real business impact.</p>
      <div class="pillar-connector">→</div>
    </div>
    <!-- 3 -->
    <div class="pillar">
      <span class="pillar-number">03</span>
      <div class="pillar-icon pillar-icon-3">⚡</div>
      <h3>Act — Agentic Remediation</h3>
      <p>Turn insight into action with guided and automated workflows embedded directly into your engineering tools.</p>
      <div class="pillar-connector">→</div>
    </div>
    <!-- 4 -->
    <div class="pillar">
      <span class="pillar-number">04</span>
      <div class="pillar-icon pillar-icon-4">📈</div>
      <h3>Impact — Measurable Business Value</h3>
      <p>Deliver measurable savings, performance gains, and productivity improvements — transforming efficiency into a continuous practice.</p>
    </div>
  </div>
</section>

<!-- ROI -->
<section class="roi-section">
  <div class="roi-inner">
    <div class="roi-content">
      <span class="section-eyebrow">Proven ROI</span>
      <h2>Results that speak for themselves</h2>
      <p>PointFive customers don't wait quarters for value. They see real savings within days — because we find waste your current tools can't detect.</p>
      <div class="testimonial">
        <blockquote>"It took us 10 days to get full ROI on our partnership with PointFive"</blockquote>
        <div class="testimonial-author">
          <strong>Mike Rosenberg</strong> · Sr. Director of Engineering, Nubank
        </div>
      </div>
    </div>
    <div class="roi-stats-grid">
      <div class="roi-stat">
        <span class="roi-stat-num">1200%+</span>
        <span class="roi-stat-label">Average customer ROI across all accounts</span>
      </div>
      <div class="roi-stat">
        <span class="roi-stat-num">$50M</span>
        <span class="roi-stat-label">Total infrastructure savings delivered</span>
      </div>
      <div class="roi-stat">
        <span class="roi-stat-num">10 days</span>
        <span class="roi-stat-label">Time to full ROI (Nubank)</span>
      </div>
      <div class="roi-stat">
        <span class="roi-stat-num">400+</span>
        <span class="roi-stat-label">Unique detection types and growing weekly</span>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <h2>See what's hiding<br>in <em>your cloud</em></h2>
  <p>Get a personalized demo and see your actual waste detected in the first session.</p>
  <div class="hero-actions">
    <a href="#" class="btn-primary">Get a Demo →</a>
    <a href="#" class="btn-secondary">Talk to an engineer</a>
  </div>
</section>

<footer>
  <span>© 2025 PointFive · Infrastructure Efficiency Management</span>
  <span>
    <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Security</a>
  </span>
</footer>`;

  // Hide Webflow default nav/footer
  var wfNav = document.querySelector('.navbar, .w-nav, nav.w-nav');
  if (wfNav) wfNav.style.display = 'none';
  var wfFooter = document.querySelector('footer.w-nav, .footer');
  if (wfFooter) wfFooter.style.display = 'none';
})();
