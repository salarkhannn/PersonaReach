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
import { sendEmailParams } from "@/utils/api";

interface EmailFormData {
  linkedinUrl: string;
  purpose: string;
  senderName: string;
  receiverName: string;
  tone: string;
  context: string;
}

const EmailGenerator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<EmailFormData>({
    linkedinUrl: "",
    purpose: "",
    senderName: "",
    receiverName: "",
    tone: "",
    context: "",
  });
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: keyof EmailFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
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
      const result = await sendEmailParams(formData.linkedinUrl, formData.purpose, formData.senderName, formData.receiverName, formData.tone, formData.context);
      alert(result.message);
    } catch (error) {
      alert("Error generating email. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedEmail);
    toast({
      title: "Copied!",
      description: "Email copied to clipboard.",
    });
  };

  const handleRegenerate = (e: React.FormEvent) => {
    e.preventDefault();
    handleGenerate(e);
  };

  return (
    <section id="email-generator" className="relative min-h-screen overflow-hidden py-20" style={{ backgroundColor: '#FAF9F7' }}>
      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl rounded-t-[32px] border border-dashed border-black/16" style={{ backgroundColor: '#FFFDFA' }}>
        <div className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-normal mb-4" style={{ color: '#030303', letterSpacing: '-1px' }}>
                Generate Your Cold Email
              </h2>
              <p className="text-lg" style={{ color: '#6C6E74' }}>
                Fill in the details below and let our AI create a personalized email for you
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="border-gray-300 shadow-lg" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-serif" style={{ color: '#030303' }}>
                    <Sparkles className="h-5 w-5" style={{ color: '#6C6E74' }} />
                    Email Configuration
                  </CardTitle>
                  <CardDescription style={{ color: '#6C6E74' }}>
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
                      value={formData.receiverName}
                      onChange={(e) => handleInputChange("receiverName", e.target.value)}
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
                  className="w-full rounded-xl bg-black text-white shadow-lg hover:bg-gray-800"
                  size="lg"
                  style={{
                    boxShadow: '0 14px 14px -3.5px rgba(0, 0, 0, 0.08), 0 4.468px 4.468px -2.625px rgba(0, 0, 0, 0.14)'
                  }}
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

              <Card className="border-gray-300 shadow-lg" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
                <CardHeader>
                  <CardTitle className="font-serif" style={{ color: '#030303' }}>Generated Email</CardTitle>
                  <CardDescription style={{ color: '#6C6E74' }}>
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
      </div>

      {/* Background overlay for depth */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-64 w-full max-w-6xl -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-purple-400/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default EmailGenerator;
