import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-mountain.jpg";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mountain sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
          Hi, I'm Mansi.
          <br />
          <span className="gradient-text">I write ideas that move people.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
          Creative Writer & Ad Ideator at FCB Kinnect Digital
        </p>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          Turning briefs into bold campaigns. Breaking rules. Building brands. 
          One idea at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToWork}
            className="btn-hero"
            size="lg"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            className="btn-outline"
            size="lg"
          >
            Download Resume
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
