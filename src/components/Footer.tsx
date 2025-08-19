import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const footerSections = [
    {
      title: 'Projects',
      links: [
        { label: 'Python Analytics', href: '#projects' },
        { label: 'BI Dashboards', href: '#projects' },
        { label: 'ML Models', href: '#projects' },
        { label: 'Data Visualizations', href: '#projects' }
      ]
    },
    {
      title: 'About',
      links: [
        { label: 'About Me', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#work' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#blogs' },
        { label: 'Case Studies', href: '#projects' },
        { label: 'Tutorials', href: '#blogs' },
        { label: 'Tools & Tips', href: '#blogs' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/obed-makori/', label: 'LinkedIn' },
    { icon: 'fab fa-github', href: 'https://github.com/Obed-Makori', label: 'GitHub' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/makori_obed254/', label: 'Instagram' },
    { icon: 'fab fa-whatsapp', href: 'https://wa.me/254951227778', label: 'WhatsApp' }
  ];

  const scrollToSection = (sectionId: string) => {
    const targetId = sectionId.replace('#', '');
    
    if (location.pathname !== '/') {
      // Navigate to home page and then scroll to section
      navigate('/');
      // Use a longer timeout and also listen for the route change
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
      
      // Cleanup timeout on unmount
      return () => clearTimeout(timeoutId);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="text-foreground font-bold text-xl">
                Obed <span className="text-primary">MK</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming data into actionable insights through innovative analytics and machine learning solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-foreground font-semibold text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © {currentYear} <span className="text-primary font-medium">Obed Makori</span>. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <button 
                onClick={() => navigate('/privacy-policy')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('/terms-of-service')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-glow-primary hover:scale-105 transition-transform duration-200 z-40 will-change-transform"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;