import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, Instagram, CheckCircle2, Copy, Check } from 'lucide-react';
import { getWhatsAppUrl, INSTAGRAM_URL, INSTAGRAM_DM_URL, INSTAGRAM_HANDLE, CreationItem } from '../data/creations';

interface CustomOrderStudioProps {
  selectedItem?: CreationItem | null;
}

export const CustomOrderStudio: React.FC<CustomOrderStudioProps> = ({ selectedItem }) => {
  const [creationType, setCreationType] = useState('Personalized Embroidery Hoop');
  const [occasion, setOccasion] = useState('Wedding / Nikkah');
  const [colorTheme, setColorTheme] = useState('Blush & Warm Gold');
  const [personalizationText, setPersonalizationText] = useState('');
  const [timelineNotes, setTimelineNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync selectedItem if provided from product details modal
  useEffect(() => {
    if (!selectedItem) return;

    if (selectedItem.category === 'embroidery') {
      setCreationType('Personalized Embroidery Hoop');
    } else if (selectedItem.category === 'wedding') {
      setCreationType('Nikkah Pen & Mirror Platter Set');
    } else if (selectedItem.category === 'bracelets') {
      setCreationType('Artisanal Bracelet / Jewelry Stack');
    } else if (selectedItem.category === 'hampers') {
      setCreationType('Bespoke Bloom & Gift Hamper');
    } else if (selectedItem.category === 'festive') {
      setCreationType('Mehndi / Dholki Festive Props');
    } else {
      setCreationType(selectedItem.title);
    }

    if (selectedItem.occasion && selectedItem.occasion.length > 0) {
      const firstOcc = selectedItem.occasion[0];
      if (firstOcc === 'wedding') setOccasion('Wedding / Nikkah');
      else if (firstOcc === 'mehndi') setOccasion('Mehndi / Mayun / Dholki');
      else if (firstOcc === 'anniversary') setOccasion('Anniversary');
      else if (firstOcc === 'birthday') setOccasion('Birthday');
      else if (firstOcc === 'bridal') setOccasion('Bridal Shower');
    }

    setPersonalizationText(`Inspired by "${selectedItem.title}" - please personalize with custom names/palette.`);
  }, [selectedItem]);

  // Generate clean message
  const generatedMessage = `Hello Elegant Emahe Style! I would like to enquire about a bespoke custom order:
• Item Type: ${creationType}
• Occasion: ${occasion}
• Color/Theme: ${colorTheme}
${personalizationText ? `• Custom Text / Names: ${personalizationText}` : ''}
${timelineNotes ? `• Date / Timeline: ${timelineNotes}` : ''}

Looking forward to your guidance on availability and details!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const steps = [
    {
      step: '01',
      title: 'Share Your Idea',
      description: 'Tell us your vision, recipient, or celebration type through our studio builder or direct message.',
    },
    {
      step: '02',
      title: 'Discuss Your Style',
      description: 'We finalize colors, calligraphy wording, embroidery accents, and ribbon finishes together.',
    },
    {
      step: '03',
      title: 'Handmade with Care',
      description: 'Every knot, stitch, plume, and bead is placed with patience in our studio in Pakistan.',
    },
    {
      step: '04',
      title: 'Delivered & Gifted',
      description: 'Securely packaged with signature presentation, ready to bestow upon your loved ones.',
    },
  ];

  return (
    <section id="custom-orders" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#242120]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A07067] mb-2">
            <span>Bespoke Commissions</span>
            <span aria-hidden="true">·</span>
            <span>Tailored to You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242120] tracking-tight">
            Have Something Special in Mind?
          </h2>
          <p className="mt-2 text-base text-[#665c59]">
            Nearly all of our work begins as a conversation. Whether you need an embroidered wedding plaque with personalized Urdu poetry, matching bridesmaid wrist charms, or a curated anniversary hamper, we craft it to your exact milestone.
          </p>
        </div>

        {/* 4-Step Process Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-white rounded-xl border border-[#242120]/8 p-6 shadow-xs relative"
            >
              <div className="text-2xl font-serif font-semibold text-[#A07067] mb-3">
                {s.step}
              </div>
              <h3 className="text-base font-serif font-semibold text-[#242120] mb-1.5">
                {s.title}
              </h3>
              <p className="text-xs text-[#665c59] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Custom Order Studio Box */}
        <div className="bg-white rounded-2xl border border-[#242120]/10 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Form Side */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A07067]">
                <Sparkles className="w-4 h-4 text-[#C9887C]" />
                <span>Interactive Order Configurator</span>
              </div>
              
              <h3 className="text-2xl font-serif text-[#242120]">
                Configure Your Custom Creation
              </h3>

              {/* Item Type */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#242120]">
                  1. Select Creation Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Personalized Embroidery Hoop',
                    'Nikkah Pen & Mirror Platter Set',
                    'Artisanal Bracelet / Jewelry Stack',
                    'Bespoke Bloom & Gift Hamper',
                    'Mehndi / Dholki Festive Props',
                    'Custom Unique Idea',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setCreationType(type)}
                      className={`px-3 py-2.5 rounded-lg text-left text-xs font-medium border transition-all cursor-pointer ${
                        creationType === type
                          ? 'border-[#242120] bg-[#FAF8F5] text-[#242120] font-semibold'
                          : 'border-[#242120]/10 hover:border-[#242120]/30 text-[#665c59]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#242120]">
                  2. Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#242120]/15 rounded-lg text-[#242120] focus:outline-none focus:border-[#242120]"
                >
                  <option>Wedding / Nikkah</option>
                  <option>Mehndi / Mayun / Dholki</option>
                  <option>Birthday Celebration</option>
                  <option>Bridal Shower / Bachelorette</option>
                  <option>Milestone Anniversary</option>
                  <option>Just Because / Thoughtful Surprise</option>
                </select>
              </div>

              {/* Color Theme */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#242120]">
                  3. Color Palette / Theme
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Blush & Warm Gold',
                    'Ivory & White Pearl',
                    'Festive Marigold & Yellow',
                    'Pastel Lavender & Sky Blue',
                    'Emerald & Golden Accent',
                    'Custom Palette',
                  ].map((theme) => (
                    <button
                      key={theme}
                      type="button"
                      onClick={() => setColorTheme(theme)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all cursor-pointer ${
                        colorTheme === theme
                          ? 'bg-[#242120] text-white border-[#242120]'
                          : 'bg-white text-[#665c59] border-[#242120]/10 hover:bg-[#FAF8F5]'
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Names / Words */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#242120]">
                  4. Custom Names, Words or Vows (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ayesha & Hamza · 24.12.2025 · 'Bhai Ki Shadi'"
                  value={personalizationText}
                  onChange={(e) => setPersonalizationText(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#242120]/15 rounded-lg text-[#242120] focus:outline-none focus:border-[#242120]"
                />
              </div>

              {/* Timeline Notes */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#242120]">
                  5. Event Date or Timeline (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Needed by next week for Karachi / Lahore"
                  value={timelineNotes}
                  onChange={(e) => setTimelineNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#242120]/15 rounded-lg text-[#242120] focus:outline-none focus:border-[#242120]"
                />
              </div>
            </div>

            {/* Generated Preview & 1-Click Order Launch */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-[#242120]/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8A7D78]">
                    Generated Inquiry Preview
                  </span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#A07067] hover:underline"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#136C34]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Text</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-white rounded-lg p-4 border border-[#242120]/8 font-sans text-xs text-[#242120] whitespace-pre-wrap leading-relaxed shadow-2xs min-h-[160px]">
                  {generatedMessage}
                </div>

                <div className="mt-4 text-xs text-[#7A6E6A] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A07067]" />
                    <span>No upfront automated charges — direct human discussion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A07067]" />
                    <span>Work in progress photo preview before final packing</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={getWhatsAppUrl(generatedMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#242120] hover:bg-[#3E3836] text-white rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#E6BFA6]" />
                  <span>Send via WhatsApp</span>
                </a>

                <a
                  href={INSTAGRAM_DM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    navigator.clipboard.writeText(generatedMessage);
                  }}
                  className="w-full py-3 px-4 bg-white hover:bg-[#F2ECE4] text-[#242120] border border-[#242120]/15 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-2xs"
                >
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                  <span>Copy & Send via Instagram DM</span>
                </a>

                <p className="text-[11px] text-center text-[#8A7D78]">
                  Or direct message on Instagram: <span className="font-semibold text-[#242120]">@{INSTAGRAM_HANDLE}</span>
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
