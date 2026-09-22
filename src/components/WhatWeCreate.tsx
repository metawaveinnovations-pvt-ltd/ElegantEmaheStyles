import React from 'react';
import { Sparkles, Heart, Gift, Flower2, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/creations';

interface WhatWeCreateProps {
  onSelectCategory: (category: string) => void;
}

export const WhatWeCreate: React.FC<WhatWeCreateProps> = ({ onSelectCategory }) => {
  const pillars = [
    {
      id: 'wedding',
      icon: Sparkles,
      title: 'Wedding & Nikkah Splendor',
      subtitle: 'Feathered Signing Pens, Mirror Trays & Contract Plaques',
      description: 'Marking the monumental transition of two lives with regal finishes — satin-wrapped signing pens, hand-beaded platters, and personalized marriage token frames.',
      image: '/images/wedding_nikkah_decor_1790114640381.jpg',
      tags: ['Feather Pens', 'Mirror Platters', 'Nikkah Plaques'],
    },
    {
      id: 'embroidery',
      icon: Heart,
      title: 'Custom Embroidery Hoops',
      subtitle: 'Hand-Lettered Urdu & English Calligraphy Keepsakes',
      description: 'From "Bhai Ki Shadi" and "Team Groom" to anniversary vow tributes. Each hoop combines precision hand-lettering, natural wooden frames, silk ribbon ties, and fine floral accents.',
      image: '/images/custom_embroidery_hoop_1790114593343.jpg',
      tags: ['Personalized Names', 'Family Titles', 'Silk Floral Borders'],
    },
    {
      id: 'bracelets',
      icon: Flower2,
      title: 'Artisanal Jewelry & Bracelets',
      subtitle: 'Butterfly Charms, Natural Pearls & Stacking Cuffs',
      description: 'Wearable tokens of grace. Meticulously hand-strung using lustrous freshwater pearls, colored crystal beads, and symbolic butterfly or evil-eye amulets.',
      image: '/images/handcrafted_bracelets_1790114605151.jpg',
      tags: ['Butterfly Charms', 'Freshwater Pearls', 'Matching Sets'],
    },
    {
      id: 'hampers',
      icon: Gift,
      title: 'Bespoke Hampers & Bouquets',
      subtitle: 'Fresh Blooms, Gourmet Delights & Illuminated Boxes',
      description: 'Curated gift hampers assembled with fresh spray roses, baby’s breath, imported chocolates, fragrance treats, and glowing warm fairy lights.',
      image: '/images/gift_hamper_bouquet_1790114626464.jpg',
      tags: ['Floral Bouquets', 'Gourmet Treats', 'Fairy Light Boxes'],
    },
  ];

  return (
    <section id="what-we-create" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#242120]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A07067] mb-2">
            <span>Our Craft Specialties</span>
            <span aria-hidden="true">·</span>
            <span>Handmade in Pakistan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242120] tracking-tight">
            What We Create
          </h2>
          <p className="mt-3 text-base text-[#665c59] leading-relaxed">
            Every creation is individually designed and handcrafted by Elegant Emahe Style. We turn feelings into tangible, timeless keepsakes.
          </p>
        </div>

        {/* 4-Pillar Grid with Visual Integrity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group flex flex-col justify-between bg-white rounded-xl border border-[#242120]/8 overflow-hidden shadow-xs hover:shadow-md hover:border-[#C9887C]/40 transition-all duration-300"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2ECE4]">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs p-2 rounded-full text-[#242120] shadow-xs">
                      <Icon className="w-4 h-4 text-[#A07067]" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-semibold text-[#242120] group-hover:text-[#A07067] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#8A7D78] font-medium mt-1">
                      {pillar.subtitle}
                    </p>
                    <p className="text-xs text-[#665c59] mt-3 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Unboxed Clean Metadata */}
                    <div className="mt-4 pt-3 border-t border-[#242120]/6 flex flex-wrap items-center gap-1.5 text-[11px] text-[#7A6E6A]">
                      {pillar.tags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          <span>{tag}</span>
                          {idx < pillar.tags.length - 1 && <span aria-hidden="true" className="text-[#C9887C]">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-5 pt-0">
                  <div className="flex items-center justify-between pt-3 border-t border-[#242120]/6">
                    <button
                      onClick={() => {
                        onSelectCategory(pillar.id);
                        const el = document.getElementById('categories');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-[#242120] hover:text-[#C9887C] flex items-center gap-1 group/btn"
                    >
                      <span>Explore Collection</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                    <a
                      href={getWhatsAppUrl(`Hello Elegant Emahe Style! I'd like to ask about your ${pillar.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#A07067] hover:underline font-medium"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
