import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

type WorkItem = {
  id: number;
  brand: string;
  title: string;
  hook: string;
  category: string[];
  role: string;
  insight: string;
  description: string;
};

const workItems: WorkItem[] = [
  {
    id: 1,
    brand: "Brand A",
    title: "Campaign That Moved Mountains",
    hook: "Turning everyday moments into brand magic",
    category: ["Digital", "Social", "Personal Favorite"],
    role: "Creative Writer, Ideation",
    insight: "People don't buy products. They buy better versions of themselves.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crafted social-first content that sparked conversations and drove engagement across platforms.",
  },
  {
    id: 2,
    brand: "Brand B",
    title: "The Campaign That Broke Rules",
    hook: "When tradition meets disruption",
    category: ["Films", "Digital"],
    role: "Concept Development, Script",
    insight: "The best stories challenge what we think we know.",
    description: "Developed a film campaign that questioned industry norms and resonated with audiences seeking authenticity.",
  },
  {
    id: 3,
    brand: "Brand C",
    title: "Experience Redefined",
    hook: "Making the ordinary extraordinary",
    category: ["Experiential", "Social"],
    role: "Lead Writer, Creative Strategy",
    insight: "Memories beat messages every time.",
    description: "Created an immersive brand experience that turned casual observers into passionate advocates.",
  },
  {
    id: 4,
    brand: "Brand D",
    title: "Social That Sparked Joy",
    hook: "60-second stories that stayed forever",
    category: ["Social", "Digital", "Personal Favorite"],
    role: "Content Strategy, Copywriting",
    insight: "In a scroll-happy world, emotion stops thumbs.",
    description: "Crafted bite-sized content that punched above its weight in engagement and recall.",
  },
];

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const categories = ["All", "Digital", "Social", "Films", "Experiential", "Personal Favorite"];
  
  const filteredWork = activeFilter === "All" 
    ? workItems 
    : workItems.filter(item => item.category.includes(activeFilter));

  return (
    <section id="work" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Work that kept the deadlines and broke a few rules
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredWork.map((item, index) => (
            <div
              key={item.id}
              className="card-work animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  {item.brand}
                </h3>
                <h4 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground italic">
                  {item.hook}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.category.map((cat) => (
                  <Badge key={cat} variant="secondary" className="rounded-full">
                    {cat}
                  </Badge>
                ))}
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-foreground">Role: </span>
                  <span className="text-muted-foreground">{item.role}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Key Insight: </span>
                  <span className="text-muted-foreground italic">"{item.insight}"</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <button className="mt-6 flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                View Case Study
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
