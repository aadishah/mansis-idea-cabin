const experiences = [
  { company: "FCB Kinnect Digital", role: "Copy & Ideas for multiple campaigns", period: "2023 - Present" },
  { company: "Agency Two", role: "Copy & Ideas for multiple campaigns", period: "2022 - 2023" },
  { company: "Agency One", role: "Copy & Ideas for multiple campaigns", period: "2021 - 2022" },
  { company: "Brand Alpha", role: "Copy & Ideas for multiple campaigns", period: "2020 - 2021" },
  { company: "Brand Beta", role: "Copy & Ideas for multiple campaigns", period: "2019 - 2020" },
  { company: "Brand Gamma", role: "Copy & Ideas for multiple campaigns", period: "2018 - 2019" },
  { company: "Brand Delta", role: "Copy & Ideas for multiple campaigns", period: "2017 - 2018" },
  { company: "Brand Epsilon", role: "Copy & Ideas for multiple campaigns", period: "2016 - 2017" },
  { company: "Brand Zeta", role: "Copy & Ideas for multiple campaigns", period: "2015 - 2016" },
  { company: "Brand Eta", role: "Copy & Ideas for multiple campaigns", period: "2014 - 2015" },
];
const TimelineSection = () => {
  return <section id="timeline" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Experience
          </h2>
          
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-coral hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} animate-fade-in`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                    <div className="text-sm font-medium text-primary mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.role}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block"></div>
              </div>)}
          </div>
        </div>

        {/* Mobile view - simple grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden mt-12">
          {experiences.map((exp, index) => <div key={index} className="bg-card rounded-xl p-4 shadow-soft border border-border text-center">
              <p className="text-xs font-medium text-primary mb-1">
                {exp.period}
              </p>
              <p className="text-sm font-heading font-bold text-foreground">
                {exp.company}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TimelineSection;