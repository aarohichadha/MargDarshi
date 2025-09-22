import { TrendingUp, Zap, MessageSquare, Brain, Globe } from "lucide-react";

const USPSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Learning Velocity Index",
      description: "Track your improvement patterns across subjects and identify your learning strengths.",
      color: "from-accent-green to-primary"
    },
    {
      icon: Zap,
      title: "Adaptivity Quotient",
      description: "Measure your problem-solving approach, resilience, and ability to adapt to new challenges.",
      color: "from-accent-orange to-accent-green"
    },
    {
      icon: MessageSquare,
      title: "Explainable Career Paths",
      description: "Understand exactly why we recommend specific careers based on your unique profile.",
      color: "from-primary to-accent-orange"
    },
    {
      icon: Brain,
      title: "Growth-Mindset Reporting",
      description: "Focus on potential and improvement rather than just current performance levels.",
      color: "from-accent-green to-primary"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Access guidance in Hindi, English, and regional languages for better understanding.",
      color: "from-accent-orange to-accent-green"
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Skill Recommendations",
      description: "Get personalized skill suggestions based on current industry trends and your career path.",
      color: "from-primary to-accent-green"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-surface-elevated to-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">MargDarshi</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our unique approach goes beyond traditional career counselling to provide 
            deep insights into your learning patterns and growth potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-feature group">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-surface p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ready to discover your true potential?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our mission to guide students toward meaningful careers based on their unique strengths.
            </p>
            <button 
              className="btn-hero"
              onClick={() => {
                // Basic click functionality - requires backend
                alert("Feature coming soon! Connect Supabase for full functionality.");
              }}
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;