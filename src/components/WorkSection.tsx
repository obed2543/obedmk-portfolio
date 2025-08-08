import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WorkSection = () => {
  const services = [
    {
      icon: 'fas fa-square-poll-vertical',
      title: 'Business Intelligence Development',
      description: 'Expert BI developer creating comprehensive Power BI dashboards, Tableau visualizations, and Excel analytics solutions. Transform complex data into executive-ready insights that drive strategic business decisions and revenue growth.',
      skills: ['Power BI Development', 'Tableau Expert', 'Excel Analytics', 'KPI Dashboards'],
      color: 'skill-bi'
    },
    {
      icon: 'fas fa-database',
      title: 'Advanced Data Analysis & SQL', 
      description: 'Professional data analyst specializing in statistical analysis, predictive modeling, and database optimization. Expert SQL developer building efficient ETL pipelines and automated reporting systems for enterprise-scale data processing.',
      skills: ['Advanced SQL', 'Statistical Analysis', 'ETL Development', 'Database Optimization'],
      color: 'skill-data'
    },
    {
      icon: 'fab fa-python',
      title: 'Python Analytics Engineering',
      description: 'Certified Python specialist delivering end-to-end analytics solutions. From exploratory data analysis to machine learning model deployment, I build scalable Python applications that automate business processes and generate predictive insights.',
      skills: ['Python Expert', 'Machine Learning', 'Data Mining', 'Automated Analytics'],
      color: 'skill-python'
    }
  ];

  return (
    <section id="work" className="py-20 lg:py-32 bg-card/50 dark:bg-card/30">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="text-primary">Do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert data analyst and business intelligence developer delivering enterprise-grade analytics solutions that maximize ROI through data-driven decision making
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-2"
            >
              <CardHeader className="text-center space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} text-2xl text-primary`} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Skills */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Key Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-glow-primary transition-all duration-300"
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  See Projects
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            My <span className="text-primary">Process</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Understand', description: 'Define business objectives and data requirements' },
              { step: '02', title: 'Collect', description: 'Gather and validate data from multiple sources' },
              { step: '03', title: 'Analyze', description: 'Apply statistical and ML techniques for insights' },
              { step: '04', title: 'Deliver', description: 'Present actionable insights through visualizations' }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-lg">
                  {phase.step}
                </div>
                <h4 className="text-xl font-semibold text-foreground">{phase.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;