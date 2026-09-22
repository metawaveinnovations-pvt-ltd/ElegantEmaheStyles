import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatWeCreate } from './components/WhatWeCreate';
import { FeaturedCreations } from './components/FeaturedCreations';
import { CategoryExplorer } from './components/CategoryExplorer';
import { OccasionGuide } from './components/OccasionGuide';
import { CustomOrderStudio } from './components/CustomOrderStudio';
import { HowItWorks } from './components/HowItWorks';
import { VisualGallery } from './components/VisualGallery';
import { AboutSection } from './components/AboutSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { CREATIONS_DATA, CreationItem } from './data/creations';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [inspectedItem, setInspectedItem] = useState<CreationItem | null>(null);
  const [customOrderTargetItem, setCustomOrderTargetItem] = useState<CreationItem | null>(null);

  const handleOpenCustomOrder = () => {
    const el = document.getElementById('custom-orders');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCustomOrderWithItem = (item: CreationItem) => {
    setCustomOrderTargetItem(item);
    handleOpenCustomOrder();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#242120] font-sans antialiased flex flex-col selection:bg-[#F5ECE8] selection:text-[#242120]">
      {/* Strict 3-Zone Header */}
      <Header onOpenCustomOrder={handleOpenCustomOrder} />

      {/* Main Content Flow - 12 Architectural Sections */}
      <main className="flex-1">
        {/* 01: Hero */}
        <Hero onOpenCustomOrder={handleOpenCustomOrder} />

        {/* 02: What We Create */}
        <WhatWeCreate onSelectCategory={setSelectedCategory} />

        {/* 03: Featured Creations */}
        <FeaturedCreations
          creations={CREATIONS_DATA}
          onInspect={setInspectedItem}
        />

        {/* 04: Explore by Category */}
        <CategoryExplorer
          creations={CREATIONS_DATA}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onInspect={setInspectedItem}
        />

        {/* 05: Shop by Occasion */}
        <OccasionGuide
          creations={CREATIONS_DATA}
          onInspect={setInspectedItem}
          onOpenCustomOrder={handleOpenCustomOrder}
        />

        {/* 06: Custom Orders Studio */}
        <CustomOrderStudio selectedItem={customOrderTargetItem} />

        {/* 07: How It Works */}
        <HowItWorks />

        {/* 08: Visual Story & Macro Gallery */}
        <VisualGallery />

        {/* 09: About the Artist & Brand */}
        <AboutSection />

        {/* 10: Instagram Experience */}
        <InstagramSection />

        {/* 11: Order & Contact CTA */}
        <ContactCta />
      </main>

      {/* 12: Footer with MetaWave Innovations Signature */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        item={inspectedItem}
        onClose={() => setInspectedItem(null)}
        onOpenCustomOrderWithItem={handleOpenCustomOrderWithItem}
      />

      {/* Mobile App-like Bottom Quick Bar */}
      <MobileQuickBar onOpenCustomOrder={handleOpenCustomOrder} />
    </div>
  );
}
