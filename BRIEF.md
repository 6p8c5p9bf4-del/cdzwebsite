I want to build an original website from scratch for an investment firm called LOINNER. I don't have my content yet, so use clear placeholders for every image, logo and piece of text other than the firm name, which I'll swap in later.

LOOK AND FEEL
- Calm, editorial, premium. Lots of empty space, big photographs, very little decoration.
- Light background. Colours: off-white background (#F4F1EA), near-black text (#141414), mid-grey for small text and lines (#8C8A85). No other colours.
- Fonts (free, from Google Fonts): a clean, modern sans-serif for headings (Inter Tight) and Inter for body text and menus. No serif fonts. Large headings use tight letter spacing. In big headings, set one key word in italics, e.g. "A new *kind* of investment firm".
- Section labels are small uppercase text with a slash in front, e.g. "/ ABOUT", "/ HOLDINGS".
- Motion: gentle only. Sections fade up as you scroll; the hero photo zooms very slowly. Turn all motion off for visitors whose device asks for reduced motion.
- Don't copy code, text, images or logos from any existing site or template. Write everything yourself.

HOME PAGE, TOP TO BOTTOM
1. Header: a slim bar with the LOINNER wordmark on the left, the menu (Home, Story, Approach, Holdings, Team, Press, Contact) and a small "Contact" button on the right. On phones the menu becomes a simple full-screen overlay.
2. Hero: a full-width, full-height architecture photo. A large centred headline in uppercase off-white letters ("[TAGLINE, 3 to 6 words]"), a one-sentence subtitle beneath it, and a small "Scroll" cue at the bottom.
3. About: label "/ ABOUT", a mid-size heading with one italic word, two tall portrait images side by side, then one longer paragraph in large, light body text with a text link ("[Our story →]").
4. Approach: label, heading, one intro line and a "[See our approach →]" link, a wide landscape image, then a row of three cards (one per principle), each with a photo, a short name and one line of text.
5. Two split blocks that alternate: a landscape image beside a label, a sub-heading and a link (Story), then the reverse with a portrait image (Team).
6. Holdings, the off-grid section: label "/ HOLDINGS", a heading and a "View all" link, then 7–9 image tiles placed off the grid. The tiles are different sizes and shapes (portrait, landscape, square), start at different heights, and some overlap the column lines, so it feels like a curated wall rather than a neat grid. Each tile has a small caption under it: the holding's name and a one-line description. On hover, the image scales up slightly. On phones, it becomes a staggered two-column layout.
7. Press: label, heading, three entries (title and date) and a "View all" link.
8. Closing section: a full-width background photo with a centred heading and two buttons ("Contact us" and "Our approach").
9. Footer: the LOINNER wordmark, [STREET ADDRESS, CITY], [PHONE], [EMAIL], a column of menu links, LinkedIn and Instagram links, © [YEAR] LOINNER, and a Privacy link.

OTHER PAGES
- Story: a hero image, then alternating image/text sections telling the firm's story.
- Approach: 3 to 4 principles, each a numbered heading with a short paragraph, alternating with images.
- Holdings: the full off-grid wall of 9–12 holdings, plus one example detail page for a single holding (hero image, name, description, key facts, website link).
- Team: a grid of people with portrait, name and role.
- Press: a list of articles (title, outlet, date, link).
- Contact: email, address, and a contact form that isn't connected yet (leave a note in the code saying where to connect it).

PLACEHOLDERS
- Images: for every image slot, create a placeholder file in off-white/grey at the exact size and shape the layout needs, with a label printed on it saying what it should show and its size, e.g. "HERO, 2400×1500, architecture photo". Put them all in public/images/ with clear names (hero.jpg, about-1.jpg, holding-01.jpg, team-01.jpg…) so that replacing a file with a real photo of the same name just works.
- Logos: make a placeholder LOINNER wordmark in a dark version (for light backgrounds) and a light version (for the hero), a small square logo mark, and a favicon, all in public/logos/. For the holdings, make placeholder logos ("HOLDING 01", "HOLDING 02"…).
- Text: write all copy except the firm name as bracketed placeholders like [2–3 sentences about your approach], with a rough length so I know how much to write. Keep all text in one file (src/content/site.json) so it can be changed in one place.
- Create PLACEHOLDERS.md: a checklist of every image (file name, size, what it should show), every logo, and every text slot (where it appears, suggested length).

BUILD
- Build a static site with Astro. Make it responsive (check at 1440px and 390px wide), fast, and accessible (alt text placeholders, readable contrast, a menu that works with the keyboard).
- Hide it from search engines for now (noindex tag and robots.txt) until I say it's ready.
- Push the code to my existing GitHub repo, https://github.com/6p8c5p9bf4-del/cdzwebsite (it's empty), on the main branch. Then deploy it to Vercel from that repo on a free .vercel.app address. Install anything you need, and open the GitHub and Vercel sign-ins in my browser when you get there.

DONE MEANS
Only print SITE READY when all of these are true, and show the evidence each time you check:
1. npm run build finishes with no errors.
2. You've taken screenshots of every page at 1440px and 390px wide and fixed anything broken, overlapping or cut off, including the Holdings section on both sizes.
3. PLACEHOLDERS.md lists every placeholder in the site.
4. The code is pushed to the GitHub repo above.
5. The site is live on Vercel. Print the link.
