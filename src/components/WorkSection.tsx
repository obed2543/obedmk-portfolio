import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WorkSection = () => {
  const services = [
    {
      icon: 'fas fa-square-poll-vertical',
      title: 'Dashboard Design',
      description: 'Using tools such as MS Excel, Power BI, Looker and Tableau, I develop data dashboards that provide business insights critical in decision making.',
      skills: ['Power BI', 'Tableau', 'Looker', 'Excel'],
      color: 'skill-bi'
    },
    {
      icon: 'fas fa-atom',
      title: 'Model Development', 
      description: 'I use a mix of Computer Science and Mathematics to clean data and develop both statistical and ML Models.',
      skills: ['Python', 'Scikit-learn', 'TensorFlow', 'Statistics'],
      color: 'skill-ml'
    },
    {
      icon: 'fab fa-python',
      title: 'Python for Data Analysis',
      description: 'I use Python to explore data and provide detailed insights through Exploratory Data Analysis (EDA).',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      color: 'skill-python'
    }
  ];

  return (
    <section id="work" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="text-primary">Do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized services that transform raw data into strategic business value
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