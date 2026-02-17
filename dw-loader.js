(function() {
    // DeepWaste Technology Page Loader
    
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
        }

        .container {
            width: 100%;
            max-width: 75rem;
            margin: 0 auto;
            padding: 0 32px;
        }

        /* Hero Section */
        .hero {
            padding: 80px 32px 40px;
            text-align: center;
            background: #fff;
        }

        .hero h1 {
            margin: 0 0 16px;
            font-family: 'Codec Pro', sans-serif;
            font-size: 45px;
            line-height: 120%;
            font-weight: 400;
            color: #000;
        }

        .hero .subtitle {
            margin: 0 auto;
            font-size: 19px;
            line-height: 32px;
            font-weight: 300;
            color: #4a5565;
            max-width: 700px;
        }

        /* Main Section */
        .tech-section {
            padding: 60px 0 80px;
            background: #fff;
        }

        /* Category Blocks */
        .category {
            margin-bottom: 60px;
        }

        .category:last-child {
            margin-bottom: 0;
        }

        .category-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 24px;
            padding-bottom: 12px;
            border-bottom: 2px solid #e9efef;
        }

        .category-icon {
            font-size: 28px;
            line-height: 1;
        }

        .category-header h2 {
            margin: 0;
            font-family: 'Codec Pro', sans-serif;
            font-size: 28px;
            line-height: 120%;
            font-weight: 400;
            color: #000;
        }

        /* Tile Grid */
        .tech-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

        /* Individual Tile */
        .tile {
            display: flex;
            flex-direction: column;
            padding: 24px;
            background: #fff;
            border: 1px solid #e9efef;
            border-radius: 8px;
            transition: all 0.2s ease;
        }

        .tile:hover {
            border-color: #00e;
            box-shadow: 0 4px 12px rgba(0, 0, 238, 0.1);
            transform: translateY(-2px);
        }

        .tile-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f9f9f9;
            border-radius: 8px;
            font-size: 24px;
        }

        .tile h3 {
            margin: 0 0 8px;
            font-family: 'Codec Pro', sans-serif;
            font-size: 18px;
            line-height: 140%;
            font-weight: 600;
            color: #000;
        }

        .tile p {
            margin: 0 0 16px;
            font-size: 14px;
            line-height: 1.5;
            color: #4a5565;
            flex-grow: 1;
        }

        /* Tags */
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: auto;
        }

        .tag {
            font-size: 11px;
            padding: 4px 8px;
            background: #e9efef;
            color: #4a5565;
            border-radius: 4px;
            white-space: nowrap;
        }

        .tag.primary {
            background: #cde3ff;
            color: #00e;
            font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 900px) {
            .tech-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 600px) {
            .tech-grid {
                grid-template-columns: 1fr;
            }

            .hero h1 {
                font-size: 32px;
                padding-left: 20px;
                padding-right: 20px;
            }

            .hero .subtitle {
                padding-left: 20px;
                padding-right: 20px;
            }

            .hero {
                padding: 60px 0 30px;
            }

            .container {
                padding: 0 20px;
            }
        }
        </style>
    `;
    
    const content = `
        <section class="hero">
            <div class="container">
                <h1>Technology Coverage</h1>
                <p class="subtitle">Comprehensive cloud cost optimization across your entire technology stack</p>
            </div>
        </section>

        <section class="tech-section">
            <div class="container">

                <!-- Cloud Providers -->
                <div class="category">
                    <div class="category-header">
                        <span class="category-icon">☁️</span>
                        <h2>Cloud Providers</h2>
                    </div>
                    <div class="tech-grid">
                        <div class="tile">
                            <div class="tile-icon">☁️</div>
                            <h3>Amazon Web Services (AWS)</h3>
                            <p>Complete coverage of AWS services including EC2, S3, RDS, Lambda, and 100+ other services with agentless monitoring.</p>
                            <div class="tags">
                                <span class="tag primary">Full Coverage</span>
                                <span class="tag">Agentless</span>
                                <span class="tag">Multi-Account</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔷</div>
                            <h3>Microsoft Azure</h3>
                            <p>End-to-end Azure monitoring including VMs, Storage, Databases, and managed services with unique insights across resources.</p>
                            <div class="tags">
                                <span class="tag primary">Recently Launched</span>
                                <span class="tag">Multi-Subscription</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔴</div>
                            <h3>Google Cloud Platform (GCP)</h3>
                            <p>Comprehensive GCP support for Compute Engine, Cloud Storage, BigQuery, and all major GCP services.</p>
                            <div class="tags">
                                <span class="tag primary">Full Support</span>
                                <span class="tag">Multi-Project</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Compute & Infrastructure -->
                <div class="category">
                    <div class="category-header">
                        <span class="category-icon">🖥️</span>
                        <h2>Compute & Infrastructure</h2>
                    </div>
                    <div class="tech-grid">
                        <div class="tile">
                            <div class="tile-icon">📦</div>
                            <h3>Amazon EC2</h3>
                            <p>Optimize EC2 instances with rightsizing recommendations, idle instance detection, and commitment management.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Compute</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">💻</div>
                            <h3>Azure Virtual Machines</h3>
                            <p>Deep insights into Azure VM utilization, performance metrics, and cost optimization opportunities.</p>
                            <div class="tags">
                                <span class="tag">Azure</span>
                                <span class="tag">Compute</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">⚙️</div>
                            <h3>Google Compute Engine</h3>
                            <p>Monitor and optimize GCE instances with automated recommendations for machine type selection.</p>
                            <div class="tags">
                                <span class="tag">GCP</span>
                                <span class="tag">Compute</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Kubernetes & Containers -->
                <div class="category">
                    <div class="category-header">
                        <span class="category-icon">☸️</span>
                        <h2>Kubernetes & Containers</h2>
                    </div>
                    <div class="tech-grid">
                        <div class="tile">
                            <div class="tile-icon">☸️</div>
                            <h3>Amazon EKS</h3>
                            <p>Industry-first agentless Kubernetes monitoring with pod-level cost allocation and cluster optimization.</p>
                            <div class="tags">
                                <span class="tag primary">Agentless</span>
                                <span class="tag">AWS</span>
                                <span class="tag">K8s</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">☸️</div>
                            <h3>Azure AKS</h3>
                            <p>Comprehensive AKS cluster visibility without agents, including node pool optimization and workload insights.</p>
                            <div class="tags">
                                <span class="tag primary">Agentless</span>
                                <span class="tag">Azure</span>
                                <span class="tag">K8s</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">☸️</div>
                            <h3>Google GKE</h3>
                            <p>Full GKE observability with agentless integration, workload optimization, and cost allocation.</p>
                            <div class="tags">
                                <span class="tag primary">Agentless</span>
                                <span class="tag">GCP</span>
                                <span class="tag">K8s</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🐳</div>
                            <h3>Amazon ECS</h3>
                            <p>Monitor and optimize ECS tasks, services, and Fargate workloads with comprehensive cost insights.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Containers</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🏃</div>
                            <h3>Google Cloud Run</h3>
                            <p>Optimize serverless containers with detailed request-level cost analysis and scaling recommendations.</p>
                            <div class="tags">
                                <span class="tag">GCP</span>
                                <span class="tag">Serverless</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Databases & Data Services -->
                <div class="category">
                    <div class="category-header">
                        <span class="category-icon">🗄️</span>
                        <h2>Databases & Data Services</h2>
                    </div>
                    <div class="tech-grid">
                        <div class="tile">
                            <div class="tile-icon">🔶</div>
                            <h3>Amazon RDS</h3>
                            <p>Optimize RDS instances across MySQL, PostgreSQL, SQL Server with rightsizing and storage recommendations.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Database</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">⚡</div>
                            <h3>Amazon DynamoDB</h3>
                            <p>Specialized detection for DynamoDB capacity optimization and on-demand vs provisioned analysis.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">NoSQL</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔴</div>
                            <h3>Amazon ElastiCache</h3>
                            <p>Monitor Redis and Memcached clusters with utilization tracking and node optimization recommendations.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Caching</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🌟</div>
                            <h3>Amazon Aurora</h3>
                            <p>Optimize Aurora clusters with insights into reader instances, auto-scaling, and serverless configurations.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Database</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔷</div>
                            <h3>Azure Database Services</h3>
                            <p>Comprehensive coverage for Azure SQL, Cosmos DB, and managed PostgreSQL/MySQL services.</p>
                            <div class="tags">
                                <span class="tag">Azure</span>
                                <span class="tag">Database</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔵</div>
                            <h3>Google Cloud SQL</h3>
                            <p>Optimize Cloud SQL instances with automated scaling recommendations and performance insights.</p>
                            <div class="tags">
                                <span class="tag">GCP</span>
                                <span class="tag">Database</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Data Warehouses & Analytics -->
                <div class="category">
                    <div class="category-header">
                        <span class="category-icon">📊</span>
                        <h2>Data Warehouses & Analytics</h2>
                    </div>
                    <div class="tech-grid">
                        <div class="tile">
                            <div class="tile-icon">❄️</div>
                            <h3>Snowflake</h3>
                            <p>Proven warehouse optimization—we reduced our own Snowflake costs by 85% using query and cluster analysis.</p>
                            <div class="tags">
                                <span class="tag primary">85% Savings</span>
                                <span class="tag">Data Warehouse</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🧱</div>
                            <h3>Databricks</h3>
                            <p>Optimize Databricks clusters, jobs, and notebooks with workload analysis and auto-termination recommendations.</p>
                            <div class="tags">
                                <span class="tag">Data Platform</span>
                                <span class="tag">Spark</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔍</div>
                            <h3>Google BigQuery</h3>
                            <p>Control BigQuery costs with query optimization, slot utilization analysis, and storage recommendations.</p>
                            <div class="tags">
                                <span class="tag">GCP</span>
                                <span class="tag">Analytics</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">📈</div>
                            <h3>Amazon Redshift</h3>
                            <p>Optimize Redshift clusters with workload management, concurrency scaling, and reserved node analysis.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Data Warehouse</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔷</div>
                            <h3>Azure Synapse Analytics</h3>
                            <p>Monitor Synapse workloads with pool optimization and data warehouse unit recommendations.</p>
                            <div class="tags">
                                <span class="tag">Azure</span>
                                <span class="tag">Analytics</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Data Processing & ETL -->
                <div class="category">
                    <div class="category-header">
                        <span class="category-icon">🔥</span>
                        <h2>Data Processing & ETL</h2>
                    </div>
                    <div class="tech-grid">
                        <div class="tile">
                            <div class="tile-icon">🔆</div>
                            <h3>Amazon EMR</h3>
                            <p>Optimize EMR clusters with spot instance strategies, auto-scaling recommendations, and job analysis.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Big Data</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔧</div>
                            <h3>AWS Glue</h3>
                            <p>Monitor Glue ETL jobs with DPU optimization and job duration analysis for cost efficiency.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">ETL</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔵</div>
                            <h3>Google Dataproc</h3>
                            <p>Optimize Dataproc clusters with ephemeral cluster recommendations and preemptible worker usage.</p>
                            <div class="tags">
                                <span class="tag">GCP</span>
                                <span class="tag">Hadoop/Spark</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔷</div>
                            <h3>Azure Data Factory</h3>
                            <p>Track Data Factory pipeline costs with activity-level insights and integration runtime optimization.</p>
                            <div class="tags">
                                <span class="tag">Azure</span>
                                <span class="tag">ETL</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Storage -->
                <div class="category">
                    <div class="category-header">
                        <span class="category-icon">💾</span>
                        <h2>Storage</h2>
                    </div>
                    <div class="tech-grid">
                        <div class="tile">
                            <div class="tile-icon">🪣</div>
                            <h3>Amazon S3</h3>
                            <p>Optimize S3 costs with lifecycle policies, storage class recommendations, and access pattern analysis.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Object Storage</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">💿</div>
                            <h3>Amazon EBS</h3>
                            <p>Identify unattached volumes, optimize volume types, and rightsize based on actual IOPS usage.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Block Storage</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔷</div>
                            <h3>Azure Blob Storage</h3>
                            <p>Optimize Blob storage with tier recommendations, lifecycle management, and access pattern insights.</p>
                            <div class="tags">
                                <span class="tag">Azure</span>
                                <span class="tag">Object Storage</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">☁️</div>
                            <h3>Google Cloud Storage</h3>
                            <p>Reduce GCS costs with storage class optimization and object lifecycle management recommendations.</p>
                            <div class="tags">
                                <span class="tag">GCP</span>
                                <span class="tag">Object Storage</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Serverless & Functions -->
                <div class="category">
                    <div class="category-header">
                        <span class="category-icon">⚡</span>
                        <h2>Serverless & Functions</h2>
                    </div>
                    <div class="tech-grid">
                        <div class="tile">
                            <div class="tile-icon">λ</div>
                            <h3>AWS Lambda</h3>
                            <p>Optimize Lambda functions with memory allocation recommendations and execution pattern analysis.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Serverless</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">⚡</div>
                            <h3>Azure Functions</h3>
                            <p>Monitor Azure Functions with consumption plan optimization and performance insights.</p>
                            <div class="tags">
                                <span class="tag">Azure</span>
                                <span class="tag">Serverless</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔵</div>
                            <h3>Google Cloud Functions</h3>
                            <p>Optimize Cloud Functions with memory and timeout recommendations based on actual usage.</p>
                            <div class="tags">
                                <span class="tag">GCP</span>
                                <span class="tag">Serverless</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AI & Machine Learning -->
                <div class="category">
                    <div class="category-header">
                        <span class="category-icon">🤖</span>
                        <h2>AI & Machine Learning</h2>
                    </div>
                    <div class="tech-grid">
                        <div class="tile">
                            <div class="tile-icon">🧠</div>
                            <h3>Amazon SageMaker</h3>
                            <p>Optimize SageMaker training jobs, endpoints, and notebook instances with GPU utilization insights.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">ML Platform</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔷</div>
                            <h3>Azure Machine Learning</h3>
                            <p>Track Azure ML compute clusters and optimize training pipeline costs with detailed usage analysis.</p>
                            <div class="tags">
                                <span class="tag">Azure</span>
                                <span class="tag">ML Platform</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔵</div>
                            <h3>Vertex AI</h3>
                            <p>Optimize Vertex AI training jobs and prediction endpoints with resource utilization insights.</p>
                            <div class="tags">
                                <span class="tag">GCP</span>
                                <span class="tag">ML Platform</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🎯</div>
                            <h3>Databricks ML Runtime</h3>
                            <p>Optimize Databricks ML workflows with cluster sizing and MLflow experiment tracking cost insights.</p>
                            <div class="tags">
                                <span class="tag">Databricks</span>
                                <span class="tag">ML</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🎮</div>
                            <h3>GPU Instances</h3>
                            <p>Specialized optimization for P4, A100, V100, and H100 instances with utilization tracking.</p>
                            <div class="tags">
                                <span class="tag primary">High Cost</span>
                                <span class="tag">AI Training</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Networking -->
                <div class="category">
                    <div class="category-header">
                        <span class="category-icon">🌐</span>
                        <h2>Networking</h2>
                    </div>
                    <div class="tech-grid">
                        <div class="tile">
                            <div class="tile-icon">🔀</div>
                            <h3>AWS VPC</h3>
                            <p>Optimize VPC costs with data transfer analysis, NAT Gateway usage, and VPC endpoint recommendations.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Networking</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">⚖️</div>
                            <h3>Elastic Load Balancing</h3>
                            <p>Monitor ALB, NLB, and CLB usage with idle load balancer detection and traffic pattern analysis.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Load Balancer</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🚀</div>
                            <h3>Amazon CloudFront</h3>
                            <p>Optimize CDN costs with cache hit ratio analysis and distribution configuration recommendations.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">CDN</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🌐</div>
                            <h3>Route 53</h3>
                            <p>Track DNS query costs and optimize hosted zone configurations for cost efficiency.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">DNS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Monitoring & Observability -->
                <div class="category">
                    <div class="category-header">
                        <span class="category-icon">📈</span>
                        <h2>Monitoring & Observability</h2>
                    </div>
                    <div class="tech-grid">
                        <div class="tile">
                            <div class="tile-icon">📊</div>
                            <h3>Amazon CloudWatch</h3>
                            <p>Optimize CloudWatch costs with log retention policies, metric optimization, and dashboard usage analysis.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Monitoring</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔍</div>
                            <h3>VPC Flow Logs</h3>
                            <p>Control Flow Logs costs with filtering recommendations and storage optimization strategies.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Logging</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">📝</div>
                            <h3>AWS CloudTrail</h3>
                            <p>Manage CloudTrail costs with event selector optimization and S3 storage recommendations.</p>
                            <div class="tags">
                                <span class="tag">AWS</span>
                                <span class="tag">Audit Logs</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">🔷</div>
                            <h3>Azure Monitor</h3>
                            <p>Optimize Azure Monitor with log retention, metric collection, and Application Insights cost control.</p>
                            <div class="tags">
                                <span class="tag">Azure</span>
                                <span class="tag">Monitoring</span>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-icon">☁️</div>
                            <h3>Google Cloud Logging</h3>
                            <p>Reduce logging costs with exclusion filters and log router optimization recommendations.</p>
                            <div class="tags">
                                <span class="tag">GCP</span>
                                <span class="tag">Logging</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    `;
    
    // Function to inject content
    function loadContent() {
        // Find the mount point
        const targetElement = document.querySelector('#dw-mount');
        
        if (!targetElement) {
            console.error('dw-loader.js: Mount point #dw-mount not found');
            return;
        }
        
        // Inject styles into head
        if (!document.querySelector('#dw-tech-styles')) {
            const styleElement = document.createElement('div');
            styleElement.id = 'dw-tech-styles';
            styleElement.innerHTML = styles;
            document.head.appendChild(styleElement.querySelector('style'));
        }
        
        // Inject content
        targetElement.innerHTML = content;
    }
    
    // Load when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadContent);
    } else {
        loadContent();
    }
})();
