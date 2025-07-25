import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Data Analyst',
    'BI Engineer', 
    'ML Engineer',
    'Data Scientist'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-primary/20 rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">Hi there! 👋</p>
            <h1 className="text-5xl lg:text-7xl font-bold">
              I'm <span className="text-primary">Obed</span>
            </h1>
            <div className="h-16 flex items-center">
              <span className="text-2xl lg:text-4xl font-light text-muted-foreground mr-2">A</span>
              <span className="text-2xl lg:text-4xl font-semibold text-secondary animate-pulse">
                {roles[currentRole]}
              </span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Passionate about transforming data into actionable insights. I specialize in 
            Business Intelligence, Machine Learning, and creating data-driven solutions 
            that drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
            >
              Get In Touch
            </Button>
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 pt-4">
            {[
              { icon: 'linkedin', href: 'https://www.linkedin.com/in/obed-makori/', label: 'LinkedIn' },
              { icon: 'github', href: 'https://github.com/Obed-Makori', label: 'GitHub' },
              { icon: 'instagram', href: 'https://www.instagram.com/makori_obed254/', label: 'Instagram' },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <i className={`fab fa-${social.icon} text-lg`} />
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-hero p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-8xl lg:text-9xl font-bold text-primary/80">O</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-skill-python rounded-lg flex items-center justify-center animate-float">
              <i className="fab fa-python text-2xl text-primary-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-skill-data rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <i className="fas fa-chart-line text-2xl text-primary-foreground" />
            </div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-skill-bi rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <i className="fas fa-database text-lg text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;