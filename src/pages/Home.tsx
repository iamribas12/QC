import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-calligraphy.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Home = () => {
  const featuredWorks = [
    { id: 1, image: gallery1, title: "Bismillah" },
    { id: 2, image: gallery2, title: "Geometric Harmony" },
    { id: 3, image: gallery3, title: "Flowing Script" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-foreground">
            The Art of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Arabic Calligraphy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the timeless beauty and spiritual depth of Islamic calligraphic art
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary shadow-glow">
              <Link to="/gallery">
                Explore Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-accent" />
            <h2 className="font-display text-4xl font-bold text-foreground">
              Featured Works
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Handpicked masterpieces showcasing the beauty of calligraphic art
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => (
            <Card
              key={work.id}
              className="group overflow-hidden border-border shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                        {work.title}
                      </h3>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/gallery">View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/gallery">
              View All Works <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
            Explore the Beauty of Islamic Art
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Join us in celebrating and preserving the rich heritage of Arabic calligraphy
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
