import { Mail, MessageCircle, Instagram, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/bindandbyte",
      color: "hover:text-primary"
    },
    {
      icon: Youtube,
      label: "YouTube",
      url: "https://youtube.com/@bindandbyte",
      color: "hover:text-destructive"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      url: "https://wa.me/1234567890",
      color: "hover:text-secondary"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:hello@bindandbyte.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <footer className="bg-card border-t-2 border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Bind & Byte
            </h3>
            <p className="text-muted-foreground">
              Crafting captivating books where imagination takes shape and stories find form.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/designs" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Designs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`bg-muted p-3 rounded-xl shadow-card hover:shadow-playful transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> by Bind & Byte
            {" • "}
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
