import { Heart, Mountain } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Mountain className="h-6 w-6" />
            <p className="text-2xl font-heading font-bold">Mansi</p>
          </div>
          
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Creative Writer & Ad Ideator crafting campaigns that move mountains and people.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span>and lots of coffee</span>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Mansi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
