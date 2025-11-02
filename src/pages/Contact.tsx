import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Mail,
    label: "Email Us",
    description: "Drop us a line anytime",
    action: "mailto:hello@bindandbyte.com",
    color: "primary",
    buttonText: "Send Email"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description: "Chat with us directly",
    action: "https://wa.me/919908011844",
    color: "secondary",
    buttonText: "Open WhatsApp"
  },
  {
    icon: Instagram,
    label: "Instagram",
    description: "See our latest work",
    action: "https://www.instagram.com/bind_and_byte/",
    color: "accent",
    buttonText: "Follow Us"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Ready to bring your book to life? Reach out to book or order a design.
            </p>
            <p className="text-lg font-medium text-foreground">
              We're excited to hear about your project!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 text-center group"
                >
                  <div className={`bg-${method.color}/10 text-${method.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-playful`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{method.label}</h3>
                  <p className="text-muted-foreground mb-6">{method.description}</p>
                  
                  <a
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full" size="lg">
                      {method.buttonText}
                    </Button>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 shadow-card">
              <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    5+
                  </div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    100+
                  </div>
                  <p className="text-sm text-muted-foreground">Books Designed</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
