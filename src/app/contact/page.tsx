"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, MessageCircle, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dummy form submission - replace with actual backend integration
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative min-h-screen overflow-hidden py-20" style={{ backgroundColor: '#FAF9F7' }}>

        {/* Main Content Container */}
        <div className="relative mx-auto max-w-7xl rounded-t-[32px] border border-dashed border-black/16" style={{ backgroundColor: '#FFFDFA' }}>
          <div className="px-6 py-20">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <h1 className="font-serif text-4xl font-normal mb-4" style={{ color: '#030303', letterSpacing: '-1px' }}>
                Get in Touch
              </h1>
              <p className="text-lg" style={{ color: '#6C6E74' }}>
                Have questions about PersonaReach? We're here to help. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              <Card className="border-gray-300 shadow-lg" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
                <CardHeader>
                  <CardTitle className="font-serif" style={{ color: '#030303' }}>Send us a Message</CardTitle>
                  <CardDescription style={{ color: '#6C6E74' }}>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" style={{ color: '#030303' }}>Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" style={{ color: '#030303' }}>Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" style={{ color: '#030303' }}>Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        required
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" style={{ color: '#030303' }}>Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your question or feedback..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        className="border-gray-300"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full rounded-xl bg-black text-white shadow-lg hover:bg-gray-800" 
                      size="lg"
                      style={{
                        boxShadow: '0 14px 14px -3.5px rgba(0, 0, 0, 0.08), 0 4.468px 4.468px -2.625px rgba(0, 0, 0, 0.14)'
                      }}
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-gray-300 shadow-lg" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-serif" style={{ color: '#030303' }}>
                      <Mail className="h-5 w-5" style={{ color: '#6C6E74' }} />
                      Email Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4" style={{ color: '#6C6E74' }}>
                      For technical support and general inquiries:
                    </p>
                    <a 
                      href="mailto:support@personareach.ai" 
                      className="font-medium hover:underline"
                      style={{ color: '#030303' }}
                    >
                      support@personareach.ai
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-gray-300 shadow-lg" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-serif" style={{ color: '#030303' }}>
                      <MessageCircle className="h-5 w-5" style={{ color: '#6C6E74' }} />
                      Sales & Partnerships
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4" style={{ color: '#6C6E74' }}>
                      Interested in enterprise solutions or partnerships:
                    </p>
                    <a 
                      href="mailto:sales@personareach.ai" 
                      className="font-medium hover:underline"
                      style={{ color: '#030303' }}
                    >
                      sales@personareach.ai
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-gray-300 shadow-lg" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-serif" style={{ color: '#030303' }}>
                      <Clock className="h-5 w-5" style={{ color: '#6C6E74' }} />
                      Response Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm" style={{ color: '#6C6E74' }}>
                      <li>• General inquiries: 24 hours</li>
                      <li>• Technical support: 4-8 hours</li>
                      <li>• Sales questions: 2-4 hours</li>
                      <li>• Urgent issues: 1-2 hours</li>
                    </ul>
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
      
      <Footer />
    </div>
  );
}
