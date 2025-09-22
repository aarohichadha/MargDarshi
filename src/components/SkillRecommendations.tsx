import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Brain, Zap } from "lucide-react";

const SkillRecommendations = () => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  const careerProfiles = [
    {
      id: "software-engineer",
      title: "Software Engineer",
      icon: <Brain className="w-6 h-6" />,
      trending: ["Generative AI", "Cloud Computing", "DevOps", "Cybersecurity"],
      description: "Based on current tech trends"
    },
    {
      id: "data-scientist", 
      title: "Data Scientist",
      icon: <TrendingUp className="w-6 h-6" />,
      trending: ["MLOps", "Large Language Models", "Computer Vision", "Ethics in AI"],
      description: "High-demand AI skills"
    },
    {
      id: "product-manager",
      title: "Product Manager", 
      icon: <Zap className="w-6 h-6" />,
      trending: ["AI Product Strategy", "Growth Hacking", "User Psychology", "No-Code Tools"],
      description: "Modern product leadership"
    }
  ];

  const handleProfileClick = (profileId: string) => {
    setSelectedProfile(profileId);
    // This would require backend integration for full functionality
    alert("Skill recommendations feature requires backend integration. Connect Supabase for full functionality!");
  };

  return (
    <section className="section-padding bg-gradient-to-br from-background to-surface-elevated">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Trending <span className="text-gradient">Skill Recommendations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized skill suggestions based on your career path and current industry trends
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {careerProfiles.map((profile) => (
            <Card 
              key={profile.id} 
              className={`card-feature cursor-pointer transition-all duration-300 ${
                selectedProfile === profile.id ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              onClick={() => handleProfileClick(profile.id)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent-orange rounded-xl flex items-center justify-center text-white">
                  {profile.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{profile.title}</h3>
                  <p className="text-sm text-muted-foreground">{profile.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Trending Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.trending.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-accent-green/10 text-accent-green-foreground hover:bg-accent-green/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full mt-6 btn-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  handleProfileClick(profile.id);
                }}
              >
                Get Learning Path
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want personalized recommendations based on your unique profile?
          </p>
          <Button 
            className="btn-hero"
            onClick={() => alert("Connect Supabase for full personalization features!")}
          >
            Take Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillRecommendations;