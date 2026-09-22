import React from 'react';
import { Home, Compass, Sparkles, MessageCircle, Instagram } from 'lucide-react';
import { getWhatsAppUrl, INSTAGRAM_DM_URL } from '../data/creations';

interface MobileQuickBarProps {
  onOpenCustomOrder: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenCustomOrder }) => {
  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-lg border-t border-[#242120]/10 px-2 py-2 shadow-lg"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home with Brand Logo */}
        <a
          href="#"
          className="flex flex-col items-center justify-center p-1 text-[#665c59] hover:text-[#242120] transition-colors"
        >
          <div className="w-5 h-5 rounded-full overflow-hidden border border-[#A07067]/40 shadow-2xs bg-white">
            <img
              src="/logo.png"
              alt="Elegant Emahe Style"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-[10px] font-medium mt-0.5">Emahe</span>
        </a>

        {/* Explore */}
        <a
          href="#categories"
          className="flex flex-col items-center justify-center p-1 text-[#665c59] hover:text-[#242120] transition-colors"
        >
          <Compass className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-0.5">Explore</span>
        </a>

        {/* Custom Order */}
        <button
          onClick={onOpenCustomOrder}
          className="flex flex-col items-center justify-center p-1 text-[#A07067] hover:text-[#242120] transition-colors"
        >
          <div className="w-7 h-7 rounded-full bg-[#F5ECE8] border border-[#C9887C]/30 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-[#A07067]" />
          </div>
          <span className="text-[10px] font-semibold mt-0.5">Custom</span>
        </button>

        {/* WhatsApp */}
        <a
          href={getWhatsAppUrl("Hello! I'd like to ask about an order with Elegant Emahe Style.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1 text-[#136C34] transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span className="text-[10px] font-medium mt-0.5">WhatsApp</span>
        </a>

        {/* Instagram DM */}
        <a
          href={INSTAGRAM_DM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1 text-[#9B1E48] transition-colors"
        >
          <Instagram className="w-4 h-4 text-[#E1306C]" />
          <span className="text-[10px] font-medium mt-0.5">IG DM</span>
        </a>
      </div>
    </nav>
  );
};
