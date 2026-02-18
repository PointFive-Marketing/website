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

    /* HOW IT WORKS — Premium Stepper */
    .hiw-section {
      width: 100%;
      padding: 100px 48px;
      background: #fff;
      overflow: hidden;
    }
    .hiw-inner {
      max-width: 1280px;
      margin: 0 auto;
    }
    .hiw-header {
      max-width: 640px;
      margin-bottom: 72px;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .hiw-header.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .hiw-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #00e;
      margin-bottom: 20px;
    }
    .hiw-eyebrow::before {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background: #00e;
      border-radius: 2px;
    }
    .hiw-headline {
      font-size: clamp(34px, 4vw, 52px);
      font-weight: 400;
      line-height: 1.1;
      color: #000;
      letter-spacing: -0.02em;
      margin-bottom: 18px;
    }
    .hiw-subhead {
      font-size: 18px;
      line-height: 1.65;
      color: #4a5565;
      font-weight: 300;
      max-width: 520px;
    }
    .hiw-stepper { position: relative; }
    .hiw-track {
      position: absolute;
      top: 44px;
      left: 24px;
      right: 24px;
      height: 2px;
      background: #e9efef;
      border-radius: 2px;
      overflow: hidden;
      z-index: 0;
    }
    .hiw-track-fill {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, #00e 0%, #5B8AFF 100%);
      border-radius: 2px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 1.4s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .hiw-track-fill.animate { transform: scaleX(1); }
    .hiw-steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      position: relative;
      z-index: 1;
    }
    .hiw-step {
      display: flex;
      flex-direction: column;
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .hiw-step.visible { opacity: 1; transform: translateY(0); }
    .hiw-step:nth-child(1) { transition-delay: 0.1s; }
    .hiw-step:nth-child(2) { transition-delay: 0.25s; }
    .hiw-step:nth-child(3) { transition-delay: 0.4s; }
    .hiw-step:nth-child(4) { transition-delay: 0.55s; }
    .hiw-dot-row {
      height: 88px;
      display: flex;
      align-items: center;
      padding-bottom: 24px;
    }
    .hiw-dot {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #fff;
      border: 2px solid #e9efef;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 12px;
      font-weight: 700;
      color: #4a5565;
      transition: border-color 0.25s, box-shadow 0.25s, background 0.25s, color 0.25s;
      position: relative;
      z-index: 2;
    }
    .hiw-step.active .hiw-dot,
    .hiw-step:hover .hiw-dot {
      border-color: #00e;
      background: #00e;
      color: #fff;
      box-shadow: 0 0 0 6px rgba(0,0,238,0.08);
    }
    .hiw-card {
      background: #fff;
      border-radius: 12px;
      padding: 28px 28px 24px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      flex: 1;
      cursor: pointer;
      transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
      outline: none;
      position: relative;
      overflow: hidden;
      border: 1px solid #e9efef;
    }
    .hiw-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, #00e, #5B8AFF);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s;
      border-radius: 12px 12px 0 0;
    }
    .hiw-card:hover,
    .hiw-step.active .hiw-card {
      transform: translateY(-6px);
      box-shadow: 0 12px 40px rgba(0,0,238,0.12);
    }
    .hiw-card:hover::before,
    .hiw-step.active .hiw-card::before { transform: scaleX(1); }
    .hiw-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #00e;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .hiw-label-icon { width: 16px; height: 16px; opacity: 0.7; }
    .hiw-card-title {
      font-size: 20px;
      font-weight: 600;
      color: #000;
      line-height: 1.25;
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }
    .hiw-card-body {
      font-size: 14.5px;
      line-height: 1.6;
      color: #4a5565;
      font-weight: 300;
    }
    .hiw-card-detail {
      font-size: 13px;
      color: #00e;
      font-weight: 500;
      margin-top: 0;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition: max-height 0.4s ease, opacity 0.35s ease, margin-top 0.35s ease;
    }
    .hiw-card:hover .hiw-card-detail,
    .hiw-step.active .hiw-card .hiw-card-detail {
      max-height: 60px;
      opacity: 1;
      margin-top: 14px;
    }
    .hiw-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 16px;
    }
    .hiw-chip {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      font-weight: 600;
      padding: 5px 12px;
      background: rgba(0,0,238,0.06);
      color: #00e;
      border-radius: 100px;
      border: 1px solid rgba(0,0,238,0.15);
    }
    .hiw-chip::before {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #00e;
      opacity: 0.55;
    }
    .hiw-step--impact .hiw-card {
      background: linear-gradient(145deg, #F0F4FF 0%, #FFFFFF 60%);
    }
    .hiw-continuous-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 48px;
      font-size: 13px;
      font-weight: 500;
      color: #4a5565;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.5s ease 1.2s, transform 0.5s ease 1.2s;
    }
    .hiw-continuous-badge.visible { opacity: 1; transform: translateY(0); }
    .hiw-pulse {
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #22C55E;
      box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
      animation: hiw-pulse 2s ease-in-out infinite;
      flex-shrink: 0;
    }
    @keyframes hiw-pulse {
      0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
      50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0.06); }
    }
    @media (max-width: 1024px) {
      .hiw-section { padding: 72px 32px; }
      .hiw-steps { grid-template-columns: repeat(2, 1fr); gap: 16px; }
      .hiw-track { display: none; }
      .hiw-dot-row { height: auto; padding-bottom: 16px; }
    }
    @media (max-width: 600px) {
      .hiw-section { padding: 64px 20px; }
      .hiw-header  { margin-bottom: 48px; }
      .hiw-steps { grid-template-columns: 1fr; gap: 0; padding-left: 48px; position: relative; }
      .hiw-steps::before {
        content: '';
        position: absolute;
        top: 16px; bottom: 16px; left: 15px;
        width: 2px;
        background: #e9efef;
        border-radius: 2px;
      }
      .hiw-step { flex-direction: row; gap: 16px; margin-bottom: 20px; align-items: flex-start; }
      .hiw-dot-row { flex-direction: column; height: auto; padding-bottom: 0; margin-left: -48px; padding-top: 24px; flex-shrink: 0; }
      .hiw-track { display: none; }
      .hiw-step:nth-child(n) { transition-delay: 0.05s; }
    }

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
<section class="hiw-section" aria-label="How PointFive works">
  <div class="hiw-inner">

    <!-- Header -->
    <div class="hiw-header" id="hiw-header">
      <span class="hiw-eyebrow">How it works</span>
      <h2 class="hiw-headline">Four steps to<br>autonomous efficiency</h2>
      <p class="hiw-subhead">Go from discovery to measurable business impact across infrastructure and AI — continuously.</p>
    </div>

    <!-- Stepper -->
    <div class="hiw-stepper" id="hiw-stepper">

      <div class="hiw-track" aria-hidden="true">
        <div class="hiw-track-fill" id="hiw-track-fill"></div>
      </div>

      <div class="hiw-steps" role="list">

        <!-- Step 1 -->
        <article class="hiw-step" role="listitem" tabindex="0" aria-label="Step 1: Discover — Infra Fabric">
          <div class="hiw-dot-row" aria-hidden="true">
            <div class="hiw-dot">1</div>
          </div>
          <div class="hiw-card">
            <div class="hiw-label">
              <svg class="hiw-label-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5"/>
                <path d="M11 11L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              Discover
            </div>
            <h3 class="hiw-card-title">Infra Fabric</h3>
            <p class="hiw-card-body">One simple, read-only setup to instantly map everything running across your infrastructure and AI stack.</p>
            <p class="hiw-card-detail">→ Agentless. No credentials. Live in minutes.</p>
          </div>
        </article>

        <!-- Step 2 -->
        <article class="hiw-step" role="listitem" tabindex="0" aria-label="Step 2: Detect — DeepWaste Detection">
          <div class="hiw-dot-row" aria-hidden="true">
            <div class="hiw-dot">2</div>
          </div>
          <div class="hiw-card">
            <div class="hiw-label">
              <svg class="hiw-label-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 10l3-3 2 2 4-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="13" cy="4" r="1.5" fill="currentColor"/>
              </svg>
              Detect
            </div>
            <h3 class="hiw-card-title">DeepWaste™ Detection</h3>
            <p class="hiw-card-body">Continuously surface high-impact inefficiencies with clear context, ownership, and priority.</p>
            <p class="hiw-card-detail">→ 400+ detection types. 10 new per week.</p>
          </div>
        </article>

        <!-- Step 3 -->
        <article class="hiw-step" role="listitem" tabindex="0" aria-label="Step 3: Act — Agentic Remediation">
          <div class="hiw-dot-row" aria-hidden="true">
            <div class="hiw-dot">3</div>
          </div>
          <div class="hiw-card">
            <div class="hiw-label">
              <svg class="hiw-label-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Act
            </div>
            <h3 class="hiw-card-title">Agentic Remediation</h3>
            <p class="hiw-card-body">Turn insight into action with guided and automated workflows embedded in your engineering tools.</p>
            <p class="hiw-card-detail">→ Jira, GitHub, Terraform — where your team works.</p>
          </div>
        </article>

        <!-- Step 4: Impact -->
        <article class="hiw-step hiw-step--impact" role="listitem" tabindex="0" aria-label="Step 4: Impact — Measurable Business Value">
          <div class="hiw-dot-row" aria-hidden="true">
            <div class="hiw-dot">4</div>
          </div>
          <div class="hiw-card">
            <div class="hiw-label">
              <svg class="hiw-label-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 12l4-4 3 3 5-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Impact
            </div>
            <h3 class="hiw-card-title">Measurable Business Value</h3>
            <p class="hiw-card-body">Deliver measurable savings, performance gains, and productivity improvements — as a continuous practice.</p>
            <div class="hiw-chips" aria-label="Outcome areas">
              <span class="hiw-chip">Savings</span>
              <span class="hiw-chip">Performance</span>
              <span class="hiw-chip">Productivity</span>
            </div>
            <p class="hiw-card-detail">→ 1,200%+ average ROI across key accounts.</p>
          </div>
        </article>

      </div>
    </div>

    <!-- Badge -->
    <div class="hiw-continuous-badge" id="hiw-badge">
      <span class="hiw-pulse" aria-hidden="true"></span>
      This is a continuous practice, not a one-time project.
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

  // Stepper: scroll-triggered animations + click/keyboard interaction
  (function initStepper() {
    var header   = document.getElementById('hiw-header');
    var steps    = document.querySelectorAll('.hiw-step');
    var fill     = document.getElementById('hiw-track-fill');
    var badge    = document.getElementById('hiw-badge');
    var section  = document.querySelector('.hiw-section');
    if (!section) return;
    var triggered = false;

    function trigger() {
      if (triggered) return;
      triggered = true;
      if (header) header.classList.add('visible');
      steps.forEach(function(s) { s.classList.add('visible'); });
      if (badge) badge.classList.add('visible');
      setTimeout(function() { if (fill) fill.classList.add('animate'); }, 300);
    }

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) { trigger(); io.disconnect(); }
        });
      }, { threshold: 0.1 });
      io.observe(section);
    } else {
      trigger();
    }

    steps.forEach(function(step) {
      function activate() {
        var isActive = step.classList.contains('active');
        steps.forEach(function(s) { s.classList.remove('active'); });
        if (!isActive) step.classList.add('active');
      }
      step.addEventListener('click', activate);
      step.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
      });
    });
  }());
})();
