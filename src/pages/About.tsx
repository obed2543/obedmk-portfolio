import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Obed Makori - Data Analyst & BI Developer | Expert in Python, SQL, Power BI</title>
        <meta name="description" content="Learn about Obed Makori, an expert Data Analyst and Business Intelligence Developer with 3+ years of experience in Python, SQL, Power BI, machine learning, and data visualization." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navigation />
        <AboutSection />
        <SkillsSection />
        <Footer />
      </main>
    </>
  );
};

export default About;
