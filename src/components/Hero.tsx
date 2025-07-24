'use client';

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("email-generator");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#FAF9F7' }}>
      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl rounded-t-[32px] border border-dashed border-black/16" style={{ backgroundColor: '#FFFDFA' }}>
        <div className="px-6 py-20 md:py-24">
          {/* Main Content */}
          <div className="mx-auto max-w-4xl text-center">
            {/* Heading with decorative element */}
            <div className="relative mb-12">
              <h1 className="font-serif text-4xl font-normal leading-tight md:text-6xl lg:text-7xl" style={{ color: '#030303', lineHeight: '1.15', letterSpacing: '-3px' }}>
                Generate Personalized
                <br />
                <span className="relative">
                  Cold Emails
                  {/* Decorative rotating element */}
                  {/* <div className="absolute h-12 w-12 rotate-12 rounded-2xl bg-gradient-to-br from-yellow-100 to-purple-100 shadow-md md:-right-16 md:top-2 md:h-16 md:w-16">
                    <div className="flex h-full w-full items-center justify-center">
                      <Mail className="h-6 w-6 text-gray-700 md:h-8 md:w-8" />
                    </div>
                  </div> */}
                </span>
                {" "}in Seconds
              </h1>
            </div>

            {/* Description */}
            <p className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg" style={{ color: '#6C6E74' }}>
              Turn any LinkedIn profile into highly personalized cold emails that get responses.
              <br />
              Our AI analyzes profiles and crafts compelling messages tailored to your purpose.
            </p>

            {/* CTA Button */}
            <div className="mb-8">
              <Button
                onClick={scrollToForm}
                className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-white shadow-lg hover:bg-gray-800"
                style={{
                  boxShadow: '0 14px 14px -3.5px rgba(0, 0, 0, 0.08), 0 4.468px 4.468px -2.625px rgba(0, 0, 0, 0.14)'
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Try It Free Now
              </Button>
            </div>

            {/* User Avatars and Stats */}
            <div className="mb-16 flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=72&h=72&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=72&h=72&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=72&h=72&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=72&h=72&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=72&h=72&fit=crop&crop=face'
                ].map((src, i) => (
                  <div key={i} className="h-9 w-9 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600" style={{ color: '#6C6E74' }}>
                500+ people wait for launch
              </p>
            </div>

            {/* Dashboard Mockup */}
            <div className="mx-auto mb-16 max-w-4xl">
              <div className="relative rounded-2xl border-8 border-gray-800 p-8 shadow-2xl" style={{ backgroundColor: '#FAF9F7' }}>
                {/* Glowing background effect */}
                <div className="absolute -inset-32 rounded-full bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-purple-400/20 blur-3xl"></div>

                {/* Dashboard content */}
                <div className="relative rounded-xl border border-gray-300 bg-white p-6 shadow-lg" style={{ transform: 'rotate(-1deg)' }}>
                  {/* Mock Analytics Chart */}
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-600">Email Performance</h3>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-gray-500">Response Rate</span>
                    </div>
                  </div>

                  <div className="relative h-32">
                    {/* Mock chart lines */}
                    <svg className="h-full w-full" viewBox="0 0 300 100">
                      <polyline
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        points="0,80 50,60 100,40 150,30 200,20 250,15 300,10"
                      />
                      <polyline
                        fill="none"
                        stroke="#EF4444"
                        strokeWidth="2"
                        points="0,90 50,85 100,70 150,60 200,50 250,45 300,40"
                      />
                    </svg>

                    {/* Mock data point */}
                    <div className="absolute left-1/2 top-1/4 rounded bg-gray-800 px-2 py-1 text-xs text-white">
                      99%
                      <div className="text-xs opacity-75">Response Rate</div>
                    </div>
                  </div>

                  {/* Days of week */}
                  <div className="mt-4 flex justify-between text-xs text-gray-400">
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                      <span key={day}>{day}</span>
                    ))}
                  </div>

                  {/* Mock metrics */}
                  <div className="mt-4 flex justify-between">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-gray-600">Cold Emails</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <span className="text-xs text-gray-600">Responses</span>
                    </div>
                  </div>
                </div>
              </div>
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

export default Hero;
