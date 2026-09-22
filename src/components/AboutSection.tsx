import React from 'react';
import { Heart, Sparkles, MapPin, CheckCircle, Instagram } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/creations';

export const AboutSection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#242120]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Emblem & Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#242120]/10 bg-white aspect-[4/5] relative">
                <img
                  src="/src/assets/images/custom_embroidery_hoop_1790114593343.jpg"
                  alt="Elegant Emahe Style artist handcrafted hoop creation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Brand Seal Overlay with official atelier logo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#242120]/85 via-[#242120]/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-white/90 shadow-lg mb-3 bg-white p-0.5">
                    <img
                      src="/logo.png"
                      alt="Elegant Emahe Style Official Atelier Seal"
                      className="w-full h-full rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-white font-semibold">
                    Elegant Emahe Style
                  </h3>
                  <p className="text-[11px] text-[#E6BFA6] font-sans tracking-wide uppercase">
                    Bracelets · Gifts · Wedding Items
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[#EAE0DC] mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E6BFA6]" />
                    <span>Based in Pakistan · Serving Nationwide & Beyond</span>
                  </div>
                </div>
              </div>

              {/* Subtle aesthetic backdrop border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9887C]/30 rounded-2xl -z-0 pointer-events-none hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Story & Ethos */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A07067]">
              <span>Behind the Studio</span>
              <span aria-hidden="true">·</span>
              <span>The Handmade Ethos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#242120] tracking-tight leading-tight">
              Where every stitch, bead, and bow is crafted with love.
            </h2>

            <p className="text-base text-[#665c59] leading-relaxed">
              Elegant Emahe Style was born from a passion for tactile craftsmanship and the joy of gifting things that truly mean something. In a world filled with mass-produced items, we believe milestone celebrations — weddings, Nikkahs, birthdays, and new chapters — deserve something lovingly made by human hands.
            </p>

            <p className="text-base text-[#665c59] leading-relaxed">
              As an independent handmade artist and content creator in Pakistan, every custom embroidery hoop, pearl bracelet stack, celebratory signing pen, and bloom hamper is personally curated. We take pride in listening closely to our clients’ stories and weaving their names, colors, and sentiments into timeless keepsakes.
            </p>

            {/* Ethos pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-lg border border-[#242120]/8">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#242120] mb-1">
                  <Sparkles className="w-4 h-4 text-[#A07067]" />
                  <span>Artisanal Dedication</span>
                </div>
                <p className="text-xs text-[#665c59] leading-relaxed">
                  No factory shortcuts. Hand-lettered typography, fine embroidery floss, and select ribbon finishes.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-[#242120]/8">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#242120] mb-1">
                  <Heart className="w-4 h-4 text-[#A07067]" />
                  <span>Collaborations & PR</span>
                </div>
                <p className="text-xs text-[#665c59] leading-relaxed">
                  Open for brand deals, PR giftings, and UGC collaborations alongside bespoke private orders.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#242120] hover:text-[#A07067] transition-colors py-2 border-b border-[#242120]/20 hover:border-[#A07067]"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>Follow @{INSTAGRAM_HANDLE} on Instagram</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
