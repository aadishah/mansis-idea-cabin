import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

type WorkItem = {
  id: number;
  brand: string;
  title: string;
  category: string[];
};

const workItems: WorkItem[] = [
  {
    id: 1,
    brand: "Ola NZ",
    title: "Ready Before Your Are",
    category: ["Digital"],
  },
];

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Digital", "Social", "Films", "Experiential"];

  const filteredWork =
    activeFilter === "All" ? workItems : workItems.filter((item) => item.category.includes(activeFilter));

  return (
    <section id="work" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Selected Work</h2>
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
            <div key={item.id} className="card-work animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">{item.brand}</h3>
                <h4 className="text-2xl font-heading font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground italic">{item.hook}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.category.map((cat) => (
                  <Badge key={cat} variant="secondary" className="rounded-full">
                    {cat}
                  </Badge>
                ))}
              </div>
              <button className="mt-6 flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                View Work
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
