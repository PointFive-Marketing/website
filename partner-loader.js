(function() {
    'use strict';
    
    // CSS Styles
    const styles = `
        <style>
            .partner-page-container * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .partner-page-container {
                font-family: 'Codec Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #000;
                background: #fff;
            }

            .partner-container {
                width: 100%;
                max-width: 75rem;
                margin: 0 auto;
                padding: 0 32px;
            }

            /* Hero Section */
            .partner-hero {
                padding: 100px 32px 80px;
                text-align: center;
                background: #fff;
                position: relative;
            }

            .partner-hero h1 {
                margin: 0 0 24px;
                font-family: 'Codec Pro', sans-serif;
                font-size: 52px;
                line-height: 1.15;
                font-weight: 600;
                color: #000;
                letter-spacing: -0.02em;
            }

            .partner-hero .subtitle {
                margin: 0 auto 40px;
                font-size: 21px;
                line-height: 1.6;
                font-weight: 400;
                color: #4a5565;
                max-width: 820px;
            }

            /* CTA Buttons - Updated hierarchy */
            .partner-cta-group {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 16px;
                flex-wrap: wrap;
                margin-bottom: 32px;
            }

            .partner-btn {
                padding: 16px 36px;
                font-family: 'Codec Pro', sans-serif;
                font-size: 17px;
                font-weight: 600;
                border-radius: 32px;
                cursor: pointer;
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                border: 2px solid transparent;
            }

            .partner-btn-primary {
                background: #00e;
                color: #fff;
                border-color: #00e;
            }

            .partner-btn-primary:hover {
                background: #0000cc;
                border-color: #0000cc;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(0, 0, 238, 0.3);
            }

            .partner-btn-secondary {
                background: transparent;
                color: #00e;
                border-color: #00e;
            }

            .partner-btn-secondary:hover {
                background: rgba(0, 0, 238, 0.05);
                transform: translateY(-2px);
            }

            /* Partner Login Link */
            .partner-login-link {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-size: 16px;
                color: #000;
                text-decoration: none;
                transition: all 0.2s ease;
            }

            .partner-login-link strong {
                color: #00e;
                font-weight: 600;
            }

            .partner-login-link:hover {
                transform: translateX(4px);
            }

            .partner-login-link svg {
                width: 16px;
                height: 16px;
                color: #00e;
            }

            /* Partner Logos */
            .partner-logos {
                padding: 60px 0;
                background: #f8f9ff;
                border-top: 1px solid #e9efef;
            }

            .partner-logos-title {
                text-align: center;
                font-size: 14px;
                font-weight: 600;
                color: #6b7280;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                margin-bottom: 32px;
            }

            .partner-logos-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 48px;
                max-width: 1000px;
                margin: 0 auto;
            }

            .partner-logo {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                font-weight: 600;
                color: #9ca3af;
                padding: 24px;
                transition: all 0.3s ease;
            }

            .partner-logo:hover {
                color: #000;
                transform: scale(1.05);
            }

            /* Section Styles */
            .partner-section {
                padding: 100px 0;
                background: #fff;
            }

            .partner-section-header {
                text-align: center;
                margin-bottom: 64px;
            }

            .partner-section-header h2 {
                margin: 0 0 16px;
                font-family: 'Codec Pro', sans-serif;
                font-size: 44px;
                line-height: 1.2;
                font-weight: 600;
                color: #000;
                letter-spacing: -0.02em;
            }

            .partner-section-header p {
                margin: 0 auto;
                font-size: 19px;
                line-height: 1.6;
                color: #4a5565;
                max-width: 700px;
            }

            /* Why Partner Grid - 3 columns */
            .partner-why-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 40px;
            }

            .partner-why-card {
                padding: 40px 32px;
                background: #0000ee;
                border: 1px solid #0000ee;
                border-radius: 12px;
                transition: all 0.3s ease;
            }

            .partner-why-card:hover {
                background: #0000cc;
                border-color: #0000cc;
                box-shadow: 0 8px 24px rgba(0, 0, 238, 0.3);
                transform: translateY(-4px);
            }

            .partner-icon {
                width: 72px;
                height: 72px;
                margin-bottom: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .partner-icon svg {
                width: 100%;
                height: 100%;
            }

            .partner-why-card h3 {
                margin: 0 0 12px;
                font-family: 'Codec Pro', sans-serif;
                font-size: 22px;
                line-height: 1.3;
                font-weight: 600;
                color: #fff;
            }

            .partner-why-card p {
                margin: 0;
                font-size: 16px;
                line-height: 1.65;
                color: #fff;
                opacity: 0.9;
            }

            /* Benefits Grid - 2x2 */
            .partner-benefits-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 48px;
            }

            .partner-benefit-card {
                padding: 48px 40px;
                background: #fff;
                border: 1px solid #e9efef;
                border-radius: 12px;
                transition: all 0.3s ease;
            }

            .partner-benefit-card:hover {
                border-color: #00e;
                box-shadow: 0 8px 24px rgba(0, 0, 238, 0.08);
                transform: translateY(-4px);
            }

            .partner-benefit-card .partner-icon {
                width: 80px;
                height: 80px;
                margin-bottom: 28px;
            }

            .partner-benefit-card h3 {
                margin: 0 0 16px;
                font-family: 'Codec Pro', sans-serif;
                font-size: 28px;
                line-height: 1.25;
                font-weight: 600;
                color: #000;
            }

            .partner-benefit-card p {
                margin: 0;
                font-size: 17px;
                line-height: 1.65;
                color: #4a5565;
            }

            /* Testimonial */
            .partner-testimonial {
                padding: 60px;
                background: #f8f9ff;
                border-radius: 16px;
                border: 1px solid #e9efef;
                position: relative;
            }

            .partner-testimonial-quote {
                margin: 0 0 32px;
                font-size: 24px;
                line-height: 1.5;
                color: #1f2937;
                font-weight: 400;
                position: relative;
                padding-left: 40px;
            }

            .partner-testimonial-quote::before {
                content: '"';
                position: absolute;
                left: 0;
                top: -10px;
                font-size: 80px;
                line-height: 1;
                color: #00e;
                opacity: 0.2;
            }

            .partner-testimonial-author {
                display: flex;
                align-items: center;
                gap: 16px;
            }

            .partner-testimonial-avatar {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: linear-gradient(135deg, #00e 0%, #0066ff 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-weight: 600;
                font-size: 20px;
            }

            .partner-testimonial-info h4 {
                margin: 0 0 4px;
                font-size: 18px;
                font-weight: 600;
                color: #000;
            }

            .partner-testimonial-info p {
                margin: 0;
                font-size: 14px;
                color: #6b7280;
            }

            /* FAQ Accordion */
            .partner-faq-list {
                max-width: 900px;
                margin: 0 auto;
            }

            .partner-faq-item {
                border-bottom: 1px solid #e9efef;
            }

            .partner-faq-question {
                width: 100%;
                padding: 28px 48px 28px 0;
                background: none;
                border: none;
                text-align: left;
                font-family: 'Codec Pro', sans-serif;
                font-size: 20px;
                font-weight: 500;
                color: #000;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 24px;
                transition: color 0.2s ease;
                position: relative;
            }

            .partner-faq-question:hover {
                color: #00e;
            }

            .partner-faq-icon {
                width: 24px;
                height: 24px;
                flex-shrink: 0;
                transition: transform 0.3s ease;
                color: #9ca3af;
                position: absolute;
                right: 0;
            }

            .partner-faq-item.active .partner-faq-icon {
                transform: rotate(180deg);
                color: #00e;
            }

            .partner-faq-answer {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
            }

            .partner-faq-answer-content {
                padding: 0 0 28px 0;
                font-size: 17px;
                line-height: 1.7;
                color: #4a5565;
            }

            /* Get Started Section */
            .partner-cta-section {
                padding: 100px 0;
                background: linear-gradient(135deg, #f8f9ff 0%, #fff 100%);
                text-align: center;
            }

            .partner-cta-section h2 {
                margin: 0 0 16px;
                font-family: 'Codec Pro', sans-serif;
                font-size: 44px;
                line-height: 1.2;
                font-weight: 600;
                color: #000;
                letter-spacing: -0.02em;
            }

            .partner-cta-section p {
                margin: 0 auto 40px;
                font-size: 19px;
                line-height: 1.6;
                color: #4a5565;
                max-width: 700px;
            }

            /* Responsive */
            @media (max-width: 1024px) {
                .partner-why-grid {
                    grid-template-columns: 1fr;
                    gap: 32px;
                }
                
                .partner-benefits-grid {
                    grid-template-columns: 1fr;
                    gap: 32px;
                }
                
                .partner-logos-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                }
            }

            @media (max-width: 768px) {
                .partner-hero h1 {
                    font-size: 36px;
                }
                
                .partner-hero .subtitle {
                    font-size: 18px;
                }
                
                .partner-section-header h2 {
                    font-size: 32px;
                }
                
                .partner-benefit-card h3 {
                    font-size: 24px;
                }
                
                .partner-testimonial {
                    padding: 40px 32px;
                }
                
                .partner-testimonial-quote {
                    font-size: 20px;
                }
            }
        </style>
    `;

    // PointFive Brand Icons - Green line style icons matching brand guidelines
    const icons = {
        // Cloud with rocket/arrow - for growth and cloud success
        cloudGrowth: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 45c-6 0-10-4-10-10s4-10 10-10c0-8 6-14 14-14 4 0 8 2 11 5 2-1 4-1 6-1 8 0 14 6 14 14h2c6 0 10 4 10 10s-4 10-10 10" stroke="#00e873" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M35 38l8-10 8 10M43 28v22" stroke="#00e873" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        
        // Planets/spheres - for market expansion
        marketExpansion: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="40" r="14" stroke="#00e873" stroke-width="2.5"/>
            <path d="M19 30c8-6 20-6 28 0M19 50c8 6 20 6 28 0" stroke="#00e873" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="54" cy="28" r="9" fill="#00e873"/>
            <circle cx="62" cy="48" r="6" stroke="#00e873" stroke-width="2.5"/>
        </svg>`,
        
        // Planet with orbit - for differentiation
        differentiation: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="16" stroke="#00e873" stroke-width="2.5"/>
            <ellipse cx="40" cy="40" rx="28" ry="12" stroke="#00e873" stroke-width="2.5"/>
            <path d="M33 38l3 3 6-6" stroke="#00e873" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <circle cx="20" cy="28" r="2" fill="#00e873"/>
            <circle cx="62" cy="35" r="2" fill="#00e873"/>
        </svg>`,
        
        // Gauge/speedometer - for acceleration
        acceleration: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 48a24 24 0 0148 0" stroke="#00e873" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M24 42a16 16 0 0132 0" stroke="#00e873" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="40" cy="48" r="4" fill="#00e873"/>
            <path d="M36 48l-8-12" stroke="#00e873" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="28" cy="36" r="2" fill="#00e873"/>
        </svg>`,
        
        // Continuous loop with checkmark - for continuous efficiency
        continuous: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 24h24c8 0 14 6 14 14s-6 14-14 14H28c-8 0-14-6-14-14" stroke="#00e873" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M28 24l-6-6M28 24l-6 6" stroke="#00e873" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="40" cy="38" r="8" stroke="#00e873" stroke-width="2.5"/>
            <path d="M36 38l2 2 4-4" stroke="#00e873" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        
        // AI chip - for AI/modern workloads
        ai: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="22" y="22" width="36" height="36" rx="4" stroke="#00e873" stroke-width="2.5"/>
            <circle cx="32" cy="32" r="3" fill="#00e873"/>
            <circle cx="48" cy="32" r="3" fill="#00e873"/>
            <circle cx="32" cy="48" r="3" fill="#00e873"/>
            <circle cx="48" cy="48" r="3" fill="#00e873"/>
            <path d="M40 36v8M36 40h8" stroke="#00e873" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M22 30h-6M22 40h-6M22 50h-6M58 30h6M58 40h6M58 50h6" stroke="#00e873" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`,
        
        // Gear with efficiency symbol - for operational design
        efficiency: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 20v6M40 54v6M26 26l4 4M50 50l4 4M20 40h6M54 40h6M26 54l4-4M50 26l4-4" stroke="#00e873" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="40" cy="40" r="12" stroke="#00e873" stroke-width="2.5"/>
            <path d="M36 40l2 2 6-4" stroke="#00e873" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>`,
        
        // Target with arrow - for strategic wins
        target: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="20" stroke="#00e873" stroke-width="2.5"/>
            <circle cx="40" cy="40" r="12" stroke="#00e873" stroke-width="2.5"/>
            <circle cx="40" cy="40" r="4" fill="#00e873"/>
            <path d="M52 28l8-8M60 20l-4 4M60 20l-4-4" stroke="#00e873" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        
        // Integration/connection nodes - for value extension
        integration: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="6" stroke="#00e873" stroke-width="2.5"/>
            <circle cx="56" cy="24" r="6" stroke="#00e873" stroke-width="2.5"/>
            <circle cx="40" cy="56" r="6" fill="#00e873"/>
            <path d="M28 28l8 22M52 28l-8 22M24 30v18a8 8 0 008 8h16a8 8 0 008-8V30" stroke="#00e873" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`,
        
        // Arrow icon for links
        arrow: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        
        // Chevron for FAQ
        chevron: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    };

    // HTML Content
    const content = `
        ${styles}
        <div class="partner-page-container">
            <!-- Hero Section -->
            <section class="partner-hero">
                <div class="partner-container">
                    <h1>Partner with PointFive to Deliver<br>Continuous Cloud & AI Efficiency</h1>
                    <p class="subtitle">Help your clients move beyond cost reporting to continuous infrastructure efficiency — turning insight into ongoing ROI-driven operational improvements.</p>
                    
                    <div class="partner-cta-group">
                        <a href="https://www.pointfive.co/partner-program#partner-form" class="partner-btn partner-btn-primary">Become a Partner</a>
                        <a href="https://www.pointfive.co/contact" class="partner-btn partner-btn-secondary">Talk to the Team</a>
                    </div>
                </div>
            </section>

            <!-- Partner Logos -->
            <section class="partner-logos">
                <div class="partner-container">
                    <div class="partner-logos-title">Trusted by Leading Consultancies and Technology Partners</div>
                    <div class="partner-logos-grid">
                        <div class="partner-logo">
                            <img src="https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/67f54123defe4f77ca688cb8_Deloitte.avif" alt="Deloitte" style="max-width: 80%; height: auto;">
                        </div>
                        <div class="partner-logo">
                            <img src="https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/699864411ee461dc0f2c7bf3_Capgemini-Logo.wine.svg" alt="Capgemini" style="max-width: 100%; height: auto;">
                        </div>
                        <div class="partner-logo">
                            <img src="https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/6998644121c6c39905b3fae2_Accenture_logo.svg" alt="Accenture" style="max-width: 70%; height: auto;">
                        </div>
                        <div class="partner-logo">
                            <img src="https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/699864417283bfd8ea0eb7d4_a773d4f6e6b179c71df20da61eb62afc_Presidio_logo%20%281%29.png" alt="Presidio" style="max-width: 100%; height: auto;">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Partner -->
            <section class="partner-section">
                <div class="partner-container">
                    <div class="partner-section-header">
                        <h2>Why Partner with PointFive?</h2>
                        <p>Deliver measurable value to your clients with the industry's most comprehensive cloud efficiency platform</p>
                    </div>
                    
                    <div class="partner-why-grid">
                        <div class="partner-why-card">
                            <div class="partner-icon">${icons.continuous}</div>
                            <h3>Continuous Efficiency, Not One-Time Reports</h3>
                            <p>Move beyond static assessments to deliver ongoing optimization that compounds value over time.</p>
                        </div>
                        
                        <div class="partner-why-card">
                            <div class="partner-icon">${icons.ai}</div>
                            <h3>Built for Modern Workloads</h3>
                            <p>Native support for Kubernetes, AI infrastructure, and data platforms—not just basic compute and storage.</p>
                        </div>
                        
                        <div class="partner-why-card">
                            <div class="partner-icon">${icons.efficiency}</div>
                            <h3>Operational Design, Not Just Cost Accounting</h3>
                            <p>Engineering-first platform that drives actual infrastructure improvements, not just visibility.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- How Partners Win -->
            <section class="partner-section" style="background: #f8f9ff; padding-top: 100px; padding-bottom: 100px;">
                <div class="partner-container">
                    <div class="partner-section-header">
                        <h2>How Partners Win with PointFive</h2>
                    </div>
                    
                    <div class="partner-benefits-grid">
                        <div class="partner-benefit-card">
                            <div class="partner-icon">${icons.cloudGrowth}</div>
                            <h3>Grow as you deliver cloud success</h3>
                            <p>Help customers see, understand, and secure everything in the cloud with sales training and education to drive demand and close deals faster.</p>
                        </div>
                        
                        <div class="partner-benefit-card">
                            <div class="partner-icon">${icons.marketExpansion}</div>
                            <h3>Expand your market presence</h3>
                            <p>Amplify your brand and showcase your success with our cloud efficiency platform, leveraging co-marketing tools, funding opportunities, and campaign kits.</p>
                        </div>
                        
                        <div class="partner-benefit-card">
                            <div class="partner-icon">${icons.differentiation}</div>
                            <h3>Differentiate your business</h3>
                            <p>Stand out in the market with our industry leading platform that meets customers where they are on their cloud journeys. Our flexible partnership models make it easy to align with their needs, and yours.</p>
                        </div>
                        
                        <div class="partner-benefit-card">
                            <div class="partner-icon">${icons.acceleration}</div>
                            <h3>Accelerate your success with benefits</h3>
                            <p>Earn financial rewards based on performance and impact to grow your business, reach new customers, and keep delivering results that matter.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Partner Proof -->
            <section class="partner-section">
                <div class="partner-container">
                    <div class="partner-section-header">
                        <h2>Proven Partner Success</h2>
                    </div>
                    
                    <div class="partner-testimonial">
                        <div class="partner-testimonial-quote">
                            PointFive has become a core part of how we deliver cloud efficiency to our enterprise clients. The platform's depth in Kubernetes and AI infrastructure gives us capabilities that set us apart from other consulting firms.
                        </div>
                        <div class="partner-testimonial-author">
                            <div class="partner-testimonial-avatar">AZ</div>
                            <div class="partner-testimonial-info">
                                <h4>Adam Zeitlin</h4>
                                <p>FinOps Practice Lead, Deloitte</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="partner-section" style="background: #fff;">
                <div class="partner-container">
                    <div class="partner-section-header">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    
                    <div class="partner-faq-list">
                        <div class="partner-faq-item">
                            <button class="partner-faq-question">
                                What types of partnerships does PointFive offer?
                                <span class="partner-faq-icon">${icons.chevron}</span>
                            </button>
                            <div class="partner-faq-answer">
                                <div class="partner-faq-answer-content">
                                    PointFive offers several partnership models including Reseller Partners, Services Partners, Technology Partners, and Strategic Alliances. Each model is designed to align with your business model and go-to-market strategy.
                                </div>
                            </div>
                        </div>
                        
                        <div class="partner-faq-item">
                            <button class="partner-faq-question">
                                What support and resources are available to partners?
                                <span class="partner-faq-icon">${icons.chevron}</span>
                            </button>
                            <div class="partner-faq-answer">
                                <div class="partner-faq-answer-content">
                                    Partners receive comprehensive support including technical training, sales enablement, co-marketing resources, dedicated partner success managers, and access to our partner portal with documentation, playbooks, and deal registration tools.
                                </div>
                            </div>
                        </div>
                        
                        <div class="partner-faq-item">
                            <button class="partner-faq-question">
                                How does PointFive differentiate from other cloud efficiency solutions?
                                <span class="partner-faq-icon">${icons.chevron}</span>
                            </button>
                            <div class="partner-faq-answer">
                                <div class="partner-faq-answer-content">
                                    PointFive is purpose-built for Cloud Efficiency Posture Management (CEPM) with agentless architecture, 300+ optimization types, native Kubernetes support, and engineering-first automation. We detect DeepWaste that traditional FinOps tools miss.
                                </div>
                            </div>
                        </div>
                        
                        <div class="partner-faq-item">
                            <button class="partner-faq-question">
                                What is the typical partner onboarding timeline?
                                <span class="partner-faq-icon">${icons.chevron}</span>
                            </button>
                            <div class="partner-faq-answer">
                                <div class="partner-faq-answer-content">
                                    Partner onboarding typically takes 2-4 weeks from application approval. This includes contract execution, technical training, portal access setup, and co-marketing planning. We provide accelerated onboarding for strategic partnerships.
                                </div>
                            </div>
                        </div>
                        
                        <div class="partner-faq-item">
                            <button class="partner-faq-question">
                                How are partner margins and incentives structured?
                                <span class="partner-faq-icon">${icons.chevron}</span>
                            </button>
                            <div class="partner-faq-answer">
                                <div class="partner-faq-answer-content">
                                    Partner margins and incentives vary by partnership type and are based on deal size, services attached, and strategic value. We offer competitive margins, tiered incentive programs, and performance-based bonuses. Contact our partnerships team for specific program details.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Get Started CTA -->
            <section class="partner-cta-section">
                <div class="partner-container">
                    <h2>Ready to Partner with PointFive?</h2>
                    <p>Join leading consultancies and technology partners delivering continuous cloud and AI efficiency to enterprise clients</p>
                    
                    <div class="partner-cta-group">
                        <a href="https://www.pointfive.co/partner-program#partner-form" class="partner-btn partner-btn-primary">Become a Partner</a>
                        <a href="https://www.pointfive.co/contact" class="partner-btn partner-btn-secondary">Talk to the Team</a>
                    </div>
                </div>
            </section>
        </div>
    `;

    // FAQ Accordion Functionality
    function initFAQ() {
        const faqItems = document.querySelectorAll('.partner-faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.partner-faq-question');
            const answer = item.querySelector('.partner-faq-answer');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.partner-faq-answer').style.maxHeight = '0';
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });
    }

    // Initialize
    function init() {
        // Try multiple selectors for flexibility
        const targetDiv = document.getElementById('partner-page-inject') ||
                         document.querySelector('.partner-page-wrapper') ||
                         document.querySelector('[data-partner-page]') ||
                         document.querySelector('main') ||
                         document.querySelector('.main-wrapper') ||
                         document.body;
        
        if (targetDiv) {
            console.log('✅ Partner page loaded into:', targetDiv.tagName);
            targetDiv.innerHTML = content;
            // Wait for DOM to be ready
            setTimeout(initFAQ, 100);
        } else {
            console.error('❌ No suitable container found for partner page');
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
