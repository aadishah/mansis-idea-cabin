import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-mountain.jpg";
const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Mountain sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-tight animate-fade-in-up">
          <span className="inline-block animate-fade-in-up" style={{
          animationDelay: '0.1s'
        }}>
            Hi, I'm Mansi.
          </span>
          <br />
          <span className="inline-block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in-up" style={{
          animationDelay: '0.3s'
        }}>
            I write ideas that move people.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-6 font-medium animate-fade-in-up" style={{
        animationDelay: '0.5s'
      }}>Creative Supervisor at FCB Kinnect</p>
        
        <p className="text-lg md:text-xl text-white/90 mb-14 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{
        animationDelay: '0.7s'
      }}>
          Turning briefs into bold campaigns. Breaking rules. Building brands. 
          One idea at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{
        animationDelay: '0.9s'
      }}>
          <Button onClick={scrollToWork} className="btn-hero group" size="lg">
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button className="btn-outline-hero" size="lg">
            Download Resume
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float opacity-80">
        <ArrowDown className="h-8 w-8 text-white drop-shadow-lg" />
      </div>
    </section>;
};
export default HeroSection;