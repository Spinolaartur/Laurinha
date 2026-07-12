# Our Story

A premium, romantic static website — a living relationship archive built with React, Vite, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173`.

---

## Personalizing Content

**Everything editable lives in one file:**

```
src/data/siteContent.js
```

Look for `// EDIT:` comments throughout the file.

### What to change first

1. **`siteMeta`** — Her name, your name, site title
2. **`importantDates`** — The three key dates (met, first kiss, official start)
3. **`hero`** — Headline, subheadline, hero image path
4. **`timeline.milestones`** — Your relationship milestones with real dates and descriptions
5. **`specialEvents.events[0]`** — Graduation tribute (already themed for Nursing / University of Madeira)
6. **`letters.items`** — Personal notes in your own words
7. **`closing`** — Final message and signature

### Important dates

Edit the `importantDates` object:

```js
export const importantDates = {
  met: '2022-03-15',        // YYYY-MM-DD
  firstKiss: '2022-05-20',
  officialStart: '2022-06-01',
};
```

These dates power the live counters in the **Time Since** section. Keep timeline milestone `isoDate` values in sync.

---

## Adding Photos

Place images in `public/images/` following this structure:

```
public/images/
├── hero.jpg
├── closing.jpg
├── timeline/
│   ├── met.jpg
│   ├── first-kiss.jpg
│   └── official.jpg
├── gallery/
│   ├── 01.jpg … 06.jpg
└── events/
    ├── graduation/
    │   ├── 01.jpg … 03.jpg
    └── anniversary/
        └── 01.jpg
```

Then update the corresponding paths in `siteContent.js`.

**Tips:**
- Use `.jpg` or `.webp` for photos
- Compress images (aim for under 500KB each)
- If a photo is missing, an elegant placeholder appears automatically

---

## Deploy to Cloudflare Pages (Free)

### Option A: Connect GitHub repo

1. Push this project to a GitHub repository
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create**
3. Choose **Pages** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Framework preset:** None (or Vite)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 18 or higher (set in Environment variables: `NODE_VERSION` = `18`)
6. Click **Save and Deploy**

Your site will be live at `https://your-project.pages.dev`.

### Option B: Direct upload

```bash
npm run build
```

Then upload the `dist/` folder via Cloudflare Pages dashboard → **Direct Upload**.

### Custom domain (optional)

In Cloudflare Pages → your project → **Custom domains**, add your domain and follow DNS instructions.

---

## Deploy to GitHub Pages (Optional)

The project uses `base: './'` in `vite.config.js` for relative asset paths, which works on Cloudflare Pages and GitHub Pages.

For GitHub Pages with a project site (`username.github.io/repo-name`):

1. Update `vite.config.js`:
   ```js
   base: '/your-repo-name/',
   ```
2. Build: `npm run build`
3. Deploy the `dist/` folder (e.g. with `gh-pages` package or GitHub Actions)

For a user/organization site (`username.github.io`), keep `base: './'` or use `base: '/'`.

---

## Tech Stack

- **React 18** — UI framework
- **Vite 6** — Build tool
- **Tailwind CSS 3** — Styling
- **Framer Motion** — Animations
- **Headless UI** — Accessible dialogs, tabs, disclosures
- **Lucide React** — Icons

---

## Project Structure

```
src/
├── components/
│   ├── layout/       Navbar, Footer
│   ├── sections/     Hero, Timeline, TimeSince, Gallery, etc.
│   └── ui/           Button, Lightbox, LiveCounter, etc.
├── data/
│   └── siteContent.js   ← Edit all content here
├── hooks/            useDarkMode, useLiveTimer, useActiveSection
├── utils/            cn (className helper)
├── App.jsx
├── main.jsx
└── index.css
```

---

## Features

- Single-page scrolling experience
- Sticky navbar with active section highlighting
- Mobile menu (Headless UI Dialog)
- Dark / light mode toggle
- Live relationship timers
- Photo gallery with lightbox (keyboard navigation)
- Special Events tabs (graduation featured)
- Expandable letters / notes
- Scroll-triggered animations (respects reduced motion)
- Graceful image fallbacks when photos aren't added yet

---

Made with care.
