import React from 'react';
import { Instagram, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, getWhatsAppUrl } from '../data/creations';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1A19] text-[#E8E1DC] pt-16 pb-24 sm:pb-16 border-t border-[#242120]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-white/20 bg-white/10 shrink-0 p-0.5 shadow-xs">
                <img
                  src="/logo.png"
                  alt="Elegant Emahe Style Official Logo"
                  className="w-full h-full rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white tracking-tight font-semibold">
                  Elegant Emahe Style
                </h3>
                <p className="text-[10px] uppercase tracking-wider text-[#E6BFA6] font-sans">
                  Bracelets · Gifts · Wedding Items
                </p>
              </div>
            </div>
            <p className="text-xs text-[#A89A95] leading-relaxed max-w-sm">
              Thoughtful gifts, beautifully made. Bespoke handcrafted wedding keepsakes, custom calligraphy embroidery hoops, artisanal jewelry, and curated gift hampers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl("Hello Elegant Emahe Style!")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#E6BFA6] font-semibold">
              Explore Studio
            </p>
            <ul className="space-y-2 text-xs text-[#C7B9B4]">
              <li><a href="#creations" className="hover:text-white transition-colors">Featured Creations</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Shop by Category</a></li>
              <li><a href="#occasions" className="hover:text-white transition-colors">Shop by Occasion</a></li>
              <li><a href="#custom-orders" className="hover:text-white transition-colors">Custom Order Studio</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Visual Gallery</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">The Artist & Ethos</a></li>
            </ul>
          </div>

          {/* Col 3: Craft Specialties */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#E6BFA6] font-semibold">
              Craft Specialities
            </p>
            <ul className="space-y-2 text-xs text-[#C7B9B4]">
              <li>Wedding Nikkah Signing Pens</li>
              <li>Custom Embroidered Name Hoops</li>
              <li>Mirror Signature Platters & Trays</li>
              <li>Handmade Butterfly Pearl Bracelets</li>
              <li>Mehndi & Dholki Celebration Props</li>
              <li>Bloom & Surprise Gift Hampers</li>
            </ul>
          </div>

          {/* Col 4: Service & Location */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#E6BFA6] font-semibold">
              Location & Orders
            </p>
            <div className="text-xs text-[#A89A95] space-y-1.5">
              <p className="text-white font-medium">Pakistan Studio</p>
              <p>Nationwide Delivery</p>
              <p>Direct inquiries on WhatsApp and Instagram DM</p>
              <p className="text-[#C9887C] font-mono text-[11px] pt-1">@{INSTAGRAM_HANDLE}</p>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#E6BFA6] hover:text-white transition-colors pt-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar with MetaWave Innovations client branding */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7D78]">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Elegant Emahe Style. All rights reserved. Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#C9887C] inline fill-[#C9887C]" />
            <span>in Pakistan.</span>
          </div>

          {/* Agency Signature */}
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-[#A89A95]">Crafted for Elegant Emahe Style by</span>
            <span className="font-semibold text-white tracking-wide uppercase bg-white/10 px-2 py-0.5 rounded-sm">
              MetaWave Innovations
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
