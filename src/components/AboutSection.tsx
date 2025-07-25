import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Years Experience', value: '3+' },
    { label: 'Technologies Mastered', value: '15+' },
    { label: 'Happy Clients', value: '25+' }
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-card border border-border overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <i className="fas fa-user text-4xl text-primary" />
                    </div>
                    <p className="text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
              </div>
              
              {/* Floating skill icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-skill-python rounded-lg flex items-center justify-center animate-float">
                <i className="fab fa-python text-primary-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-skill-data rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <i className="fas fa-chart-bar text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi there! My name is <span className="text-foreground font-semibold">Obed</span>, and I am a passionate professional with expertise in 
                  <span className="text-primary"> Business Intelligence (BI)</span>, 
                  <span className="text-secondary"> Data Analysis</span>, and 
                  <span className="text-accent"> Machine Learning (ML) Engineering</span>.
                </p>
                <p>
                  Currently, I'm expanding my skillset in <strong className="text-foreground">Data Engineering</strong> 
                  to build end-to-end data solutions that drive business value.
                </p>
                <p>
                  I specialize in transforming raw data into actionable insights using cutting-edge tools 
                  and methodologies. My goal is to help organizations make data-driven decisions that 
                  propel their growth and success.
                </p>
              </div>
            </div>

            {/* Key Details */}
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Main Tools</p>
                    <p className="text-foreground font-medium">Python, SQL, Java, Power BI, Tableau</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Major</p>
                    <p className="text-foreground font-medium">Data Science & Analytics</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Nairobi, Kenya 🇰🇪</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="text-primary font-medium">Available for Projects</p>
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

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary">
              Download Resume
              <i className="fas fa-download ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;