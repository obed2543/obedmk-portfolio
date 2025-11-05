import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Data Analytics Projects Portfolio | Machine Learning, Power BI, Tableau Dashboards</title>
        <meta name="description" content="Explore real-world data analytics projects including machine learning models, Power BI dashboards, Tableau visualizations, and Python-based data solutions by Obed Makori." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navigation />
        <ProjectsSection />
        <Footer />
      </main>
    </>
  );
};

export default Projects;
