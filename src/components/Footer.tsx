import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-primary mb-4">
              Quwwat<span className="text-accent">Calligraphy</span>
            </h3>
            <p className="text-muted-foreground">
              Preserving the timeless art of Arabic calligraphy and Islamic design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} QuwwatCalligraphy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
