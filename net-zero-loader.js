(function() {
  'use strict';

  // ── STYLES ──────────────────────────────────────────────────────────────────
  const css = `
        :root {
            --blue: #0000ee;
            --blue-dark: #0000aa;
            --blue-light: #cde3ff;
            --black: #000010;
            --white: #ffffff;
            --gray: #4a5565;
            --border: #e9efef;
            --green: #00c46a;
            --surface: #f4f7ff;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'DM Sans', sans-serif;
            background: var(--white);
            color: var(--black);
            overflow-x: hidden;
        }

        /* ── NAV ── */
        nav {
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 100;
            padding: 20px 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(255,255,255,0.92);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
        }

        .logo {
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 20px;
            color: var(--blue);
            letter-spacing: -0.5px;
        }

        .logo span { color: var(--black); }

        nav .cta-nav {
            background: var(--blue);
            color: white;
            padding: 10px 24px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            transition: background 0.2s;
        }

        nav .cta-nav:hover { background: var(--blue-dark); }

        /* ── HERO ── */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 120px 48px 80px;
            background: var(--black);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -200px; right: -200px;
            width: 700px; height: 700px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0,0,238,0.25) 0%, transparent 70%);
            pointer-events: none;
        }

        .hero::after {
            content: '';
            position: absolute;
            bottom: -100px; left: 200px;
            width: 500px; height: 500px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0,196,106,0.1) 0%, transparent 70%);
            pointer-events: none;
        }

        .hero-inner {
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
            position: relative;
            z-index: 2;
        }

        .hero-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(0,0,238,0.15);
            border: 1px solid rgba(0,0,238,0.3);
            color: #7eb8ff;
            padding: 6px 14px;
            border-radius: 100px;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            margin-bottom: 24px;
        }

        .hero-eyebrow::before {
            content: '';
            width: 6px; height: 6px;
            border-radius: 50%;
            background: var(--green);
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }

        .hero h1 {
            font-family: 'DM Serif Display', serif;
            font-size: 58px;
            line-height: 1.08;
            color: var(--white);
            margin-bottom: 24px;
            letter-spacing: -1px;
        }

        .hero h1 em {
            font-style: italic;
            color: #7eb8ff;
        }

        .hero-sub {
            font-size: 18px;
            line-height: 1.7;
            color: rgba(255,255,255,0.6);
            margin-bottom: 40px;
            max-width: 480px;
        }

        .hero-ctas {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .btn-primary {
            background: var(--blue);
            color: white;
            padding: 16px 32px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
            display: inline-block;
        }

        .btn-primary:hover {
            background: #1a1aff;
            transform: translateY(-1px);
            box-shadow: 0 8px 24px rgba(0,0,238,0.4);
        }

        .btn-secondary {
            background: transparent;
            color: white;
            padding: 16px 32px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.2s;
            display: inline-block;
        }

        .btn-secondary:hover {
            border-color: rgba(255,255,255,0.5);
            background: rgba(255,255,255,0.05);
        }

        /* Hero right: offer card */
        .offer-card {
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            padding: 40px;
            backdrop-filter: blur(20px);
        }

        .offer-label {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--green);
            margin-bottom: 20px;
        }

        .offer-title {
            font-family: 'DM Serif Display', serif;
            font-size: 32px;
            color: white;
            margin-bottom: 8px;
            line-height: 1.2;
        }

        .offer-sub {
            font-size: 14px;
            color: rgba(255,255,255,0.5);
            margin-bottom: 32px;
            line-height: 1.6;
        }

        .offer-items {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 32px;
        }

        .offer-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }

        .offer-check {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: rgba(0,196,106,0.15);
            border: 1px solid rgba(0,196,106,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-top: 1px;
        }

        .offer-check svg { width: 10px; height: 10px; stroke: var(--green); fill: none; stroke-width: 2.5; }

        .offer-item-text {
            font-size: 14px;
            color: rgba(255,255,255,0.75);
            line-height: 1.5;
        }

        .offer-item-text strong { color: white; }

        .offer-guarantee {
            background: rgba(0,196,106,0.08);
            border: 1px solid rgba(0,196,106,0.2);
            border-radius: 10px;
            padding: 16px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .guarantee-icon {
            font-size: 24px;
        }

        .offer-guarantee p {
            font-size: 13px;
            color: rgba(255,255,255,0.7);
            line-height: 1.5;
        }

        .offer-guarantee strong { color: var(--green); }

        /* ── STATS BAR ── */
        .stats-bar {
            background: var(--blue);
            padding: 24px 48px;
        }

        .stats-inner {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
        }

        .stat-item {
            text-align: center;
        }

        .stat-num {
            font-family: 'DM Serif Display', serif;
            font-size: 36px;
            color: white;
            line-height: 1;
            margin-bottom: 4px;
        }

        .stat-label {
            font-size: 12px;
            color: rgba(255,255,255,0.65);
            font-weight: 400;
            letter-spacing: 0.02em;
        }

        /* ── SECTION SHARED ── */
        section {
            padding: 100px 48px;
        }

        .section-inner {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-eyebrow {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--blue);
            margin-bottom: 12px;
        }

        .section-title {
            font-family: 'DM Serif Display', serif;
            font-size: 44px;
            line-height: 1.1;
            letter-spacing: -0.5px;
            margin-bottom: 16px;
        }

        .section-sub {
            font-size: 18px;
            color: var(--gray);
            line-height: 1.7;
            max-width: 600px;
            margin-bottom: 56px;
        }

        /* ── ROI SECTION ── */
        .roi-section {
            background: var(--surface);
        }

        .roi-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: start;
        }

        .roi-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }

        .roi-card {
            background: white;
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 28px;
        }

        .roi-card.featured {
            background: var(--blue);
            border-color: var(--blue);
            grid-column: span 2;
        }

        .roi-card-num {
            font-family: 'DM Serif Display', serif;
            font-size: 48px;
            color: var(--blue);
            line-height: 1;
            margin-bottom: 8px;
        }

        .roi-card.featured .roi-card-num { color: white; }

        .roi-card-label {
            font-size: 14px;
            color: var(--gray);
            line-height: 1.5;
        }

        .roi-card.featured .roi-card-label { color: rgba(255,255,255,0.7); }

        .roi-card-sub {
            font-size: 12px;
            color: rgba(255,255,255,0.5);
            margin-top: 4px;
        }

        /* Testimonial */
        .testimonial-block {
            background: white;
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 40px;
            position: relative;
        }

        .testimonial-block::before {
            content: '"';
            position: absolute;
            top: 20px; left: 32px;
            font-family: 'DM Serif Display', serif;
            font-size: 80px;
            color: var(--blue-light);
            line-height: 1;
        }

        .testimonial-quote {
            font-family: 'DM Serif Display', serif;
            font-size: 26px;
            line-height: 1.4;
            color: var(--black);
            margin-bottom: 24px;
            padding-top: 32px;
        }

        .testimonial-quote em { font-style: italic; color: var(--blue); }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .author-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: linear-gradient(135deg, #1a1a4e 0%, #3333cc 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 18px;
            font-family: 'DM Serif Display', serif;
        }

        .author-info strong { display: block; font-size: 15px; font-weight: 600; }
        .author-info span { font-size: 13px; color: var(--gray); }

        .nubank-badge {
            margin-left: auto;
            background: var(--black);
            color: white;
            padding: 6px 14px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.05em;
        }

        /* ── OPPORTUNITIES ── */
        .opp-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .opp-card {
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 28px;
            background: white;
            transition: all 0.2s;
            position: relative;
            overflow: hidden;
        }

        .opp-card:hover {
            border-color: var(--blue);
            box-shadow: 0 8px 24px rgba(0,0,238,0.08);
            transform: translateY(-3px);
        }

        .opp-card::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: var(--blue);
            transform: scaleX(0);
            transition: transform 0.2s;
        }

        .opp-card:hover::after { transform: scaleX(1); }

        .opp-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 16px;
        }

        .opp-icon {
            width: 44px; height: 44px;
            border-radius: 10px;
            background: var(--surface);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
        }

        .opp-savings {
            font-size: 12px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 100px;
            background: rgba(0,196,106,0.1);
            color: #009950;
        }

        .opp-card h3 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 1.3;
        }

        .opp-card p {
            font-size: 13px;
            color: var(--gray);
            line-height: 1.6;
            margin-bottom: 16px;
        }

        .opp-tag {
            font-size: 11px;
            padding: 3px 8px;
            background: var(--surface);
            color: var(--gray);
            border-radius: 4px;
            font-weight: 500;
        }

        /* ── TIME TO VALUE ── */
        .ttv-section {
            background: var(--black);
        }

        .ttv-section .section-title { color: white; }
        .ttv-section .section-eyebrow { color: var(--green); }
        .ttv-section .section-sub { color: rgba(255,255,255,0.55); }

        .timeline {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0;
            position: relative;
        }

        .timeline::before {
            content: '';
            position: absolute;
            top: 28px; left: 6%; right: 6%;
            height: 1px;
            background: rgba(255,255,255,0.1);
        }

        .timeline-step {
            text-align: center;
            padding: 0 16px;
            position: relative;
        }

        .timeline-dot {
            width: 56px; height: 56px;
            border-radius: 50%;
            background: rgba(0,0,238,0.15);
            border: 1px solid rgba(0,0,238,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'DM Serif Display', serif;
            font-size: 22px;
            color: #7eb8ff;
            margin: 0 auto 20px;
            position: relative;
            z-index: 2;
        }

        .timeline-step.active .timeline-dot {
            background: var(--blue);
            border-color: var(--blue);
            color: white;
            box-shadow: 0 0 24px rgba(0,0,238,0.5);
        }

        .timeline-day {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--green);
            margin-bottom: 8px;
        }

        .timeline-step h3 {
            font-size: 16px;
            font-weight: 600;
            color: white;
            margin-bottom: 8px;
        }

        .timeline-step p {
            font-size: 13px;
            color: rgba(255,255,255,0.45);
            line-height: 1.6;
        }

        /* ── PLATFORMS ── */
        .platforms-section { background: var(--surface); }

        .platform-categories {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

        .platform-cat {
            background: white;
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 28px;
        }

        .platform-cat-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border);
        }

        .platform-cat-icon { font-size: 22px; }

        .platform-cat h3 {
            font-size: 15px;
            font-weight: 600;
        }

        .platform-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .platform-tag {
            font-size: 12px;
            padding: 5px 10px;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 6px;
            color: var(--gray);
            font-weight: 500;
        }

        .platform-tag.highlight {
            background: var(--blue-light);
            border-color: #b3d4ff;
            color: var(--blue);
        }

        /* ── ENGINEERING PARTNER ── */
        .partner-section {
            background: white;
        }

        .partner-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }

        .partner-features {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-top: 40px;
        }

        .partner-feature {
            display: flex;
            gap: 16px;
            align-items: flex-start;
        }

        .partner-feature-icon {
            width: 40px; height: 40px;
            border-radius: 10px;
            background: var(--surface);
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            flex-shrink: 0;
        }

        .partner-feature h4 {
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .partner-feature p {
            font-size: 14px;
            color: var(--gray);
            line-height: 1.5;
        }

        .team-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 20px;
            overflow: hidden;
        }

        .team-photo {
            width: 100%;
            height: 320px;
            background: linear-gradient(135deg, #0a0a3e 0%, #0000ee 50%, #1a1aff 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .team-photo::before {
            content: '';
            position: absolute;
            top: -60px; right: -60px;
            width: 200px; height: 200px;
            border-radius: 50%;
            background: rgba(255,255,255,0.04);
        }

        .team-photo::after {
            content: '';
            position: absolute;
            bottom: -40px; left: -40px;
            width: 150px; height: 150px;
            border-radius: 50%;
            background: rgba(0,196,106,0.1);
        }

        .team-avatar-large {
            width: 120px; height: 120px;
            border-radius: 50%;
            background: rgba(255,255,255,0.12);
            border: 3px solid rgba(255,255,255,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'DM Serif Display', serif;
            font-size: 48px;
            color: white;
            position: relative;
            z-index: 2;
        }

        .team-info {
            padding: 24px 28px;
        }

        .team-info strong {
            display: block;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .team-info span {
            font-size: 14px;
            color: var(--gray);
            display: block;
            margin-bottom: 16px;
        }

        .team-detail {
            font-size: 13px;
            color: var(--gray);
            line-height: 1.6;
            border-top: 1px solid var(--border);
            padding-top: 16px;
        }

        /* ── FINAL CTA ── */
        .final-cta {
            background: var(--blue);
            text-align: center;
        }

        .final-cta .section-title { color: white; margin-bottom: 16px; }
        .final-cta .section-sub {
            color: rgba(255,255,255,0.7);
            max-width: 520px;
            margin: 0 auto 48px;
        }

        .final-cta-btns {
            display: flex;
            justify-content: center;
            gap: 16px;
        }

        .btn-white {
            background: white;
            color: var(--blue);
            padding: 16px 36px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s;
            display: inline-block;
        }

        .btn-white:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .btn-outline-white {
            background: transparent;
            color: white;
            padding: 16px 36px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;
            border: 1px solid rgba(255,255,255,0.35);
            transition: all 0.2s;
            display: inline-block;
        }

        .btn-outline-white:hover {
            border-color: white;
            background: rgba(255,255,255,0.08);
        }

        .guarantee-strip {
            margin-top: 32px;
            font-size: 13px;
            color: rgba(255,255,255,0.55);
        }

        .guarantee-strip strong { color: rgba(255,255,255,0.85); }

        /* ── FOOTER NAV ── */
        .footer-bar {
            background: var(--black);
            padding: 24px 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-bar .logo { color: white; }
        .footer-bar .logo span { color: rgba(255,255,255,0.4); }

        .footer-bar p {
            font-size: 13px;
            color: rgba(255,255,255,0.3);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
            .hero-inner { grid-template-columns: 1fr; gap: 48px; }
            .roi-grid { grid-template-columns: 1fr; }
            .opp-grid { grid-template-columns: 1fr 1fr; }
            .timeline { grid-template-columns: 1fr 1fr; gap: 40px; }
            .timeline::before { display: none; }
            .platform-categories { grid-template-columns: 1fr 1fr; }
            .partner-grid { grid-template-columns: 1fr; gap: 48px; }
            .stats-inner { grid-template-columns: repeat(2, 1fr); }
            section { padding: 70px 24px; }
            nav { padding: 16px 24px; }
            .hero { padding: 100px 24px 60px; }
        }

        @media (max-width: 600px) {
            .hero h1 { font-size: 38px; }
            .section-title { font-size: 32px; }
            .opp-grid { grid-template-columns: 1fr; }
            .timeline { grid-template-columns: 1fr; }
            .platform-categories { grid-template-columns: 1fr; }
            .roi-cards { grid-template-columns: 1fr; }
            .roi-card.featured { grid-column: span 1; }
        }

        /* ── FADE IN ── */
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: none;
        }
`;

  // ── HTML ─────────────────────────────────────────────────────────────────────
  const html = `

<!-- HERO -->
<section class="hero">
    <div class="hero-inner">
        <div>
            <div class="hero-eyebrow">Limited Availability · 2025</div>
            <h1>Your first month<br>costs you <em>nothing.</em></h1>
            <p class="hero-sub">PointFive's Net Zero offer guarantees your first month is completely offset by the savings we find — or you don't pay. Real ROI, not promises.</p>
            <div class="hero-ctas">
                <a href="#cta" class="btn-primary">Start Net Zero →</a>
                <a href="#roi" class="btn-secondary">See the ROI</a>
            </div>
        </div>

        <div class="offer-card fade-in">
            <div class="offer-label">The Net Zero Offer</div>
            <div class="offer-title">Guaranteed<br>Savings</div>
            <p class="offer-sub">If we don't find savings that exceed your first month's fee, you pay nothing. We've never had to honor that guarantee.</p>
            <div class="offer-items">
                <div class="offer-item">
                    <div class="offer-check"><svg viewBox="0 0 12 10"><polyline points="1,5 4,8 11,1"/></svg></div>
                    <div class="offer-item-text"><strong>Full platform access</strong> — all 300+ optimization types across your entire stack</div>
                </div>
                <div class="offer-item">
                    <div class="offer-check"><svg viewBox="0 0 12 10"><polyline points="1,5 4,8 11,1"/></svg></div>
                    <div class="offer-item-text"><strong>Dedicated engineering partner</strong> — your own PointFive engineer on Slack</div>
                </div>
                <div class="offer-item">
                    <div class="offer-check"><svg viewBox="0 0 12 10"><polyline points="1,5 4,8 11,1"/></svg></div>
                    <div class="offer-item-text"><strong>Value report in 48 hours</strong> — quantified savings before you commit to anything</div>
                </div>
                <div class="offer-item">
                    <div class="offer-check"><svg viewBox="0 0 12 10"><polyline points="1,5 4,8 11,1"/></svg></div>
                    <div class="offer-item-text"><strong>Agentless deployment</strong> — no agents, no write access, live in hours</div>
                </div>
            </div>
            <div class="offer-guarantee">
                <div class="guarantee-icon">🛡️</div>
                <p><strong>Net Zero Guarantee:</strong> Savings identified in month one exceed your subscription cost — or the month is on us.</p>
            </div>
        </div>
    </div>
</section>

<!-- STATS BAR -->
<div class="stats-bar">
    <div class="stats-inner">
        <div class="stat-item">
            <div class="stat-num">1200%+</div>
            <div class="stat-label">Average customer ROI</div>
        </div>
        <div class="stat-item">
            <div class="stat-num">$50M</div>
            <div class="stat-label">Total savings delivered</div>
        </div>
        <div class="stat-item">
            <div class="stat-num">10 days</div>
            <div class="stat-label">Fastest full ROI achieved</div>
        </div>
        <div class="stat-item">
            <div class="stat-num">300+</div>
            <div class="stat-label">Optimization types</div>
        </div>
    </div>
</div>

<!-- ROI SECTION -->
<section class="roi-section" id="roi">
    <div class="section-inner">
        <div class="roi-grid">
            <div>
                <div class="section-eyebrow">Return on Investment</div>
                <h2 class="section-title">Real numbers.<br>Real results.</h2>
                <p class="section-sub">Our customers don't wait months to see value. The average PointFive deployment identifies savings that pay for itself within the first two weeks.</p>
                <div class="roi-cards">
                    <div class="roi-card featured">
                        <div class="roi-card-num">1200%+</div>
                        <div class="roi-card-label">Average customer ROI across deployments</div>
                        <div class="roi-card-sub">Based on savings identified vs. platform cost</div>
                    </div>
                    <div class="roi-card">
                        <div class="roi-card-num">$50M</div>
                        <div class="roi-card-label">Total savings across 20 key accounts</div>
                    </div>
                    <div class="roi-card">
                        <div class="roi-card-num">85%</div>
                        <div class="roi-card-label">Snowflake cost reduction on our own deployment</div>
                    </div>
                </div>
            </div>

            <div class="testimonial-block fade-in">
                <div class="testimonial-quote">
                    "It took us <em>10 days</em> to get full ROI on our partnership with PointFive"
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar">M</div>
                    <div class="author-info">
                        <strong>Mike Rosenberg</strong>
                        <span>Sr. Director of Engineering, Nubank</span>
                    </div>
                    <div class="nubank-badge">Nubank</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- OPPORTUNITIES -->
<section>
    <div class="section-inner">
        <div class="section-eyebrow">DeepWaste™ Detection</div>
        <h2 class="section-title">Waste hiding in plain sight</h2>
        <p class="section-sub">These aren't theoretical savings. They're real inefficiencies we find in the first week — the kind traditional FinOps tools never detect.</p>

        <div class="opp-grid">
            <div class="opp-card fade-in">
                <div class="opp-header">
                    <div class="opp-icon">☁️</div>
                    <div class="opp-savings">Up to 60% savings</div>
                </div>
                <h3>Idle EC2 Instances Running 24/7</h3>
                <p>Compute instances with <3% CPU utilization over 30 days, still provisioned at full cost. Often forgotten dev/test environments never terminated.</p>
                <span class="opp-tag">AWS · Compute</span>
            </div>

            <div class="opp-card fade-in">
                <div class="opp-header">
                    <div class="opp-icon">❄️</div>
                    <div class="opp-savings">Up to 85% savings</div>
                </div>
                <h3>Snowflake Warehouse Oversizing</h3>
                <p>Multi-cluster warehouses running at 5–10% query load, auto-suspending but provisioned for peak capacity that never materializes.</p>
                <span class="opp-tag">Snowflake · Data</span>
            </div>

            <div class="opp-card fade-in">
                <div class="opp-header">
                    <div class="opp-icon">⚡</div>
                    <div class="opp-savings">30–50% savings</div>
                </div>
                <h3>Lambda Memory Misconfiguration</h3>
                <p>Functions allocated 2–4x more memory than execution requires, based on worst-case estimates rather than actual p99 usage patterns.</p>
                <span class="opp-tag">AWS · Serverless</span>
            </div>

            <div class="opp-card fade-in">
                <div class="opp-header">
                    <div class="opp-icon">🗄️</div>
                    <div class="opp-savings">40–70% savings</div>
                </div>
                <h3>RDS Multi-AZ for Non-Critical Workloads</h3>
                <p>Dev and staging databases running Multi-AZ configurations that double cost without providing meaningful resilience for non-production traffic.</p>
                <span class="opp-tag">AWS · Database</span>
            </div>

            <div class="opp-card fade-in">
                <div class="opp-header">
                    <div class="opp-icon">🔄</div>
                    <div class="opp-savings">$2K–$15K/mo</div>
                </div>
                <h3>NAT Gateway Cross-AZ Traffic</h3>
                <p>Services routing traffic through NAT Gateways unnecessarily, or cross-AZ calls that could be avoided through architectural alignment.</p>
                <span class="opp-tag">AWS · Networking</span>
            </div>

            <div class="opp-card fade-in">
                <div class="opp-header">
                    <div class="opp-icon">☸️</div>
                    <div class="opp-savings">25–45% savings</div>
                </div>
                <h3>Kubernetes Overprovisioned Workloads</h3>
                <p>Pods with CPU/memory requests 3–5x actual usage, blocking node capacity and forcing unnecessary cluster scale-out. Detected agentlessly.</p>
                <span class="opp-tag">Kubernetes · Agentless</span>
            </div>
        </div>
    </div>
</section>

<!-- TIME TO VALUE -->
<section class="ttv-section">
    <div class="section-inner">
        <div class="section-eyebrow">Time to Value</div>
        <h2 class="section-title">Up and running in hours.<br>ROI in days.</h2>
        <p class="section-sub">No agents to deploy. No write permissions required. Just connect your cloud accounts and watch the findings roll in.</p>

        <div class="timeline">
            <div class="timeline-step fade-in">
                <div class="timeline-dot">1</div>
                <div class="timeline-day">Day 1</div>
                <h3>Connect & Capture</h3>
                <p>Read-only, agentless connection. Covers AWS, Azure, GCP, Kubernetes, Snowflake, and Databricks in a single flow.</p>
            </div>
            <div class="timeline-step fade-in active">
                <div class="timeline-dot">2</div>
                <div class="timeline-day">Day 2</div>
                <h3>Value Report</h3>
                <p>Full savings assessment delivered. Quantified opportunities ranked by impact, with context your engineers will actually trust.</p>
            </div>
            <div class="timeline-step fade-in">
                <div class="timeline-dot">3</div>
                <div class="timeline-day">Week 1</div>
                <h3>First Remediations</h3>
                <p>1-click and IaC-ready fixes deployed. Your dedicated engineering partner guides the highest-value items first.</p>
            </div>
            <div class="timeline-step fade-in">
                <div class="timeline-dot">4</div>
                <div class="timeline-day">Month 1</div>
                <h3>Net Zero Achieved</h3>
                <p>Savings realized exceed your subscription cost. The Net Zero guarantee kicks in — and almost nobody needs to use it.</p>
            </div>
        </div>
    </div>
</section>

<!-- PLATFORMS -->
<section class="platforms-section">
    <div class="section-inner">
        <div class="section-eyebrow">Platform Coverage</div>
        <h2 class="section-title">Everywhere your<br>infrastructure lives</h2>
        <p class="section-sub">7 cloud platforms, 40+ services, 300+ optimization types. If you're spending on it, we're watching it.</p>

        <div class="platform-categories">
            <div class="platform-cat fade-in">
                <div class="platform-cat-header">
                    <div class="platform-cat-icon">☁️</div>
                    <h3>Cloud Providers</h3>
                </div>
                <div class="platform-tags">
                    <span class="platform-tag highlight">AWS</span>
                    <span class="platform-tag highlight">Azure</span>
                    <span class="platform-tag highlight">GCP</span>
                    <span class="platform-tag">EC2</span>
                    <span class="platform-tag">S3</span>
                    <span class="platform-tag">RDS</span>
                    <span class="platform-tag">Lambda</span>
                    <span class="platform-tag">VMs</span>
                    <span class="platform-tag">Cloud SQL</span>
                    <span class="platform-tag">+35 more</span>
                </div>
            </div>

            <div class="platform-cat fade-in">
                <div class="platform-cat-header">
                    <div class="platform-cat-icon">☸️</div>
                    <h3>Kubernetes</h3>
                </div>
                <div class="platform-tags">
                    <span class="platform-tag highlight">EKS (Agentless)</span>
                    <span class="platform-tag highlight">AKS (Agentless)</span>
                    <span class="platform-tag highlight">GKE (Agentless)</span>
                    <span class="platform-tag">Self-hosted K8s</span>
                    <span class="platform-tag">Deployments</span>
                    <span class="platform-tag">StatefulSets</span>
                    <span class="platform-tag">DaemonSets</span>
                    <span class="platform-tag">CronJobs</span>
                </div>
            </div>

            <div class="platform-cat fade-in">
                <div class="platform-cat-header">
                    <div class="platform-cat-icon">📊</div>
                    <h3>Data & AI Platforms</h3>
                </div>
                <div class="platform-tags">
                    <span class="platform-tag highlight">Snowflake</span>
                    <span class="platform-tag highlight">Databricks</span>
                    <span class="platform-tag highlight">BigQuery</span>
                    <span class="platform-tag">Redshift</span>
                    <span class="platform-tag">Azure Synapse</span>
                    <span class="platform-tag">SageMaker</span>
                    <span class="platform-tag">GPU Instances</span>
                    <span class="platform-tag">Datadog (EA)</span>
                </div>
            </div>

            <div class="platform-cat fade-in">
                <div class="platform-cat-header">
                    <div class="platform-cat-icon">🗄️</div>
                    <h3>Databases & Storage</h3>
                </div>
                <div class="platform-tags">
                    <span class="platform-tag">RDS</span>
                    <span class="platform-tag">Aurora</span>
                    <span class="platform-tag">DynamoDB</span>
                    <span class="platform-tag">ElastiCache</span>
                    <span class="platform-tag">EBS</span>
                    <span class="platform-tag">S3</span>
                    <span class="platform-tag">Cosmos DB</span>
                    <span class="platform-tag">Cloud SQL</span>
                </div>
            </div>

            <div class="platform-cat fade-in">
                <div class="platform-cat-header">
                    <div class="platform-cat-icon">🌐</div>
                    <h3>Networking</h3>
                </div>
                <div class="platform-tags">
                    <span class="platform-tag">VPC</span>
                    <span class="platform-tag">NAT Gateway</span>
                    <span class="platform-tag">CloudFront</span>
                    <span class="platform-tag">ELB / ALB</span>
                    <span class="platform-tag">Route 53</span>
                    <span class="platform-tag">VPC Flow Logs</span>
                    <span class="platform-tag">Cross-AZ Traffic</span>
                </div>
            </div>

            <div class="platform-cat fade-in">
                <div class="platform-cat-header">
                    <div class="platform-cat-icon">📈</div>
                    <h3>Monitoring & Logs</h3>
                </div>
                <div class="platform-tags">
                    <span class="platform-tag">CloudWatch</span>
                    <span class="platform-tag">CloudTrail</span>
                    <span class="platform-tag">VPC Flow Logs</span>
                    <span class="platform-tag">Azure Monitor</span>
                    <span class="platform-tag">GCP Logging</span>
                    <span class="platform-tag">Log Retention</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ENGINEERING PARTNER -->
<section class="partner-section" id="partner">
    <div class="section-inner">
        <div class="partner-grid">
            <div>
                <div class="section-eyebrow">Dedicated Support</div>
                <h2 class="section-title">Your own engineer.<br>Not a ticket queue.</h2>
                <p class="section-sub">Every Net Zero customer gets a dedicated PointFive engineer as their direct partner — on Slack, from day one.</p>

                <div class="partner-features">
                    <div class="partner-feature">
                        <div class="partner-feature-icon">💬</div>
                        <div>
                            <h4>Direct Slack Access</h4>
                            <p>Your engineer is in your Slack workspace, responding in hours — not opening support tickets.</p>
                        </div>
                    </div>
                    <div class="partner-feature">
                        <div class="partner-feature-icon">🎯</div>
                        <div>
                            <h4>Guided Remediation</h4>
                            <p>We don't just hand you a list. Your partner prioritizes findings, validates impact, and walks your team through implementation.</p>
                        </div>
                    </div>
                    <div class="partner-feature">
                        <div class="partner-feature-icon">📋</div>
                        <div>
                            <h4>Weekly Value Reviews</h4>
                            <p>Recurring check-ins to track realized savings, surface new opportunities, and keep momentum going.</p>
                        </div>
                    </div>
                    <div class="partner-feature">
                        <div class="partner-feature-icon">🔒</div>
                        <div>
                            <h4>ROI Accountability</h4>
                            <p>Your engineer is accountable for delivering the Net Zero guarantee. Their success depends on yours.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="team-card fade-in">
                    <div class="team-photo">
                        <div class="team-avatar-large">P5</div>
                    </div>
                    <div class="team-info">
                        <strong>Your PointFive Engineering Partner</strong>
                        <span>Dedicated Infrastructure Efficiency Engineer</span>
                        <p class="team-detail">A senior cloud infrastructure specialist assigned exclusively to your account. Deep expertise across AWS, Azure, GCP, Kubernetes, and data platforms — with a mandate to hit your savings targets.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FINAL CTA -->
<section class="final-cta" id="cta">
    <div class="section-inner" style="text-align:center;">
        <div class="section-eyebrow" style="color: rgba(255,255,255,0.5); margin-bottom: 12px;">Limited Spots Available</div>
        <h2 class="section-title">Start your Net Zero<br>engagement today</h2>
        <p class="section-sub">Connect your cloud accounts in under an hour. Get a full savings report within 48 hours. Pay nothing if we don't find more than your subscription in savings.</p>
        <div class="final-cta-btns">
            <a href="#" class="btn-white">Claim Net Zero Offer →</a>
            <a href="#" class="btn-outline-white">Talk to Sales</a>
        </div>
        <p class="guarantee-strip">🛡️ <strong>Net Zero Guarantee</strong> · No agents required · Read-only access · Live in hours</p>
    </div>
</section>

<!-- FOOTER -->
<div class="footer-bar">
    <div class="logo">⟩PointFive <span>/ Infrastructure Efficiency Management</span></div>
    <p>© 2025 PointFive · pointfive.co</p>
</div>
`;

  // ── INJECT ───────────────────────────────────────────────────────────────────
  function inject() {
    // Inject Google Fonts
    if (!document.querySelector('#pf-nz-fonts')) {
      const link = document.createElement('link');
      link.id = 'pf-nz-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap';
      document.head.appendChild(link);
    }

    // Inject styles
    if (!document.querySelector('#pf-nz-styles')) {
      const style = document.createElement('style');
      style.id = 'pf-nz-styles';
      style.textContent = css;
      document.head.appendChild(style);
    }

    // Find target container
    const target = document.querySelector('#pf-net-zero') || document.querySelector('.pf-net-zero');
    if (target) {
      target.innerHTML = html;
    } else {
      // Fallback: inject after Webflow navbar or at start of body
      const wrapper = document.createElement('div');
      wrapper.id = 'pf-net-zero';
      wrapper.innerHTML = html;
      const nav = document.querySelector('.w-nav, nav, header');
      if (nav && nav.nextSibling) {
        nav.parentNode.insertBefore(wrapper, nav.nextSibling);
      } else {
        document.body.insertBefore(wrapper, document.body.firstChild);
      }
    }

    // ── SCROLL ANIMATIONS ───────────────────────────────────────────────────
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('#pf-net-zero .fade-in').forEach(el => observer.observe(el));
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
