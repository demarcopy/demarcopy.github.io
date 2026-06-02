# Rodrigo Cyberpunk Portfolio

Personal portfolio for Rodrigo Demarco with a cyberpunk/neon aesthetic. It is a static HTML and CSS site, inspired by the simple organization of React/Gatsby portfolios, without copying text or assets from the reference repo.

## Structure

- `index.html`: Home page with intro, links and hero visual.
- `about.html`: professional profile.
- `projects.html`: project cards.
- `styles.css`: global styles, responsive layout and neon theme.
- `script.js`: dark/light mode switch with a cyberpunk transition effect and browser persistence.
- `assets/`: site images.

## Edit Personal Data

Before publishing, review these placeholders in `index.html`:

- `TU_USUARIO_GITHUB`
- `TU_LINKEDIN`
- `demarcopy@gmail.com`

Project links currently use `#` until they are replaced with real repos or demos.

The main portrait is `assets/fotoCV.jpg`. To replace it, use the same filename or update the path in `index.html`.

## Run Locally

There are no required dependencies. You can open `index.html` directly in the browser.

You can also start a simple local server from the repo root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Install Dependencies

This project does not require installation because it does not use Node, Gatsby or bundlers.

## Build

There is no build step. The HTML, CSS, JS and assets are the final deployable files.

## Deploy To GitHub Pages

1. Push the repo to GitHub.
2. Go to `Settings > Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select the `main` branch and the `/root` folder.
5. Save the configuration.

GitHub Pages will publish the static files directly.

## Deploy To Vercel

1. Import the repo from Vercel.
2. Framework preset: `Other`.
3. Build command: leave empty.
4. Output directory: leave empty or use `.`.
5. Deploy.

## Technical Notes

- Semantic HTML with basic SEO metadata.
- Responsive layout for desktop and mobile.
- Accessible contrast with `hover` and `focus-visible` states.
- Custom visual asset in `assets/cyberpunk-data-grid.png`.
- Dark mode by default and optional light mode with a cyberpunk transition.
