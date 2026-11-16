# LOINNER website

Static site built with [Astro](https://astro.build).

## Run it

```
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # builds the site into dist/
```

## Where things are

- `src/content/site.json`: all text on the site, in one file.
- `public/images/`: all photos. Replace a file with a real photo of the same name.
- `public/logos/`: wordmarks, logo mark, favicon and holding logos.
- `PLACEHOLDERS.md`: checklist of everything still to replace.
- `src/pages/`: one file per page. `src/components/` and `src/layouts/`: shared parts.
- `src/styles/global.css`: all styling (colours, type, layout, motion).

## Before launch

- The site is hidden from search engines (`noindex` in `src/layouts/Base.astro` and `public/robots.txt`).
- The contact form is not connected (see the note in `src/pages/contact.astro`).
