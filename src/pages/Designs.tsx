import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";
import bookCover4 from "@/assets/book-cover-4.jpg";
import bookCover5 from "@/assets/book-cover-5.jpg";
import bookCover6 from "@/assets/book-cover-6.jpg";

const designs = [
  {
    id: 1,
    image: bookCover1,
    title: "Dragons & Castles",
    description: "A fantasy adventure that soars through magical realms"
  },
  {
    id: 2,
    image: bookCover2,
    title: "Picnic Friends",
    description: "A heartwarming tale of friendship and fun"
  },
  {
    id: 3,
    image: bookCover3,
    title: "Space Explorer",
    description: "Journey through the cosmos with friendly robots"
  },
  {
    id: 4,
    image: bookCover4,
    title: "Mystery Clues",
    description: "Solve puzzles and uncover secrets in this detective story"
  },
  {
    id: 5,
    image: bookCover5,
    title: "Garden of Hearts",
    description: "A gentle romance blooming with love and beauty"
  },
  {
    id: 6,
    image: bookCover6,
    title: "Culinary Adventures",
    description: "Delicious recipes with a side of whimsy"
  }
];

const Designs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Designs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of our creative book covers and designs, each one crafted with passion and imagination.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <div
                key={design.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={design.image}
                      alt={`Book cover design: ${design.title}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-background transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">{design.title}</h3>
                        <p className="text-background/90">{design.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 lg:hidden">
                    <h3 className="text-xl font-bold mb-2">{design.title}</h3>
                    <p className="text-muted-foreground">{design.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Like what you see?</h2>
              <p className="text-muted-foreground mb-6">
                These are just a few examples of our work. We'd love to create something unique for your book!
              </p>
              <a href="/contact">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium shadow-playful hover:shadow-hover hover:scale-105 transition-all duration-300">
                  Let's Work Together
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Designs;
