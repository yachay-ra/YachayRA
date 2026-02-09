# YachayRA — Research & Data Science Consulting

Professional website for YachayRA, a consultancy specializing in research design, data science, and implementation science for health and social impact.

## Quick Start

Open `index.html` in a browser. No build step required — it's plain HTML + CSS.

For local development with live reload, use any static server:

```bash
# Python
python3 -m http.server 8000

# Node.js (npx)
npx serve .
```

## File Structure

```
├── index.html          # Home page
├── services.html       # Services page
├── projects.html       # Projects / portfolio
├── team.html           # Team members
├── contact.html        # Contact info + form
├── css/
│   └── styles.css      # Complete stylesheet (colors, layout, responsive)
├── js/
│   └── main.js         # Mobile menu toggle, scroll effects
├── assets/
│   └── images/         # Place images here (team photos, logo, etc.)
└── legacy/             # Old Quarto files (gitignored)
```

## How to Edit Content

All content lives in the `.html` files. Open any file in a text editor and modify the text between HTML tags.

### Adding a Team Member

In `team.html`, copy an existing `<div class="team-card">` block and change:
- The initials in `<div class="team-avatar">XX</div>`
- The name in `<h3>`
- The role in `<p class="team-role">`
- The bio in `<p class="team-bio">`
- The social links in `<div class="team-social">`

### Adding a Project

In `projects.html`, copy an existing `<div class="project-card">` block and change:
- The title in `<h3>`
- The context in `<div class="project-context">`
- The description in `<p>`
- The tags in `<div class="project-tags">`

### Changing Colors

All colors are defined as CSS custom properties in `css/styles.css` at the top:

```css
:root {
  --primary:       #2A6B6E;  /* Main teal */
  --primary-light: #4DB0B1;  /* Accent teal */
  --secondary:     #C0392B;  /* CTA red */
  --dark:          #1A1A2E;  /* Nav/footer */
  ...
}
```

Change any value and it updates everywhere.

### Setting Up the Contact Form

The contact form in `contact.html` uses [Formspree](https://formspree.io/). To activate it:

1. Create a free Formspree account
2. Create a new form and get your form ID
3. In `contact.html`, replace `YOUR_FORM_ID` in the form action URL:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Adding Team Photos

Replace the CSS avatar circles with actual images:

1. Place photos in `assets/images/team/`
2. In `team.html`, replace the avatar div:
   ```html
   <!-- Before -->
   <div class="team-avatar">AC</div>

   <!-- After -->
   <img src="assets/images/team/ana.jpg" alt="Ana Castillo" class="team-avatar" style="object-fit: cover;">
   ```

## Deployment (GitHub Pages)

1. Push all files to the `main` branch
2. Go to repository Settings > Pages
3. Source: Deploy from a branch > `main` > `/ (root)`
4. Site will be live at `https://<username>.github.io/YachayRA/`

### Custom Domain

1. Add a `CNAME` file to the repo root with your domain (e.g., `yachayra.com`)
2. Configure DNS: add a CNAME record pointing to `<username>.github.io`
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Tech Stack

- Plain HTML5 + CSS3 + vanilla JavaScript
- [Google Fonts](https://fonts.google.com/) (Inter + Raleway)
- [Font Awesome 6](https://fontawesome.com/) icons via CDN
- No frameworks, no build tools, no dependencies
