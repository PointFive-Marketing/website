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
                padding: 80px 32px 60px;
                text-align: center;
                background: #fff;
            }

            .partner-hero h1 {
                margin: 0 0 20px;
                font-family: 'Codec Pro', sans-serif;
                font-size: 52px;
                line-height: 120%;
                font-weight: 400;
                color: #000;
                max-width: 900px;
                margin-left: auto;
                margin-right: auto;
            }

            .partner-hero .subheadline {
                margin: 0 auto 40px;
                font-size: 21px;
                line-height: 1.5;
                font-weight: 300;
                color: #4a5565;
                max-width: 750px;
            }

            /* CTAs */
            .partner-cta-group {
                display: flex;
                gap: 16px;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 60px;
            }

            .partner-cta-button {
                display: inline-block;
                padding: 14px 32px;
                font-size: 16px;
                font-weight: 600;
                text-decoration: none;
                border-radius: 6px;
                transition: all 0.2s ease;
                cursor: pointer;
                border: none;
                font-family: 'Codec Pro', sans-serif;
            }

            .partner-cta-primary {
                background: #00e;
                color: #fff;
            }

            .partner-cta-primary:hover {
                background: #0000cc;
                transform: translateY(-1px);
            }

            .partner-cta-secondary {
                background: #fff;
                color: #00e;
                border: 2px solid #00e;
            }

            .partner-cta-secondary:hover {
                background: #f0f4ff;
            }

            .partner-cta-tertiary {
                background: transparent;
                color: #4a5565;
                border: 2px solid #e9efef;
            }

            .partner-cta-tertiary:hover {
                border-color: #00e;
                color: #00e;
            }

            /* Trust Signals */
            .partner-trust-signals {
                padding: 40px 0;
                border-top: 1px solid #e9efef;
            }

            .partner-trust-signals p {
                font-size: 14px;
                font-weight: 600;
                color: #4a5565;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 24px;
            }

            .partner-logos {
                display: flex;
                gap: 48px;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }

            .partner-logos span {
                font-size: 24px;
                font-weight: 600;
                color: #000;
                opacity: 0.7;
            }

            /* Section Styles */
            .partner-section {
                padding: 80px 0;
            }

            .partner-section-header {
                text-align: center;
                margin-bottom: 24px;
            }

            .partner-section-header h2 {
                font-family: 'Codec Pro', sans-serif;
                font-size: 42px;
                line-height: 120%;
                font-weight: 400;
                color: #000;
                margin-bottom: 24px;
            }

            .partner-section-intro {
                max-width: 800px;
                margin: 0 auto 60px;
                font-size: 19px;
                line-height: 1.6;
                color: #4a5565;
                text-align: center;
            }

            /* Value Pillars Grid */
            .partner-pillars-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 32px;
                margin-top: 48px;
            }

            .partner-pillar {
                padding: 32px;
                background: #fff;
                border: 1px solid #e9efef;
                border-radius: 8px;
                transition: all 0.2s ease;
            }

            .partner-pillar:hover {
                border-color: #00e;
                box-shadow: 0 4px 12px rgba(0, 0, 238, 0.1);
                transform: translateY(-2px);
            }

            .partner-pillar h3 {
                font-family: 'Codec Pro', sans-serif;
                font-size: 20px;
                line-height: 140%;
                font-weight: 600;
                color: #000;
                margin-bottom: 12px;
            }

            .partner-pillar p {
                font-size: 16px;
                line-height: 1.6;
                color: #4a5565;
            }

            /* Benefits List */
            .partner-benefits-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 32px;
                margin-top: 48px;
            }

            .partner-benefit {
                padding: 32px;
                background: #fff;
                border-radius: 8px;
            }

            .partner-benefit h3 {
                font-family: 'Codec Pro', sans-serif;
                font-size: 20px;
                line-height: 140%;
                font-weight: 600;
                color: #000;
                margin-bottom: 12px;
            }

            .partner-benefit p {
                font-size: 16px;
                line-height: 1.6;
                color: #4a5565;
            }

            /* Testimonial */
            .partner-testimonial {
                background: #f9f9f9;
                padding: 60px;
                border-radius: 12px;
                max-width: 900px;
                margin: 0 auto;
            }

            .partner-testimonial-quote {
                font-size: 20px;
                line-height: 1.7;
                color: #000;
                margin-bottom: 32px;
                font-style: italic;
            }

            .partner-testimonial-attribution {
                display: flex;
                align-items: center;
                gap: 16px;
            }

            .partner-testimonial-author {
                font-size: 18px;
                font-weight: 600;
                color: #000;
                margin-bottom: 4px;
            }

            .partner-testimonial-role {
                font-size: 16px;
                color: #4a5565;
            }

            .partner-testimonial-company {
                font-weight: 600;
                color: #000;
            }

            /* FAQs */
            .partner-faqs {
                max-width: 800px;
                margin: 0 auto;
            }

            .partner-faq-item {
                margin-bottom: 32px;
                padding-bottom: 32px;
                border-bottom: 1px solid #e9efef;
            }

            .partner-faq-item:last-child {
                border-bottom: none;
            }

            .partner-faq-question {
                font-size: 20px;
                font-weight: 600;
                color: #000;
                margin-bottom: 12px;
            }

            .partner-faq-answer {
                font-size: 16px;
                line-height: 1.6;
                color: #4a5565;
            }

            /* Get Started Section */
            .partner-get-started {
                text-align: center;
                padding: 80px 32px;
                background: #f9f9f9;
            }

            .partner-get-started h2 {
                font-family: 'Codec Pro', sans-serif;
                font-size: 42px;
                line-height: 120%;
                font-weight: 400;
                color: #000;
                margin-bottom: 20px;
            }

            .partner-get-started p {
                font-size: 19px;
                line-height: 1.6;
                color: #4a5565;
                max-width: 750px;
                margin: 0 auto 40px;
            }

            .partner-section-bg-gray {
                background: #f9f9f9;
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
                    font-size: 38px;
                }

                .partner-section-header h2 {
                    font-size: 32px;
                }

                .partner-testimonial {
                    padding: 40px 32px;
                }
            }

            @media (max-width: 600px) {
                .partner-hero {
                    padding: 60px 20px 40px;
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
                    gap: 24px;
                }

                .partner-logos span {
                    font-size: 18px;
                }

                .partner-section {
                    padding: 60px 0;
                }

                .partner-container {
                    padding: 0 20px;
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
                        <h3>Built for Continuous Efficiency</h3>
                        <p>PointFive continuously surfaces inefficiencies as cloud and AI usage changes — helping teams act in real time, not after budgets are exceeded.</p>
                    </div>
                    <div class="partner-pillar">
                        <h3>Purpose-Built for Modern Workloads</h3>
                        <p>From Kubernetes and autoscaling to GPUs and AI services, PointFive focuses on where efficiency degrades fastest and where traditional tools fall short.</p>
                    </div>
                    <div class="partner-pillar">
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
                        <h3>Win More Strategic Deals</h3>
                        <p>Shift conversations from cost cutting to long-term operational efficiency and AI readiness.</p>
                    </div>
                    <div class="partner-benefit">
                        <h3>Stay Embedded Post-Implementation</h3>
                        <p>Continuous efficiency creates lasting engagement — not one-off optimization projects.</p>
                    </div>
                    <div class="partner-benefit">
                        <h3>Differentiate Beyond Reporting</h3>
                        <p>Move from dashboards and insights to real, measurable operational impact.</p>
                    </div>
                    <div class="partner-benefit">
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
                        <div>
                            <div class="partner-testimonial-author">Adam Zeitlin</div>
                            <div class="partner-testimonial-role">FinOps Practice Lead, <span class="partner-testimonial-company">Deloitte</span></div>
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
