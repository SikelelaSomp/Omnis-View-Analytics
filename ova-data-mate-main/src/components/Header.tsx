import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/2d606228-35e8-41e8-8a9c-8bb2a4b649bd.png" alt="OVA Logo" className="h-16 w-16" />
            <div className="text-2xl font-bold text-primary">OVA</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="/#features" className="text-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="/#how-it-works" className="text-foreground hover:text-primary transition-smooth">
              How It Works
            </a>
            <a href="/pricing" className="text-foreground hover:text-primary transition-smooth">
              Pricing
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="hero-outline" size="lg" asChild>
              <a href="/signup">
                Sign Up / Book Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-smooth">
                Home
              </a>
              <a href="/#features" className="text-foreground hover:text-primary transition-smooth">
                Features
              </a>
              <a href="/#how-it-works" className="text-foreground hover:text-primary transition-smooth">
                How It Works
              </a>
              <a href="/pricing" className="text-foreground hover:text-primary transition-smooth">
                Pricing
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-smooth">
                Contact
              </a>
              <Button variant="hero-outline" size="lg" className="w-full mt-4" asChild>
                <a href="/signup">
                  Sign Up / Book Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;