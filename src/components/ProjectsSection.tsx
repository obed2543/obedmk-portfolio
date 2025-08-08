import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Import project images
import diabetesImage from '@/assets/project-diabetes.jpg';
import salaryImage from '@/assets/project-salary.jpg';
import evImage from '@/assets/project-ev.jpg';
import retailImage from '@/assets/project-retail.jpg';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projects = [
    {
      title: 'Diabetes Prediction Model',
      description: 'A classification Machine Learning model that enables users to check their Diabetes status, aiming at reducing fear and promoting early detection.',
      image: diabetesImage,
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
      category: 'Machine Learning',
      demoUrl: 'https://github.com/Obed-Makori/streamlit_dashboard',
      githubUrl: 'https://github.com/Obed-Makori/streamlit_dashboard'
    },
    {
      title: 'Salary Dashboard & Prediction',
      description: 'Data visualization tool tracking salary trends and distributions with integrated ML for salary predictions, enabling data-driven HR decisions.',
      image: salaryImage,
      technologies: ['Python', 'Streamlit', 'Plotly', 'ML'],
      category: 'Data Analysis',
      demoUrl: 'https://github.com/Obed-Makori/Salary-Prediction',
      githubUrl: 'https://github.com/Obed-Makori/Salary-Prediction'
    },
    {
      title: 'Electric Vehicle Dashboard',
      description: 'Comprehensive Tableau dashboard tracking key KPIs in electric vehicle usage data, evaluating green energy adoption success in the United States.',
      image: evImage,
      technologies: ['Tableau', 'Data Visualization', 'KPI Analysis'],
      category: 'Business Intelligence',
      demoUrl: 'https://public.tableau.com/app/profile/obed.makori3675/viz/EVDashboard_17276813907140/Dashboard?publish=yes',
      githubUrl: '#'
    },
    {
      title: 'RetailX Sales Dashboard',
      description: 'Interactive Power BI dashboard providing insights into daily sales, profit margins, top-selling products, and regional performance for strategic decision making.',
      image: retailImage,
      technologies: ['Power BI', 'DAX', 'Data Modeling', 'KPI'],
      category: 'Business Intelligence',
      demoUrl: 'https://github.com/Obed-Makori/RetailX-Power-BI-Dashboard',
      githubUrl: 'https://github.com/Obed-Makori/RetailX-Power-BI-Dashboard'
    }
  ];

  const categories = ['All', 'Machine Learning', 'Data Analysis', 'Business Intelligence'];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
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
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world data analytics projects showcasing expertise in Python, SQL, Power BI, machine learning, and business intelligence solutions
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
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.4 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={category === selectedCategory ? 'default' : 'outline'}
                size="sm"
                className={category === selectedCategory 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border-border hover:bg-primary hover:text-primary-foreground'
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${selectedCategory}-${index}`}
              initial={{ 
                opacity: 0, 
                y: 60,
                x: index % 2 === 0 ? -40 : 40,
                scale: 0.8,
                rotate: index % 2 === 0 ? -3 : 3
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
                delay: 0.3 + (index * 0.2),
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                rotate: index % 2 === 0 ? 1 : -1,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary overflow-hidden h-full">
                <CardHeader className="space-y-4">
                  {/* Project Image */}
                  <motion.div 
                    className="w-full h-48 bg-gradient-card rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Category and Title */}
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + (index * 0.2) }}
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {project.category}
                      </Badge>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + (index * 0.2) }}
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </motion.div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.2) }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.2) }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <p className="text-sm font-medium text-foreground">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.9 + (index * 0.2) + (techIndex * 0.1),
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
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex gap-3 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 + (index * 0.2) }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <Button 
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <motion.i 
                          className="fas fa-external-link-alt mr-2"
                          whileHover={{ scale: 1.2 }}
                        />
                        View Project
                      </a>
                    </Button>
                    {project.githubUrl !== '#' && (
                      <Button 
                        asChild
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <motion.i 
                            className="fab fa-github mr-2"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          />
                          Code
                        </a>
                      </Button>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div 
            className="bg-gradient-card rounded-2xl p-8 border border-border"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Interested in Working Together?
            </motion.h3>
            <motion.p 
              className="text-muted-foreground mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              I'm always excited to take on new challenges and help organizations 
              unlock the power of their data through innovative analytics solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start a Project
                <motion.i 
                  className="fas fa-arrow-right ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;