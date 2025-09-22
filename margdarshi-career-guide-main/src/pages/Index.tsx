import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import USPSection from "@/components/USPSection";
import SkillRecommendations from "@/components/SkillRecommendations";
import DemoSection from "@/components/DemoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Account for fixed header */}
        <Hero />
        <HowItWorks />
        <USPSection />
        <SkillRecommendations />
        <DemoSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;