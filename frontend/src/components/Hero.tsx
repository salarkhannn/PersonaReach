import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("email-generator");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Zap className="mr-2 h-4 w-4" />
            AI-Powered Cold Email Generation
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Generate Personalized
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Cold Emails{" "}
            </span>
            in Seconds
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Turn any LinkedIn profile into highly personalized cold emails that get responses. 
            Our AI analyzes profiles and crafts compelling messages tailored to your purpose.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="group relative overflow-hidden"
            >
              Try It Free Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Profile Analysis Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3x</div>
              <div className="text-sm text-muted-foreground">Higher Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5 min</div>
              <div className="text-sm text-muted-foreground">Average Time Saved</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;