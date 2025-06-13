'use client'

import { useParams } from 'next/navigation'
import { projects } from '../../../config/projects'
import Image from 'next/image'
import Link from 'next/link'
import TechBadge from '../../../components/TechBadge'
import { ArrowLeft, Github, ExternalLink, Calendar, Clock } from 'lucide-react'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react'

interface GitHubData {
  stars: number
  forks: number
  description: string
  topics: string[]
  readme: string
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  const [githubData, setGithubData] = useState<GitHubData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchGithubData = async () => {
      if (!project?.links?.github) return

      try {
        const githubUrl = new URL(project.links.github)
        const [, owner, repo] = githubUrl.pathname.split('/')

        const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
        const repoData = await repoResponse.json()

        const readmeResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`)
        const readmeData = await readmeResponse.json()
        const readmeContent = atob(readmeData.content)

        setGithubData({
          stars: repoData.stargazers_count,
          forks: repoData.forks_count,
          description: repoData.description,
          topics: repoData.topics,
          readme: readmeContent
        })
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGithubData()
  }, [project?.links?.github])

  if (!project) {
    notFound()
  }

  // Get project-specific content based on project ID
  const getProjectContent = () => {
    switch (project.id) {
      case 'project1': // E-commerce Platform
        return {
          coreCapabilities: `| Feature | Technology | Status |
|---------|------------|--------|
| **E-Commerce Engine** | React + Node.js | 🟢 Complete |
| **Social Like System** | PostgreSQL + React | 🟢 Complete |
| **Search System** | PostgreSQL Full-Text | 🟢 Complete |
| **Payment Processing** | Stripe Live Integration | 🟢 Complete |
| **Authentication** | Firebase + Google OAuth | 🟢 Complete |
| **API Documentation** | Swagger/OpenAPI | 🟢 Complete |
| **Cloud Deployment** | Vercel + Render | 🟢 Complete |`,
          databaseDesign: `\`\`\`sql
-- Core Entity Tables
users                    categories              brands
├── id (SERIAL PK)      ├── id (SERIAL PK)     ├── id (SERIAL PK)
├── uid (VARCHAR)       ├── name (VARCHAR)     ├── name (VARCHAR)
├── email (VARCHAR)     └── description (TEXT) └── description (TEXT)
├── display_name        
└── created_at          

-- Product Management
products                                    product_colors
├── id (SERIAL PK)                         ├── product_id (FK)
├── title (VARCHAR) [INDEXED]             ├── color_id (FK)
├── description (TEXT) [FULL-TEXT]        └── PRIMARY KEY (product_id, color_id)
├── price (DECIMAL) [INDEXED] 
├── num_likes (INTEGER)                 
├── image (VARCHAR)                        product_sizes
├── category_id (FK → categories.id)      ├── product_id (FK)
├── brand_id (FK → brands.id)             ├── size_id (FK)
├── search_vector (TSVECTOR) [GIN INDEX]  └── PRIMARY KEY (product_id, size_id)
└── created_at [INDEXED]                  

-- Shopping & Orders
carts                    cart_products              orders
├── id (SERIAL PK)      ├── cart_id (FK)          ├── id (SERIAL PK)
├── user_id (FK)        ├── product_id (FK)       ├── user_id (FK)
└── created_at          ├── quantity (INTEGER)    ├── total_price (DECIMAL)
                        └── PK (cart_id, product_id) ├── status (ENUM)
                                                   ├── stripe_payment_id
order_items             wishlists                  ├── created_at
├── id (SERIAL PK)      ├── user_id (FK)          └── updated_at
├── order_id (FK)       ├── product_id (FK)       
├── product_id (FK)     ├── created_at            
├── quantity            └── PK (user_id, product_id)
└── unit_price          \`\`\``,
          apiEndpoints: `| Resource | Endpoint | Method | Description | Auth |
|----------|----------|--------|-------------|------|
| **Products** | \`/api/products\` | GET | Paginated product listing with filters | No |
| | \`/api/products/search\` | GET | Full-text search with ranking | No |
| | \`/api/products/filter\` | GET | Multi-criteria filtering | No |
| | \`/api/products/{id}\` | GET | Product details with variants | No |
| **Cart** | \`/api/cart/user/{userId}\` | GET | User's cart with product details | Yes |
| | \`/api/cart/add-item\` | POST | Add/update cart items | Yes |
| | \`/api/cart/remove-item\` | DELETE | Remove cart items | Yes |
| **Orders** | \`/api/orders\` | POST | Create order with payment processing | Yes |
| | \`/api/orders/user/{userId}\` | GET | User's order history | Yes |
| | \`/api/orders/{id}/status\` | PUT | Update order status (admin) | Yes |`
        }
      case 'project4': // Sales Analytics Platform
        return {
          coreCapabilities: `| Feature | Technology | Status |
|---------|------------|--------|
| **Database Architecture** | PostgreSQL + Analytics Views | 🟡 Planned |
| **Data Generation** | Python + Faker | 🟡 Planned |
| **Sales Analytics** | pandas + SQL | 🟡 Planned |
| **Customer Segmentation** | RFM Analysis + K-Means | 🟡 Planned |
| **ML Forecasting** | scikit-learn + Time Series | 🟡 Planned |
| **Interactive Dashboard** | Streamlit + Plotly | 🟡 Planned |`,
          databaseDesign: `\`\`\`sql
-- Customer Management
customers (5,000 records)
├── customer_id (SERIAL PK)
├── email (UNIQUE, INDEXED)
├── registration_date (INDEXED)
├── country (INDEXED)
├── age_group (INDEXED)
└── customer_segment

-- Product Catalog
products (1,000 records)
├── product_id (SERIAL PK)
├── product_name (INDEXED)
├── category (INDEXED)
├── brand (INDEXED)
├── price (DECIMAL, INDEXED)
└── cost (DECIMAL)

-- Transaction Records
orders (50,000+ records)
├── order_id (SERIAL PK)
├── customer_id (FK, INDEXED)
├── order_date (INDEXED)
├── total_amount (DECIMAL)
├── status (ENUM, INDEXED)
└── payment_method

order_items (75,000+ records)
├── item_id (SERIAL PK)
├── order_id (FK, INDEXED)
├── product_id (FK, INDEXED)
├── quantity (INTEGER)
├── unit_price (DECIMAL)
└── total_price (DECIMAL)
\`\`\``,
          mlModels: `**Sales Forecasting System**
Time series forecasting using ensemble methods with feature engineering for improved accuracy:

\`\`\`python
# Model ensemble configuration
models = {
    'Random Forest': RandomForestRegressor(n_estimators=100, random_state=42),
    'Gradient Boosting': GradientBoostingRegressor(n_estimators=100, random_state=42),
    'Linear Regression': LinearRegression()
}

# Feature engineering pipeline
features = [
    'trend_component', 'seasonal_indicators', 'day_of_week_encoding',
    'month_encoding', 'quarter_encoding', 'revenue_lag_7', 'revenue_lag_30',
    'revenue_moving_avg_7', 'revenue_moving_avg_30'
]
\`\`\`

**Customer Analytics Models**

**RFM Segmentation Framework**
\`\`\`python
# Customer segmentation categories
segments = {
    'Champions': 'High-value customers with recent, frequent purchases',
    'Loyal Customers': 'Consistent customers with strong engagement patterns',
    'Potential Loyalists': 'Recent customers showing growth potential',
    'At Risk': 'Previously valuable customers with declining activity',
    'Cannot Lose Them': 'High-value customers requiring retention focus',
    'Lost Customers': 'Inactive customers needing reactivation campaigns'
}
\`\`\``,
          dashboard: `| Section | Metrics | Visualization Types |
|---------|---------|-------------------|
| **Revenue Analytics** | Total Revenue, Growth Rate, Average Order Value | Time series charts, KPI indicators |
| **Customer Intelligence** | Segment distribution, CLV analysis, Churn risk | Pie charts, scatter plots, risk matrices |
| **Product Performance** | Top sellers, Profit margins, Category analysis | Bar charts, treemaps, performance grids |
| **Geographic Insights** | Regional performance, Market penetration | Geographic maps, regional comparisons |
| **Predictive Analytics** | Forecast results, Confidence intervals | Prediction charts, scenario analysis |`
        }
      default:
        return {
          coreCapabilities: '',
          databaseDesign: '',
          apiEndpoints: '',
          mlModels: '',
          dashboard: ''
        }
    }
  }

  const projectContent = getProjectContent()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] bg-gray-900">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-50"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 sm:mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Created {project.date}</span>
              </div>
              {project.lastUpdated && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Updated {project.lastUpdated}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Project Links */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
          {project.links?.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900 text-white text-sm sm:text-base rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Code
            </Link>
          )}
          {project.links?.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 text-gray-700 text-sm sm:text-base rounded-lg hover:border-gray-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
          )}
        </div>

        {/* Project Description */}
        <article className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
            {project.description}
          </p>

          {/* Technologies Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge
                  key={tech}
                  tech={tech}
                  size="md"
                  showLabel={true}
                  showbg={true}
                  showIcon={true}
                />
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8 sm:space-y-12">
            {/* Core Capabilities */}
            {projectContent.coreCapabilities && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Core Capabilities</h2>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 overflow-x-auto">
                  <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none min-w-[300px]">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {projectContent.coreCapabilities}
                    </ReactMarkdown>
                  </div>
                </div>
              </section>
            )}

            {/* Database Design */}
            {projectContent.databaseDesign && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Database Design</h2>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 overflow-x-auto">
                  <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none min-w-[300px]">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {projectContent.databaseDesign}
                    </ReactMarkdown>
                  </div>
                </div>
              </section>
            )}

            {/* Machine Learning Models */}
            {projectContent.mlModels && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Machine Learning Models</h2>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 overflow-x-auto">
                  <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none min-w-[300px]">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {projectContent.mlModels}
                    </ReactMarkdown>
                  </div>
                </div>
              </section>
            )}

            {/* API Endpoints */}
            {projectContent.apiEndpoints && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">API Endpoints</h2>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 overflow-x-auto">
                  <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none min-w-[300px]">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {projectContent.apiEndpoints}
                    </ReactMarkdown>
                  </div>
                </div>
              </section>
            )}

            {/* Interactive Dashboard */}
            {projectContent.dashboard && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Interactive Dashboard</h2>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 overflow-x-auto">
                  <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none min-w-[300px]">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {projectContent.dashboard}
                    </ReactMarkdown>
                  </div>
                </div>
              </section>
            )}
          </div>
        </article>
      </div>
    </main>
  )
} 