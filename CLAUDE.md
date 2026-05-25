# RORU Menu Landing Page

## Business Requirements

- A single landing page for RORU restaurant that showcases 3 menus as PDFs
- Menus: (1) Omakase Spring Summer 2026, (2) A La Carte Menu, (3) Drinks Menu
- Design copies the visual aesthetic of the PDFs: warm cream/beige, clean, upscale minimal
- Each menu card links to its respective PDF (opens in browser or new tab)
- No unnecessary features — one page, three menus, done

## Technical Details

- Pure HTML + CSS, no frameworks, no build tools
- Single `index.html` file in the project root
- PDFs referenced with relative paths from the same directory
- Google Fonts for typography (serif for headings, sans-serif for body)
- Responsive layout for desktop and mobile

## Design Reference

Copied from the PDF menus:
- Background: warm cream/parchment `#f5f0ea`
- Text: dark charcoal `#1e1916`
- Accent/secondary text: warm taupe `#8b7355`
- Dividers: thin 1px lines in `#c9b99a`
- Heading font: elegant serif (Playfair Display or similar)
- Body font: clean sans-serif (Inter or similar)
- Generous whitespace, uppercase tracking on labels

## Strategy

1. Write `CLAUDE.md` and `Plan.md`
2. Build `index.html` matching the PDF aesthetic
3. Verify all 3 PDFs open correctly from the page
4. Check responsive layout on mobile

## Coding Standards

1. Use semantic HTML, keep CSS clean and scoped
2. Keep it simple — no over-engineering, no extra features
3. No comments unless truly non-obvious
4. No emojis
