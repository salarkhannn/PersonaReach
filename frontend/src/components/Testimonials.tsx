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
    <section className="relative min-h-screen overflow-hidden py-20" style={{ backgroundColor: '#FAF9F7' }} id="testimonials">
      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl rounded-t-[32px] border border-dashed border-black/16" style={{ backgroundColor: '#FFFDFA' }}>
        <div className="px-6 py-20">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="font-serif text-3xl font-normal mb-4" style={{ color: '#030303', letterSpacing: '-1px' }}>
              What Our Users Say
            </h2>
            <p className="text-lg" style={{ color: '#6C6E74' }}>
              Join thousands of professionals who've improved their cold email game with PersonaReach
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-300 shadow-lg" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-sm mb-6 leading-relaxed" style={{ color: '#6C6E74' }}>
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm font-serif" style={{ color: '#030303' }}>{testimonial.name}</div>
                      <div className="text-xs" style={{ color: '#6C6E74' }}>
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background overlay for depth */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-64 w-full max-w-6xl -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-purple-400/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Testimonials;
