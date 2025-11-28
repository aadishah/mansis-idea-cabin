import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "The Brief Is a Starting Point, Not a Prison",
    excerpt: "Why the best ideas come from questioning everything—including the brief itself. A reflection on creative freedom within constraints.",
    date: "Nov 15, 2025",
    category: "Advertising",
  },
  {
    id: 2,
    title: "Why Mountains Make Better Mentors",
    excerpt: "What trekking taught me about patience, perspective, and the value of taking the long route. Plus, some incredible sunrise photos.",
    date: "Oct 28, 2025",
    category: "Travel",
  },
  {
    id: 3,
    title: "Stealing Like an Artist (Legally)",
    excerpt: "How inspiration works, where ideas come from, and why your reading list matters more than you think.",
    date: "Oct 12, 2025",
    category: "Creativity",
  },
];

const JournalSection = () => {
  return (
    <section id="journal" className="section-padding bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Ideas & Writing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on advertising, culture, creativity, and everything in between
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1 bg-coral/20 text-coral rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <button className="flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition-colors">
                Read More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-outline">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
