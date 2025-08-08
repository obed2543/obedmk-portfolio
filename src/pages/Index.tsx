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
  return (
    <>
      <main className="min-h-screen bg-background">
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
