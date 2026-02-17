(function() {
    'use strict';
    
    const styles = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Codec Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #000;
            background: #fff;
            overflow-x: hidden;
        }

        .container {
            width: 100%;
            max-width: 75rem;
            margin: 0 auto;
            padding: 0 32px;
        }

        /* Hero Section */
        .dw-hero {
            padding: 100px 32px 60px;
            text-align: center;
            background: #fff;
        }

        .dw-hero-badge {
            display: inline-block;
            font-size: 14px;
            color: #00e;
            background: #e6f0ff;
            padding: 8px 16px;
            border-radius: 20px;
            margin-bottom: 24px;
            font-weight: 500;
        }

        .dw-hero h1 {
            margin: 0 0 20px;
            font-family: 'Codec Pro', sans-serif;
            font-size: 56px;
            line-height: 110%;
            font-weight: 400;
            color: #000;
        }

        .dw-hero .subtitle {
            margin: 0 auto 48px;
            font-size: 20px;
            line-height: 32px;
            font-weight: 300;
            color: #4a5565;
            max-width: 850px;
        }

        /* Stats Grid */
        .dw-stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
            max-width: 900px;
            margin: 0 auto;
        }

        .dw-stat {
            text-align: center;
        }

        .dw-stat-number {
            display: block;
            font-size: 48px;
            font-weight: 600;
            color: #00e;
            margin-bottom: 8px;
            line-height: 1;
        }

        .dw-stat-label {
            font-size: 14px;
            color: #4a5565;
            font-weight: 400;
        }

        /* Ticker Animation */
        .dw-ticker {
            width: 100%;
            overflow: hidden;
            background: #f9f9f9;
            padding: 32px 0;
            margin: 60px 0 0;
        }

        .dw-ticker-track {
            display: flex;
            gap: 16px;
            animation: scroll 60s linear infinite;
        }

        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .dw-ticker-item {
            flex-shrink: 0;
            background: #fff;
            border: 1px solid #e9efef;
            padding: 12px 20px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            color: #000;
            white-space: nowrap;
        }

        /* Section Styles */
        .dw-section {
            padding: 100px 0;
        }

        .dw-section-alt {
            background: #f9f9f9;
        }

        .dw-section-header {
            text-align: center;
            margin-bottom: 64px;
        }

        .dw-section-header h2 {
            font-size: 42px;
            font-weight: 400;
            color: #000;
            margin-bottom: 16px;
        }

        .dw-section-header .subtitle {
            font-size: 20px;
            line-height: 32px;
            color: #4a5565;
            max-width: 700px;
            margin: 0 auto;
        }

        /* Three Types Grid */
        .dw-types-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
        }

        .dw-type-card {
            background: #fff;
            border: 1px solid #e9efef;
            border-radius: 8px;
            padding: 40px 32px;
            text-align: center;
        }

        .dw-type-card h3 {
            font-size: 24px;
            font-weight: 600;
            color: #000;
            margin-bottom: 16px;
        }

        .dw-type-card p {
            font-size: 16px;
            line-height: 1.6;
            color: #4a5565;
            margin-bottom: 24px;
        }

        .dw-type-badge {
            display: inline-block;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 6px 12px;
            border-radius: 4px;
            letter-spacing: 0.5px;
        }

        .dw-type-badge.primary {
            background: #e6f0ff;
            color: #00e;
        }

        .dw-type-badge.secondary {
            background: #e9efef;
            color: #4a5565;
        }

        /* Opportunity Cards */
        .dw-opportunities {
            display: grid;
            gap: 24px;
        }

        .dw-opp-card {
            background: #fff;
            border: 1px solid #e9efef;
            border-radius: 8px;
            padding: 32px;
            transition: all 0.2s ease;
        }

        .dw-opp-card:hover {
            border-color: #00e;
            box-shadow: 0 4px 12px rgba(0, 0, 238, 0.1);
            transform: translateY(-2px);
        }

        .dw-opp-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 16px;
        }

        .dw-opp-title {
            flex: 1;
        }

        .dw-opp-title h3 {
            font-size: 22px;
            font-weight: 600;
            color: #000;
            margin-bottom: 8px;
        }

        .dw-opp-provider {
            font-size: 13px;
            color: #00e;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .dw-opp-savings {
            flex-shrink: 0;
            text-align: right;
            background: #e6f0ff;
            padding: 12px 16px;
            border-radius: 6px;
            margin-left: 24px;
        }

        .dw-opp-savings-amount {
            display: block;
            font-size: 20px;
            font-weight: 700;
            color: #00e;
            line-height: 1;
            margin-bottom: 4px;
        }

        .dw-opp-savings-label {
            font-size: 11px;
            color: #4a5565;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .dw-opp-description {
            font-size: 15px;
            line-height: 1.6;
            color: #4a5565;
            margin-bottom: 20px;
        }

        .dw-opp-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .dw-opp-tag {
            font-size: 12px;
            padding: 6px 12px;
            background: #f9f9f9;
            color: #4a5565;
            border-radius: 4px;
            font-weight: 500;
        }

        .dw-opp-tag.highlight {
            background: #e6f0ff;
            color: #00e;
            font-weight: 600;
        }

        /* Categories Grid */
        .dw-categories-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

        .dw-category-card {
            background: #fff;
            border: 1px solid #e9efef;
            border-radius: 8px;
            padding: 32px 24px;
            text-align: center;
        }

        .dw-category-icon {
            font-size: 40px;
            margin-bottom: 16px;
        }

        .dw-category-card h3 {
            font-size: 20px;
            font-weight: 600;
            color: #000;
            margin-bottom: 12px;
        }

        .dw-category-card p {
            font-size: 15px;
            line-height: 1.6;
            color: #4a5565;
        }

        /* Platform Coverage */
        .dw-platforms {
            display: grid;
            gap: 48px;
        }

        .dw-platform-category h3 {
            font-size: 24px;
            font-weight: 600;
            color: #000;
            margin-bottom: 24px;
            padding-bottom: 12px;
            border-bottom: 2px solid #e9efef;
        }

        .dw-platform-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
        }

        .dw-platform-item {
            background: #fff;
            border: 1px solid #e9efef;
            border-radius: 6px;
            padding: 16px 12px;
            text-align: center;
            transition: all 0.2s ease;
        }

        .dw-platform-item:hover {
            border-color: #00e;
            box-shadow: 0 2px 8px rgba(0, 0, 238, 0.1);
        }

        .dw-platform-name {
            font-size: 14px;
            font-weight: 600;
            color: #000;
            margin-bottom: 4px;
        }

        .dw-platform-type {
            font-size: 12px;
            color: #4a5565;
        }

        .dw-platform-badge {
            display: inline-block;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            background: #e9efef;
            color: #4a5565;
            padding: 4px 8px;
            border-radius: 3px;
            margin-top: 8px;
        }

        /* Why PointFive */
        .dw-why-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
        }

        .dw-why-card {
            background: #fff;
            border: 1px solid #e9efef;
            border-radius: 8px;
            padding: 40px 32px;
        }

        .dw-why-number {
            display: inline-block;
            font-size: 16px;
            font-weight: 700;
            color: #00e;
            background: #e6f0ff;
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 50%;
            margin-bottom: 20px;
        }

        .dw-why-card h3 {
            font-size: 22px;
            font-weight: 600;
            color: #000;
            margin-bottom: 12px;
        }

        .dw-why-card p {
            font-size: 16px;
            line-height: 1.6;
            color: #4a5565;
        }

        /* CTA Section */
        .dw-cta {
            text-align: center;
            padding: 80px 0;
            background: #f9f9f9;
        }

        .dw-cta h2 {
            font-size: 42px;
            font-weight: 400;
            color: #000;
            margin-bottom: 16px;
        }

        .dw-cta p {
            font-size: 18px;
            color: #4a5565;
            margin-bottom: 32px;
        }

        .dw-cta-button {
            display: inline-block;
            background: #00e;
            color: #fff;
            padding: 16px 32px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
        }

        .dw-cta-button:hover {
            background: #000;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* ROI Highlight */
        .dw-roi {
            background: #fff;
            border: 2px solid #00e;
            border-radius: 8px;
            padding: 32px;
            text-align: center;
            margin: 40px 0;
        }

        .dw-roi-stat {
            font-size: 56px;
            font-weight: 700;
            color: #00e;
            margin-bottom: 8px;
        }

        .dw-roi-label {
            font-size: 16px;
            color: #4a5565;
            margin-bottom: 16px;
        }

        .dw-roi-text {
            font-size: 14px;
            color: #4a5565;
            max-width: 600px;
            margin: 0 auto;
        }

        /* Mobile Responsive */
        @media (max-width: 900px) {
            .container {
                padding: 0 20px;
            }

            .dw-hero {
                padding: 80px 20px 40px;
            }

            .dw-hero h1 {
                font-size: 40px;
                line-height: 115%;
            }

            .dw-hero .subtitle {
                font-size: 18px;
                line-height: 28px;
                padding: 0;
            }

            .dw-stats {
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
            }

            .dw-stat-number {
                font-size: 40px;
            }

            .dw-stat-label {
                font-size: 13px;
            }

            .dw-ticker {
                padding: 24px 0;
                margin: 40px 0 0;
            }

            .dw-ticker-item {
                font-size: 16px;
                padding: 0 20px;
            }

            .dw-section {
                padding: 60px 20px;
            }

            .dw-section-header {
                margin-bottom: 40px;
            }

            .dw-section-header h2 {
                font-size: 36px;
            }

            .dw-section-header .subtitle {
                font-size: 17px;
            }

            .dw-types-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .dw-type-card {
                padding: 32px 24px;
            }

            .dw-opportunities {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .dw-opp-card {
                padding: 28px 24px;
            }

            .dw-opp-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;
            }

            .dw-opp-savings {
                margin-left: 0;
                margin-top: 0;
                width: auto;
            }

            .dw-categories-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .dw-cat-card {
                padding: 28px 24px;
            }

            .dw-platform-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
            }

            .dw-platform-card {
                padding: 24px 20px;
            }

            .dw-why-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .dw-why-card {
                padding: 32px 24px;
            }

            .dw-roi-box {
                padding: 40px 24px;
                margin: 40px 0;
            }

            .dw-cta {
                padding: 60px 20px;
            }

            .dw-cta h2 {
                font-size: 36px;
            }

            .dw-cta p {
                font-size: 17px;
            }
        }

        @media (max-width: 600px) {
            .container {
                padding: 0 20px;
            }

            .dw-hero {
                padding: 60px 20px 32px;
            }

            .dw-hero-badge {
                font-size: 12px;
                padding: 6px 12px;
                margin-bottom: 20px;
            }

            .dw-hero h1 {
                font-size: 32px;
                line-height: 110%;
                margin-bottom: 16px;
            }

            .dw-hero .subtitle {
                font-size: 16px;
                line-height: 26px;
                margin-bottom: 32px;
            }

            .dw-stats {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .dw-stat-number {
                font-size: 36px;
            }

            .dw-stat-label {
                font-size: 12px;
            }

            .dw-ticker {
                padding: 20px 0;
                margin: 32px 0 0;
            }

            .dw-ticker-item {
                font-size: 14px;
                padding: 0 16px;
            }

            .dw-section {
                padding: 48px 20px;
            }

            .dw-section-header {
                margin-bottom: 32px;
            }

            .dw-section-header h2 {
                font-size: 28px;
                line-height: 120%;
                margin-bottom: 12px;
            }

            .dw-section-header .subtitle {
                font-size: 15px;
                line-height: 24px;
            }

            .dw-type-card {
                padding: 28px 20px;
            }

            .dw-type-card h3 {
                font-size: 20px;
            }

            .dw-type-card .dw-type-label {
                font-size: 14px;
                margin-bottom: 8px;
            }

            .dw-opportunities {
                gap: 16px;
            }

            .dw-opp-card {
                padding: 24px 20px;
            }

            .dw-opp-card h3 {
                font-size: 18px;
                line-height: 140%;
            }

            .dw-opp-card p {
                font-size: 14px;
                line-height: 22px;
            }

            .dw-opp-savings {
                font-size: 18px;
                padding: 6px 12px;
            }

            .dw-opp-tags {
                gap: 6px;
            }

            .dw-opp-tag {
                font-size: 11px;
                padding: 4px 10px;
            }

            .dw-cat-card {
                padding: 24px 20px;
            }

            .dw-cat-card h3 {
                font-size: 18px;
            }

            .dw-cat-card p {
                font-size: 14px;
            }

            .dw-platform-grid {
                grid-template-columns: 1fr;
                gap: 16px;
            }

            .dw-platform-card {
                padding: 20px 16px;
            }

            .dw-platform-service {
                padding: 12px;
            }

            .dw-platform-service h4 {
                font-size: 13px;
            }

            .dw-platform-service .dw-platform-badge {
                font-size: 10px;
                padding: 2px 6px;
            }

            .dw-why-card {
                padding: 28px 20px;
            }

            .dw-why-card h3 {
                font-size: 20px;
            }

            .dw-why-card p {
                font-size: 14px;
                line-height: 22px;
            }

            .dw-roi-box {
                padding: 32px 20px;
                margin: 32px 0;
            }

            .dw-roi-stat {
                font-size: 40px;
            }

            .dw-roi-label {
                font-size: 13px;
            }

            .dw-roi-text {
                font-size: 14px;
                line-height: 22px;
            }

            .dw-cta {
                padding: 48px 20px;
            }

            .dw-cta h2 {
                font-size: 28px;
                margin-bottom: 12px;
            }

            .dw-cta p {
                font-size: 15px;
                line-height: 24px;
                margin-bottom: 28px;
            }

            .dw-cta-button {
                font-size: 15px;
                padding: 14px 32px;
            }
        }
        </style>
    `;

    const html = `
        <!-- Hero Section -->
        <section class="dw-hero">
            <div class="container">
                <div class="dw-hero-badge">Continuously expanding — 10 new detections weekly</div>
                <h1>400+ ways to<br>cut your cloud bill.</h1>
                <p class="subtitle">PointFive's DeepWaste™ Detection Engine finds cloud waste that no other tool can — from quick wins to deep architectural inefficiencies — across AWS, Azure, GCP, OCI, Snowflake, Databricks, Kubernetes, and AI platforms.</p>
                
                <div class="dw-stats">
                    <div class="dw-stat">
                        <span class="dw-stat-number">400+</span>
                        <span class="dw-stat-label">Optimization Types</span>
                    </div>
                    <div class="dw-stat">
                        <span class="dw-stat-number">12+</span>
                        <span class="dw-stat-label">Providers</span>
                    </div>
                    <div class="dw-stat">
                        <span class="dw-stat-number">85+</span>
                        <span class="dw-stat-label">Services Covered</span>
                    </div>
                    <div class="dw-stat">
                        <span class="dw-stat-number">6</span>
                        <span class="dw-stat-label">Waste Categories</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Ticker -->
        <div class="dw-ticker">
            <div class="dw-ticker-track">
                <div class="dw-ticker-item">EC2 Rightsizing</div>
                <div class="dw-ticker-item">NAT Gateway Optimization</div>
                <div class="dw-ticker-item">K8s Workload Efficiency</div>
                <div class="dw-ticker-item">RDS Snapshot Lifecycle</div>
                <div class="dw-ticker-item">EBS Volume Optimization</div>
                <div class="dw-ticker-item">Azure Disk Types</div>
                <div class="dw-ticker-item">S3 Storage Classes</div>
                <div class="dw-ticker-item">MSK Cluster Optimization</div>
                <div class="dw-ticker-item">OpenSearch Serverless Migration</div>
                <div class="dw-ticker-item">GCP Logging Architecture</div>
                <div class="dw-ticker-item">Snowflake Warehouse Tuning</div>
                <div class="dw-ticker-item">ECS Fargate Rightsizing</div>
                <div class="dw-ticker-item">CloudTrail Deduplication</div>
                <div class="dw-ticker-item">Azure SQL DTU Optimization</div>
                <div class="dw-ticker-item">Lambda Memory Allocation</div>
                <div class="dw-ticker-item">DynamoDB Capacity Modes</div>
                <!-- Duplicate for seamless loop -->
                <div class="dw-ticker-item">EC2 Rightsizing</div>
                <div class="dw-ticker-item">NAT Gateway Optimization</div>
                <div class="dw-ticker-item">K8s Workload Efficiency</div>
                <div class="dw-ticker-item">RDS Snapshot Lifecycle</div>
                <div class="dw-ticker-item">EBS Volume Optimization</div>
                <div class="dw-ticker-item">Azure Disk Types</div>
                <div class="dw-ticker-item">S3 Storage Classes</div>
                <div class="dw-ticker-item">MSK Cluster Optimization</div>
                <div class="dw-ticker-item">OpenSearch Serverless Migration</div>
                <div class="dw-ticker-item">GCP Logging Architecture</div>
                <div class="dw-ticker-item">Snowflake Warehouse Tuning</div>
                <div class="dw-ticker-item">ECS Fargate Rightsizing</div>
                <div class="dw-ticker-item">CloudTrail Deduplication</div>
                <div class="dw-ticker-item">Azure SQL DTU Optimization</div>
                <div class="dw-ticker-item">Lambda Memory Allocation</div>
                <div class="dw-ticker-item">DynamoDB Capacity Modes</div>
            </div>
        </div>

        <!-- What DeepWaste Finds -->
        <section class="dw-section">
            <div class="container">
                <div class="dw-section-header">
                    <h2>What DeepWaste™ Finds</h2>
                    <p class="subtitle">Three kinds of waste. One engine finds them all.</p>
                    <p class="subtitle">Our Cloud Cost Research Team ships ~10 new detections every week, organized into three strategic categories that together cover your entire optimization surface.</p>
                </div>
                
                <div class="dw-types-grid">
                    <div class="dw-type-card">
                        <h3>Quick Wins,<br>Massive Returns</h3>
                        <p>High-impact savings with minimal engineering effort. Schedule idle instances, deploy VPC endpoints, enable lifecycle policies — and start saving on day one. Example customer saved $600K by deploying a single S3 Gateway Endpoint.</p>
                        <span class="dw-type-badge primary">Fastest ROI</span>
                    </div>
                    
                    <div class="dw-type-card">
                        <h3>Deep Waste<br>Nobody Else Detects</h3>
                        <p>Architectural inefficiencies invisible to other tools. We use VPC Flow Logs, Route53 queries, snapshot side-scanning, and virtual cost allocation to expose waste your cloud provider doesn't surface.</p>
                        <span class="dw-type-badge primary">Only PointFive</span>
                    </div>
                    
                    <div class="dw-type-card">
                        <h3>Most Common<br>Across Every Stack</h3>
                        <p>The patterns we see in every environment — idle resources, outdated instance generations, non-production overprovisioning, and missing storage lifecycle policies. Consistent 20–40% savings potential.</p>
                        <span class="dw-type-badge secondary">Universal</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Opportunity Catalog -->
        <section class="dw-section dw-section-alt">
            <div class="container">
                <div class="dw-section-header">
                    <h2>Opportunity Catalog</h2>
                    <p class="subtitle">Real optimizations. Real savings.</p>
                    <p class="subtitle">A sample of the 400+ distinct optimizations our DeepWaste™ engine detects — each backed by usage patterns, configuration analysis, and validated remediation playbooks.</p>
                </div>
                
                <div class="dw-opportunities">
                    <!-- Opportunity 1 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>Expensive VPC NAT Gateway Deployment</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$800K+</span>
                                <span class="dw-opp-savings-label">saved</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Detects workloads routing massive data through NAT Gateways when free alternatives like Gateway Endpoints exist. A single endpoint deployment can eliminate hundreds of thousands in annual data processing fees.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Easy Fix</span>
                            <span class="dw-opp-tag">Networking</span>
                            <span class="dw-opp-tag">Zero Downtime</span>
                        </div>
                    </div>

                    <!-- Opportunity 2 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>Schedulable EC2 Instances</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$820K+</span>
                                <span class="dw-opp-savings-label">saved</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Identifies instances with low off-hours activity that can be automatically started and stopped on a schedule. Eliminates waste from resources running 24/7 when only needed during business hours.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Automated</span>
                            <span class="dw-opp-tag">Compute</span>
                        </div>
                    </div>

                    <!-- Opportunity 3 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>Serverless-Ready OpenSearch Domains</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$390K+</span>
                                <span class="dw-opp-savings-label">saved</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Identifies low-usage provisioned OpenSearch domains that are candidates for serverless migration — eliminating fixed instance costs for intermittent workloads.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Quick Migration</span>
                            <span class="dw-opp-tag">Search</span>
                        </div>
                    </div>

                    <!-- Opportunity 4 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">Azure</span>
                                <h3>Suboptimal Azure Disk Types</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$630K+</span>
                                <span class="dw-opp-savings-label">saved</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Universal detection across all Azure managed disk types — Premium SSD, Standard SSD, and Standard HDD — identifying disks that can be downtierred based on actual IOPS and throughput patterns.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">High Impact</span>
                            <span class="dw-opp-tag">Storage</span>
                        </div>
                    </div>

                    <!-- Opportunity 5 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>S3 Traffic Traversing NAT Gateway (17-Detection Suite)</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$600K+</span>
                                <span class="dw-opp-savings-label">example</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Uses VPC Flow Logs and Route53 Query Logging to identify exactly which services route traffic through expensive NAT Gateways. Covers S3, DynamoDB, SQS, SNS, Lambda, ECR, CloudWatch, and 10 more services. Example customer saved $600K from a single gateway.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Only PointFive</span>
                            <span class="dw-opp-tag">Networking</span>
                        </div>
                    </div>

                    <!-- Opportunity 6 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>Duplicate CloudTrail Management Events</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$147K+</span>
                                <span class="dw-opp-savings-label">saved</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Detects when multiple CloudTrail trails log the same management events beyond the free tier. Uses virtual cost allocation to individual trails — a breakdown AWS doesn't expose natively.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Hidden Cost</span>
                            <span class="dw-opp-tag">Observability</span>
                        </div>
                    </div>

                    <!-- Opportunity 7 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>Overprovisioned EBS via Snapshot Side-Scanning</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$1.5M+</span>
                                <span class="dw-opp-savings-label">estimated</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Analyzes EBS snapshots to detect actual disk utilization without requiring agents or write access. Identifies volumes provisioned far beyond what the filesystem actually uses — waste invisible to standard monitoring.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Side-Scanning</span>
                            <span class="dw-opp-tag">Storage</span>
                        </div>
                    </div>

                    <!-- Opportunity 8 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">GCP</span>
                                <h3>Suboptimal Cloud Logging Bucket Architecture</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount"></span>
                                <span class="dw-opp-savings-label"></span>
                            </div>
                        </div>
                        <p class="dw-opp-description">First architectural detection in GCP. Identifies when logs are stored in expensive native Cloud Logging storage instead of being exported to cost-effective Google Cloud Storage buckets — a common but hidden design flaw.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Architecture</span>
                            <span class="dw-opp-tag">Logging</span>
                        </div>
                    </div>

                    <!-- Opportunity 9 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>RDS Snapshot Lifecycle Suite (6 Detections)</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$240K+</span>
                                <span class="dw-opp-savings-label">saved</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">DeepWaste™ breaks down RDS snapshot costs to individual ARNs — something AWS doesn't expose. Covers orphaned snapshots, excessive retention, and non-production over-protection. RDS snapshots are 2–5% of total AWS costs.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Cost Attribution</span>
                            <span class="dw-opp-tag">Database</span>
                        </div>
                    </div>

                    <!-- Opportunity 10 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>Abandoned Incomplete Multipart S3 Uploads</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount"></span>
                                <span class="dw-opp-savings-label"></span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Uncovers hidden storage costs from incomplete multipart uploads that don't appear in standard S3 listings or the AWS console — phantom objects silently accumulating charges.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Invisible Waste</span>
                            <span class="dw-opp-tag">Storage</span>
                        </div>
                    </div>

                    <!-- Opportunity 11 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">Multi-Cloud</span>
                                <h3>Underutilized Compute Instances</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">20–40%</span>
                                <span class="dw-opp-savings-label">savings</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Over-provisioned EC2 instances, Azure VMs, and GCE machines operating consistently below capacity. Rightsizing recommendations across all instance families with performance-safe guardrails.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag">Compute</span>
                            <span class="dw-opp-tag">AWS</span>
                            <span class="dw-opp-tag">Azure</span>
                            <span class="dw-opp-tag">GCP</span>
                        </div>
                    </div>

                    <!-- Opportunity 12 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">Multi-Cloud</span>
                                <h3>Inactive & Orphaned Resources</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount"></span>
                                <span class="dw-opp-savings-label"></span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Complete "inactivity track" across ElastiCache, Kinesis, OpenSearch, RDS, Azure SQL, and more — resources incurring charges with zero or near-zero traffic. The simplest wins in any environment.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">All Services</span>
                            <span class="dw-opp-tag">Easy Win</span>
                        </div>
                    </div>

                    <!-- Opportunity 13 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">Multi-Cloud</span>
                                <h3>Non-Production Overprovisioning</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount"></span>
                                <span class="dw-opp-savings-label"></span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Multi-AZ deployments in dev/staging, premium storage tiers for test data, production-grade security features on non-production workloads. Savings without touching production.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Non-Prod</span>
                            <span class="dw-opp-tag">Zero Risk</span>
                        </div>
                    </div>

                    <!-- Opportunity 14 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">Multi-Cloud</span>
                                <h3>Outdated Instance Generations</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">20–40%</span>
                                <span class="dw-opp-savings-label">savings</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Previous-generation compute, database, and storage instances where newer generations offer better performance at lower cost. A migration that pays for itself immediately.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Modernization</span>
                            <span class="dw-opp-tag">All Providers</span>
                        </div>
                    </div>

                    <!-- Opportunity 15 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>S3 Object Versions Without Lifecycle Policy</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$145K+</span>
                                <span class="dw-opp-savings-label">saved</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Detects versioned S3 buckets where old object versions accumulate indefinitely without expiration rules — a hidden storage cost that grows silently over time.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag">Storage</span>
                            <span class="dw-opp-tag">Lifecycle</span>
                        </div>
                    </div>

                    <!-- Opportunity 16 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">K8s</span>
                                <h3>Inactive & Underutilized K8s Workloads</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">15–70%</span>
                                <span class="dw-opp-savings-label">of K8s spend</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Agentless detection across Deployments, StatefulSets, DaemonSets, ReplicaSets, and CronJobs — identifying workloads requesting resources far beyond actual utilization. Covers EKS, AKS, and GKE.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Agentless</span>
                            <span class="dw-opp-tag">Provider-Agnostic</span>
                        </div>
                    </div>

                    <!-- Opportunity 17 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">K8s</span>
                                <h3>Excessive DaemonSet Overhead</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount"></span>
                                <span class="dw-opp-savings-label"></span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Detects when node sizes are too small relative to the fixed overhead of DaemonSets running on every node — meaning a disproportionate share of each node's capacity goes to system workloads rather than application pods.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Architecture</span>
                            <span class="dw-opp-tag">Node Sizing</span>
                        </div>
                    </div>

                    <!-- Opportunity 18 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>MSK Cluster Optimization Suite (9 Detections)</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$300K+</span>
                                <span class="dw-opp-savings-label">saved</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Comprehensive Kafka coverage: inactive clusters, underutilization, Express broker migration, compression optimization, client placement, storage configuration, and monitoring levels. From $18K to $300K in detected savings in a single month.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Full Coverage</span>
                            <span class="dw-opp-tag">Streaming</span>
                        </div>
                    </div>

                    <!-- Opportunity 19 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">Azure</span>
                                <h3>Azure OpenAI Model Optimization</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount"></span>
                                <span class="dw-opp-savings-label"></span>
                            </div>
                        </div>
                        <p class="dw-opp-description">First AI-native service coverage: detects when provisioned throughput units are underutilized or when workloads can be served by more cost-effective model versions without quality degradation.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">AI Costs</span>
                            <span class="dw-opp-tag">Cognitive Services</span>
                        </div>
                    </div>

                    <!-- Opportunity 20 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">Snowflake</span>
                                <h3>Snowflake Warehouse Auto-Suspend</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount"></span>
                                <span class="dw-opp-savings-label"></span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Identifies virtual warehouses that remain active well beyond query completion — burning credits during idle periods. First PaaS optimization with more warehouse, storage, and query detections coming.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">New</span>
                            <span class="dw-opp-tag">Data Warehouse</span>
                        </div>
                    </div>

                    <!-- Opportunity 21 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>ECS Fargate CPU & Memory Overprovisioning</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$380K+</span>
                                <span class="dw-opp-savings-label">saved</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Unified detection for Fargate tasks with CPU and memory allocations far exceeding actual peak usage — with consolidated rightsizing recommendations that respect Fargate's allowed configurations.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag">Containers</span>
                            <span class="dw-opp-tag">Serverless</span>
                        </div>
                    </div>

                    <!-- Opportunity 22 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>CloudWatch Logs Infrequent Access</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$184K+</span>
                                <span class="dw-opp-savings-label">saved</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Identifies log groups with low query frequency that can be moved to Infrequent Access class — same retention, 50% lower ingestion cost, with no operational impact.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">50% Savings</span>
                            <span class="dw-opp-tag">Observability</span>
                        </div>
                    </div>

                    <!-- Opportunity 23 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">GCP</span>
                                <h3>GCP Persistent Disk Optimization</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">42%</span>
                                <span class="dw-opp-savings-label">disk savings</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Detects pd-ssd disks that can be migrated to pd-balanced based on actual IOPS patterns, plus identification of unused persistent disks across all GCE instances.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag">Storage</span>
                            <span class="dw-opp-tag">Compute</span>
                        </div>
                    </div>

                    <!-- Opportunity 24 -->
                    <div class="dw-opp-card">
                        <div class="dw-opp-header">
                            <div class="dw-opp-title">
                                <span class="dw-opp-provider">AWS</span>
                                <h3>DynamoDB Capacity Mode Mismatch</h3>
                            </div>
                            <div class="dw-opp-savings">
                                <span class="dw-opp-savings-amount">$105K+</span>
                                <span class="dw-opp-savings-label">example</span>
                            </div>
                        </div>
                        <p class="dw-opp-description">Bi-directional detection: identifies tables that should switch from provisioned to on-demand AND tables mistakenly on on-demand that should move back. Example customer found a single table costing $105K/year after an accidental migration.</p>
                        <div class="dw-opp-tags">
                            <span class="dw-opp-tag highlight">Bi-Directional</span>
                            <span class="dw-opp-tag">NoSQL</span>
                        </div>
                    </div>
                </div>

                <!-- ROI Highlight -->
                <div class="dw-roi">
                    <div class="dw-roi-stat">1000%+</div>
                    <div class="dw-roi-label">avg ROI</div>
                    <p class="dw-roi-text">Real customer impact. Example customer achieved full ROI in 10 days. Another saved $600K from a single NAT Gateway endpoint deployment. Our average customer ROI exceeds 1,000%.</p>
                </div>

                <div style="text-align: center; margin-top: 40px;">
                    <p style="font-size: 16px; color: #4a5565; margin-bottom: 16px;">Explore the full catalog on our Cloud Efficiency Hub →</p>
                    <p style="font-size: 14px; color: #4a5565;">Open-source repository of 400+ cloud optimization detections and remediation playbooks</p>
                </div>
            </div>
        </section>

        <!-- Detection Categories -->
        <section class="dw-section">
            <div class="container">
                <div class="dw-section-header">
                    <h2>Detection Categories</h2>
                    <p class="subtitle">Six types of waste. One continuous scan.</p>
                    <p class="subtitle">DeepWaste™ categorizes every finding so teams can prioritize by effort, risk, and impact.</p>
                </div>
                
                <div class="dw-categories-grid">
                    <div class="dw-category-card">
                        <div class="dw-category-icon">📦</div>
                        <h3>Unused Resources</h3>
                        <p>Orphaned, inactive, and abandoned resources still incurring charges — load balancers with no targets, unattached volumes, idle clusters.</p>
                    </div>
                    
                    <div class="dw-category-card">
                        <div class="dw-category-icon">📊</div>
                        <h3>Underutilization</h3>
                        <p>Over-provisioned resources consistently operating below capacity — instances, databases, and clusters sized for peak that never comes.</p>
                    </div>
                    
                    <div class="dw-category-card">
                        <div class="dw-category-icon">🏗️</div>
                        <h3>Architecture Issues</h3>
                        <p>Suboptimal designs causing unnecessary cost — NAT Gateway routing, logging architectures, redundancy in non-production environments.</p>
                    </div>
                    
                    <div class="dw-category-card">
                        <div class="dw-category-icon">⚙️</div>
                        <h3>Configuration Gaps</h3>
                        <p>Misaligned settings versus real usage — storage tiers, disk types, capacity modes, and retention policies that don't match actual workload patterns.</p>
                    </div>
                    
                    <div class="dw-category-card">
                        <div class="dw-category-icon">🚀</div>
                        <h3>Modernization</h3>
                        <p>Migration to newer or more cost-effective alternatives — current-gen instances, serverless options, and managed service upgrades.</p>
                    </div>
                    
                    <div class="dw-category-card">
                        <div class="dw-category-icon">💰</div>
                        <h3>Commitment Optimization</h3>
                        <p>Pricing model and reservation optimization — Reserved Instances, Savings Plans, committed use discounts across all providers and services.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Platform Coverage -->
        <section class="dw-section dw-section-alt">
            <div class="container">
                <div class="dw-section-header">
                    <h2>Platform Coverage</h2>
                    <p class="subtitle">85+ services. Deep analysis on every one.</p>
                    <p class="subtitle">Not just visibility — DeepWaste™ analyzes usage patterns, access frequencies, and workload characteristics across 90+ services organized by infrastructure domain.</p>
                </div>
                
                <div class="dw-platforms">
                    <!-- Compute -->
                    <div class="dw-platform-category">
                        <h3>Compute</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Amazon EC2</div>
                                <div class="dw-platform-type">AWS</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure VMs</div>
                                <div class="dw-platform-type">Azure</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Compute Engine</div>
                                <div class="dw-platform-type">GCP</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">OCI Compute</div>
                                <div class="dw-platform-type">Oracle</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">WorkSpaces</div>
                                <div class="dw-platform-type">AWS</div>
                            </div>
                        </div>
                    </div>

                    <!-- Kubernetes & Containers -->
                    <div class="dw-platform-category">
                        <h3>Kubernetes & Containers</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Amazon EKS</div>
                                <div class="dw-platform-type">Managed K8s</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure AKS</div>
                                <div class="dw-platform-type">Managed K8s</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Google GKE</div>
                                <div class="dw-platform-type">Managed K8s</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">OpenShift</div>
                                <div class="dw-platform-type">Enterprise K8s</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Amazon ECS</div>
                                <div class="dw-platform-type">Containers</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">AWS Fargate</div>
                                <div class="dw-platform-type">Serverless Containers</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Container Instances</div>
                                <div class="dw-platform-type">Containers</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Container Apps</div>
                                <div class="dw-platform-type">Serverless Containers</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Cloud Run</div>
                                <div class="dw-platform-type">Containers</div>
                            </div>
                        </div>
                    </div>

                    <!-- Databases -->
                    <div class="dw-platform-category">
                        <h3>Databases</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Amazon RDS</div>
                                <div class="dw-platform-type">Relational DB</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">DynamoDB</div>
                                <div class="dw-platform-type">NoSQL</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">ElastiCache</div>
                                <div class="dw-platform-type">Caching</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">OpenSearch</div>
                                <div class="dw-platform-type">Search</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure SQL</div>
                                <div class="dw-platform-type">Relational DB</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure PostgreSQL</div>
                                <div class="dw-platform-type">Relational DB</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Cosmos DB</div>
                                <div class="dw-platform-type">NoSQL</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Cache for Redis</div>
                                <div class="dw-platform-type">Caching</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Cloud SQL</div>
                                <div class="dw-platform-type">Relational DB</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Memorystore</div>
                                <div class="dw-platform-type">Caching</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Bigtable</div>
                                <div class="dw-platform-type">NoSQL</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">OCI Autonomous DB</div>
                                <div class="dw-platform-type">Databases</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">MongoDB Atlas</div>
                                <div class="dw-platform-type">NoSQL Database</div>
                            </div>
                        </div>
                    </div>

                    <!-- Data Warehouses & Analytics -->
                    <div class="dw-platform-category">
                        <h3>Data Warehouses & Analytics</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Snowflake</div>
                                <div class="dw-platform-type">Data Warehouse</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Databricks</div>
                                <div class="dw-platform-type">Unified Analytics</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Amazon Redshift</div>
                                <div class="dw-platform-type">Data Warehouse</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">BigQuery</div>
                                <div class="dw-platform-type">Data Warehouse</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Synapse</div>
                                <div class="dw-platform-type">Analytics</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Fabric</div>
                                <div class="dw-platform-type">Data Platform</div>
                            </div>
                        </div>
                    </div>

                    <!-- Storage -->
                    <div class="dw-platform-category">
                        <h3>Storage</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Amazon EBS</div>
                                <div class="dw-platform-type">Block Storage</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Amazon S3</div>
                                <div class="dw-platform-type">Object Storage</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">FSx / EFS</div>
                                <div class="dw-platform-type">File Storage</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Disks</div>
                                <div class="dw-platform-type">Block Storage</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Blob Storage</div>
                                <div class="dw-platform-type">Object Storage</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure NetApp Files</div>
                                <div class="dw-platform-type">File Storage</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Persistent Disk</div>
                                <div class="dw-platform-type">Block Storage</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Cloud Storage</div>
                                <div class="dw-platform-type">Object Storage</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Filestore</div>
                                <div class="dw-platform-type">File Storage</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">OCI Block Volume</div>
                                <div class="dw-platform-type">Block Storage</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">OCI Object Storage</div>
                                <div class="dw-platform-type">Object Storage</div>
                            </div>
                        </div>
                    </div>

                    <!-- Serverless & Functions -->
                    <div class="dw-platform-category">
                        <h3>Serverless & Functions</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">AWS Lambda</div>
                                <div class="dw-platform-type">Serverless</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Functions</div>
                                <div class="dw-platform-type">Serverless</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Cloud Functions</div>
                                <div class="dw-platform-type">Serverless</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">OCI Functions</div>
                                <div class="dw-platform-type">Serverless</div>
                            </div>
                        </div>
                    </div>

                    <!-- Networking & CDN -->
                    <div class="dw-platform-category">
                        <h3>Networking & CDN</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">VPC / NAT</div>
                                <div class="dw-platform-type">Networking</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Elastic Load Balancing</div>
                                <div class="dw-platform-type">Load Balancers</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">CloudFront</div>
                                <div class="dw-platform-type">CDN</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Route 53</div>
                                <div class="dw-platform-type">DNS</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">API Gateway</div>
                                <div class="dw-platform-type">API Management</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Networking</div>
                                <div class="dw-platform-type">Networking</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Front Door</div>
                                <div class="dw-platform-type">CDN</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Cloud CDN</div>
                                <div class="dw-platform-type">CDN</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">OCI Networking</div>
                                <div class="dw-platform-type">Networking</div>
                            </div>
                        </div>
                    </div>

                    <!-- Monitoring & Observability -->
                    <div class="dw-platform-category">
                        <h3>Monitoring & Observability</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">CloudWatch</div>
                                <div class="dw-platform-type">Monitoring</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">CloudTrail</div>
                                <div class="dw-platform-type">Audit Logging</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">VPC Flow Logs</div>
                                <div class="dw-platform-type">Logging</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Monitor</div>
                                <div class="dw-platform-type">Monitoring</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Log Analytics</div>
                                <div class="dw-platform-type">Observability</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Cloud Logging</div>
                                <div class="dw-platform-type">Observability</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Datadog</div>
                                <div class="dw-platform-type">Observability</div>
                            </div>
                        </div>
                    </div>

                    <!-- Streaming & Messaging -->
                    <div class="dw-platform-category">
                        <h3>Streaming & Messaging</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Amazon MSK</div>
                                <div class="dw-platform-type">Kafka Streaming</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Kinesis</div>
                                <div class="dw-platform-type">Streaming</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">SQS / SNS</div>
                                <div class="dw-platform-type">Messaging</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Amazon MQ</div>
                                <div class="dw-platform-type">Message Broker</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Event Hubs</div>
                                <div class="dw-platform-type">Streaming</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Service Bus</div>
                                <div class="dw-platform-type">Message Queues</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Pub/Sub</div>
                                <div class="dw-platform-type">Messaging</div>
                            </div>
                        </div>
                    </div>

                    <!-- Data Processing & ETL -->
                    <div class="dw-platform-category">
                        <h3>Data Processing & ETL</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">AWS Glue</div>
                                <div class="dw-platform-type">ETL</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">EMR</div>
                                <div class="dw-platform-type">Big Data</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Data Factory</div>
                                <div class="dw-platform-type">ETL</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Dataproc</div>
                                <div class="dw-platform-type">Big Data</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Dataflow</div>
                                <div class="dw-platform-type">Data Processing</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Cloud Composer</div>
                                <div class="dw-platform-type">Workflows</div>
                            </div>
                        </div>
                    </div>

                    <!-- AI & Machine Learning -->
                    <div class="dw-platform-category">
                        <h3>AI & Machine Learning</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Amazon Bedrock</div>
                                <div class="dw-platform-type">AI Platform</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">SageMaker</div>
                                <div class="dw-platform-type">Machine Learning</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">EC2 GPU Instances</div>
                                <div class="dw-platform-type">AI Compute</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure OpenAI</div>
                                <div class="dw-platform-type">AI Services</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure Machine Learning</div>
                                <div class="dw-platform-type">Machine Learning</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure GPU VMs</div>
                                <div class="dw-platform-type">AI Compute</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Vertex AI</div>
                                <div class="dw-platform-type">Machine Learning</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">GCP GPU Instances</div>
                                <div class="dw-platform-type">AI Compute</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Anthropic Claude</div>
                                <div class="dw-platform-type">LLM Provider</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">OpenAI API</div>
                                <div class="dw-platform-type">LLM Provider</div>
                            </div>
                        </div>
                    </div>

                    <!-- Security & Configuration -->
                    <div class="dw-platform-category">
                        <h3>Security & Configuration</h3>
                        <div class="dw-platform-grid">
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Secrets Manager</div>
                                <div class="dw-platform-type">Security</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Azure App Config</div>
                                <div class="dw-platform-type">Configuration</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">App Service</div>
                                <div class="dw-platform-type">Web Apps</div>
                            </div>
                            <div class="dw-platform-item">
                                <div class="dw-platform-name">Elastic Cloud</div>
                                <div class="dw-platform-type">Search & Analytics</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why PointFive -->
        <section class="dw-section">
            <div class="container">
                <div class="dw-section-header">
                    <h2>Why PointFive</h2>
                    <p class="subtitle">Built different. Detects different.</p>
                </div>
                
                <div class="dw-why-grid">
                    <div class="dw-why-card">
                        <span class="dw-why-number">01</span>
                        <h3>Agentless architecture</h3>
                        <p>The only agentless Kubernetes optimization solution on the market. Read-only access, zero deployment overhead, minutes to first insight.</p>
                    </div>
                    
                    <div class="dw-why-card">
                        <span class="dw-why-number">02</span>
                        <h3>Research-driven detection</h3>
                        <p>A dedicated Cloud Cost Research Team ships ~10 new optimization types weekly — using methodologies inspired by cybersecurity threat intelligence.</p>
                    </div>
                    
                    <div class="dw-why-card">
                        <span class="dw-why-number">03</span>
                        <h3>Multi-source data correlation</h3>
                        <p>We don't just read your bill. We correlate billing data with CloudWatch metrics, VPC Flow Logs, Route53 queries, CloudTrail activity, and direct API state — finding waste that single-source tools miss.</p>
                    </div>
                    
                    <div class="dw-why-card">
                        <span class="dw-why-number">04</span>
                        <h3>Agentic Remediation</h3>
                        <p>AI coding agents deliver contextual recommendations with human-curated remediation playbooks. Every opportunity includes root cause analysis, impact assessment, and engineering-grade execution paths—with full human oversight at every step.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="dw-cta">
            <div class="container">
                <h2>See what you're<br>missing today.</h2>
                <p>Get a free assessment of your cloud waste. Most customers find 15–30% savings within the first week.</p>
                <a href="#" class="dw-cta-button">Book a Demo</a>
            </div>
        </section>
    `;

    // Insert styles and content
    document.head.insertAdjacentHTML('beforeend', styles);
    document.body.insertAdjacentHTML('beforeend', html);
})();
