import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const About = () => {
  const timeline = [
    { year: "2018", title: "The Beginning", description: "Started the journey of learning traditional Arabic calligraphy" },
    { year: "2020", title: "First Exhibition", description: "Showcased works in local art gallery" },
    { year: "2022", title: "International Recognition", description: "Featured in prestigious calligraphy magazine" },
    { year: "2024", title: "Digital Platform", description: "Launched QuwwatCalligraphy to share art with the world" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-display text-5xl font-bold text-foreground mb-4">
            About Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preserving tradition, embracing innovation
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <Card className="border-border shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  QuwwatCalligraphy was born from a deep passion for the timeless art of Arabic calligraphy
                  and Islamic design. What began as a personal journey of learning and practice has evolved
                  into a platform dedicated to preserving and sharing this beautiful tradition.
                </p>
                <p>
                  Through years of study and dedication, we've developed a unique style that honors classical
                  techniques while embracing contemporary aesthetics. Each piece is created with meticulous
                  attention to detail and a profound respect for the spiritual significance of the art form.
                </p>
                <p>
                  Our mission is to make Arabic calligraphy accessible to art lovers worldwide, fostering
                  appreciation for Islamic artistic heritage and inspiring a new generation of calligraphers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="flex gap-6 items-start animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-display text-2xl font-bold text-accent">
                    {item.year}
                  </span>
                </div>
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Tradition",
              description: "Honoring centuries-old calligraphic techniques and principles",
            },
            {
              title: "Excellence",
              description: "Maintaining the highest standards in every stroke and composition",
            },
            {
              title: "Innovation",
              description: "Exploring new ways to present timeless art in the modern world",
            },
          ].map((value, index) => (
            <Card
              key={value.title}
              className="border-border shadow-elegant animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
