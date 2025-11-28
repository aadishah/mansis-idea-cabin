import { Sparkles, Pencil, Video, Lightbulb } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  medium: string;
  icon: typeof Sparkles;
};

const projects: Project[] = [
  {
    id: 1,
    title: "The Mountains Speak",
    description: "A photo essay and travel journal documenting stories from remote Himalayan villages. Words meet wanderlust.",
    medium: "Writing, Photography",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Spec Ad Series",
    description: "Reimagining campaigns for brands I love. What would I do if the brief was mine? Spoiler: bold things.",
    medium: "Concept, Copy",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Tiny Stories, Big Feels",
    description: "A collection of microfiction—50-word stories about love, loss, and everything in between.",
    medium: "Creative Writing",
    icon: Pencil,
  },
  {
    id: 4,
    title: "Behind the Brief",
    description: "Video series exploring the creative process—from brief to brilliant (or hilariously messy).",
    medium: "Video Content",
    icon: Video,
  },
];

const PersonalProjectsSection = () => {
  return (
    <section id="personal-projects" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Personal Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ideas born on bus rides, in mountain air, and 3 am brainstorms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-forest/10 p-4 rounded-xl">
                  <project.icon className="h-6 w-6 text-forest" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-3 uppercase tracking-wide">
                    {project.medium}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjectsSection;
