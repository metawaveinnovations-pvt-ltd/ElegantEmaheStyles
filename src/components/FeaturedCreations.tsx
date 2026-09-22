import React from 'react';
import { CreationItem, getWhatsAppUrl } from '../data/creations';
import { MessageCircle, Eye, Sparkles } from 'lucide-react';

interface FeaturedCreationsProps {
  creations: CreationItem[];
  onInspect: (item: CreationItem) => void;
}

export const FeaturedCreations: React.FC<FeaturedCreationsProps> = ({
  creations,
  onInspect,
}) => {
  const featuredList = creations.filter((c) => c.featured);
  const heroItem = featuredList[0] || creations[0];
  const sideItems = featuredList.slice(1, 4);

  return (
    <section id="creations" className="py-16 sm:py-24 bg-[#F5ECE8]/40 border-b border-[#242120]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A07067] mb-2">
              <span>Curated Showcase</span>
              <span aria-hidden="true">·</span>
              <span>Made by Hand</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#242120] tracking-tight">
              Featured Studio Creations
            </h2>
            <p className="mt-2 text-base text-[#665c59]">
              An editorial glimpse into our signature wedding and celebratory commissions. Every piece is made individually with bespoke personalization.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello! I saw your Featured Studio Creations and would like to ask about custom availability.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#242120] hover:text-[#A07067] transition-colors self-start md:self-auto py-2 border-b border-[#242120]/20 hover:border-[#A07067]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#C9887C]" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>

        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Large Lead Feature (7 cols) */}
          <div className="lg:col-span-7 group bg-white rounded-xl border border-[#242120]/8 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#EFE9E3]">
              <img
                src={heroItem.image}
                alt={heroItem.title}
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('/images/')) {
                    target.src = target.src.replace('/images/', '/src/assets/images/');
                  } else if (!target.src.includes('logo.png')) {
                    target.src = '/logo.png';
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-xs text-[11px] font-medium tracking-wide uppercase text-[#242120] rounded-md shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#C9887C]" />
                  <span>Curator's Spotlight</span>
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#8A7D78]">
                  <span>{heroItem.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>Bespoke Order Item</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#242120] group-hover:text-[#A07067] transition-colors">
                  {heroItem.title}
                </h3>
                <p className="text-sm sm:text-base text-[#665c59] leading-relaxed">
                  {heroItem.description}
                </p>
                
                {/* Materials unboxed list */}
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#7A6E6A]">
                  <span className="font-medium text-[#242120]">Handcrafted with:</span>
                  {heroItem.materials.slice(0, 4).map((m, idx) => (
                    <span key={m}>
                      {m}{idx < Math.min(heroItem.materials.length, 4) - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action bar */}
              <div className="mt-6 pt-6 border-t border-[#242120]/8 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onInspect(heroItem)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#242120] bg-[#FAF8F5] hover:bg-[#EFEAE6] border border-[#242120]/10 rounded-md transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#A07067]" />
                  <span>Inspect Details</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Hello! I would love to enquire about ordering the "${heroItem.title}". Could you share options and timeline?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#242120] hover:bg-[#3D3735] rounded-md transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#E6BFA6]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Supporting Items Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl border border-[#242120]/8 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row lg:flex-row"
              >
                <div className="relative w-full sm:w-44 lg:w-40 aspect-square shrink-0 overflow-hidden bg-[#EFE9E3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.includes('/images/')) {
                        target.src = target.src.replace('/images/', '/src/assets/images/');
                      } else if (!target.src.includes('logo.png')) {
                        target.src = '/logo.png';
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#A07067] font-medium">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-base font-serif font-semibold text-[#242120] group-hover:text-[#A07067] transition-colors leading-snug mt-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#665c59] mt-1.5 line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#242120]/6 flex items-center justify-between">
                    <button
                      onClick={() => onInspect(item)}
                      className="text-xs text-[#242120] hover:text-[#A07067] font-semibold transition-colors"
                    >
                      View Details
                    </button>
                    <a
                      href={getWhatsAppUrl(`Hello! I'm interested in ordering the "${item.title}".`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[#136C34] hover:underline flex items-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3 text-[#25D366]" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
