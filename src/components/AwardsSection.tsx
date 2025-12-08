import { Award, Trophy, Star, Medal, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AwardsSection = () => {
  const featuredAwards = [
    {
      year: "2025",
      title: "Cannes Lions Silver",
      subcategory: "Outdoor – Breakthrough on a Budget",
      campaign: "Too Yumm! to Cheer",
      brand: "Too Yumm!",
      category: "Silver",
      icon: Trophy,
    },
    {
      year: "2025",
      title: "Abby Silver",
      subcategory: "Creative Abbys",
      campaign: "Big Sale of Small Things",
      brand: "Flipkart Minutes",
      category: "Silver",
      icon: Award,
    },
    {
      year: "2024",
      title: "Baby Blue Elephant",
      subcategory: "Kyoorius Creative Awards",
      campaign: "Too Yumm! to Cheer",
      brand: "Too Yumm!",
      category: "Baby Blue Elephant",
      icon: Medal,
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
    <section id="awards" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Work that's been recognized for pushing creative boundaries
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {featuredAwards.map((award, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col gap-4">
                <div className={`p-3 rounded-full bg-accent/10 ${getCategoryColor(award.category)} self-start`}>
                  <award.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">{award.year}</div>
                  <h3 className="font-heading font-bold text-lg mb-1">
                    {award.title}
                  </h3>
                  {award.subcategory && (
                    <p className="text-xs text-muted-foreground mb-1">
                      {award.subcategory}
                    </p>
                  )}
                  <p className="text-sm text-foreground/90 mb-1">
                    Campaign: {award.campaign}
                  </p>
                  <p className="text-sm font-medium text-foreground/80 mb-2">
                    Brand: {award.brand}
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
    </section>
  );
};

export default AwardsSection;
