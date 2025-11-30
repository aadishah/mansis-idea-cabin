import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import olaNzThumbnail from "@/assets/work/ola-nz-thumbnail.png";
import diataalThumbnail from "@/assets/work/diataal-thumbnail.png";
import linkedinThumbnail from "@/assets/work/linkedin-thumbnail.png";
import utecThumbnail from "@/assets/work/utec-thumbnail.png";

type WorkItem = {
  id: number;
  brand: string;
  title: string;
  category: string[];
  hook?: string;
  thumbnail: string;
  url: string;
};

const workItems: WorkItem[] = [
  {
    id: 1,
    brand: "Ola NZ",
    title: "Ready Before Your Are",
    category: ["Digital"],
    thumbnail: olaNzThumbnail,
    url: "https://www.youtube.com/watch?v=I3hqYrm1xTo",
  },
  {
    id: 2,
    brand: "Diataal",
    title: "Health Ka Daily Investment",
    category: ["Digital"],
    thumbnail: diataalThumbnail,
    url: "https://www.youtube.com/watch?v=MVpdGg32IPg",
  },
  {
    id: 3,
    brand: "LinkedIn",
    title: "Job Search and Professional Network",
    category: ["Digital"],
    thumbnail: linkedinThumbnail,
    url: "https://www.behance.net/gallery/144906827/LinkedIn-2022?tracking_source=search_projects%7Csatyajeet%20more",
  },
  {
    id: 4,
    brand: "Utec",
    title: "Mamaji Ke Bhi Mamaji",
    category: ["Digital"],
    thumbnail: utecThumbnail,
    url: "https://www.youtube.com/watch?v=tuO7DM6dvlI",
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
            <div
              key={item.id}
              className="card-work animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-video mb-4 overflow-hidden rounded-lg bg-muted block group"
              >
                <img
                  src={item.thumbnail}
                  alt={`${item.brand} - ${item.title}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-primary-foreground font-semibold text-lg">
                    View Work
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
              </a>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">{item.brand}</h3>
                <h4 className="text-2xl font-heading font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground italic">{item.hook}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.category.map((cat) => (
                  <Badge key={cat} variant="secondary" className="rounded-full">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
