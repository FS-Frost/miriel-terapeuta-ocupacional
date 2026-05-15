# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static one-page website for a professional occupational therapist. No build tools, no package manager, no compilation step. Three source files only: `index.html`, `style.css`, `app.js`.

## Running locally

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Opening `index.html` directly in a browser also works, but a local server is preferred for testing font loading (Google Fonts CDN) and WhatsApp links.

## Architecture

### Styling

All layout and typography is done with **Tailwind CSS via Play CDN** (loaded in `<head>`). Custom CSS in `style.css` is intentionally minimal — only three things belong there:

1. `html { scroll-behavior: smooth }` 
2. The `.high-contrast` mode overrides (uses `!important` to beat Tailwind's runtime-generated classes)
3. Visual states for the A-/A+ buttons when `disabled`

Do not add general styles to `style.css`. Use Tailwind utilities in `index.html` instead.

### JavaScript

`app.js` is vanilla JS with no modules or bundling. All functions are global (attached to `window`) because they are called via `onclick=` attributes in the HTML. The full state is a single integer (`currentStep`) for font size. No other state exists.

### Accessibility system

Two interactive accessibility features live in the sticky nav:

- **Font zoom**: `increaseFont()` / `decreaseFont()` modify `document.documentElement.style.fontSize` across three steps (100% → 120% → 140%). This scales all Tailwind `rem`-based sizes uniformly.
- **High contrast**: `toggleContrast()` toggles the class `.high-contrast` on `<body>`. The CSS rules in `style.css` override background, text, border, gradient, and focus colors site-wide using `!important`.

### Content placeholders

The HTML uses `[NOMBRE]`, `[APELLIDO]`, `[TELEFONO]`, `[EMAIL]`, and `[N]` as literal string placeholders throughout. Before launch these must be replaced — see `README.md` for the `sed` commands.

## Key constraints

- **No npm, no bundler, no build step** — ever. The site must remain openable by double-clicking `index.html`.
- **No external JS libraries** — Tailwind CSS CDN (CSS only) and Google Fonts CDN are the only external dependencies.
- All SVG icons are inline in the HTML and use `currentColor` so they automatically adapt to the high-contrast mode.
- `aria-hidden="true"` must be preserved on all decorative SVGs and the star ratings. Descriptive text is always on the parent `aria-label` instead.
- The WhatsApp link format is `https://wa.me/NUMERO?text=...` where `NUMERO` has no `+` sign and no spaces.

## Design decisions reference

See `DESIGN.md` for the full rationale behind color choices, typography scale, component patterns, and accessibility implementation details.
