import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, TrendingUp, Target } from "lucide-react";

const DemoSection = () => {
  const [uploadedFile, setUploadedFile] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const handleFileUpload = () => {
    setUploadedFile(true);
    setTimeout(() => setShowReport(true), 1500);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="text-gradient">MargDarshi</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience how our AI transforms your marks into meaningful career insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Upload Demo */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">
              1. Upload Your Report Card
            </h3>
            
            <Card className="p-8 border-2 border-dashed border-border hover:border-primary transition-colors">
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${
                  uploadedFile 
                    ? 'bg-gradient-to-r from-accent-green to-primary' 
                    : 'bg-gradient-to-r from-primary to-accent-orange'
                }`}>
                  {uploadedFile ? (
                    <FileText className="w-8 h-8 text-white" />
                  ) : (
                    <Upload className="w-8 h-8 text-white" />
                  )}
                </div>
                
                {!uploadedFile ? (
                  <>
                    <div>
                      <p className="text-lg font-medium mb-2">Drop your report card here</p>
                      <p className="text-muted-foreground">or click to browse files</p>
                    </div>
                    <Button onClick={handleFileUpload} className="btn-hero">
                      Try Demo Upload
                    </Button>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="text-lg font-medium text-accent-green mb-2">
                        ✅ Report card uploaded successfully!
                      </p>
                      <p className="text-muted-foreground">Analyzing your academic data...</p>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-accent-green to-primary h-2 rounded-full animate-pulse w-3/4"></div>
                    </div>
                  </>
                )}
              </div>
            </Card>
          </div>
          
          {/* Report Preview */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">
              2. Get Your Personalized Report
            </h3>
            
            <Card className={`p-6 transition-all duration-500 ${
              showReport ? 'opacity-100 transform translate-y-0' : 'opacity-50 transform translate-y-4'
            }`}>
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center border-b pb-4">
                  <h4 className="text-xl font-semibold text-gradient">Career Path Report</h4>
                  <p className="text-muted-foreground">Based on your academic profile</p>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-surface-elevated rounded-xl">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-5 h-5 text-accent-green mr-2" />
                      <span className="font-semibold">Learning Velocity</span>
                    </div>
                    <div className="text-2xl font-bold text-accent-green">8.2/10</div>
                  </div>
                  
                  <div className="text-center p-4 bg-surface-elevated rounded-xl">
                    <div className="flex items-center justify-center mb-2">
                      <Target className="w-5 h-5 text-primary mr-2" />
                      <span className="font-semibold">Adaptivity Score</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">7.8/10</div>
                  </div>
                </div>
                
                {/* Recommendations */}
                <div className="space-y-3">
                  <h5 className="font-semibold">Top Career Matches:</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-surface-elevated rounded-lg">
                      <span>Software Engineering</span>
                      <span className="text-accent-green font-semibold">92% match</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-surface-elevated rounded-lg">
                      <span>Data Science</span>
                      <span className="text-accent-green font-semibold">89% match</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-surface-elevated rounded-lg">
                      <span>Product Management</span>
                      <span className="text-accent-green font-semibold">85% match</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full btn-hero" disabled={!showReport}>
                  View Full Report & Growth Plan
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;