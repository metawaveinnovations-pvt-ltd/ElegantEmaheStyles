export interface CreationItem {
  id: string;
  title: string;
  category: 'wedding' | 'embroidery' | 'bracelets' | 'hampers' | 'festive';
  categoryLabel: string;
  occasion: ('wedding' | 'birthday' | 'anniversary' | 'bridal' | 'mehndi' | 'surprise')[];
  tagline: string;
  description: string;
  materials: string[];
  customizable: string[];
  image: string;
  featured?: boolean;
  editorialRatio?: 'portrait' | 'square' | 'landscape';
}

export const INSTAGRAM_HANDLE = 'elegant_emahe_style_5';
export const INSTAGRAM_URL = 'https://www.instagram.com/elegant_emahe_style_5/';
export const INSTAGRAM_DM_URL = 'https://ig.me/m/elegant_emahe_style_5';
export const WHATSAPP_PHONE = '923000000000'; // Standard PK format for WhatsApp link
export const WHATSAPP_DISPLAY = '+92 (Order via WhatsApp)';

export function getWhatsAppUrl(message?: string): string {
  const defaultText = "Hello Elegant Emahe Style! I'm interested in placing a custom order.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

export const CREATIONS_DATA: CreationItem[] = [
  {
    id: 'nikkah-feather-platter-set',
    title: 'Signature Nikkah Pen & Mirror Platter Set',
    category: 'wedding',
    categoryLabel: 'Wedding & Nikkah',
    occasion: ['wedding', 'bridal'],
    tagline: 'Hand-adorned ivory plumage with freshwater pearl cascades & golden rim mirror tray',
    description: 'A treasured keepsake for the sacred signature. Features a handcrafted signing pen enveloped in satin ivory ribbon, fine ostrich feather plume, and pearl drapes paired with an ornate gold-accented mirrored tray.',
    materials: ['Silk satin ribbon', 'White plumage', 'Freshwater glass pearls', 'Golden acrylic border', 'Mirror platter'],
    customizable: ['Bride & Groom names engraving', 'Ribbon color palette', 'Feather tone (Ivory/Blush/Gold)'],
    image: '/src/assets/images/wedding_nikkah_decor_1790114640381.jpg',
    featured: true,
    editorialRatio: 'landscape',
  },
  {
    id: 'custom-calligraphy-embroidery-hoop',
    title: 'Personalized Floral Calligraphy Hoop',
    category: 'embroidery',
    categoryLabel: 'Custom Embroidery Hoops',
    occasion: ['wedding', 'anniversary', 'bridal', 'mehndi'],
    tagline: 'Bespoke Urdu or English calligraphy framed in delicate blush roses and pearl embellishments',
    description: 'An iconic Elegant Emahe Style creation seen across wedding celebrations. Hand-embroidered and hand-lettered with personalized vows, names (e.g. "Bhai Ki Shadi", "Behn Ki Shadi"), or memorable dates.',
    materials: ['Natural beechwood hoop', 'Organic linen/raw silk base', 'Hand-stitched silk roses', 'Ivory seed pearls'],
    customizable: ['Names & date lettering', 'Urdu / Arabic / English calligraphy', 'Floral color theme', 'Border ribbon finish'],
    image: '/src/assets/images/custom_embroidery_hoop_1790114593343.jpg',
    featured: true,
    editorialRatio: 'portrait',
  },
  {
    id: 'butterfly-pearl-charm-bracelets',
    title: 'Artisanal Butterfly & Pearl Charm Cuffs',
    category: 'bracelets',
    categoryLabel: 'Handmade Jewelry',
    occasion: ['birthday', 'anniversary', 'surprise', 'bridal'],
    tagline: 'Hand-strung crystal seed beads, onyx butterflies, and lustrous baroque pearls',
    description: 'Delicate wristwear handcrafted for daily elegance or bridal party favors. Each bracelet is meticulously arranged with durable jeweler cord, hypoallergenic findings, and celestial butterfly charms.',
    materials: ['Baroque freshwater pearls', 'Crystal faceted beads', 'Onyx & opal butterfly charms', '14k gold-plated accents'],
    customizable: ['Wrist sizing', 'Charm selection (Butterfly, Evil Eye, Heart)', 'Single piece or matching couple set'],
    image: '/src/assets/images/handcrafted_bracelets_1790114605151.jpg',
    featured: true,
    editorialRatio: 'square',
  },
  {
    id: 'bespoke-celebration-hamper',
    title: 'The Signature Bloom & Chocolate Hamper',
    category: 'hampers',
    categoryLabel: 'Gift Hampers & Bouquets',
    occasion: ['birthday', 'anniversary', 'surprise'],
    tagline: 'Curated baby’s breath florals, gourmet treats, warm fairy lights, and personalized note card',
    description: 'Designed to turn an ordinary gift into an unforgettable unboxing moment. Packed in a signature blush woven basket, layered with fresh florals, artisan sweets, and warm twinkle illumination.',
    materials: ['Fresh baby’s breath & spray roses', 'Hand-tied blush silk bow', 'Warm LED fairy lights', 'Handwritten calligraphy card'],
    customizable: ['Included treats / cosmetics', 'Flower varieties & colors', 'Custom wax-sealed letter'],
    image: '/src/assets/images/gift_hamper_bouquet_1790114626464.jpg',
    featured: true,
    editorialRatio: 'portrait',
  },
  {
    id: 'dholki-festive-props-thaal',
    title: 'Mayun & Mehndi Ceremonial Thaal & Props',
    category: 'festive',
    categoryLabel: 'Celebration & Festive Decor',
    occasion: ['mehndi', 'wedding'],
    tagline: 'Traditional festive dholak props, embellished gota work, and customized guest plaques',
    description: 'Vibrant handcrafted party props featuring witty slogans ("Dulhe Ki Fauj", "Team Bride"), marigold motifs, and traditional gota patti embellishments for unforgettable wedding ceremonies.',
    materials: ['Gota patti trim', 'Velvet finish boards', 'Fresh/silk marigold flowers', 'Glitter acrylic lettering', 'Hand-painted wooden accents'],
    customizable: ['Family slogans & titles', 'Yellow/Orange/Fuchsia color palettes', 'Dholki accessory set'],
    image: '/src/assets/images/mehndi_dholki_thaal_1790115260811.jpg',
    featured: false,
    editorialRatio: 'square',
  },
  {
    id: 'pastel-crystal-beaded-stack',
    title: 'Blush & Opal Stacking Bracelets',
    category: 'bracelets',
    categoryLabel: 'Handmade Jewelry',
    occasion: ['birthday', 'bridal', 'surprise'],
    tagline: 'Soft iridescent pastel beads layered with dainty golden stars and protective amulets',
    description: 'A customer-favorite collection from our Instagram feed. Lightweight, comfortable, and perfect for gifting to bridesmaids, sisters, and best friends.',
    materials: ['Czech crystal beads', 'Milky pastel glass', 'Stretch jeweler thread', 'Gold-dipped spacers'],
    customizable: ['Color theme (Blush, Sky Blue, Lavender)', 'Custom initial charms'],
    image: '/src/assets/images/pastel_beaded_stack_1790115284532.jpg',
    featured: false,
    editorialRatio: 'portrait',
  },
  {
    id: 'anniversary-memory-hoop',
    title: 'Milestone Anniversary Keepsake Frame',
    category: 'embroidery',
    categoryLabel: 'Custom Embroidery Hoops',
    occasion: ['anniversary', 'wedding'],
    tagline: 'Timeless dates and vows preserved in intricate needlecraft and miniature florals',
    description: 'Commemorate the years of love with a custom embroidered milestone piece. Designed to hang elegantly in your home as a timeless memory of your vows.',
    materials: ['Natural wood frame', 'Hand-selected embroidery floss', 'Satin ribbon hanger', 'Gold thread accents'],
    customizable: ['Anniversary years & names', 'Wedding coordinate/date', 'Floral wreath layout'],
    image: '/src/assets/images/anniversary_hoop_frame_1790115273401.jpg',
    featured: false,
    editorialRatio: 'square',
  },
  {
    id: 'luxe-beauty-gift-basket',
    title: 'Luxe Self-Care & Fragrance Hamper',
    category: 'hampers',
    categoryLabel: 'Gift Hampers & Bouquets',
    occasion: ['birthday', 'bridal', 'surprise'],
    tagline: 'Handcrafted floral arrangement paired with botanical wellness treats and satin scrunchies',
    description: 'Carefully curated for brides-to-be, birthdays, or special thank-you gestures. Every item is packed with artisanal finesse and signature ribbon packaging.',
    materials: ['Blush presentation basket', 'Dried botanicals', 'Satin wrapping paper', 'Velvet ribbon', 'Scented candle & mist'],
    customizable: ['Product inclusions', 'Ribbon colorway', 'Personalized recipient tag'],
    image: '/src/assets/images/luxe_selfcare_hamper_1790115296363.jpg',
    featured: false,
    editorialRatio: 'landscape',
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Creations' },
  { id: 'wedding', label: 'Wedding & Nikkah' },
  { id: 'embroidery', label: 'Custom Hoops' },
  { id: 'bracelets', label: 'Jewelry & Bracelets' },
  { id: 'hampers', label: 'Hampers & Bouquets' },
  { id: 'festive', label: 'Mehndi & Festive' },
] as const;

export const OCCASIONS = [
  { id: 'wedding', label: 'Wedding & Nikkah', subtitle: 'Sacred tokens & signing ceremony keepsakes' },
  { id: 'mehndi', label: 'Mehndi & Dholki', subtitle: 'Vibrant celebratory props & festive thaals' },
  { id: 'birthday', label: 'Birthdays & Milestones', subtitle: 'Thoughtfully curated hampers & wrist charms' },
  { id: 'bridal', label: 'Bridal & Shower', subtitle: 'Bridesmaid favors & bespoke keepsakes' },
  { id: 'anniversary', label: 'Anniversaries', subtitle: 'Embroidered memories & meaningful celebrations' },
  { id: 'surprise', label: 'Just Because', subtitle: 'Spontaneous tokens of love and affection' },
] as const;
