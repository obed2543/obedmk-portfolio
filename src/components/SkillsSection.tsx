import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { name: 'Python', level: 85, icon: 'fab fa-python', color: 'skill-python' },
    { name: 'SQL', level: 80, icon: 'fas fa-database', color: 'skill-data' },
    { name: 'Power BI', level: 75, icon: 'fas fa-chart-pie', color: 'skill-bi' },
    { name: 'Oracle Analytics', level: 60, icon: 'fas fa-chart-line', color: 'skill-ml' },
    { name: 'ETL', level: 55, icon: 'fas fa-sitemap', color: 'skill-data' },
    { name: 'Cloud (AWS)', level: 25, icon: 'fab fa-aws', color: 'skill-python' }
  ];

  const expertiseAreas = [
    { title: 'Data Analysis', percentage: 90, color: 'skill-data' },
    { title: 'BI Engineering', percentage: 80, color: 'skill-bi' },
    { title: 'ML Engineering', percentage: 60, color: 'skill-ml' },
    { title: 'Data Science', percentage: 75, color: 'skill-python' }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert-level proficiency in data analytics technologies and business intelligence tools for enterprise data solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-foreground mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Tools & Technologies
            </motion.h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -40, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <motion.i 
                        className={`${skill.icon} text-lg text-primary`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div 
                      className={`h-2 rounded-full bg-gradient-to-r from-primary to-secondary`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.8 + (index * 0.1),
                        ease: "easeOut"
                      }}
                      viewport={{ once: false, amount: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-foreground mb-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Areas of Expertise
            </motion.h3>
            <div className="grid grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ 
                    opacity: 0, 
                    y: 40,
                    scale: 0.8,
                    rotate: -5
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    rotate: 0
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.7 + (index * 0.15),
                    type: "spring",
                    stiffness: 120
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    rotate: 2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="bg-gradient-card border-border relative overflow-hidden group h-full">
                    <CardContent className="p-6 text-center">
                      {/* Circular Progress */}
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                          {/* Background circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            className="text-muted stroke-current"
                            strokeWidth="6"
                            fill="none"
                          />
                          {/* Progress circle */}
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            className="text-primary stroke-current"
                            strokeWidth="6"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ 
                              strokeDasharray: "0 283", // 2π * 45 ≈ 283
                              strokeDashoffset: 0 
                            }}
                            whileInView={{ 
                              strokeDasharray: `${(area.percentage / 100) * 283} 283`,
                              strokeDashoffset: 0
                            }}
                            transition={{ 
                              duration: 1.5, 
                              delay: 0.9 + (index * 0.2),
                              ease: "easeOut"
                            }}
                            viewport={{ once: false, amount: 0.5 }}
                          />
                        </svg>
                        <motion.div 
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 1.2 + (index * 0.2),
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: false, amount: 0.5 }}
                        >
                          <span className="text-lg font-bold text-primary">{area.percentage}%</span>
                        </motion.div>
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {area.title}
                      </h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Certifications & Learning
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Microsoft Power BI', issuer: 'Microsoft', status: 'In Progress' },
              { title: 'AWS Cloud Practitioner', issuer: 'Amazon', status: 'Planned' },
              { title: 'Google Data Analytics', issuer: 'Google', status: 'Completed' }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 30,
                  x: index % 2 === 0 ? -20 : 20,
                  scale: 0.9
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  x: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: false, amount: 0.5 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-200 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <motion.span 
                      className={`px-3 py-1 rounded-full text-sm ${
                        cert.status === 'Completed' 
                          ? 'bg-primary/10 text-primary' 
                          : cert.status === 'In Progress'
                          ? 'bg-secondary/10 text-secondary'
                          : 'bg-muted text-muted-foreground'
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 1.0 + (index * 0.1),
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      {cert.status}
                    </motion.span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;