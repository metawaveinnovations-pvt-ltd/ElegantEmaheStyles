import React, { useState } from 'react';
import { MessageCircle, Instagram, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, INSTAGRAM_URL, INSTAGRAM_DM_URL, INSTAGRAM_HANDLE, WHATSAPP_DISPLAY } from '../data/creations';

export const ContactCta: React.FC = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hello Elegant Emahe Style!
My Name: ${name || 'Valued Client'}
City/Location: ${city || 'Pakistan'}
Inquiry: ${message || 'I would like to inquire about placing an order.'}`;
    
    // Launch directly via WhatsApp
    window.open(getWhatsAppUrl(formatted), '_blank');
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#242120]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#242120] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9887C]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E6BFA6]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Call to Action */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E6BFA6]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Create Together</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-tight text-white">
                Ready to bring your <br />
                <span className="italic font-medium text-[#F5ECE8]">custom piece to life?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#D3C7C2] leading-relaxed max-w-lg">
                Whether you have an exact picture in mind or need guidance on wedding colors, Nikkah pen sets, and personalized calligraphy hoops, we are just a message away.
              </p>

              {/* Direct Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getWhatsAppUrl("Hello Elegant Emahe Style! I'd like to consult on an upcoming order.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={INSTAGRAM_DM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Instagram className="w-4 h-4 text-[#E6BFA6]" />
                  <span>Send Instagram DM</span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-[#A89A95] space-y-1">
                <p>✨ Direct handmade artist support · Custom orders welcome nationwide</p>
                <p>📍 Operating from Pakistan · Inquiries responded to warmly</p>
              </div>
            </div>

            {/* Right Column: Fast WhatsApp Message Composer */}
            <div className="lg:col-span-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8">
              <h3 className="text-lg font-serif text-white mb-2">
                Fast Message Direct to WhatsApp
              </h3>
              <p className="text-xs text-[#C7B9B4] mb-6">
                Type your note below to automatically launch a pre-composed message in WhatsApp.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D3C7C2] mb-1 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sara Ahmed"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white/10 border border-white/15 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#E6BFA6]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D3C7C2] mb-1 font-medium">
                      Your City (PK)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lahore / Karachi / Islamabad"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white/10 border border-white/15 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#E6BFA6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D3C7C2] mb-1 font-medium">
                    What would you like to create?
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about the occasion, item required, or date..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white/10 border border-white/15 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#E6BFA6] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#FAF8F5] hover:bg-white text-[#242120] rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#A07067]" />
                  <span>Start WhatsApp Conversation</span>
                </button>

                {sentNotice && (
                  <div className="flex items-center gap-2 text-xs text-[#25D366] bg-[#25D366]/10 p-2.5 rounded-md">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>WhatsApp window opened with your details.</span>
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
