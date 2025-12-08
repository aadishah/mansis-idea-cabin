import { Heart } from "lucide-react";
import chameleonLogo from "@/assets/chameleon-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <img src={chameleonLogo} alt="Logo" className="h-8 w-8 object-contain" />
            <p className="text-2xl font-heading font-bold">Mansi Nayyar</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span>and lots of coffee</span>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm text-primary-foreground/60">© {currentYear} Mansi Nayyar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
