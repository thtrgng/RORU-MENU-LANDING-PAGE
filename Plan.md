# Plan: RORU Menu Landing Page

## Goal

A single `index.html` landing page that presents RORU's 3 menu PDFs with a design consistent with the PDFs themselves — warm cream/parchment aesthetic, elegant typography, minimal layout.

## Success Criteria

- [ ] Page loads with correct RORU branding and aesthetic
- [ ] All 3 menu cards display with correct titles and descriptions
- [ ] Each card opens its corresponding PDF (in browser / new tab)
- [ ] Layout is clean and responsive on desktop and mobile
- [ ] Visual style matches the PDF menus (cream background, serif headings, clean lines)

## Implementation

### Step 1 — Structure `index.html`

- `<header>`: Restaurant name "RORU", tagline, thin rule
- `<main>`: Three menu cards in a responsive grid
- `<footer>`: Minimal address/contact placeholder

### Step 2 — Menu Cards

Each card contains:
- Menu title (uppercase, tracked, serif)
- Short description line
- A visual indicator (thin rule or icon)
- Link that opens the PDF

Card order:
1. Omakase Spring Summer 2026 — `1. OMAKASE SPRING SUMMER 2026.pdf`
2. A La Carte Menu — `2. A LA CARTE MENU.pdf`
3. Drinks Menu — `DRINKS MENU.pdf`

### Step 3 — Styling

- Background `#f5f0ea`, text `#1e1916`, accent `#8b7355`
- Headings: Playfair Display (serif), body: Inter (sans-serif)
- Cards separated by thin 1px rules or generous whitespace
- Hover state: subtle background shift or underline on card title
- Mobile: stack cards vertically, full-width

### Step 4 — Verify

- Open `index.html` in browser
- Click all 3 PDF links — confirm they open
- Resize to mobile viewport — confirm layout holds
