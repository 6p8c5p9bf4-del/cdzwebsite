# LOINNER website

A static site built with [Astro](https://astro.build).

## Run it

```
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # builds the site into dist/
```

## Change the content

- **Text**: everything is in `src/content/site.json`.
- **Images**: replace files in `public/images/` with real photos of the same file name.
- **Logos**: replace files in `public/logos/`.
- **Checklist**: `PLACEHOLDERS.md` lists every placeholder.

## Before launch

- The site is hidden from search engines (`noindex` in `src/layouts/Base.astro` and `public/robots.txt`).
- The contact form is not connected (see the note in `src/pages/contact.astro`).
