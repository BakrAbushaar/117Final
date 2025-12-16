# GitHub Pages Multi-Site Repository

This repository contains three completely standalone websites deployed via GitHub Pages from the `/docs` directory. Each site is fully isolated with its own unique identity, content, and visual design.

## 🏗️ Repository Structure

```
docs/
├── index.html              # Root landing page (no links to sites)
├── privacy.html            # Shared privacy policy
├── 404.html               # Shared 404 error page
│
├── design_style/          # Site 1: Nordic Minimalism
│   ├── index.html
│   ├── style.css
│   └── images/
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       ├── gallery-3.jpg
│       └── og-image.jpg
│
├── portfolio/             # Site 2: Professional Portfolio
│   ├── index.html
│   ├── portfolio.html
│   ├── css/
│   │   └── style.css
│   └── images/
│       ├── headshot.jpg
│       ├── project-1.jpg
│       ├── project-2.jpg
│       └── og-image.jpg
│
└── client_site/           # Site 3: Chocolate Dessert Business
    ├── index.html
    ├── style.css
    ├── site.js
    └── images/
        ├── product-1.jpg
        ├── product-2.jpg
        ├── product-3.jpg
        ├── og-image.jpg
        └── hero.jpg (optional)
```

## 🎨 Site Descriptions

### Site 1: Nordic Minimalism Design History
**Location:** `docs/design_style/`

A museum-style educational site exploring the history and philosophy of Nordic Minimalism in design.

**Key Features:**
- Calm, restrained aesthetic with soft neutrals and whitespace
- Museum-quality presentation focused on visual storytelling
- Semantic HTML with full accessibility support
- System fonts only, no external dependencies
- Responsive grid layout

**Visual Identity:** Soft whites, grays, muted tones inspired by Scandinavian nature

### Site 2: Professional Portfolio - Bakr Abushaar
**Location:** `docs/portfolio/`

A professional cybersecurity and IT portfolio showcasing technical expertise and projects.

**Key Features:**
- Clean, corporate-level design
- Cybersecurity and IT focus
- Education, skills, and project showcase
- Simple contact form (no backend)
- Dark/neutral professional color palette

**Visual Identity:** Professional blues, clean typography, technical aesthetic

### Site 3: Noir Chocolat - Premium Chocolate Desserts
**Location:** `docs/client_site/`

A fictional premium chocolate dessert business website with booking functionality.

**Key Features:**
- High-end, indulgent visual design
- Dark chocolate/cocoa color palette
- **Interactive calendar booking UI** (JavaScript-based, no external services)
- Product showcase with menu
- Standalone navigation (Home / Menu / Booking / Contact)

**Visual Identity:** Rich browns, gold accents, elegant and modern

## 🔒 Isolation Requirements

**CRITICAL:** These three sites are completely standalone and must NOT link to each other:

- ❌ No navigation links between sites
- ❌ No footer links between sites
- ❌ No "view project" or "back" links
- ❌ No cross-references in content
- ✅ Each site behaves as if it lives in its own repository

**Shared Files Only:**
- `docs/privacy.html` - Shared privacy policy
- `docs/404.html` - Shared 404 error page

## 🖼️ Image Management

All images are designed to be **replaceable by filename only**. Simply replace the image file with the same filename to update visuals without touching code.

### Design Style Site Images
- `gallery-1.jpg` - First gallery image
- `gallery-2.jpg` - Second gallery image
- `gallery-3.jpg` - Third gallery image
- `og-image.jpg` - Social media preview

### Portfolio Site Images
- `headshot.jpg` - Professional headshot
- `project-1.jpg` - First project screenshot
- `project-2.jpg` - Second project screenshot
- `og-image.jpg` - Social media preview

### Client Site Images
- `product-1.jpg` - First dessert product
- `product-2.jpg` - Second dessert product
- `product-3.jpg` - Third dessert product
- `og-image.jpg` - Social media preview
- `hero.jpg` - Optional hero background

## 🚀 Deployment

This repository is configured for GitHub Pages deployment from the `/docs` directory.

**Access URLs:**
- Root: `https://[username].github.io/[repo-name]/`
- Nordic Design: `https://[username].github.io/[repo-name]/design_style/`
- Portfolio: `https://[username].github.io/[repo-name]/portfolio/`
- Chocolate Site: `https://[username].github.io/[repo-name]/client_site/`

## ✅ Technical Compliance

All sites meet the following standards:

- ✅ One `<h1>` per page
- ✅ Proper `<title>` and `<meta description>`
- ✅ Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- ✅ Accessibility features (skip links, ARIA labels, alt text)
- ✅ Lighthouse-friendly (no heavy JS, no external fonts)
- ✅ Responsive design
- ✅ No frameworks or build tools required
- ✅ Clean, human-readable code

## 📝 Calendar Feature (Client Site)

The chocolate dessert site includes a custom JavaScript calendar booking interface:

**Features:**
- Visual calendar grid with month navigation
- Clickable date selection
- Disabled past dates
- Today indicator
- Selected date display
- Form integration
- Keyboard accessible
- No external services (Calendly, Zapier, etc.)

**Implementation:** Pure JavaScript in `site.js` - fully self-contained

## 🎯 Design Philosophy

Each site demonstrates a distinct design approach:

1. **Nordic Minimalism** - Restraint, whitespace, natural materials
2. **Professional Portfolio** - Technical, confident, corporate
3. **Premium Business** - Indulgent, conversion-focused, elegant

## 📦 Dependencies

**None.** All sites use:
- Plain HTML
- Plain CSS
- Vanilla JavaScript (client site only)
- System fonts
- No external libraries or frameworks

## 🔧 Maintenance

To update content:
1. Edit HTML files directly
2. Replace images by filename
3. Modify CSS for styling changes
4. No build process required

## 📄 License

All rights reserved. Educational project.

---

**Last Updated:** December 16, 2025
