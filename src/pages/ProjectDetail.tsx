import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/projects')}>
              Back to Projects
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - Data Analytics Project by Obed Makori</title>
        <meta name="description" content={project.description} />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navigation />
        
        {/* Back Button */}
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <Button 
            variant="outline" 
            onClick={() => navigate('/projects')}
            className="mb-8"
          >
            <i className="fas fa-arrow-left mr-2" />
            Back to Projects
          </Button>
        </div>

        {/* Project Header */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Project Info */}
              <div className="order-1 lg:order-2 space-y-6">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {project.category}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold">{project.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
                
                {/* Technologies */}
                <div>
                  <p className="text-sm font-medium mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="text-sm border-primary text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    asChild
                    className="bg-primary hover:bg-primary/90"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt mr-2" />
                      View Project
                    </a>
                  </Button>
                  {project.githubUrl !== '#' && (
                    <Button 
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Project Details */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {project.challenges && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <i className="fas fa-exclamation-triangle text-primary" />
                    Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
                </CardContent>
              </Card>
            )}

            {project.solutions && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <i className="fas fa-lightbulb text-primary" />
                    Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.solutions}</p>
                </CardContent>
              </Card>
            )}

            {project.results && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <i className="fas fa-chart-line text-primary" />
                    Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.results}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* More Projects */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link 
                  key={relatedProject.id} 
                  to={`/projects/${relatedProject.slug}`}
                  className="group"
                >
                  <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
                    <CardHeader className="p-0">
                      <img 
                        src={relatedProject.image} 
                        alt={relatedProject.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="bg-primary/10 text-primary mb-3">
                        {relatedProject.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ProjectDetail;
