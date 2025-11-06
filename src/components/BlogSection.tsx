import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import blog images
import mlBiImage from '@/assets/blog-ml-bi.jpg';
import pythonImage from '@/assets/blog-python.jpg';
import powerBiImage from '@/assets/blog-powerbi.jpg';
import etlImage from '@/assets/blog-etl.jpg';
import futureImage from '@/assets/blog-future.jpg';
import sqlImage from '@/assets/blog-sql.jpg';
import dataPipelineImage from '@/assets/blog-data-pipeline.jpg';

const BlogSection = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      slug: "machine-learning-business-intelligence-guide",
      title: "Machine Learning in Business Intelligence: A Practical Guide",
      excerpt: "Explore how ML algorithms can enhance traditional BI practices and drive better business decisions.",
      content: `
        <h2>Introduction</h2>
        <p>Machine Learning (ML) has revolutionized the way businesses approach data analysis and decision-making. When integrated with traditional Business Intelligence (BI) practices, ML algorithms can uncover hidden patterns, predict future trends, and provide actionable insights that drive strategic business decisions.</p>
        
        <h2>Key ML Algorithms for BI</h2>
        <p><strong>1. Predictive Analytics:</strong> Regression models and time series forecasting help predict sales, revenue, and market trends.</p>
        <p><strong>2. Classification:</strong> Decision trees and random forests categorize customers, products, and market segments.</p>
        <p><strong>3. Clustering:</strong> K-means and hierarchical clustering identify customer segments and market opportunities.</p>
        
        <h2>Implementation Strategy</h2>
        <p>Start with clean, quality data. Implement data governance frameworks and ensure your team has the necessary skills. Begin with simple models and gradually increase complexity as you gain confidence and expertise.</p>
        
        <h2>Real-World Applications</h2>
        <p>Companies like Netflix use ML for recommendation systems, while financial institutions leverage it for fraud detection and risk assessment. The key is to identify specific business problems where ML can add value.</p>
        
        <h2>Conclusion</h2>
        <p>The integration of ML with BI is not just a technological upgrade—it's a strategic transformation that can provide competitive advantages and drive business growth.</p>
      `,
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Machine Learning",
      tags: ["ML", "BI", "Data Science"],
      image: mlBiImage
    },
    {
      id: 2,
      slug: "python-data-analysis-essential-libraries",
      title: "Python for Data Analysis: Essential Libraries and Techniques",
      excerpt: "A comprehensive overview of Python libraries that every data analyst should master.",
      content: `
        <h2>Essential Python Libraries</h2>
        <p><strong>Pandas:</strong> The cornerstone of data manipulation in Python. Provides powerful data structures like DataFrames and Series for handling structured data efficiently.</p>
        <p><strong>NumPy:</strong> Foundation for numerical computing. Offers support for large multi-dimensional arrays and mathematical functions.</p>
        <p><strong>Matplotlib & Seaborn:</strong> Visualization libraries for creating static, interactive, and publication-quality plots.</p>
        
        <h2>Data Cleaning Techniques</h2>
        <p>Handle missing values with fillna(), dropna(), and interpolation methods. Use string methods for text cleaning and regex for pattern matching.</p>
        
        <h2>Advanced Analysis</h2>
        <p>Leverage groupby operations, pivot tables, and merge/join operations for complex data transformations. Time series analysis with datetime indexing.</p>
      `,
      date: "Dec 10, 2024", 
      readTime: "12 min read",
      category: "Data Analysis",
      tags: ["Python", "Pandas", "NumPy"],
      image: pythonImage
    },
    {
      id: 3,
      slug: "building-effective-dashboards-power-bi",
      title: "Building Effective Dashboards: Design Principles for Power BI",
      excerpt: "Learn the key principles for creating dashboards that tell compelling data stories.",
      content: `
        <h2>Design Principles</h2>
        <p><strong>Clarity:</strong> Use clear, concise titles and labels. Avoid clutter and focus on key metrics.</p>
        <p><strong>Consistency:</strong> Maintain consistent color schemes, fonts, and layout patterns throughout your dashboard.</p>
        
        <h2>Visual Hierarchy</h2>
        <p>Use size, color, and positioning to guide the viewer's eye to the most important information first.</p>
        
        <h2>Interactive Elements</h2>
        <p>Implement filters, slicers, and drill-through functionality to allow users to explore data at different levels of detail.</p>
      `,
      date: "Dec 5, 2024",
      readTime: "10 min read", 
      category: "Visualization",
      tags: ["Power BI", "Dashboard", "Design"],
      image: powerBiImage
    },
    {
      id: 4,
      slug: "etl-best-practices-raw-data-business-insights",
      title: "ETL Best Practices: From Raw Data to Business Insights",
      excerpt: "Master the art of data transformation with proven ETL methodologies and tools.",
      content: `
        <h2>Extract Phase</h2>
        <p>Identify data sources, establish connections, and implement incremental extraction strategies to minimize processing time.</p>
        
        <h2>Transform Phase</h2>
        <p>Clean, validate, and standardize data formats. Apply business rules and calculations to create meaningful metrics.</p>
        
        <h2>Load Phase</h2>
        <p>Choose appropriate loading strategies: full load vs. incremental load based on data volume and business requirements.</p>
        
        <h2>Monitoring & Maintenance</h2>
        <p>Implement error handling, logging, and monitoring to ensure data quality and pipeline reliability.</p>
      `,
      date: "Nov 28, 2024",
      readTime: "15 min read",
      category: "Data Engineering", 
      tags: ["ETL", "Data Pipeline", "SQL"],
      image: etlImage
    },
    {
      id: 5,
      slug: "future-data-analytics-trends-2025",
      title: "The Future of Data Analytics: Trends to Watch in 2025",
      excerpt: "Discover emerging trends and technologies shaping the future of data analytics.",
      content: `
        <h2>Emerging Trends</h2>
        <p><strong>AI-Powered Analytics:</strong> Automated insights generation and natural language query capabilities.</p>
        <p><strong>Real-time Analytics:</strong> Stream processing and edge computing for instant decision-making.</p>
        
        <h2>Technology Evolution</h2>
        <p>Cloud-native analytics platforms, serverless architectures, and containerized data processing solutions.</p>
        
        <h2>Data Democratization</h2>
        <p>Self-service analytics tools that enable non-technical users to explore and analyze data independently.</p>
      `,
      date: "Nov 20, 2024",
      readTime: "6 min read",
      category: "Industry Trends",
      tags: ["Trends", "Analytics", "Future"],
      image: futureImage
    },
    {
      id: 6,
      slug: "sql-optimization-techniques-large-datasets",
      title: "SQL Optimization Techniques for Large Datasets",
      excerpt: "Proven strategies to improve query performance and handle big data efficiently.",
      content: `
        <h2>Indexing Strategies</h2>
        <p>Create appropriate indexes on frequently queried columns. Use composite indexes for multi-column searches.</p>
        
        <h2>Query Optimization</h2>
        <p>Use EXPLAIN plans to understand query execution. Avoid SELECT *, use specific column names, and optimize JOIN operations.</p>
        
        <h2>Partitioning</h2>
        <p>Implement table partitioning for large datasets to improve query performance and maintenance operations.</p>
        
        <h2>Performance Monitoring</h2>
        <p>Monitor query execution times, resource usage, and identify bottlenecks using database profiling tools.</p>
      `,
      date: "Nov 15, 2024",
      readTime: "14 min read",
      category: "Database",
      tags: ["SQL", "Performance", "Optimization"],
      image: sqlImage
    },
    {
      id: 7,
      slug: "complete-data-pipeline-tutorial", 
      title: "Building a Complete Data Pipeline: From Raw Data to Interactive Dashboards",
      excerpt: "A comprehensive tutorial showing how to build an end-to-end data pipeline with code examples and visual demonstrations.",
      date: "Jan 2, 2025",
      readTime: "20 min read",
      category: "Data Engineering",
      tags: ["Python", "ETL", "Dashboard", "Airflow", "Pipeline"],
      image: dataPipelineImage
    }
  ];

  const categories = ["All", "Machine Learning", "Data Analysis", "Visualization", "Data Engineering", "Industry Trends", "Database"];

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <section id="blogs" className="py-20 lg:py-32 bg-card/50 dark:bg-card/30">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights from the world of data analytics, 
            machine learning, and business intelligence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.4 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={category === selectedCategory ? "default" : "outline"}
                size="sm"
                className={category === selectedCategory 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border hover:bg-primary hover:text-primary-foreground"
                }
                onClick={() => {
                  setSelectedCategory(category);
                  setVisiblePosts(3); // Reset visible posts when changing category
                }}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.slice(0, visiblePosts).map((blog, index) => (
            <motion.div
              key={`${selectedCategory}-${blog.id}`}
              initial={{ 
                opacity: 0, 
                y: 60,
                x: index % 3 === 0 ? -30 : index % 3 === 2 ? 30 : 0,
                scale: 0.8,
                rotate: (index % 2 === 0 ? -2 : 2)
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                x: 0,
                scale: 1,
                rotate: 0
              }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3 + (index * 0.15),
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                rotate: (index % 2 === 0 ? 1 : -1),
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card h-full">
                <CardHeader className="space-y-4">
                  {/* Blog Image */}
                  <motion.div 
                    className="w-full h-48 bg-gradient-card rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.15) }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {blog.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{blog.readTime}</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.15) }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {blog.title}
                    </CardTitle>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.15) }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {blog.excerpt}
                    </CardDescription>
                  </motion.div>

                  {/* Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.15) }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    {blog.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.9 + (index * 0.15) + (tagIndex * 0.1),
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: false, amount: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs border-muted hover:border-primary hover:text-primary transition-colors duration-200"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Footer */}
                  <motion.div 
                    className="flex justify-between items-center pt-4 border-t border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 + (index * 0.15) }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:bg-primary hover:text-primary-foreground group-hover:translate-x-1 transition-transform duration-200"
                      asChild
                    >
                      <Link 
                        to={`/blog/${blog.slug}`}
                        onClick={() => {
                          setTimeout(() => window.scrollTo(0, 0), 100);
                        }}
                      >
                        Read More
                        <motion.i 
                          className="fas fa-arrow-right ml-2 text-xs"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More / Show Less Buttons */}
        <motion.div 
          className="text-center mt-12 flex gap-4 justify-center"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {visiblePosts < filteredBlogs.length && (
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-glow-primary"
              onClick={() => setVisiblePosts(prev => Math.min(prev + 3, filteredBlogs.length))}
            >
              Load More Articles
              <motion.i 
                className="fas fa-chevron-down ml-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </Button>
          )}
          {visiblePosts > 3 && (
            <Button
              onClick={() => {
                setVisiblePosts(3);
                const element = document.getElementById('blogs');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              size="lg"
              className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Show Less
              <motion.i 
                className="fas fa-chevron-up ml-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;