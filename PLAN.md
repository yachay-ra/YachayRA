# YachayRA Website — Implementation Plan (Plain HTML)

## 1. Current State Assessment

The repo contains **Quarto scaffolding** that will be retired:
- `_quarto.yml`, `.qmd` files, `_site/`, `.quarto/` — all Quarto artifacts
- All content files are empty (no actual content to preserve)
- Single commit: "hello world"

**Action:** Move Quarto files to `legacy/` folder, exclude from git via `.gitignore`.

---

## 2. Approach: Plain HTML + CSS + Minimal JS

Per updated CLAUDE.md: **Framework is plain HTML**, user prefers editing HTML.

### Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | None — plain HTML5 | Full design control, no build dependencies |
| Styling | Single `css/styles.css` with CSS custom properties | Clean, maintainable, no preprocessor needed |
| Layout | CSS Grid + Flexbox | Modern, responsive, no framework bloat |
| Typography | Google Fonts (Inter + Raleway) via `<link>` | Clean, professional, fast loading |
| Icons | Font Awesome 6 via CDN | Rich icon set, no local files |
| Mobile menu | Tiny JS toggle (~10 lines) | CSS-only hamburger is fragile; minimal JS is reliable |
| Navigation | Duplicated across 5 pages | 5 pages is manageable; no build tool needed |
| Deployment | GitHub Pages (static files, no build step) | Just push HTML — Pages serves it directly |
| Contact form | Formspree (optional) | Works with static hosting, no backend |

---

## 3. Design System

### Color Palette (CSS Custom Properties)
Blending Gorman's professionalism with Causale's warmth:

```css
:root {
  --primary:       #2A6B6E;  /* Deep teal */
  --primary-light: #4DB0B1;  /* Accent teal */
  --primary-dark:  #1E4D4F;  /* Darker teal for hover */
  --secondary:     #C0392B;  /* Warm red for CTAs */
  --dark:          #1A1A2E;  /* Near-black nav/footer */
  --light-bg:      #F8F9FA;  /* Alternating section bg */
  --white:         #FFFFFF;
  --text:          #2C3E50;  /* Body text */
  --text-muted:    #6C757D;  /* Subtitles */
  --border:        #E0E0E0;  /* Subtle borders */
}
```

### Typography
- **Headings:** Raleway (600, 700 weights)
- **Body:** Inter (400, 500, 600 weights)
- **Base size:** 16px, scale up for headings

### Spacing System
- Section padding: `80px 0` (desktop), `48px 0` (mobile)
- Container max-width: `1140px`, centered with auto margins
- Card gap: `2rem`

---

## 4. Page-by-Page Specification

### 4.1 Home (`index.html`)
1. **Hero Section** — Full-width dark teal background, company name "YachayRA", tagline, 1-2 sentence value proposition, CTA button → Contact
2. **Services Overview** — 3-column card grid (Research Design, Data Science, Implementation Science) with icons, linking to services.html
3. **About/Approach Strip** — Alternating background, brief "why us" or methodology statement
4. **CTA Banner** — "Ready to transform your research?" → Contact

### 4.2 Services (`services.html`)
1. **Page Hero** — Smaller hero with title + subtitle
2. **Service Blocks** — 3 detailed sections, each with:
   - Font Awesome icon
   - Title
   - 2-3 sentence description
   - Bullet points of specific offerings
3. **CTA** — Link to Contact

### 4.3 Projects (`projects.html`)
1. **Page Hero**
2. **Project Cards Grid** — 3-4 placeholder projects:
   - Title, client/context, description, tags
   - Hover effect on cards
3. Realistic placeholder content (health/research domain)

### 4.4 Team (`team.html`)
1. **Page Hero**
2. **Team Grid** — 3 placeholder members:
   - CSS-generated circular avatar (initials on colored background)
   - Name, title/role, 2-3 sentence bio
   - Social links (email, LinkedIn)
3. Responsive: 3 → 2 → 1 columns

### 4.5 Contact (`contact.html`)
1. **Page Hero**
2. **Two-column layout:**
   - Left: Contact info (email, location, social links with icons)
   - Right: Contact form (Formspree integration)
3. CTA message

---

## 5. Shared Components (in every page)

### Header/Nav
```
┌──────────────────────────────────────────────┐
│ [Logo] YachayRA    Home  Services  Projects  │
│                    Team  Contact              │
│                              [hamburger ≡]   │
└──────────────────────────────────────────────┘
```
- Sticky/fixed on scroll
- Dark background (`--dark`)
- White text, teal hover/active states
- Hamburger menu on mobile (<768px)

### Footer
```
┌──────────────────────────────────────────────┐
│ YachayRA              Quick Links    Contact  │
│ Tagline/description   Home           Email    │
│                       Services       Location │
│                       Projects                │
│ ─────────────────────────────────────────── │
│ © 2025 YachayRA. All rights reserved.        │
└──────────────────────────────────────────────┘
```

---

## 6. File Structure

```
YachayRA/
├── index.html              # Home page
├── services.html           # Services page
├── projects.html           # Projects page
├── team.html               # Team page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Complete stylesheet
├── js/
│   └── main.js             # Mobile menu toggle, smooth scroll, active nav
├── assets/
│   └── images/             # Any images (logo, team photos, etc.)
├── legacy/                 # Old Quarto files (gitignored)
│   ├── _quarto.yml
│   ├── index.qmd
│   ├── services.qmd
│   ├── projects.qmd
│   ├── team.qmd
│   ├── contact.qmd
│   └── assets/
│       └── styles.css
├── .gitignore
├── CLAUDE.md               # AI instructions (gitignored)
├── PLAN.md                 # This file
└── README.md               # Editing & deployment docs
```

---

## 7. Implementation Phases

### Phase 1: Repo Restructure
- Move Quarto files to `legacy/`
- Update `.gitignore` (add `legacy/`, remove Quarto entries)
- Create `css/`, `js/`, `assets/images/` directories

### Phase 2: CSS Foundation
- Write complete `css/styles.css`: reset, custom properties, typography, grid system, component classes (hero, cards, nav, footer, buttons, forms)

### Phase 3: Build All Pages
- `index.html` — Home with hero, services grid, CTA
- `services.html` — Detailed service blocks
- `projects.html` — Project card grid
- `team.html` — Team member cards
- `contact.html` — Contact info + form

### Phase 4: JavaScript
- Mobile hamburger menu toggle
- Active nav link highlighting
- Smooth scroll for anchor links (if any)

### Phase 5: Polish
- Favicon (inline SVG data URI in `<link>`)
- Open Graph meta tags on all pages
- Final responsive testing
- README documentation

---

## 8. Placeholder Content Strategy

All placeholder text will be **domain-relevant** (no Lorem Ipsum):
- "Yachay" = Quechua for "knowledge/learning" — used thematically
- Service descriptions reflect real research/data science/implementation consulting
- Project placeholders use realistic health research scenarios
- Team bios reflect plausible research consultant profiles

---

## 9. Deployment

GitHub Pages serves static HTML directly — no build step needed.

1. Push HTML files to `main` branch
2. Enable GitHub Pages → Source: `main` branch, root `/`
3. Site is live at `https://<username>.github.io/YachayRA/`
4. Custom domain: configure later via CNAME + DNS
