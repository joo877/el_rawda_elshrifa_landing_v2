# El Rawda Elshrifa — Landing Page

The first approved landing-page design, rebuilt with:

- HTML5
- Tailwind CSS v4 via CLI (`@tailwindcss/cli` + `tailwindcss`)
- Vanilla JavaScript
- Google Fonts: DM Sans + Playfair Display
- Font Awesome icons
- Smooth scrolling
- Responsive desktop/mobile navigation
- Direct Call / WhatsApp / Email buttons

## Project structure

```text
el-rawda-elshrifa-landing-page/
├── index.html
├── package.json
├── script.js
├── style.css
├── logo.png
├── assets/
│   ├── hero.jpg
│   ├── about.jpg
│   ├── agricultural.jpg
│   ├── industrial.jpg
│   ├── consumer.jpg
│   ├── raw-materials.jpg
│   ├── services-map.jpg
│   ├── testimonial-1.jpg
│   └── testimonial-2.jpg
├── src/
│   └── input.css
└── dist/
    └── output.css
```

## Install Tailwind CLI

```bash
npm install tailwindcss @tailwindcss/cli
```

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
```

The generated Tailwind file is `dist/output.css`.

## Notes

- Tailwind is installed through npm; there is no Tailwind Play CDN in the HTML.
- Google Fonts and Font Awesome are loaded normally in `index.html`.
- Most layout, spacing, typography sizes, colors and responsive behavior are Tailwind utility classes directly in `index.html`.
- `style.css` contains only the small amount of custom CSS needed for navigation states, hover effects, gradients and a few reusable visual details.
- The phone number, WhatsApp number, email address and social links are placeholders and should be replaced before delivery.
- Product numbers and testimonials are sample content from the mockup and should be replaced with verified company information.
