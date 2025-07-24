'use client';
import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#FAF9F7' }}>
      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl border-t border-dashed border-black/16" style={{ backgroundColor: '#FFFDFA' }}>
        <div className="px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="font-serif font-bold text-2xl" style={{ color: '#030303' }}>
                  PersonaReach.ai
                </div>
              </Link>
              <p className="mb-4 max-w-md" style={{ color: '#6C6E74' }}>
                Transform your cold outreach with AI-powered personalized emails that get responses. 
                Turn LinkedIn profiles into compelling conversations.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="transition-colors" style={{ color: '#6C6E74' }} onMouseEnter={(e) => e.currentTarget.style.color = '#030303'} onMouseLeave={(e) => e.currentTarget.style.color = '#6C6E74'}>
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="transition-colors" style={{ color: '#6C6E74' }} onMouseEnter={(e) => e.currentTarget.style.color = '#030303'} onMouseLeave={(e) => e.currentTarget.style.color = '#6C6E74'}>
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="transition-colors" style={{ color: '#6C6E74' }} onMouseEnter={(e) => e.currentTarget.style.color = '#030303'} onMouseLeave={(e) => e.currentTarget.style.color = '#6C6E74'}>
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-serif" style={{ color: '#030303' }}>Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="transition-colors" style={{ color: '#6C6E74' }} onMouseEnter={(e) => e.currentTarget.style.color = '#030303'} onMouseLeave={(e) => e.currentTarget.style.color = '#6C6E74'}>Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-serif" style={{ color: '#030303' }}>Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="transition-colors" style={{ color: '#6C6E74' }} onMouseEnter={(e) => e.currentTarget.style.color = '#030303'} onMouseLeave={(e) => e.currentTarget.style.color = '#6C6E74'}>Documentation</a></li>
                <li><Link href="/contact" className="transition-colors" style={{ color: '#6C6E74' }} onMouseEnter={(e) => e.currentTarget.style.color = '#030303'} onMouseLeave={(e) => e.currentTarget.style.color = '#6C6E74'}>Contact</Link></li>
                <li><a href="#" className="transition-colors" style={{ color: '#6C6E74' }} onMouseEnter={(e) => e.currentTarget.style.color = '#030303'} onMouseLeave={(e) => e.currentTarget.style.color = '#6C6E74'}>Help Center</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#6C6E74' }} onMouseEnter={(e) => e.currentTarget.style.color = '#030303'} onMouseLeave={(e) => e.currentTarget.style.color = '#6C6E74'}>Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-dashed border-black/16 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: '#6C6E74' }}>
              © 2025 PersonaReach.ai. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-sm transition-colors" style={{ color: '#6C6E74' }} onMouseEnter={(e) => e.currentTarget.style.color = '#030303'} onMouseLeave={(e) => e.currentTarget.style.color = '#6C6E74'}>
                Privacy Policy
              </a>
              <a href="#" className="text-sm transition-colors" style={{ color: '#6C6E74' }} onMouseEnter={(e) => e.currentTarget.style.color = '#030303'} onMouseLeave={(e) => e.currentTarget.style.color = '#6C6E74'}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
