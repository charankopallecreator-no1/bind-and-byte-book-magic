import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, BookOpen, Palette } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full animate-bounce-slow text-sm">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                <span className="font-medium">Creative Book Studio</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                We craft and design{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  captivating books
                </span>
              </h1>
              
              <p className="text-base md:text-xl text-muted-foreground">
                Where imagination takes shape and stories find form. Every page is a canvas, every word a brushstroke.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <Link to="/designs" className="w-full sm:w-auto">
                  <Button size="lg" className="group w-full sm:w-auto">
                    View Our Designs
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-float mt-8 md:mt-0">
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
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">What We Do</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Bringing stories to life through artful design</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
                  className="bg-background p-6 md:p-8 rounded-2xl shadow-card hover:shadow-playful transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className={`bg-${feature.color}/10 text-${feature.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-playful`}>
                    <Icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Ready to bring your book to life?</h2>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Let's create something beautiful together. Explore our portfolio or reach out to discuss your project.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default" className="animate-bounce-slow">
              Start Your Journey
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
