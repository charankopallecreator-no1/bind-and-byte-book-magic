import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/designs", label: "Our Designs" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b-2 border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-2 rounded-xl shadow-playful group-hover:shadow-hover transition-all duration-300 group-hover:scale-110">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Bind & Byte
            </span>
          </Link>

          <div className="flex gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground shadow-playful scale-105"
                    : "text-foreground hover:bg-muted hover:scale-105"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
