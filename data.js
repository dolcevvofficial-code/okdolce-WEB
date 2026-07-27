const banks = [
  {
    id: 1,
    name: "MJ SOUNDS VITAL BANK",
    price: 19.99,
    originalPrice: 24.99,
    status: "coming soon",
    hasCover: true,
    coverImage: "images/mj-sounds-cover.jpg",
    description: "Vital preset bank based on CRIS MJ's music production style in 2026. Featuring carefully crafted synths, arpeggios, and sonic textures inspired by modern production techniques.",
    about: "Un banco de 60 presets para Vital, creado personalmente por mí. Este banco incluye sonidos inspirados en la producción reciente de Cris MJ, que contiene 15 pads, 20 synths, 15 leads y 10 arpegios/secuenciadores.",
    hasVideo: true,
    videoSrc: "videos/mjvideo.mp4",
    bestSeller: true
  },
  {
    id: 2,
    name: "ANALOG EXPERIMENTS VITAL BANK",
    price: 24.99,
    status: "coming soon",
    hasCover: true,
    coverImage: "images/analog.jpg",
    description: "Experimental analog-inspired Vital presets. Coming soon.",
    about: "35 experimentos, todos en una sola carpeta. Algunos podrían decir que son demasiado experimentales..."
  },
  {
    id: 3,
    name: "MJ SOUNDS DRUMKIT",
    price: 19.99,
    status: "coming soon",
    hasCover: true,
    coverImage: "images/drumkit.jpg",
    description: "Original Sounds By Dolce.",
    about: "Lo esencial. Los últimos bombos y cajas utilizados en la reciente producción de Cris MJ (Panda Black, Reelian, Nes). Creados desde cero con Vital. Contiene 25 bombos y 25 cajas.",
    hasVideo: true,
    videoSrc: "videos/mjvideo.mp4"
  }
];

// This array controls the exact order they appear on your site
const featuredIds = [1, 3, 2];
