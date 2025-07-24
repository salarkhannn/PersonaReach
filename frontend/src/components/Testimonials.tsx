import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sales Director",
      company: "TechFlow Solutions",
      avatar: "SC",
      rating: 5,
      quote: "PersonaReach has transformed our cold outreach. Our response rates went from 8% to 24% in just one month. The AI-generated emails feel genuinely personal and relevant."
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder",
      company: "GrowthLab",
      avatar: "MR",
      rating: 5,
      quote: "I was skeptical about AI-generated emails, but PersonaReach proved me wrong. The quality is incredible and saves me hours every week. My conversion rate has tripled."
    },
    {
      name: "Emily Thompson",
      role: "Recruitment Lead",
      company: "Talent Bridge",
      avatar: "ET",
      rating: 5,
      quote: "Finding the right candidates is challenging, but PersonaReach makes the initial outreach so much more effective. Candidates actually respond because the emails are truly personalized."
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of professionals who've improved their cold email game with PersonaReach
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;