import React, { useEffect, useState } from 'react';
import { CreationItem, getWhatsAppUrl } from '../data/creations';
import { X, MessageCircle, Sparkles, Check, Clock, Truck, ShieldCheck, MapPin, Maximize2, Minimize2 } from 'lucide-react';

interface ProductDetailModalProps {
  item: CreationItem | null;
  onClose: () => void;
  onOpenCustomOrderWithItem: (item: CreationItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onOpenCustomOrderWithItem,
}) => {
  const [isFitMode, setIsFitMode] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>('');

  useEffect(() => {
    if (item) {
      setImgSrc(item.image);
      setImgLoaded(false);
      setIsFitMode(false);
    }
  }, [item]);

  // Close on Escape key press & prevent background page scrolling
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const inquiryMessage = `Hello Elegant Emahe Style! I am inquiring about your "${item.title}". Could you please share the customization options, pricing quote, and available turnaround time?`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#242120]/10 flex flex-col md:flex-row max-h-[92vh] sm:max-h-[88vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Close Button - Floating top right */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-3 right-3 z-30 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-xs transition-colors shadow-md"
          aria-label="Close product details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image Section - Restrained and proportionate */}
        <div className={`relative w-full md:w-5/12 lg:w-1/2 h-60 sm:h-72 md:h-auto md:min-h-[480px] shrink-0 overflow-hidden flex items-center justify-center transition-colors duration-300 ${
          isFitMode ? 'bg-[#181615]' : 'bg-[#F5ECE8]'
        }`}>
          {/* Skeleton while loading */}
          {!imgLoaded && (
            <div className="absolute inset-0 bg-[#F5ECE8] animate-pulse flex flex-col items-center justify-center text-[#A07067] z-0">
              <div className="w-10 h-10 rounded-full border border-[#A07067]/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 animate-spin text-[#C9887C]" />
              </div>
              <span className="text-xs text-[#8A7D78] mt-2 font-serif">Loading handcrafted creation...</span>
            </div>
          )}

          <img
            src={imgSrc || item.image}
            alt={item.title}
            onLoad={() => setImgLoaded(true)}
            onError={() => {
              if (imgSrc.startsWith('/images/')) {
                setImgSrc(imgSrc.replace('/images/', '/src/assets/images/'));
              } else if (!imgSrc.includes('logo.png')) {
                setImgSrc('/logo.png');
              }
              setImgLoaded(true);
            }}
            className={`w-full h-full transition-all duration-300 relative z-10 ${
              isFitMode ? 'object-contain p-3 sm:p-5' : 'object-cover object-center'
            } ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            referrerPolicy="no-referrer"
          />

          {/* Uncrop / Full Image Toggle Button */}
          <button
            type="button"
            onClick={() => setIsFitMode(!isFitMode)}
            className="absolute top-3.5 right-3.5 md:top-auto md:bottom-12 md:left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 text-white text-[11px] font-medium backdrop-blur-xs transition-colors shadow-sm border border-white/20"
            title={isFitMode ? "Fill card" : "View full uncropped creation"}
          >
            {isFitMode ? <Minimize2 className="w-3.5 h-3.5 text-[#E6BFA6]" /> : <Maximize2 className="w-3.5 h-3.5 text-[#E6BFA6]" />}
            <span>{isFitMode ? 'Fill' : 'View Full Image'}</span>
          </button>

          {/* Top Badge Overlay */}
          <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 z-10">
            <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[11px] font-semibold tracking-wider uppercase text-[#242120] rounded-md shadow-xs border border-[#242120]/5">
              {item.categoryLabel}
            </span>
          </div>

          {/* Bottom subtle gradient on mobile for text separation */}
          <div className="md:hidden absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
          
          <div className="hidden md:flex absolute bottom-3.5 left-3.5 right-3.5 items-center justify-between text-[11px] text-white/90 bg-[#242120]/85 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 shadow-xs z-10">
            <span className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo Seal"
                className="w-4 h-4 rounded-full object-cover border border-white/40"
                referrerPolicy="no-referrer"
              />
              <span>Authentic Handmade Creation</span>
            </span>
            <span className="text-white/70">@elegant_emahe_style_5</span>
          </div>
        </div>

        {/* Product Information & Action Area */}
        <div className="flex-1 flex flex-col min-h-0 bg-white">
          
          {/* Desktop Top Header Bar */}
          <div className="hidden md:flex items-center justify-between px-6 py-3.5 border-b border-[#242120]/8 bg-[#FAF8F5]">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#A07067]">
              <img
                src="/logo.png"
                alt="Elegant Emahe Style Logo"
                className="w-5 h-5 rounded-full object-cover border border-[#A07067]/30 shadow-2xs"
                referrerPolicy="no-referrer"
              />
              <span>Handcrafted Piece</span>
              <span className="text-[#242120]/20">·</span>
              <span className="text-[#665c59]">{item.categoryLabel}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#665c59] hover:text-[#242120] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
              aria-label="Close product details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-4 sm:py-5 space-y-4 text-left">
            
            {/* Title & Tagline */}
            <div>
              <h2
                id="modal-product-title"
                className="text-xl sm:text-2xl font-serif font-bold text-[#242120] leading-tight"
              >
                {item.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#8A7D78] italic font-serif">
                "{item.tagline}"
              </p>
            </div>

            {/* In-depth Narrative */}
            <p className="text-xs sm:text-sm text-[#554C48] leading-relaxed">
              {item.description}
            </p>

            {/* Quick Specs Micro-Grid */}
            <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-[#FAF8F5] rounded-xl border border-[#242120]/6 text-center">
              <div className="flex flex-col items-center justify-center p-1">
                <Clock className="w-4 h-4 text-[#A07067] mb-1" />
                <span className="text-[10px] uppercase font-semibold text-[#8A7D78]">Craft Time</span>
                <span className="text-xs font-medium text-[#242120] mt-0.5">3–6 Days</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 border-x border-[#242120]/8">
                <Truck className="w-4 h-4 text-[#A07067] mb-1" />
                <span className="text-[10px] uppercase font-semibold text-[#8A7D78]">Delivery</span>
                <span className="text-xs font-medium text-[#242120] mt-0.5">All Pakistan</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1">
                <ShieldCheck className="w-4 h-4 text-[#A07067] mb-1" />
                <span className="text-[10px] uppercase font-semibold text-[#8A7D78]">Approval</span>
                <span className="text-xs font-medium text-[#242120] mt-0.5">Pre-Dispatch</span>
              </div>
            </div>

            {/* Craft Materials */}
            <div className="pt-2 border-t border-[#242120]/8">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#242120] mb-2">
                Artisanal Materials:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.materials.map((mat) => (
                  <span
                    key={mat}
                    className="px-2.5 py-1 bg-[#F5ECE8]/60 text-[11px] font-medium text-[#554C48] rounded-md border border-[#242120]/8"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Customization Details */}
            <div className="pt-2 border-t border-[#242120]/8">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#242120] mb-2">
                Custom Options You Can Request:
              </p>
              <ul className="space-y-1.5">
                {item.customizable.map((opt) => (
                  <li key={opt} className="flex items-center gap-2 text-xs text-[#554C48]">
                    <div className="w-4 h-4 rounded-full bg-[#FAF8F5] border border-[#A07067]/40 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#A07067]" />
                    </div>
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Note */}
            <div className="flex items-center gap-2 text-[11px] text-[#7A6E6A] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#A07067] shrink-0" />
              <span>Studio based in Pakistan. Express courier delivery to Karachi, Lahore, Islamabad & nationwide.</span>
            </div>

          </div>

          {/* Pinned Action Footer */}
          <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-[#FAF8F5] border-t border-[#242120]/8 space-y-2 shrink-0">
            <div className="flex flex-col sm:flex-row gap-2.5">
              {/* WhatsApp Inquiry Button */}
              <a
                href={getWhatsAppUrl(inquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 sm:py-3 px-4 bg-[#242120] hover:bg-[#3D3735] text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-xs group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>Order via WhatsApp</span>
              </a>

              {/* Personalize in Studio Button */}
              <button
                onClick={() => {
                  onClose();
                  onOpenCustomOrderWithItem(item);
                }}
                className="py-2.5 sm:py-3 px-4 bg-white hover:bg-[#FAF8F5] text-[#242120] border border-[#242120]/15 text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A07067]" />
                <span>Personalize in Studio</span>
              </button>
            </div>

            <p className="text-[10px] text-center text-[#8A7D78]">
              Personalized orders are handcrafted upon consultation · Final photos shared for your approval
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
