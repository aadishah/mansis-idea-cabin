import { Mountain, Dog, Plane, Book } from "lucide-react";

const AboutSection = () => {
  const funFacts = [
    { icon: Mountain, text: "Lives for trekking and mountain sunrises" },
    { icon: Dog, text: "Will always stop to pet a dog" },
    { icon: Plane, text: "Plans travel itineraries for fun" },
    { icon: Book, text: "Always has a book or podcast on the go" },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Story */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground animate-fade-in">About Me</h2>
            <div
              className="space-y-4 text-lg text-muted-foreground leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <p>
                I'm a creative writer and concept person in advertising, currently crafting campaigns at{" "}
                <span className="font-semibold text-accent">FCB Kinnect Digital</span>.
              </p>
              <p>
                Over the years, I've worked with three agencies on a diverse range of brands, learning that the best
                ideas come from curiosity, culture, and a relentless drive to break things open.
              </p>
              <p>
                Beyond client work, I pour energy into personal projects—passion briefs, experimental pieces, and ideas
                that refuse to stay in my head. I'm obsessed with storytelling in all its forms.
              </p>
              <p className="font-semibold text-primary text-xl">
                My big dream? To become National Creative Director at Kinnect. I'm building toward that goal one
                campaign, one idea, one mountain at a time.
              </p>
            </div>
          </div>

          {/* Right Column - Fun Facts */}
          <div
            className="bg-card rounded-3xl p-8 shadow-soft border border-border animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">When I'm Not Working</h3>
            <div className="space-y-6">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group hover-scale animate-scale-in"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors">
                    <fact.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-foreground pt-2 flex-1">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
