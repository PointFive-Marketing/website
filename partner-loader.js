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
                background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
                position: relative;
                overflow: hidden;
            }

            .partner-hero::before {
                content: '';
                position: absolute;
                top: -50%;
                right: -10%;
                width: 600px;
                height: 600px;
                background: radial-gradient(circle, rgba(0, 0, 238, 0.08) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
            }

            .partner-hero::after {
                content: '';
                position: absolute;
                bottom: -30%;
                left: -5%;
                width: 500px;
                height: 500px;
                background: radial-gradient(circle, rgba(0, 0, 238, 0.05) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
            }

            .partner-hero-content {
                position: relative;
                z-index: 1;
            }

            .partner-hero h1 {
                margin: 0 0 24px;
                font-family: 'Codec Pro', sans-serif;
                font-size: 56px;
                line-height: 115%;
                font-weight: 600;
                color: #000;
                max-width: 950px;
                margin-left: auto;
                margin-right: auto;
                letter-spacing: -0.02em;
            }

            .partner-hero .subheadline {
                margin: 0 auto 48px;
                font-size: 22px;
                line-height: 1.6;
                font-weight: 400;
                color: #4a5565;
                max-width: 800px;
            }

            /* CTAs */
            .partner-cta-group {
                display: flex;
                gap: 16px;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 80px;
            }

            .partner-cta-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 16px 36px;
                font-size: 16px;
                font-weight: 600;
                text-decoration: none;
                border-radius: 8px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: pointer;
                border: none;
                font-family: 'Codec Pro', sans-serif;
                position: relative;
                overflow: hidden;
            }

            .partner-cta-primary {
                background: linear-gradient(135deg, #00e 0%, #0000ee 100%);
                color: #fff;
                box-shadow: 0 4px 14px rgba(0, 0, 238, 0.25);
            }

            .partner-cta-primary::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #0000cc 0%, #0000ff 100%);
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .partner-cta-primary:hover::before {
                opacity: 1;
            }

            .partner-cta-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(0, 0, 238, 0.35);
            }

            .partner-cta-secondary {
                background: #fff;
                color: #00e;
                border: 2px solid #00e;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            }

            .partner-cta-secondary:hover {
                background: #f0f4ff;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 238, 0.15);
            }

            .partner-cta-tertiary {
                background: #fff;
                color: #4a5565;
                border: 2px solid #e9efef;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            }

            .partner-cta-tertiary:hover {
                border-color: #00e;
                color: #00e;
                transform: translateY(-2px);
            }

            /* Trust Signals */
            .partner-trust-signals {
                padding: 48px 0 0;
                border-top: 1px solid rgba(0, 0, 0, 0.08);
            }

            .partner-trust-signals p {
                font-size: 13px;
                font-weight: 600;
                color: #6b7280;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 32px;
            }

            .partner-logos {
                display: flex;
                gap: 56px;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }

            .partner-logos span {
                font-size: 26px;
                font-weight: 600;
                color: #000;
                opacity: 0.5;
                transition: opacity 0.3s ease;
            }

            .partner-logos span:hover {
                opacity: 0.8;
            }

            /* Section Styles */
            .partner-section {
                padding: 100px 0;
            }

            .partner-section-header {
                text-align: center;
                margin-bottom: 24px;
            }

            .partner-section-header h2 {
                font-family: 'Codec Pro', sans-serif;
                font-size: 48px;
                line-height: 115%;
                font-weight: 600;
                color: #000;
                margin-bottom: 24px;
                letter-spacing: -0.02em;
            }

            .partner-section-intro {
                max-width: 850px;
                margin: 0 auto 80px;
                font-size: 20px;
                line-height: 1.7;
                color: #4a5565;
                text-align: center;
            }

            /* Value Pillars Grid */
            .partner-pillars-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 32px;
                margin-top: 64px;
            }

            .partner-pillar {
                padding: 40px;
                background: #fff;
                border: 1px solid #e9efef;
                border-radius: 12px;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                overflow: hidden;
            }

            .partner-pillar::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: linear-gradient(90deg, #00e 0%, #0066ff 100%);
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .partner-pillar:hover::before {
                transform: scaleX(1);
            }

            .partner-pillar:hover {
                border-color: #00e;
                box-shadow: 0 12px 40px rgba(0, 0, 238, 0.12);
                transform: translateY(-4px);
            }

            .partner-pillar-icon {
                width: 56px;
                height: 56px;
                background: linear-gradient(135deg, #e6f0ff 0%, #cde3ff 100%);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 28px;
                margin-bottom: 24px;
                transition: all 0.3s ease;
            }

            .partner-pillar:hover .partner-pillar-icon {
                background: linear-gradient(135deg, #00e 0%, #0066ff 100%);
                transform: scale(1.05);
            }

            .partner-pillar h3 {
                font-family: 'Codec Pro', sans-serif;
                font-size: 22px;
                line-height: 140%;
                font-weight: 600;
                color: #000;
                margin-bottom: 16px;
            }

            .partner-pillar p {
                font-size: 16px;
                line-height: 1.7;
                color: #4a5565;
            }

            /* Benefits List */
            .partner-benefits-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 32px;
                margin-top: 64px;
            }

            .partner-benefit {
                padding: 40px;
                background: #fff;
                border: 1px solid #e9efef;
                border-radius: 12px;
                transition: all 0.3s ease;
                position: relative;
            }

            .partner-benefit::after {
                content: '→';
                position: absolute;
                right: 32px;
                bottom: 32px;
                font-size: 24px;
                color: #00e;
                opacity: 0;
                transform: translateX(-10px);
                transition: all 0.3s ease;
            }

            .partner-benefit:hover {
                border-color: #00e;
                box-shadow: 0 8px 24px rgba(0, 0, 238, 0.1);
                transform: translateY(-2px);
            }

            .partner-benefit:hover::after {
                opacity: 1;
                transform: translateX(0);
            }

            .partner-benefit-icon {
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, #e6f0ff 0%, #cde3ff 100%);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                margin-bottom: 20px;
            }

            .partner-benefit h3 {
                font-family: 'Codec Pro', sans-serif;
                font-size: 22px;
                line-height: 140%;
                font-weight: 600;
                color: #000;
                margin-bottom: 16px;
            }

            .partner-benefit p {
                font-size: 16px;
                line-height: 1.7;
                color: #4a5565;
                padding-right: 32px;
            }

            /* Testimonial */
            .partner-testimonial {
                background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
                padding: 80px 72px;
                border-radius: 16px;
                max-width: 1000px;
                margin: 0 auto;
                border: 1px solid #e9efef;
                position: relative;
            }

            .partner-testimonial::before {
                content: '"';
                position: absolute;
                top: 40px;
                left: 48px;
                font-size: 120px;
                font-weight: 700;
                color: #00e;
                opacity: 0.1;
                line-height: 1;
                font-family: Georgia, serif;
            }

            .partner-testimonial-quote {
                font-size: 22px;
                line-height: 1.7;
                color: #000;
                margin-bottom: 40px;
                position: relative;
                z-index: 1;
            }

            .partner-testimonial-attribution {
                display: flex;
                align-items: center;
                gap: 20px;
                position: relative;
                z-index: 1;
            }

            .partner-testimonial-avatar {
                width: 64px;
                height: 64px;
                background: linear-gradient(135deg, #00e 0%, #0066ff 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 24px;
                font-weight: 600;
            }

            .partner-testimonial-author {
                font-size: 19px;
                font-weight: 600;
                color: #000;
                margin-bottom: 6px;
            }

            .partner-testimonial-role {
                font-size: 16px;
                color: #4a5565;
            }

            .partner-testimonial-company {
                font-weight: 600;
                color: #00e;
            }

            /* FAQs */
            .partner-faqs {
                max-width: 900px;
                margin: 0 auto;
            }

            .partner-faq-item {
                margin-bottom: 32px;
                padding: 32px;
                background: #fff;
                border: 1px solid #e9efef;
                border-radius: 12px;
                transition: all 0.3s ease;
            }

            .partner-faq-item:hover {
                border-color: #00e;
                box-shadow: 0 4px 16px rgba(0, 0, 238, 0.08);
            }

            .partner-faq-question {
                font-size: 20px;
                font-weight: 600;
                color: #000;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .partner-faq-question::before {
                content: '';
                width: 6px;
                height: 6px;
                background: #00e;
                border-radius: 50%;
                flex-shrink: 0;
            }

            .partner-faq-answer {
                font-size: 16px;
                line-height: 1.7;
                color: #4a5565;
                padding-left: 18px;
            }

            /* Get Started Section */
            .partner-get-started {
                text-align: center;
                padding: 100px 32px;
                background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
                position: relative;
            }

            .partner-get-started::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 1px;
                background: linear-gradient(90deg, transparent 0%, #e9efef 50%, transparent 100%);
            }

            .partner-get-started h2 {
                font-family: 'Codec Pro', sans-serif;
                font-size: 48px;
                line-height: 115%;
                font-weight: 600;
                color: #000;
                margin-bottom: 24px;
                letter-spacing: -0.02em;
            }

            .partner-get-started p {
                font-size: 20px;
                line-height: 1.7;
                color: #4a5565;
                max-width: 800px;
                margin: 0 auto 48px;
            }

            .partner-section-bg-gray {
                background: linear-gradient(180deg, #fafbff 0%, #f8f9ff 100%);
            }

            /* Responsive */
            @media (max-width: 900px) {
                .partner-pillars-grid {
                    grid-template-columns: 1fr;
                }

                .partner-benefits-grid {
                    grid-template-columns: 1fr;
                }

                .partner-hero h1 {
                    font-size: 40px;
                }

                .partner-section-header h2 {
                    font-size: 36px;
                }

                .partner-testimonial {
                    padding: 48px 40px;
                }

                .partner-section {
                    padding: 80px 0;
                }
            }

            @media (max-width: 600px) {
                .partner-hero {
                    padding: 80px 20px 60px;
                }

                .partner-hero h1 {
                    font-size: 32px;
                }

                .partner-hero .subheadline {
                    font-size: 18px;
                }

                .partner-cta-group {
                    flex-direction: column;
                    width: 100%;
                }

                .partner-cta-button {
                    width: 100%;
                }

                .partner-logos {
                    gap: 32px;
                }

                .partner-logos span {
                    font-size: 20px;
                }

                .partner-section {
                    padding: 60px 0;
                }

                .partner-container {
                    padding: 0 20px;
                }

                .partner-testimonial {
                    padding: 40px 24px;
                }

                .partner-section-header h2 {
                    font-size: 32px;
                }

                .partner-get-started h2 {
                    font-size: 32px;
                }
            }
        </style>
    `;

    // HTML Content
    const htmlContent = `
        <!-- Hero Section -->
        <section class="partner-hero">
            <div class="partner-container">
                <h1>Partner with PointFive to Deliver Continuous Cloud & AI Efficiency</h1>
                <p class="subheadline">PointFive helps partners move beyond cost reporting to continuous cloud and AI efficiency — turning insight into ongoing ROI-based operational action.</p>
                
                <div class="partner-cta-group">
                    <a href="#apply" class="partner-cta-button partner-cta-primary">Apply to Partner with PointFive</a>
                    <a href="#contact" class="partner-cta-button partner-cta-secondary">Talk to Partnerships</a>
                    <a href="#login" class="partner-cta-button partner-cta-tertiary">Partner Login</a>
                </div>

                <div class="partner-trust-signals">
                    <p>Trusted by leading consultancies and technology partners</p>
                    <div class="partner-logos">
                        <span>Deloitte</span>
                        <span>Capgemini</span>
                        <span>Accenture</span>
                        <span>Presidio</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Partner Section -->
        <section class="partner-section">
            <div class="partner-container">
                <div class="partner-section-header">
                    <h2>Why Partner with PointFive</h2>
                </div>
                <div class="partner-section-intro">
                    <p>Cloud and AI environments are constantly evolving. Architectures change. Workloads scale. Usage patterns shift. Efficiency can't be solved once — it must be continuously managed.</p>
                    <p style="margin-top: 16px;">PointFive enables partners to deliver continuous efficiency services as an operational capability, not a one-time optimization exercise.</p>
                </div>

                <div class="partner-pillars-grid">
                    <div class="partner-pillar">
                        <div class="partner-pillar-icon">🔄</div>
                        <h3>Built for Continuous Efficiency</h3>
                        <p>PointFive continuously surfaces inefficiencies as cloud and AI usage changes — helping teams act in real time, not after budgets are exceeded.</p>
                    </div>
                    <div class="partner-pillar">
                        <div class="partner-pillar-icon">⚡</div>
                        <h3>Purpose-Built for Modern Workloads</h3>
                        <p>From Kubernetes and autoscaling to GPUs and AI services, PointFive focuses on where efficiency degrades fastest and where traditional tools fall short.</p>
                    </div>
                    <div class="partner-pillar">
                        <div class="partner-pillar-icon">🎯</div>
                        <h3>Operational by Design</h3>
                        <p>Efficiency only sticks when it fits how engineering teams work. PointFive integrates naturally into day-to-day operational workflows — not just finance reviews.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- How Partners Win Section -->
        <section class="partner-section partner-section-bg-gray">
            <div class="partner-container">
                <div class="partner-section-header">
                    <h2>How Partners Win with Continuous Efficiency</h2>
                </div>

                <div class="partner-benefits-grid">
                    <div class="partner-benefit">
                        <div class="partner-benefit-icon">🎯</div>
                        <h3>Win More Strategic Deals</h3>
                        <p>Shift conversations from cost cutting to long-term operational efficiency and AI readiness.</p>
                    </div>
                    <div class="partner-benefit">
                        <div class="partner-benefit-icon">🔗</div>
                        <h3>Stay Embedded Post-Implementation</h3>
                        <p>Continuous efficiency creates lasting engagement — not one-off optimization projects.</p>
                    </div>
                    <div class="partner-benefit">
                        <div class="partner-benefit-icon">✨</div>
                        <h3>Differentiate Beyond Reporting</h3>
                        <p>Move from dashboards and insights to real, measurable operational impact.</p>
                    </div>
                    <div class="partner-benefit">
                        <div class="partner-benefit-icon">📈</div>
                        <h3>Support Long-Term Growth</h3>
                        <p>Help customers scale cloud and AI usage without efficiency degrading over time.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partner Proof Section -->
        <section class="partner-section">
            <div class="partner-container">
                <div class="partner-testimonial">
                    <p class="partner-testimonial-quote">"It's easy to bring PointFive into client conversations — clear ROI, quick time to value, and a natural fit with our advisory and managed services. Beyond that, it helps us deliver greater value by turning usage data into clear, actionable cost insights and inefficiencies. It opens the door to deeper conversations, smarter recommendations, and new service opportunities. It's a platform that supports our business — not just our clients."</p>
                    <div class="partner-testimonial-attribution">
                        <div class="partner-testimonial-avatar">AZ</div>
                        <div>
                            <div class="partner-testimonial-author">Adam Zeitlin</div>
                            <div class="partner-testimonial-role">FinOps Practice Lead, <span class="partner-testimonial-company">Deloitte</span></div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQs Section -->
        <section class="partner-section partner-section-bg-gray">
            <div class="partner-container">
                <div class="partner-section-header">
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div class="partner-faqs">
                    <div class="partner-faq-item">
                        <div class="partner-faq-question">Who is this partner program designed for?</div>
                        <div class="partner-faq-answer">PointFive partners with consultancies, systems integrators, MSPs, and technology partners helping customers operate cloud and AI environments efficiently over time.</div>
                    </div>

                    <div class="partner-faq-item">
                        <div class="partner-faq-question">Is this a resale or services partnership?</div>
                        <div class="partner-faq-answer">Partnership models vary by partner type and engagement. We work with partners across advisory, managed services, resale, and co-sell motions.</div>
                    </div>

                    <div class="partner-faq-item">
                        <div class="partner-faq-question">What happens after I apply?</div>
                        <div class="partner-faq-answer">Our partnerships team reviews each application and follows up to explore fit, collaboration models, and next steps.</div>
                    </div>

                    <div class="partner-faq-item">
                        <div class="partner-faq-question">Do you provide enablement and training?</div>
                        <div class="partner-faq-answer">Yes. Enablement and alignment evolve as cloud and AI usage patterns change.</div>
                    </div>

                    <div class="partner-faq-item">
                        <div class="partner-faq-question">Is this a transactional referral program?</div>
                        <div class="partner-faq-answer">It can be, but that is not why you should prioritize partnership with PointFive. The PointFive partner program is designed around continuous value creation and customer services and projects — not one-time referrals.</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Get Started Section -->
        <section class="partner-get-started">
            <div class="partner-container">
                <h2>Start Partnering with PointFive</h2>
                <p>Whether you're advising customers, delivering managed services, or supporting cloud and AI initiatives, partnering with PointFive helps you drive continuous value — not just short-term savings.</p>
                
                <div class="partner-cta-group">
                    <a href="#apply" class="partner-cta-button partner-cta-primary">Apply to Partner with PointFive</a>
                    <a href="#contact" class="partner-cta-button partner-cta-secondary">Talk to Partnerships</a>
                </div>
            </div>
        </section>
    `;

    // Function to inject the content
    function injectPartnerPage() {
        // Find the target container (adjust selector as needed for your Webflow setup)
        const targetContainer = document.querySelector('#partner-page-container') || 
                               document.querySelector('.partner-page-wrapper') ||
                               document.querySelector('main') ||
                               document.body;

        if (targetContainer) {
            // Create wrapper div
            const wrapper = document.createElement('div');
            wrapper.className = 'partner-page-container';
            wrapper.innerHTML = styles + htmlContent;

            // Clear existing content if needed (be careful with this)
            // targetContainer.innerHTML = '';
            
            // Append the content
            targetContainer.appendChild(wrapper);
            
            console.log('Partner page loaded successfully');
        } else {
            console.error('Partner page container not found');
        }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectPartnerPage);
    } else {
        injectPartnerPage();
    }
})();
