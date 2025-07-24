'use client';

import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  const scrollToForm = () => {
    const formElement = document.getElementById("testimonials");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTestimonialsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      scrollToForm();
    } else {
      router.push("/#testimonials");
    }
  };

  return (
    <header className="sticky top-0 w-full py-4 z-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Navigation Container */}
        <div className="relative mx-auto w-full max-w-3xl rounded-2xl border border-zinc-600 bg-zinc-700 shadow-2xl backdrop-blur-sm"
             style={{
               backgroundColor: '#383735',
               boxShadow: '0 -20px 52px -5px rgba(255, 255, 255, 0.00) inset, 0 -6.383px 16.595px -3.75px rgba(255, 255, 255, 0.37) inset, 0 -2.415px 6.278px -2.5px rgba(255, 255, 255, 0.48) inset, 0 -0.796px 2.07px -1.25px rgba(255, 255, 255, 0.53) inset, 0 12px 12px -3px rgba(0, 0, 0, 0.06), 0 2.746px 2.746px -2px rgba(0, 0, 0, 0.08), 0 0.723px 0.723px -1px rgba(0, 0, 0, 0.09)'
             }}>

          {/* Background overlay texture */}
          <div className="absolute inset-0 rounded-2xl opacity-12 mix-blend-overlay overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-zinc-600 to-zinc-500"></div>
          </div>

          <div className="relative flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-5 ml-14">
              <a
                href="#testimonials"
                onClick={handleTestimonialsClick}
                className="text-sm font-normal text-white/90 transition-colors hover:text-white cursor-pointer"
                style={{ fontSize: '13px', letterSpacing: '-0.1px' }}
              >
                Testimonials
              </a>
              <Link
                href="/pricing"
                className={`text-sm font-normal transition-colors hover:text-white ${
                  isActive("/pricing") ? "text-white" : "text-white/90"
                }`}
                style={{ fontSize: '13px', letterSpacing: '-0.1px' }}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-sm font-normal text-white/90 transition-colors hover:text-white"
                style={{ fontSize: '13px', letterSpacing: '-0.1px' }}
              >
                Contact
              </Link>
            </nav>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Separator */}
              <div className="h-7 w-px bg-zinc-600"></div>
              {/* Get Template Button */}
              <Button
                variant="secondary"
                className="h-9 rounded-lg border border-zinc-600 bg-zinc-600 px-3 text-sm text-white shadow-sm hover:bg-zinc-500"
                style={{
                  backgroundColor: '#4D4D4D',
                  borderColor: '#454545',
                  boxShadow: '0 12px 12px -3.75px rgba(0, 0, 0, 0.05), 0 2.746px 2.746px -2.5px rgba(0, 0, 0, 0.14), 0 0.723px 0.723px -1.25px rgba(0, 0, 0, 0.16), 0 12px 12px -3.75px rgba(0, 0, 0, 0.16) inset, 0 2.746px 2.746px -2.5px rgba(0, 0, 0, 0.41) inset, 0 0.723px 0.723px -1.25px rgba(0, 0, 0, 0.47) inset'
                }}
                asChild
              >
                <Link href="#template" className="flex items-center">
                  <span style={{ fontSize: '13px', letterSpacing: '-0.1px' }}>
                    Join <span className="text-zinc-400">- Free</span>
                  </span>
                  <ExternalLink className="ml-2 h-4 w-4 text-black" />
                </Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-6">
          <div className="rounded-xl border border-zinc-600 bg-zinc-700 p-4 shadow-lg" style={{ backgroundColor: '#383735' }}>
            <div className="space-y-3">
              <Link
                href="/pricing"
                className="block text-sm font-normal text-white/90 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block text-sm font-normal text-white/90 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t border-zinc-600 pt-3">
                <Button
                  variant="secondary"
                  className="w-full rounded-lg border border-zinc-600 bg-zinc-600 text-sm text-white"
                  style={{ backgroundColor: '#4D4D4D', borderColor: '#454545' }}
                  asChild
                >
                  <Link href="#template">
                    Get template - Free
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
