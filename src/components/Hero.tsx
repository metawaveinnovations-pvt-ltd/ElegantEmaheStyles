import React from 'react';
import { MessageCircle, Instagram, ArrowDown, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/creations';

interface HeroProps {
  onOpenCustomOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCustomOrder }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#242120]/6">
      {/* Subtle textured background nuances */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#C9887C_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Intentional Copy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Clean editorial kicker with official studio badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-[#242120]/8 shadow-2xs">
              <img
                src="/logo.png"
                alt="Elegant Emahe Style Official Badge"
                className="w-5 h-5 rounded-full object-cover border border-[#C9887C]/40"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#A07067]">
                Official Atelier Studio · Pakistan
              </span>
            </div>

            {/* Headline with balance */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#242120] leading-[1.1] tracking-tight [text-wrap:balance]">
                Thoughtful gifts, <br />
                <span className="italic font-medium text-[#B87063]">beautifully made.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#665c59] leading-relaxed max-w-xl font-normal">
                Every milestone deserves a keepsake crafted with intention. From custom-lettered wedding hoops and bespoke Nikkah signing sets to hand-strung crystal bracelets and bloom hampers — each piece is individually handmade for your cherished moments.
              </p>
            </div>

            {/* Primary Actions & Core Direct Order Channels */}
            <div className="space-y-4 pt-1">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#creations"
                  className="px-6 py-3.5 text-sm font-semibold tracking-wider uppercase text-white bg-[#242120] hover:bg-[#3D3735] rounded-md transition-all shadow-xs flex items-center justify-center gap-2 group"
                >
                  <span>Explore Creations</span>
                  <ArrowDown className="w-4 h-4 text-[#E6BFA6] group-hover:translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={onOpenCustomOrder}
                  className="px-6 py-3.5 text-sm font-semibold tracking-wider uppercase text-[#242120] bg-white hover:bg-[#FAF6F3] border border-[#242120]/15 rounded-md transition-all shadow-xs"
                >
                  Custom Order Studio
                </button>
              </div>

              {/* Real Direct Order Channels - WhatsApp & Instagram DM */}
              <div className="pt-2">
                <p className="text-xs font-medium uppercase tracking-wider text-[#8A7D78] mb-2.5">
                  Direct Order & Inquiry Channels
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={getWhatsAppUrl("Hello! I'm reaching out from the website to discuss an order with Elegant Emahe Style.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md bg-[#25D366]/10 text-[#136C34] hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Order via WhatsApp</span>
                  </a>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md bg-[#E1306C]/10 text-[#9B1E48] hover:bg-[#E1306C]/20 transition-colors border border-[#E1306C]/20"
                  >
                    <Instagram className="w-4 h-4 text-[#E1306C]" />
                    <span>DM @{INSTAGRAM_HANDLE}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quiet craft proof points */}
            <div className="pt-4 border-t border-[#242120]/8 flex items-center gap-6 text-xs text-[#7A6E6A]">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C9887C]" />
                <span>100% Handmade Creations</span>
              </div>
              <span aria-hidden="true" className="text-[#D3C7C2]">·</span>
              <div>
                <span>Custom Urdua & English Calligraphy</span>
              </div>
              <span aria-hidden="true" className="text-[#D3C7C2]">·</span>
              <div>
                <span>Occasion-Tailored Packaging</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Visual Container */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-[#242120]/10 bg-white aspect-[16/11] group">
                <img
                  src="/src/assets/images/hero_bespoke_gifting_1790114580200.jpg"
                  alt="Elegant Emahe Style handcrafted bespoke gifts arrangement with calligraphy hoop, Nikkah pen, and bridal favors"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                {/* Floating caption badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest font-medium text-[#F4DCD6]">
                    Featured Studio Creation
                  </p>
                  <p className="text-base sm:text-lg font-serif font-medium">
                    The Sacred Union Nikkah Keepsake & Floral Token
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-[#EAE0DC]">
                    <span>Custom Calligraphy</span>
                    <span aria-hidden="true">·</span>
                    <span>Plume & Silk Ribbon</span>
                    <span aria-hidden="true">·</span>
                    <span>Mirror Tray</span>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Accent Card - Verified Brand Seal */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-[#242120]/10 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#A07067]/30 shadow-2xs bg-white p-0.5">
                    <img
                      src="/logo.png"
                      alt="Elegant Emahe Style Official Seal"
                      className="w-full h-full rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-serif font-bold text-[#242120] leading-tight">Elegant Emahe Style</p>
                    <p className="text-[10px] text-[#A07067] font-medium leading-tight mt-0.5">Bracelets · Gifts · Wedding Items</p>
                    <p className="text-[10px] text-[#8A7D78]">@elegant_emahe_style_5</p>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Framer Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#C9887C]/30 rounded-xl -z-0 pointer-events-none hidden sm:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
