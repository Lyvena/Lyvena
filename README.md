# Lyvena - AI for Good

A stunning, fully responsive modern website for Lyvena, an innovative company specializing in ethical AI development, consulting, web development, and digital design services.

## 🌟 Features

- **Futuristic Design**: Sleek minimalism with organic, ethereal elements
- **Ocean-Inspired Color Palette**: Deep teal (#0A6C74), vibrant cyan (#00D4FF), and soft neutrals
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Interactive Elements**:
  - Neural network particle animation in hero section
  - Flip cards for services
  - Masonry grid portfolio with modals
  - Animated timeline for company journey
  - Confetti celebration on form submission
  - Floating chat bubble for quick inquiries
  - Cursor glow trail effect
- **Fully Responsive**: Mobile-first design with fluid grids
- **Accessibility**: WCAG compliant with ARIA labels and keyboard navigation
- **Performance Optimized**: Lazy loading, minified code, 60fps animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
lyvena-website/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── Hero.tsx              # Hero section with typing animation
│   ├── Services.tsx          # Interactive flip cards
│   ├── About.tsx             # Company timeline and location
│   ├── Portfolio.tsx         # Masonry grid with modals
│   ├── Contact.tsx           # Contact form with confetti
│   ├── Footer.tsx            # Footer with social links
│   ├── LoadingScreen.tsx     # Animated loading screen
│   ├── CursorGlow.tsx        # Cursor trail effect
│   └── ChatBubble.tsx        # Floating chat widget
├── public/                   # Static assets
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.js            # Next.js configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: '#0A6C74',      // Deep teal
  accent: '#00D4FF',       // Vibrant cyan
  neutral: {
    white: '#F8F9FA',
    gray: '#E9ECEF',
  },
}
```

### Content

- **Hero Section**: Edit `components/Hero.tsx` to change tagline and CTA
- **Services**: Modify the `services` array in `components/Services.tsx`
- **Portfolio**: Update the `projects` array in `components/Portfolio.tsx`
- **Contact**: Change address in `components/Contact.tsx`

### Animations

- Global animations are defined in `app/globals.css`
- Component-specific animations use Framer Motion
- Adjust animation durations and delays in component files

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: TypeScript
- **Effects**: Canvas Confetti

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Reduced motion support

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary and confidential.

## 🤝 Contact

**Lyvena**  
Beta Building, Oficina 6  
Próspera ZEDE, St. John's Bay  
Roatán, Islas de Bahia 34101  
Honduras

---

Built with ❤️ for a better digital future
