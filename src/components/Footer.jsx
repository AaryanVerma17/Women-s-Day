import { Heart, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-primary fill-pink" />
            <span className="font-heading text-xl font-semibold">Voices of Her</span>
          </div>

          {/* Message */}
          <p className="text-muted-foreground max-w-md mx-auto font-body">
            Happy Women's Day <span className="text-pink">🌸</span>
            <br />
            Celebrating strength, kindness, and the incredible women who shape our lives.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-home">
              Home
            </Link>
            <Link to="/tribute-wall" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-tribute-wall">
              Tribute Wall
            </Link>
            <Link to="/card-generator" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-card-generator">
              Card Generator
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/bookish__strokes/"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              data-testid="social-instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aaryanverma2007/"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              data-testid="social-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            Made with <Heart className="w-3 h-3 inline text-pink fill-pink" /> for Women's Day 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
