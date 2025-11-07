import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Blogs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <SEOHead
        title="Data Analytics & Machine Learning Blog"
        description="Expert insights on data analytics, machine learning, Power BI, Python, SQL, and business intelligence. Learn best practices, techniques, and industry trends from experienced data professionals."
        canonical="https://yourdomain.com/blogs"
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16">
          <BlogSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Blogs;
