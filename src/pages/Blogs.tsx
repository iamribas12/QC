import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
                  <Link to={`/blogs/${blog.id}`} className="block">
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
                  </Link>
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
