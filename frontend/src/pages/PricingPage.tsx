import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out PersonaReach",
      features: [
        "5 emails per month",
        "Basic personalization",
        "LinkedIn profile analysis",
        "Email templates",
        "Community support"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Starter",
      price: "$9",
      description: "Ideal for freelancers and small teams",
      features: [
        "100 emails per month",
        "Advanced personalization",
        "Multiple tone options",
        "Email analytics",
        "Priority support",
        "Custom templates"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Pro",
      price: "$29",
      description: "For growing businesses and agencies",
      features: [
        "Unlimited emails",
        "AI-powered insights",
        "A/B testing",
        "Team collaboration",
        "Advanced analytics",
        "API access",
        "Dedicated support"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-background">
        <div className="container">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="mx-auto max-w-4xl text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-muted-foreground text-lg">
              Simple, transparent pricing for every stage of your growth. Start free, upgrade when you're ready.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 space-y-6">
            <p className="text-muted-foreground">
              All plans include a 14-day free trial. No credit card required.
            </p>
            
            <div className="bg-muted/50 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="grid gap-6 md:grid-cols-2 text-left">
                <div>
                  <h4 className="font-medium mb-2">Can I change plans anytime?</h4>
                  <p className="text-sm text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">What happens if I exceed my email limit?</h4>
                  <p className="text-sm text-muted-foreground">You'll be notified when you approach your limit and can upgrade or wait for the next billing cycle.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Do you offer refunds?</h4>
                  <p className="text-sm text-muted-foreground">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Is there a setup fee?</h4>
                  <p className="text-sm text-muted-foreground">No setup fees. You only pay the monthly subscription fee for your chosen plan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PricingPage;