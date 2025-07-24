'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Copy, RefreshCw, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmailFormData {
  linkedinUrl: string;
  purpose: string;
  senderName: string;
  companyName: string;
  tone: string;
  context: string;
}

const EmailGenerator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<EmailFormData>({
    linkedinUrl: "",
    purpose: "",
    senderName: "",
    companyName: "",
    tone: "",
    context: "",
  });
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: keyof EmailFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    if (!formData.linkedinUrl || !formData.purpose || !formData.senderName || !formData.tone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      // Dummy API call - replace with actual backend integration
      const response = await fetch('/api/generate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate email');
      }

      // For now, simulate with placeholder content
      setTimeout(() => {
        const mockEmail = `Subject: Quick connection regarding ${formData.purpose}

Hi [Name],

I came across your LinkedIn profile and was impressed by your background in [Industry/Role]. I noticed you've been working on [Recent Achievement/Project] at [Company].

I'm ${formData.senderName}${formData.companyName ? ` from ${formData.companyName}` : ''}, and I believe there might be a great opportunity for us to connect regarding ${formData.purpose.toLowerCase()}.

${formData.context ? `\n${formData.context}\n` : ''}

Would you be open to a brief 15-minute conversation this week to explore this further?

Best regards,
${formData.senderName}`;

        setGeneratedEmail(mockEmail);
        setIsGenerating(false);
        
        toast({
          title: "Email Generated!",
          description: "Your personalized email is ready.",
        });
      }, 2000);
    } catch (error) {
      setIsGenerating(false);
      toast({
        title: "Generation Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedEmail);
    toast({
      title: "Copied!",
      description: "Email copied to clipboard.",
    });
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  return (
    <section id="email-generator" className="py-20 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Generate Your Cold Email</h2>
            <p className="text-muted-foreground text-lg">
              Fill in the details below and let our AI create a personalized email for you
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Email Configuration
                </CardTitle>
                <CardDescription>
                  Provide the details for your personalized cold email
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="linkedin-url">LinkedIn Profile URL *</Label>
                  <Input
                    id="linkedin-url"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedinUrl}
                    onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Purpose of Email *</Label>
                  <Input
                    id="purpose"
                    placeholder="e.g., sales, networking, hiring, partnership"
                    value={formData.purpose}
                    onChange={(e) => handleInputChange("purpose", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sender-name">Your Name *</Label>
                    <Input
                      id="sender-name"
                      placeholder="John Doe"
                      value={formData.senderName}
                      onChange={(e) => handleInputChange("senderName", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input
                      id="company-name"
                      placeholder="Acme Corp"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Email Tone *</Label>
                  <Select onValueChange={(value) => handleInputChange("tone", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select email tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="witty">Witty</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="context">Additional Context (Optional)</Label>
                  <Textarea
                    id="context"
                    placeholder="Any specific details or context you'd like to include..."
                    value={formData.context}
                    onChange={(e) => handleInputChange("context", e.target.value)}
                    rows={3}
                  />
                </div>

                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating}
                  className="w-full"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Generate Email
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generated Email</CardTitle>
                <CardDescription>
                  Your personalized cold email will appear here
                </CardDescription>
              </CardHeader>
              <CardContent>
                {generatedEmail ? (
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <pre className="whitespace-pre-wrap text-sm font-mono">
                        {generatedEmail}
                      </pre>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleCopy} variant="outline" className="flex-1">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Email
                      </Button>
                      <Button onClick={handleRegenerate} variant="outline" className="flex-1">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Regenerate
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 text-muted-foreground">
                    <div className="text-center">
                      <Send className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Fill out the form and click "Generate Email" to see your personalized message</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailGenerator;