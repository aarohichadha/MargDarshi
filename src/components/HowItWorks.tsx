import { Upload, Brain, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Marks",
      description: "Simply upload your report card or enter your marks across subjects and semesters."
    },
    {
      icon: Brain,
      title: "Take Quick Challenges",
      description: "Complete our adaptive assessments to measure your learning velocity and problem-solving approach."
    },
    {
      icon: FileText,
      title: "Get Personalized Report",
      description: "Receive detailed career recommendations with explanations and a 90-day upskilling roadmap."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-gradient">MargDarshi</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to transform your academic data into actionable career insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-accent-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="card-feature">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent-orange"></div>
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent-orange rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;