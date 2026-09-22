import React, { useState } from 'react';
import { Eye, X, Sparkles } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  aspect: string;
}

export const VisualGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const galleryItems: GalleryImage[] = [
    {
      id: 'g1',
      src: '/src/assets/images/custom_embroidery_hoop_1790114593343.jpg',
      title: 'Hand-Embroidered Floral Border & Custom Script',
      category: 'Embroidery Detail',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 'g2',
      src: '/src/assets/images/handcrafted_bracelets_1790114605151.jpg',
      title: 'Beaded Butterfly & Freshwater Pearl Wristwear',
      category: 'Artisanal Jewelry',
      aspect: 'aspect-square',
    },
    {
      id: 'g3',
      src: '/src/assets/images/wedding_nikkah_decor_1790114640381.jpg',
      title: 'Regal Plume Signing Pen & Mirrored Keepsake Tray',
      category: 'Nikkah Tokens',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'g4',
      src: '/src/assets/images/mehndi_dholki_thaal_1790115260811.jpg',
      title: 'Mayun & Mehndi Ceremonial Gota Thaal with Marigolds',
      category: 'Festive Ceremony',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'g5',
      src: '/src/assets/images/anniversary_hoop_frame_1790115273401.jpg',
      title: 'Anniversary Milestone Keepsake Hoop with Golden Needlework',
      category: 'Anniversary Keepsake',
      aspect: 'aspect-square',
    },
    {
      id: 'g6',
      src: '/src/assets/images/luxe_selfcare_hamper_1790115296363.jpg',
      title: 'Luxe Fragrance & Botanical Bridal Presentation Hamper',
      category: 'Gift Hampers',
      aspect: 'aspect-[3/4]',
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#242120]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A07067] mb-2">
            <span>Visual Archive</span>
            <span aria-hidden="true">·</span>
            <span>Studio Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242120] tracking-tight">
            The Craftsmanship in Detail
          </h2>
          <p className="mt-2 text-base text-[#665c59]">
            A closer look at the intricate textures, delicate beadwork, and satin ribbon packaging that define every Elegant Emahe Style creation.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative overflow-hidden rounded-xl border border-[#242120]/10 bg-[#F2ECE4] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className={`w-full ${item.aspect} overflow-hidden`}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#F4DCD6] font-medium">
                  {item.category}
                </span>
                <h4 className="text-base font-serif font-medium mt-0.5">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-[#EAE0DC]">
                  <Eye className="w-3.5 h-3.5 text-[#E6BFA6]" />
                  <span>Click to view macro zoom</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A07067] font-semibold">
                  {activeImage.category}
                </span>
                <h3 className="text-lg sm:text-xl font-serif text-[#242120]">
                  {activeImage.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#242120] bg-[#FAF8F5] border border-[#242120]/15 rounded-md hover:bg-[#EFEAE6]"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
