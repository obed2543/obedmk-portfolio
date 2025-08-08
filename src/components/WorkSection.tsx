import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const WorkSection = () => {
  const services = [
    {
      icon: 'fas fa-square-poll-vertical',
      title: 'Business Intelligence Development',
      description: 'Expert BI developer creating comprehensive Power BI dashboards, Tableau visualizations, and Excel analytics solutions. Transform complex data into executive-ready insights that drive strategic business decisions and revenue growth.',
      skills: ['Power BI Development', 'Tableau Expert', 'Excel Analytics', 'KPI Dashboards'],
      color: 'skill-bi'
    },
    {
      icon: 'fas fa-database',
      title: 'Advanced Data Analysis & SQL', 
      description: 'Professional data analyst specializing in statistical analysis, predictive modeling, and database optimization. Expert SQL developer building efficient ETL pipelines and automated reporting systems for enterprise-scale data processing.',
      skills: ['Advanced SQL', 'Statistical Analysis', 'ETL Development', 'Database Optimization'],
      color: 'skill-data'
    },
    {
      icon: 'fab fa-python',
      title: 'Python Analytics Engineering',
      description: 'Certified Python specialist delivering end-to-end analytics solutions. From exploratory data analysis to machine learning model deployment, I build scalable Python applications that automate business processes and generate predictive insights.',
      skills: ['Python Expert', 'Machine Learning', 'Data Mining', 'Automated Analytics'],
      color: 'skill-python'
    }
  ];

  return (
    <section id="work" className="py-20 lg:py-32 bg-card/50 dark:bg-card/30">
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
            What I <span className="text-primary">Do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert data analyst and business intelligence developer delivering enterprise-grade analytics solutions that maximize ROI through data-driven decision making
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 50,
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
                delay: 0.2 + (index * 0.15),
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                rotate: (index % 2 === 0 ? 1 : -1),
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary h-full">
                <CardHeader className="text-center space-y-4">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <motion.i 
                      className={`${service.icon} text-2xl text-primary`}
                      whileHover={{ scale: 1.2 }}
                    />
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill, skillIndex) => (
                        <motion.span 
                          key={skill}
                          className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.5 + (index * 0.15) + (skillIndex * 0.1),
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: false, amount: 0.5 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.7 + (index * 0.15)
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-glow-primary transition-all duration-300"
                      onClick={() => {
                        const projectsSection = document.getElementById('projects');
                        if (projectsSection) {
                          projectsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      See Projects
                      <motion.i 
                        className="fas fa-arrow-right ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            My <span className="text-primary">Process</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Understand', description: 'Define business objectives and data requirements' },
              { step: '02', title: 'Collect', description: 'Gather and validate data from multiple sources' },
              { step: '03', title: 'Analyze', description: 'Apply statistical and ML techniques for insights' },
              { step: '04', title: 'Deliver', description: 'Present actionable insights through visualizations' }
            ].map((phase, index) => (
              <motion.div 
                key={index} 
                className="text-center space-y-4"
                initial={{ 
                  opacity: 0, 
                  y: 40,
                  x: index % 2 === 0 ? -20 : 20,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  x: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + (index * 0.1),
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: false, amount: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  {phase.step}
                </motion.div>
                <h4 className="text-xl font-semibold text-foreground">{phase.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;