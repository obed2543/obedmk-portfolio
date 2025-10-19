import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import heroGraphic from '@/assets/hero-graphic.png';


const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Data Analyst",
        "BI Developer",
        "ML Engineer", 
        "Data Scientist"
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => typed.destroy();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen w-full bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-foreground dark:bg-background rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10 min-h-screen pt-20 sm:pt-24 lg:pt-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8 lg:py-12"
        >
          <div className="space-y-6">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-2 sm:mb-4"
              >
                Hi,
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-2 sm:mb-4"
              >
                I'm <span className="text-accent animate-glow">Obed</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-muted-foreground"
              >
                <span ref={typedRef} className="text-accent font-semibold"></span>
              </motion.div>
            </motion.h1>
            <motion.p 
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Transforming data into actionable insights through advanced analytics, 
              machine learning, and business intelligence solutions.
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform"
              style={{ boxShadow: 'var(--glow-primary)' }}
            >
              Get In Touch
              <i className="fas fa-paper-plane ml-2" />
            </Button>
            
            <Button 
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="border-primary/50 bg-background/20 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform"
            >
              View Portfolio
              <i className="fas fa-arrow-down ml-2" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center lg:justify-start space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            {[
              { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/obed-makori/', label: 'LinkedIn' },
              { icon: 'fab fa-github', href: 'https://github.com/Obed-Makori', label: 'GitHub' },
              { icon: 'fab fa-instagram', href: 'https://www.instagram.com/makori_obed254/', label: 'Instagram' },
            ].map((social, index) => (
              <motion.a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={social.icon} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block"
        >
          <img
            src={heroGraphic}
            alt="Data analytics visualization and business intelligence dashboard illustration"
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;