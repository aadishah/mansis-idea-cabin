import { Mountain, Dog, Plane, Book } from "lucide-react";

const AboutSection = () => {
  const funFacts = [
    { icon: Mountain, text: "Lives for trekking and mountain sunrises" },
    { icon: Dog, text: "Will always stop to pet a dog" },
    { icon: Plane, text: "Plans travel itineraries for fun" },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Photo + Heading Row */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-muted border-4 border-accent/20 flex items-center justify-center overflow-hidden animate-fade-in shadow-soft">
            <span className="text-muted-foreground text-sm">Your Photo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground animate-fade-in text-center md:text-left">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Story */}
          <div className="space-y-6">
            <div
              className="space-y-4 text-lg text-muted-foreground leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <p>
                I was never built for a straight line. My life has been a series of brave left turns, journalism, literature, solo travel, teaching, and eventually advertising, all tied together by one instinct: to understand what moves people.
              </p>
              <p>
                Every detour gave me a new lens, a new rhythm, a new way to read the world. Today, I carry all of it into my work. Curiosity steadies me, chaos sharpens me, and the stories I've collected along the way help me create ideas that feel lived-in, honest, and impossible to forget.
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
