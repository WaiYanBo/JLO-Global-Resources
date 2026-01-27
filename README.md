```markdown
# JLO Global Resources - Official Website

This is the official web platform for **JLO Global Resources**, a full-suite marketing agency based in Petaling Jaya, Selangor. The site is built using **Astro** for high-performance static generation and **Tailwind CSS** for modern, responsive styling.

## 🚀 Project Overview

JLO Global Resources provides a range of corporate services including brand development, digital marketing, signage design, and customer engagement.

### Key Features
- **Dynamic Hero Slider**: Uses Embla Carousel for high-performance, touch-friendly image sliding on the homepage.
- **Optimized SEO**: Integrated SEO component for Open Graph tags, Twitter cards, and JSON-LD schema.
- **Responsive Organizational Chart**: Clear visualization of the company structure and team roles.

## 📂 Project Structure

```text
/
├── public/              # Static assets (favicons, robots.txt, global images)
├── src/
│   ├── assets/          # Optimized images (Team photos, slider images)
│   ├── components/      # Reusable Astro components (Hero, Navbar, Footer)
│   ├── layouts/         # Base page templates
│   ├── pages/           # Site routes (Home, Company, Products, Contact)
│   └── styles/          # Global CSS and Tailwind configurations
└── astro.config.mjs     # Astro configuration

```

## 👥 Organizational Structure

The company operates through specialized units led by the Managing Director, **Muhammad Jazli**:

* **LG Electronics Unit**: Led by Syed Amirul Asyraf.
* **Signboard & Civil Work**: Led by Muhammad Azizul Harith.
* **F&B Business Unit**: Led by Muhammad Hafiz.

## 🛠️ Development Commands

All commands are run from the root of the project:

| Command | Action |
| --- | --- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Previews the production build locally |

## 🌐 SEO & Social Sharing

To update the thumbnail that appears when sharing the link:

1. Place your image in the `public/` folder.
2. Update the `image` prop in the `Layout` component within your pages (e.g., `index.astro`).
3. Ensure `astro.config.mjs` has the correct `site` URL defined.

---

*Built with ❤️ by JLO Global Resources Development Team.*

```

```