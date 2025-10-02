import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The History of Arabic Calligraphy",
      excerpt: "Explore the rich heritage and evolution of Arabic calligraphic art through the centuries, from its origins to modern interpretations.",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "History",
      image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&q=80",
    },
    {
      id: 2,
      title: "Mastering Thuluth Script",
      excerpt: "A comprehensive guide to understanding and practicing one of the most elegant Arabic calligraphy styles.",
      date: "2025-01-10",
      readTime: "8 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&q=80",
    },
    {
      id: 3,
      title: "Tools of the Trade: Traditional vs Modern",
      excerpt: "Discover the essential tools used by calligraphers and how technology is shaping the art form today.",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Resources",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
    },
    {
      id: 4,
      title: "Islamic Geometry in Calligraphy",
      excerpt: "Understanding the mathematical beauty and spiritual significance of geometric patterns in Islamic art.",
      date: "2024-12-28",
      readTime: "7 min read",
      category: "Art & Design",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    },
    {
      id: 5,
      title: "Contemporary Arabic Calligraphy Artists",
      excerpt: "Meet the modern masters who are pushing the boundaries of traditional calligraphic art.",
      date: "2024-12-20",
      readTime: "10 min read",
      category: "Artists",
      image: "https://images.unsplash.com/photo-1577083552431-6e5fd01d3e03?w=800&q=80",
    },
    {
      id: 6,
      title: "The Spiritual Dimension of Calligraphy",
      excerpt: "Exploring how calligraphy serves as a meditative practice and spiritual expression in Islamic culture.",
      date: "2024-12-15",
      readTime: "6 min read",
      category: "Spirituality",
      image: "https://images.unsplash.com/photo-1602524206684-def33d7c5c8c?w=800&q=80",
    },
  ];

  const filteredBlogs = blogPosts.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Blog
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-8">
              Insights, tutorials, and stories from the world of Arabic calligraphy
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles by title, category, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-background/95 backdrop-blur-sm border-border shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 py-16">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <Card
                key={blog.id}
                className="group overflow-hidden border-border shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      {blog.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(blog.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {blog.readTime}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    
                    <Button variant="ghost" className="p-0 h-auto font-semibold group/btn">
                      Read More 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardHeader>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No articles found matching your search.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;
