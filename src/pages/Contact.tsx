import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Obed Makori - Get In Touch for Data Analytics Projects</title>
        <meta name="description" content="Contact Obed Makori for data analytics, business intelligence, and machine learning projects. Available for remote work and consultations in Nairobi, Kenya." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navigation />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Contact;
