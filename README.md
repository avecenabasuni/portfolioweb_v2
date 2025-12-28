# Portfolio Website

Personal portfolio website showcasing DevOps, SRE, and Cloud Engineering work.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom design system with CSS variables
- **Vanilla JavaScript** - No frameworks, data-driven rendering

## Structure

```
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── js/
│   ├── data.js         # All content data (edit this to update content)
│   ├── app.js          # Application logic
│   └── vendor/         # Third-party scripts
├── assets/
│   ├── images/         # Certification logos, project screenshots
│   └── doc/            # Resume and documents
└── .gitignore
```

## Quick Start

1. Clone the repository
2. Open `index.html` in a browser
3. No build step required!

## Editing Content

All content is in `js/data.js`. Edit the following sections:

- `projects` - Selected Work cards
- `vault` - The Vault showcase items
- `writing` - Blog articles
- `experience` - Work history
- `certifications` - All certificates
- `pillars` - Technical skills
- `stats` - Hero section numbers
- `contact` - Social links

## Deployment

Deploy to GitHub Pages:

1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and save

## Security

This site implements several security best practices:

- **Content Security Policy (CSP)** - Restricts script, style, and connection sources
- **X-Frame-Options: DENY** - Prevents clickjacking attacks
- **X-Content-Type-Options: nosniff** - Prevents MIME-type sniffing
- **Referrer-Policy** - Limits referrer information leakage

## License

MIT
