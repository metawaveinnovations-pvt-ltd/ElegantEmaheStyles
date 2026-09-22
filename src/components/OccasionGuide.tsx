import React, { useState } from 'react';
import { OCCASIONS, CreationItem, getWhatsAppUrl } from '../data/creations';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

interface OccasionGuideProps {
  creations: CreationItem[];
  onInspect: (item: CreationItem) => void;
  onOpenCustomOrder: () => void;
}

export const OccasionGuide: React.FC<OccasionGuideProps> = ({
  creations,
  onInspect,
  onOpenCustomOrder,
}) => {
  const [selectedOccasion, setSelectedOccasion] = useState<string>('wedding');

  const activeOccasionMeta = OCCASIONS.find((o) => o.id === selectedOccasion) || OCCASIONS[0];
  const matchingCreations = creations.filter((item) =>
    item.occasion.includes(selectedOccasion as any)
  );

  return (
    <section id="occasions" className="py-16 sm:py-24 bg-[#F2ECE4]/50 border-b border-[#242120]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A07067] mb-2">
            <span>Milestone Matcher</span>
            <span aria-hidden="true">·</span>
            <span>Gifts with Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242120] tracking-tight">
            Shop by Occasion
          </h2>
          <p className="mt-2 text-base text-[#665c59]">
            Have an upcoming celebration? Select an occasion to discover curated tokens designed specifically for the moment.
          </p>
        </div>

        {/* Occasions Selector - Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {OCCASIONS.map((occ) => {
            const isSelected = selectedOccasion === occ.id;
            return (
              <button
                key={occ.id}
                onClick={() => setSelectedOccasion(occ.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#242120] text-white shadow-xs'
                    : 'bg-white text-[#665c59] hover:bg-[#FAF8F5] hover:text-[#242120] border border-[#242120]/8'
                }`}
              >
                <span>{occ.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Occasion Banner & Match Description */}
        <div className="bg-white rounded-xl border border-[#242120]/8 p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#A07067] font-semibold">
              Curated for {activeOccasionMeta.label}
            </div>
            <p className="text-base font-serif text-[#242120] mt-0.5">
              {activeOccasionMeta.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCustomOrder}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#242120] bg-[#FAF8F5] hover:bg-[#EFEAE6] border border-[#242120]/10 rounded-md transition-colors"
            >
              Custom Order for this Occasion
            </button>
            <a
              href={getWhatsAppUrl(`Hello! I need a custom gift for an upcoming ${activeOccasionMeta.label}. What do you recommend?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#242120] hover:bg-[#3D3735] rounded-md transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#E6BFA6]" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Occasion Creations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchingCreations.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-[#242120]/8 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2ECE4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[10px] font-medium uppercase tracking-wider text-[#242120] rounded-sm shadow-xs">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-serif font-semibold text-[#242120] group-hover:text-[#A07067] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#665c59] mt-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#242120]/6 flex items-center justify-between">
                  <button
                    onClick={() => onInspect(item)}
                    className="text-xs font-medium text-[#242120] hover:text-[#A07067]"
                  >
                    View Details
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hello! I'm interested in ordering "${item.title}" for a ${activeOccasionMeta.label}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#136C34] hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Order</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
