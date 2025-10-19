import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroPerson from '@/assets/hero-person-3d.png';

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
          {/* 3D Person Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex justify-center lg:justify-start relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <img
                src={heroPerson}
                alt="3D rendered data analyst professional in blue suit"
                className="w-full h-auto max-w-md lg:max-w-lg drop-shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
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