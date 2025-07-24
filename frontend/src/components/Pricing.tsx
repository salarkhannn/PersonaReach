import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
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
    <section id="pricing" className="relative min-h-screen overflow-hidden py-20" style={{ backgroundColor: '#FAF9F7' }}>
      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl rounded-t-[32px] border border-dashed border-black/16" style={{ backgroundColor: '#FFFDFA' }}>
        <div className="px-6 py-20">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="font-serif text-3xl font-normal mb-4" style={{ color: '#030303', letterSpacing: '-1px' }}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg" style={{ color: '#6C6E74' }}>
              Choose the plan that best fits your cold email needs. Start free, upgrade when you're ready.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-gray-300 shadow-lg ${plan.popular ? 'ring-2 ring-blue-500' : ''}`} style={{ backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl font-serif" style={{ color: '#030303' }}>{plan.name}</CardTitle>
                  <CardDescription style={{ color: '#6C6E74' }}>{plan.description}</CardDescription>
                  <div className="text-4xl font-bold font-serif" style={{ color: '#030303' }}>
                    {plan.price}
                    <span className="text-lg font-normal" style={{ color: '#6C6E74' }}>/month</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm" style={{ color: '#030303' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    variant={plan.buttonVariant} 
                    className={`w-full rounded-xl shadow-lg ${plan.buttonVariant === 'default' ? 'bg-black text-white hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                    size="lg"
                    style={plan.buttonVariant === 'default' ? {
                      boxShadow: '0 14px 14px -3.5px rgba(0, 0, 0, 0.08), 0 4.468px 4.468px -2.625px rgba(0, 0, 0, 0.14)'
                    } : {}}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p style={{ color: '#6C6E74' }}>
              All plans include a 14-day free trial. No credit card required.
            </p>
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

export default Pricing;
