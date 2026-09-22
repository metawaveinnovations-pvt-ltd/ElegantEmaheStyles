import React from 'react';
import { Instagram, MessageCircle, ExternalLink, Heart, Bookmark } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_DM_URL, INSTAGRAM_HANDLE, getWhatsAppUrl } from '../data/creations';

export const InstagramSection: React.FC = () => {
  const highlights = [
    { title: 'Bracelets', icon: '✨' },
    { title: 'Customer Reviews', icon: '💌' },
    { title: 'Wedding Items', icon: '💍' },
    { title: 'PR Collabs', icon: '🤍' },
    { title: 'Orders', icon: '🎀' },
    { title: 'Support Group', icon: '🌸' },
  ];

  const igPosts = [
    {
      id: 'ig-1',
      image: '/src/assets/images/custom_embroidery_hoop_1790114593343.jpg',
      caption: 'Bhai Ki Shadi custom calligraphy hoop with handmade silk roses 🤍 Send DM to book for your wedding dates!',
      tag: '#CustomHoop',
    },
    {
      id: 'ig-2',
      image: '/src/assets/images/handcrafted_bracelets_1790114605151.jpg',
      caption: 'Pastel crystal beads and butterfly charms restocked. Perfect bridesmaid tokens or daily wristwear ✨',
      tag: '#HandmadeJewelry',
    },
    {
      id: 'ig-3',
      image: '/src/assets/images/wedding_nikkah_decor_1790114640381.jpg',
      caption: 'Feather Nikkah signing pen and golden rim mirror plate set ready for the bride & groom ✨',
      tag: '#NikkahKeepsake',
    },
    {
      id: 'ig-4',
      image: '/src/assets/images/gift_hamper_bouquet_1790114626464.jpg',
      caption: 'Bespoke birthday gift hamper packed with love, fresh roses, chocolates and fairy lights 🎀',
      tag: '#GiftHamper',
    },
  ];

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-[#F5ECE8]/30 border-b border-[#242120]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Profile Bar Showcase */}
        <div className="bg-white rounded-2xl border border-[#242120]/10 p-6 sm:p-8 shadow-xs mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Profile Info with official logo */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#833AB4] shrink-0">
                <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden flex items-center justify-center shadow-xs">
                  <img
                    src="/logo.png"
                    alt="@elegant_emahe_style_5 Official Instagram Profile"
                    className="w-full h-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#242120]">
                    @{INSTAGRAM_HANDLE}
                  </h3>
                  <span className="text-xs bg-[#FAF8F5] border border-[#242120]/10 px-2 py-0.5 rounded-md text-[#665c59]">
                    Artist
                  </span>
                </div>
                <p className="text-xs text-[#665c59] mt-1">
                  ✨ Handmade Artist | Content Creator · 🎀 Custom Creations • UGC
                </p>
                <div className="flex items-center gap-4 text-xs text-[#242120] font-medium mt-2">
                  <span><strong className="font-semibold">7.2K+</strong> Followers</span>
                  <span aria-hidden="true">·</span>
                  <span><strong className="font-semibold">150+</strong> Posts</span>
                  <span aria-hidden="true">·</span>
                  <span>📍 Pakistan</span>
                </div>
              </div>
            </div>

            {/* Direct Channel Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#E1306C] hover:bg-[#C8235C] text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors shadow-xs"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>

              <a
                href={INSTAGRAM_DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#EFEAE6] border border-[#242120]/15 text-[#242120] text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#A07067]" />
                <span>DM to Order</span>
              </a>
            </div>

          </div>

          {/* Story Highlights Bar */}
          <div className="mt-6 pt-6 border-t border-[#242120]/8">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7D78] mb-3">
              Profile Story Highlights
            </p>
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 no-scrollbar">
              {highlights.map((h) => (
                <a
                  key={h.title}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 shrink-0 group"
                >
                  <div className="w-13 h-13 rounded-full border border-[#242120]/15 bg-[#FAF8F5] flex items-center justify-center text-lg group-hover:border-[#C9887C] group-hover:scale-105 transition-all">
                    <span>{h.icon}</span>
                  </div>
                  <span className="text-[11px] text-[#665c59] group-hover:text-[#242120] whitespace-nowrap">
                    {h.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Instagram Visual Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {igPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-xl border border-[#242120]/8 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#F2ECE4]">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-xs text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#242120] leading-relaxed line-clamp-3">
                  {post.caption}
                </p>
                <div className="mt-3 pt-2 border-t border-[#242120]/6 flex items-center justify-between text-[11px]">
                  <span className="text-[#A07067] font-medium">{post.tag}</span>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#665c59] hover:text-[#242120] flex items-center gap-1 font-medium"
                  >
                    <span>View Post</span>
                    <ExternalLink className="w-3 h-3" />
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
