import { Award, Trophy, Star, Medal } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Awards = () => {
  const awards = [
    {
      year: "2024",
      title: "Best Digital Campaign",
      organization: "Advertising Awards of Excellence",
      category: "Gold",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Creative Excellence Award",
      organization: "Industry Recognition Board",
      category: "Gold",
      icon: Award,
    },
    {
      year: "2023",
      title: "Social Impact Campaign",
      organization: "Marketing Society",
      category: "Silver",
      icon: Medal,
    },
    {
      year: "2022",
      title: "Rising Star in Advertising",
      organization: "Young Professionals Network",
      category: "Recognition",
      icon: Star,
    },
    {
      year: "2022",
      title: "Best Brand Activation",
      organization: "Experiential Marketing Summit",
      category: "Bronze",
      icon: Award,
    },
    {
      year: "2021",
      title: "Innovative Storytelling",
      organization: "Content Creators Guild",
      category: "Gold",
      icon: Trophy,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "gold":
        return "text-yellow-600 dark:text-yellow-400";
      case "silver":
        return "text-gray-400 dark:text-gray-300";
      case "bronze":
        return "text-orange-600 dark:text-orange-400";
      default:
        return "text-accent";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Awards & Recognition
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating the work that pushed boundaries and sparked conversations
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-accent/10 ${getCategoryColor(award.category)}`}>
                    <award.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-2">{award.year}</div>
                    <h3 className="font-heading font-bold text-lg mb-2">
                      {award.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {award.organization}
                    </p>
                    <span className={`inline-block text-sm font-medium ${getCategoryColor(award.category)}`}>
                      {award.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Awards;
