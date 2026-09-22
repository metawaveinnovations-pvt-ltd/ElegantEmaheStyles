import React from 'react';
import { MessageSquare, Scissors, Eye, Gift } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: '1. Connect & Consult',
      description: 'Reach out on WhatsApp or Instagram DM. Share your event date, custom wording, and aesthetic vision.',
    },
    {
      icon: Scissors,
      title: '2. Handcrafting in Studio',
      description: 'Each piece is hand-stitched, beaded, lettered, or arranged with meticulous attention to every ribbon fold.',
    },
    {
      icon: Eye,
      title: '3. Photo Approval Preview',
      description: 'Before any box is sealed, we share high-definition photos and videos of the completed piece for your blessing.',
    },
    {
      icon: Gift,
      title: '4. Thoughtful Packaging',
      description: 'Packed safely with protective wrapping, silk ribbons, and signature presentation ready to give.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#242120]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A07067] mb-2">
            <span>Seamless Ordering</span>
            <span aria-hidden="true">·</span>
            <span>Artisanal Quality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242120] tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#665c59]">
            Ordering custom handmade keepsakes should be as joyful as receiving them. Here is how your commission comes to life:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-white rounded-xl p-6 border border-[#242120]/8 shadow-xs flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#242120]/10 flex items-center justify-center text-[#A07067] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-semibold text-[#242120] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#665c59] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
