import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, BookOpen, Palette } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full animate-bounce-slow">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Creative Book Studio</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                We craft and design{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  captivating books
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Where imagination takes shape and stories find form. Every page is a canvas, every word a brushstroke.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/designs">
                  <Button size="lg" className="group">
                    View Our Designs
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img
                src={heroBanner}
                alt="Creative book design studio with floating books and artistic elements"
                className="relative rounded-3xl shadow-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground">Bringing stories to life through artful design</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Book Design",
                description: "Beautiful covers and layouts that capture the essence of your story",
                color: "primary"
              },
              {
                icon: Palette,
                title: "Custom Illustrations",
                description: "Unique artwork tailored to your narrative and vision",
                color: "secondary"
              },
              {
                icon: Sparkles,
                title: "Creative Direction",
                description: "End-to-end guidance from concept to final publication",
                color: "accent"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-background p-8 rounded-2xl shadow-card hover:shadow-playful transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className={`bg-${feature.color}/10 text-${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-playful`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to bring your book to life?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Explore our portfolio or reach out to discuss your project.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default" className="animate-bounce-slow">
              Start Your Journey
              <Sparkles className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
