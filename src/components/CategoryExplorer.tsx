import React, { useState } from 'react';
import { CreationItem, CATEGORIES, getWhatsAppUrl } from '../data/creations';
import { MessageCircle, Eye, SlidersHorizontal } from 'lucide-react';

interface CategoryExplorerProps {
  creations: CreationItem[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onInspect: (item: CreationItem) => void;
}

export const CategoryExplorer: React.FC<CategoryExplorerProps> = ({
  creations,
  selectedCategory,
  onSelectCategory,
  onInspect,
}) => {
  const [activeSort, setActiveSort] = useState<'all' | 'featured'>('all');

  const filtered = creations.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="categories" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#242120]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A07067] mb-2">
            <span>The Catalog</span>
            <span aria-hidden="true">·</span>
            <span>Handmade Studio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242120] tracking-tight">
            Explore by Category
          </h2>
          <p className="mt-2 text-base text-[#665c59]">
            Browse our complete handcrafted archive. Every piece can be customized with your names, colors, inscriptions, and choice of luxury adornments.
          </p>
        </div>

        {/* Category Tabs (Segmented controls according to design rules) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`px-4 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#242120] text-white shadow-xs'
                    : 'bg-white text-[#665c59] hover:text-[#242120] hover:bg-[#F2ECE4] border border-[#242120]/8'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-[#242120]/8 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image slot with 4:3 or square ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2ECE4]">
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
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
                    <button
                      onClick={() => onInspect(item)}
                      className="px-3 py-1.5 bg-white/95 text-[#242120] rounded-md text-xs font-semibold shadow-xs flex items-center gap-1.5 hover:bg-white"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#A07067]" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-[#A07067]">
                    {item.categoryLabel}
                  </div>
                  <h3 className="text-base font-serif font-semibold text-[#242120] group-hover:text-[#A07067] transition-colors mt-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#665c59] mt-2 leading-relaxed line-clamp-2">
                    {item.tagline}
                  </p>

                  {/* Materials & Customizable list */}
                  <div className="mt-3 pt-3 border-t border-[#242120]/6 space-y-1">
                    <div className="text-[11px] text-[#7A6E6A] flex items-center gap-1">
                      <span className="font-medium text-[#242120]">Customization:</span>
                      <span className="truncate">{item.customizable.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#242120]/6 flex items-center justify-between">
                  <button
                    onClick={() => onInspect(item)}
                    className="text-xs font-medium text-[#665c59] hover:text-[#242120] transition-colors"
                  >
                    View Specs
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hello Elegant Emahe Style! I'd like to ask about custom ordering the "${item.title}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#136C34] bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-md transition-colors border border-[#25D366]/20"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Order</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-[#242120]/8 p-6">
            <p className="text-sm text-[#665c59]">No creations currently found in this category.</p>
            <button
              onClick={() => onSelectCategory('all')}
              className="mt-3 text-xs font-semibold text-[#A07067] hover:underline"
            >
              Show all creations
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
