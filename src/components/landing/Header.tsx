import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground">
              Loveable
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Try AI Demo
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("demo")}
            >
              See Demo
            </Button>
            <Button
              onClick={() => scrollToSection("cta")}
              className="gradient-primary text-primary-foreground shadow-soft hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("demo")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              >
                Try AI Demo
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              >
                Testimonials
              </button>
              <Button
                onClick={() => scrollToSection("cta")}
                className="gradient-primary text-primary-foreground shadow-soft w-full mt-2"
              >
                Get Started Free
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
