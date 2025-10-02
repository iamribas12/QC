import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Works" },
    { id: "traditional", name: "Traditional" },
    { id: "modern", name: "Modern" },
    { id: "geometric", name: "Geometric" },
  ];

  const artworks = [
    { id: 1, image: gallery1, title: "Bismillah", category: "traditional" },
    { id: 2, image: gallery2, title: "Geometric Harmony", category: "geometric" },
    { id: 3, image: gallery3, title: "Flowing Script", category: "modern" },
    { id: 4, image: gallery1, title: "Divine Words", category: "traditional" },
    { id: 5, image: gallery2, title: "Sacred Patterns", category: "geometric" },
    { id: 6, image: gallery3, title: "Contemporary Grace", category: "modern" },
  ];

  const filteredArtworks =
    selectedCategory === "all"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="font-display text-5xl font-bold text-foreground mb-4">
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of exquisite Arabic calligraphy and Islamic art
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-gradient-primary"
                  : ""
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <Card
              key={artwork.id}
              className="group overflow-hidden border-border shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        {artwork.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
