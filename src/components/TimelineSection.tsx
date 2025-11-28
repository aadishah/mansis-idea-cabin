const brands = [
  "FCB Kinnect Digital",
  "Agency Two",
  "Agency One",
  "Brand Alpha",
  "Brand Beta",
  "Brand Gamma",
  "Brand Delta",
  "Brand Epsilon",
  "Brand Zeta",
  "Brand Eta",
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Brands & Agencies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through three agencies and countless brands
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-coral hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {brand}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Copy & Ideas for multiple campaigns
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view - simple grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden mt-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 shadow-soft border border-border text-center"
            >
              <p className="text-sm font-heading font-bold text-foreground">
                {brand}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
