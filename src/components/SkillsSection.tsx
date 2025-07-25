import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    { name: 'Python', level: 85, icon: 'fab fa-python', color: 'skill-python' },
    { name: 'SQL', level: 80, icon: 'fas fa-database', color: 'skill-data' },
    { name: 'Power BI', level: 75, icon: 'fas fa-chart-pie', color: 'skill-bi' },
    { name: 'Oracle Analytics', level: 60, icon: 'fas fa-chart-line', color: 'skill-ml' },
    { name: 'ETL', level: 55, icon: 'fas fa-sitemap', color: 'skill-data' },
    { name: 'Cloud (AWS)', level: 25, icon: 'fab fa-aws', color: 'skill-python' }
  ];

  const expertiseAreas = [
    { title: 'Data Analysis', percentage: 90, color: 'skill-data' },
    { title: 'BI Engineering', percentage: 80, color: 'skill-bi' },
    { title: 'ML Engineering', percentage: 60, color: 'skill-ml' },
    { title: 'Data Science', percentage: 75, color: 'skill-python' }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Tools & Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <i className={`${skill.icon} text-lg text-primary`} />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Areas of Expertise</h3>
            <div className="grid grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <Card key={area.title} className="bg-gradient-card border-border relative overflow-hidden group">
                  <CardContent className="p-6 text-center">
                    {/* Circular Progress */}
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-muted stroke-current"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-primary stroke-current transition-all duration-1000 ease-out"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                          strokeDasharray={`${area.percentage}, 100`}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          style={{ animationDelay: `${index * 0.3}s` }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{area.percentage}%</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {area.title}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications & Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Microsoft Power BI', issuer: 'Microsoft', status: 'In Progress' },
              { title: 'AWS Cloud Practitioner', issuer: 'Amazon', status: 'Planned' },
              { title: 'Google Data Analytics', issuer: 'Google', status: 'Completed' }
            ].map((cert, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors duration-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    cert.status === 'Completed' 
                      ? 'bg-primary/10 text-primary' 
                      : cert.status === 'In Progress'
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {cert.status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;