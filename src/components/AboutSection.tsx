import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Years Experience', value: '3+' },
    { label: 'Technologies Mastered', value: '15+' },
    { label: 'Happy Clients', value: '25+' }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-card/50 dark:bg-card/30">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex justify-center lg:justify-start relative"
          >
            {/* Lighting effects background */}
            <div className="absolute inset-0 -m-8">
              <motion.div 
                className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-accent/30 to-transparent rounded-full blur-2xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 rounded-full blur-3xl"
                animate={{ 
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
            
            <div className="relative z-10">
              <motion.div 
                className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] rounded-3xl bg-gradient-card border border-border overflow-hidden shadow-card"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center relative"
                  animate={{ 
                    background: [
                      "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.1), hsl(var(--accent) / 0.2))",
                      "linear-gradient(135deg, hsl(var(--accent) / 0.2), hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.2))",
                      "linear-gradient(135deg, hsl(var(--secondary) / 0.2), hsl(var(--accent) / 0.1), hsl(var(--primary) / 0.2))"
                    ]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center shadow-glow-primary"
                      animate={{ 
                        boxShadow: [
                          "0 0 30px hsl(var(--primary) / 0.4)",
                          "0 0 60px hsl(var(--primary) / 0.7)",
                          "0 0 30px hsl(var(--primary) / 0.4)"
                        ]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <i className="fas fa-user text-6xl lg:text-7xl text-primary-foreground" />
                    </motion.div>
                    <p className="text-muted-foreground text-lg font-medium">Data Analytics Professional</p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced floating skill icons */}
              <motion.div 
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-skill-python to-accent rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <i className="fab fa-python text-2xl text-primary-foreground" />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-skill-data to-primary rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              >
                <i className="fas fa-chart-bar text-2xl text-primary-foreground" />
              </motion.div>
              <motion.div 
                className="absolute top-8 -left-4 w-12 h-12 bg-gradient-to-br from-skill-ml to-secondary rounded-xl flex items-center justify-center shadow-lg"
                animate={{ 
                  x: [0, -8, 0],
                  y: [0, -10, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              >
                <i className="fas fa-brain text-lg text-primary-foreground" />
              </motion.div>
              <motion.div 
                className="absolute bottom-12 -right-4 w-14 h-14 bg-gradient-to-br from-skill-bi to-accent rounded-xl flex items-center justify-center shadow-lg"
                animate={{ 
                  x: [0, 8, 0],
                  y: [0, -8, 0],
                  rotate: [0, -12, 0]
                }}
                transition={{ 
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }}
              >
                <i className="fas fa-chart-pie text-xl text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-8 lg:pl-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi there! My name is <span className="text-foreground font-semibold">Obed Makori</span>, and I am an expert 
                  <span className="text-primary"> Data Analyst</span>, 
                  <span className="text-secondary"> Business Intelligence Developer</span>, and 
                  <span className="text-accent"> Analytics Engineer</span> with 3+ years of proven experience transforming complex datasets into strategic business insights.
                </p>
                <p>
                  As a certified <strong className="text-foreground">Python specialist</strong> and <strong className="text-foreground">SQL expert</strong>, 
                  I excel at developing comprehensive BI solutions, interactive Power BI dashboards, predictive machine learning models, 
                  and automated ETL pipelines that drive measurable business growth and operational efficiency.
                </p>
                <p>
                  My expertise spans the complete data analytics lifecycle - from statistical analysis and data mining to advanced 
                  data visualization and predictive modeling. I help organizations across industries unlock the full potential 
                  of their data assets through innovative analytics solutions that deliver actionable insights and competitive advantage.
                </p>
              </div>
            </div>

            {/* Key Details */}
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Core Technologies</p>
                    <p className="text-foreground font-medium">Python, SQL, Power BI, Tableau, Excel Advanced Analytics</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Specialization</p>
                    <p className="text-foreground font-medium">Business Intelligence & Data Analytics Engineering</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Nairobi, Kenya 🇰🇪 (Remote Available)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Availability</p>
                    <p className="text-primary font-medium">Open for Data Analytics Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-background/50 border-border text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary hover:scale-105 transition-transform"
              onClick={() => {
                // Add your resume download logic here
                const resumeUrl = "/path-to-your-resume.pdf"; // Update with actual path
                const link = document.createElement('a');
                link.href = resumeUrl;
                link.download = 'Obed_Makori_Resume.pdf';
                link.click();
              }}
            >
              Download Resume
              <i className="fas fa-download ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;