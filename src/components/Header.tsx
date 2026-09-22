import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '../data/creations';
import { MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenCustomOrder?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCustomOrder }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#242120]/8 shadow-xs'
          : 'bg-[#FAF8F5] border-b border-[#242120]/6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand wordmark with authentic circular logo medallion */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 group transition-opacity"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#A07067]/30 shadow-xs bg-white shrink-0 group-hover:scale-105 transition-transform">
            <img
              src="/logo.png"
              alt="Elegant Emahe Style Official Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-serif tracking-tight text-[#242120] group-hover:text-[#A07067] transition-colors whitespace-nowrap leading-none font-semibold">
              Elegant Emahe Style
            </span>
            <span className="text-[9px] sm:text-[9.5px] uppercase tracking-wider text-[#8A7D78] mt-1 font-sans hidden xs:block">
              Bracelets · Gifts · Wedding Items
            </span>
          </div>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#665c59]">
          <a
            href="#creations"
            className="hover:text-[#242120] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-px after:bg-[#C9887C] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Featured
          </a>
          <a
            href="#categories"
            className="hover:text-[#242120] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-px after:bg-[#C9887C] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Collections
          </a>
          <a
            href="#occasions"
            className="hover:text-[#242120] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-px after:bg-[#C9887C] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Occasions
          </a>
          <a
            href="#custom-orders"
            className="hover:text-[#242120] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-px after:bg-[#C9887C] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Custom Studio
          </a>
          <a
            href="#story"
            className="hover:text-[#242120] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-px after:bg-[#C9887C] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Our Story
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl("Hello Elegant Emahe Style! I'd like to ask about placing an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-[#242120] hover:bg-[#3E3836] rounded-md transition-colors whitespace-nowrap shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#E6BFA6]" />
            <span>Order on WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenCustomOrder?.()}
            className="hidden lg:inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#242120] bg-[#F5ECE8] hover:bg-[#EADFD9] border border-[#E1D4CE] rounded-md transition-colors whitespace-nowrap"
          >
            Custom Order
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#242120] hover:text-[#C9887C] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#242120]/10 bg-[#FAF8F5] px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#665c59]">
            <a
              href="#creations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#242120]"
            >
              Featured Creations
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#242120]"
            >
              Collections & Categories
            </a>
            <a
              href="#occasions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#242120]"
            >
              Shop by Occasion
            </a>
            <a
              href="#custom-orders"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#242120]"
            >
              Custom Order Studio
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#242120]"
            >
              The Artist & Craft
            </a>
            <a
              href="#instagram"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#242120]"
            >
              Instagram Feed (@elegant_emahe_style_5)
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={getWhatsAppUrl("Hello! I want to order from Elegant Emahe Style.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#242120] rounded-md"
            >
              <MessageCircle className="w-4 h-4 text-[#E6BFA6]" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
