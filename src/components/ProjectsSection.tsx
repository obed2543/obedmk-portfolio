import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Diabetes Prediction Model',
      description: 'A classification Machine Learning model that enables users to check their Diabetes status, aiming at reducing fear and promoting early detection.',
      image: '🔬',
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
      category: 'Machine Learning',
      demoUrl: 'https://github.com/Obed-Makori/streamlit_dashboard',
      githubUrl: 'https://github.com/Obed-Makori/streamlit_dashboard'
    },
    {
      title: 'Salary Dashboard & Prediction',
      description: 'Data visualization tool tracking salary trends and distributions with integrated ML for salary predictions, enabling data-driven HR decisions.',
      image: '💰',
      technologies: ['Python', 'Streamlit', 'Plotly', 'ML'],
      category: 'Data Analysis',
      demoUrl: 'https://github.com/Obed-Makori/Salary-Prediction',
      githubUrl: 'https://github.com/Obed-Makori/Salary-Prediction'
    },
    {
      title: 'Electric Vehicle Dashboard',
      description: 'Comprehensive Tableau dashboard tracking key KPIs in electric vehicle usage data, evaluating green energy adoption success in the United States.',
      image: '🚗',
      technologies: ['Tableau', 'Data Visualization', 'KPI Analysis'],
      category: 'Business Intelligence',
      demoUrl: 'https://public.tableau.com/app/profile/obed.makori3675/viz/EVDashboard_17276813907140/Dashboard?publish=yes',
      githubUrl: '#'
    },
    {
      title: 'RetailX Sales Dashboard',
      description: 'Interactive Power BI dashboard providing insights into daily sales, profit margins, top-selling products, and regional performance for strategic decision making.',
      image: '📊',
      technologies: ['Power BI', 'DAX', 'Data Modeling', 'KPI'],
      category: 'Business Intelligence',
      demoUrl: 'https://github.com/Obed-Makori/RetailX-Power-BI-Dashboard',
      githubUrl: 'https://github.com/Obed-Makori/RetailX-Power-BI-Dashboard'
    }
  ];

  const categories = ['All', 'Machine Learning', 'Data Analysis', 'Business Intelligence'];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of real-world applications demonstrating data science and analytics expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
              className={category === 'All' 
                ? 'bg-primary text-primary-foreground' 
                : 'border-border hover:bg-primary hover:text-primary-foreground'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary overflow-hidden"
            >
              <CardHeader className="space-y-4">
                {/* Project Image/Icon */}
                <div className="w-full h-48 bg-gradient-card rounded-lg flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {project.image}
                </div>
                
                {/* Category and Title */}
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>

                {/* Technologies */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="text-xs border-muted hover:border-primary hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    asChild
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
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
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and help organizations 
              unlock the power of their data through innovative analytics solutions.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start a Project
              <i className="fas fa-arrow-right ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;