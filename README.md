# OKDOLCE - Producer & Sample Kits Website

Modern, responsive website for OKDOLCE featuring music production showcase and digital preset pack sales.

## 🎛️ Features

✅ **Multi-page Navigation**
- Home (Featured Works & Products)
- Shop (All Sample Library Packs)
- About (Bio & Photos)
- Terms of Service

✅ **Mobile-First Design**
- Hamburger navigation menu for mobile
- Fully responsive across all devices
- Touch-friendly buttons and interactions

✅ **Product Store**
- 6 sample pack products (easily expandable)
- Product detail modals with full specs
- Audio preview players
- Genre & preset count tags
- "Coming Soon" support for unreleased packs

✅ **Modern UI/UX**
- Glassmorphism design with animated background orbs
- Smooth page transitions
- Studio timecode display
- Discount email signup popup
- 10% off promo for new customers

✅ **Integrations**
- Gumroad for preset sales
- Formspree for email signups
- YouTube embed for music videos
- Social media links (Instagram, TikTok, Spotify, Genius)

## 📂 File Structure

```
okdolce-WEB/
├── index.html          # Main website (all pages in one file)
├── images/             # Store product covers, photos, favicon here
│   ├── favicon.ico
│   ├── faviconbig.png
│   ├── Photo1.jpg
│   ├── Photo2.jpeg
│   ├── Photo3.jpeg
│   ├── fractals.jpg
│   ├── ethereal.jpg
│   ├── neon-nights.jpg
│   ├── future-funk.jpg
│   ├── dark-matter.jpg
│   └── tropical.jpg
├── audio/              # Store preview audio clips here
│   ├── fractals-preview.mp3
│   ├── ethereal-preview.mp3
│   ├── neon-preview.mp3
│   ├── funk-preview.mp3
│   ├── dark-preview.mp3
│   └── (coming soon previews optional)
└── README.md          # This file
```

## 🚀 Getting Started

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/dolcevvofficial-code/okdolce-WEB.git
cd okdolce-WEB
```

2. Open `index.html` in your browser to test locally

### Cloudflare Pages Deployment

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click "Pages" → "Create a project" → "Connect to Git"
3. Select this repository
4. Build settings:
   - **Framework preset**: None (Static site)
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
5. Deploy!
6. Add your custom domain (`okdolce.xyz`) in project settings

## 🎨 Customization

### Adding Products

Edit the `products` array in the `<script>` section of `index.html`:

```javascript
const products = [
  {
    id: 'your-pack-id',
    title: 'YOUR PACK NAME',
    price: 12.99,
    badge: '✨ BADGE TEXT',
    image: 'images/your-image.jpg',
    genre: ['Genre1', 'Genre2'],
    presets: 150,
    daw: 'Vital',
    description: 'Your description here',
    available: true,
    gumroad_id: 'your-gumroad-link',
    previewAudio: 'audio/preview.mp3'
  }
];
```

### Updating Images

1. Add image files to `images/` folder
2. Update image paths in HTML or product data
3. Recommended sizes:
   - Product covers: 500x500px (JPG/PNG)
   - About photos: 1200x900px (JPG/PNG)
   - Favicon: 32x32px (ICO)

### Changing Colors

The color scheme uses CSS variables in the `<style>` section. Main colors:
- Primary Blue: `#0055ff`, `#0066ff`
- Cyan Accent: `#00d2ff`
- Dark Text: `#0f172a`
- Background: `#f0f4f9`

## 📝 Content to Update

- [ ] Add your studio/product photos to `images/` folder
- [ ] Add audio preview clips to `audio/` folder
- [ ] Update Gumroad IDs for each product
- [ ] Update social media links in header & mobile menu
- [ ] Update your bio in the About section
- [ ] Update Terms of Service
- [ ] Replace email address (dolcevvofficial@gmail.com)

## 🎵 Product Data Reference

Example product structure in the code:
- **id**: Unique identifier (used in modals)
- **title**: Product name
- **price**: USD price
- **badge**: Status badge ("✨ SALE", "🔥 BEST SELLER", "🎶 COMING SOON")
- **image**: Path to product cover image
- **genre**: Array of genres for tagging
- **presets**: Number of presets in pack
- **daw**: DAW compatibility ("Vital", "Serum", etc.)
- **description**: Short product description
- **available**: Boolean (true/false) for available/coming soon
- **gumroad_id**: Your Gumroad product link ID
- **previewAudio**: Path to preview audio (optional)

## 🔗 Important Links

- **Gumroad Dashboard**: https://gumroad.com/dashboard
- **Cloudflare Pages**: https://dash.cloudflare.com
- **Porkbun Domain**: https://porkbun.com/account
- **Formspree Integration**: https://formspree.io

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

1. **Audio Previews**: Keep them short (10-15 seconds) to reduce file size
2. **Images**: Optimize with TinyPNG or similar for faster loading
3. **Testing**: Use Chrome DevTools to test mobile responsiveness
4. **Email Signups**: Check Formspree dashboard for subscriber list
5. **Sales**: Monitor Gumroad dashboard for purchase notifications

## 🆘 Support

For issues or questions:
- Email: dolcevvofficial@gmail.com
- Check Cloudflare Pages deployment logs
- Verify all image/audio paths are correct

---

**Made with ❤️ for OKDOLCE**