import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import WorkSection from '@/components/WorkSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SEOContent from '@/components/SEOContent';

const Index = () => {
  const location = useLocation();
  // Use location key to force re-mount and re-trigger animations on route changes
  const pageKey = `${location.pathname}-${location.key}`;

  return (
    <>
      <main key={pageKey} className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
        <SEOContent />
      </main>
    </>
  );
};

export default Index;
