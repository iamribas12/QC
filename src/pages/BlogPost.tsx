import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/data/blogData";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const blog = blogPosts.find((post) => post.id === Number(id));

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast({
      title: "Link Copied!",
      description: "Blog post link copied to clipboard.",
    });
  };

  return (
    <article className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/blogs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Link>
        </Button>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              {blog.category}
            </Badge>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(blog.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {blog.readTime}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="ml-auto"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {blog.content.introduction}
            </p>
          </div>

          <Separator className="my-12" />

          {/* Sections */}
          <div className="space-y-12">
            {blog.content.sections.map((section, index) => (
              <section key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {section.heading}
                </h2>
                <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {section.text}
                </div>
              </section>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Conclusion */}
          <div className="bg-muted/30 p-8 rounded-lg">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Conclusion
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {blog.content.conclusion}
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((post) => post.id !== blog.id && post.category === blog.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blogs/${relatedPost.id}`}
                    className="group"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>

          {/* Back to Blogs */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blogs">
                <ArrowLeft className="mr-2 h-5 w-5" />
                View All Articles
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
