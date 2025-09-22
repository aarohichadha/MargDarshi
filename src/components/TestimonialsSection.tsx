import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Arjun Kumar",
      role: "Aspiring Engineer",
      location: "Mumbai",
      text: "I'm excited to try MargDarshi's approach of looking beyond just marks. Finally, a platform that promises to understand my learning style and potential!",
      rating: 5,
      image: "👨‍🎓"
    },
    {
      name: "Priya Sharma",
      role: "Class 12 Student", 
      location: "Delhi",
      text: "The concept of getting career recommendations with explanations sounds amazing. I can't wait to see what opportunities align with my strengths.",
      rating: 5,
      image: "👩‍🎓" 
    },
    {
      name: "Mrs. Anita Gupta",
      role: "Parent",
      location: "Delhi, IN",
      text: "As a parent, I'm thrilled about a platform that will help my daughter understand her true potential beyond academic scores. This is exactly what we need.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Prof. Rajesh Iyer", 
      role: "Career Counselor",
      location: "Bangalore",
      text: "The vision of MargDarshi to focus on learning patterns rather than just marks is revolutionary. I'm looking forward to recommending this to my students.",
      rating: 5,
      image: "👨‍🏫"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-surface-elevated to-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Voices from Our <span className="text-gradient">Future Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students, parents, and educators who are excited about the MargDarshi vision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-testimonial">
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-orange text-accent-orange" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* User Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-surface p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">50,000+</div>
                <div className="text-sm text-muted-foreground">Students Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">AI-Driven</div>
                <div className="text-sm text-muted-foreground">Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;