import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "About",
    href: "#about"
  }, {
    label: "Work",
    href: "#work"
  }, {
    label: "Brands",
    href: "#brands"
  }, {
    label: "Awards",
    href: "#awards"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  const handleNavigation = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop} 
            className={`text-2xl font-heading font-bold cursor-pointer transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            Mansi Nayyar
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <button 
              key={item.href} 
              onClick={() => handleNavigation(item.href)} 
              className={`hover:text-accent transition-colors duration-300 font-medium ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {item.label}
            </button>)}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className={`md:hidden hover:text-accent transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 space-y-4 animate-fade-in">
            {navItems.map(item => <button 
              key={item.href} 
              onClick={() => handleNavigation(item.href)} 
              className={`block w-full text-left py-2 hover:text-accent transition-colors duration-300 font-medium ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {item.label}
            </button>)}
          </div>}
      </div>
    </nav>;
};
export default Navigation;