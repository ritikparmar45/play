# AI Prompts & Instructions — Airbnb Listing Page

This document records the complete sequence of prompts and instructions used to design, build, and refine the React Airbnb single-property listing application.

---

## Prompt 1 — Reference Analysis

TASK: Analyze the reference website before starting implementation.

Reference:
https://airbnb-clone-umber-two.vercel.app

First, create a file named `AI_PROMPTS.md` in the project root if it does not already exist.

IMPORTANT:
The exact prompt contained in this message must be appended to `AI_PROMPTS.md` under:

## Prompt 1 — Reference Analysis

Do not modify, summarize, or paraphrase this prompt. Preserve the complete prompt exactly as provided.

For this task, DO NOT write any application code yet.

Analyze the reference website strictly as a visual and behavioral reference. Do not copy, scrape, lift, or reuse its source code or implementation.

Analyze and document:

1. Page structure
- Header/navbar
- Main content
- Property title and location
- Reviews/rating
- Hero image/gallery
- Property details
- Amenities
- Description
- Host section
- Reservation/booking card
- Footer or other visible sections

2. Visual design
- Layout and container width
- Spacing and padding
- Typography
- Font sizes and weights
- Colors
- Borders
- Border radius
- Shadows
- Buttons
- Icons
- Image dimensions and cropping

3. Gallery behavior
- Hero image arrangement
- Number of visible images
- Image grid structure
- "Show all photos" behavior
- Image hover behavior

4. Photo Tour
Document exactly:
- How it opens
- Layout
- Navigation
- Close behavior
- Scrolling
- Animations/transitions
- Keyboard behavior

5. Lightbox
Document exactly:
- How it opens
- Previous/next controls
- Close behavior
- Keyboard navigation
- Image transitions
- Focus behavior

6. Accessibility
Identify expected:
- Keyboard navigation
- Enter/Space interactions
- Escape behavior
- Arrow key behavior
- Focus management
- Focus trapping where applicable
- ARIA labels/roles
- Semantic buttons and links

7. Desktop layout
The assignment requires desktop only. Identify the desktop layout and important viewport assumptions.

8. Assets
Identify all assets that need to be recreated or sourced independently:
- Property images
- Icons
- Logo
- Avatar
- Other visual assets

Create a detailed `REFERENCE_ANALYSIS.md` file containing this analysis.

At the end of `REFERENCE_ANALYSIS.md`, include:

# Implementation Plan

Include:
- React component hierarchy
- State management requirements
- Modal/overlay architecture
- Suggested folder structure
- Styling strategy
- Animation strategy
- Accessibility strategy
- Testing strategy
- Pixel-perfect comparison checklist

IMPORTANT:
Do not implement the application yet.

After completing the analysis:
1. Verify that `AI_PROMPTS.md` contains the exact Prompt 1 text.
2. Verify that `REFERENCE_ANALYSIS.md` is complete.
3. Show me a concise summary of your findings.
4. Wait for my next instruction.

---

## Prompt 2 — Frontend Application Setup & Design Constraints

Build the Airbnb single-property listing page from scratch using React JS based on the reference design.

Requirements:
- Design the main property listing page using React components.
- The header/navbar is for visual presentation only (buttons do not require backend routing).
- Store all listing image assets, property details, and review data locally in the frontend project (no backend required).
- Include the sticky navbar, title block, 5-photo hero grid, 2-column details split layout, sticky reservation card (`₹6,500 / night`), and 4-column desktop footer.

---

## Prompt 3 — Full-Width Edge-to-Edge Responsive Layout

Update the layout to span 100% of the screen width:
- Remove fixed max-width constraints (such as `1120px` or default frame borders) so that the content expands edge-to-edge across the screen.
- Ensure the sticky header, hero photo gallery, main content grid, and footer scale smoothly with generous horizontal padding (`0 40px`).

---

## Prompt 4 — Photo Tour Modal & Category Navigation

Implement the exact Photo Tour modal behavior and visual layout:
- Clicking any photo in the hero grid or the "Show all photos" pill button opens the Photo Tour modal.
- Include a sticky top header bar with a back arrow `<` button, "Photo tour" title, and Share & Save icons.
- Add a top quick-jump category thumbnail navigation bar (`Living room 1`, `Living room 2`, `Full kitchen`, `Bedroom`, `Full bathroom`, `Gym`, `Exterior`, `Pool`, `Additional photos`).
- Render each category section with a 2-column split (Left: Category title & feature tags e.g. `Sofa · Air conditioning · Ceiling fan · TV`; Right: High-res room photos).
- Clicking any photo inside the Photo Tour opens the dark fullscreen Lightbox modal with arrow navigation controls.

---

## Prompt 5 — More Stays Nearby Carousel Section

Add the "More stays nearby" section above the main footer:
- Section header with title `"More stays nearby"` and pagination controls (`1 / 2` counter + circular `<` and `>` arrow buttons).
- 5-column listing card carousel displaying property cover images with rounded corners (`16px`), title, price per night, and star rating.
- Interactive page switching (`1 / 2` and `2 / 2`).

---

## Prompt 6 — React JS Conversion & Codebase Optimization

Convert the codebase to pure React JS:
- Convert all component files, hooks, and data files to `.jsx` / `.js`.
- Remove TypeScript boilerplate configuration files (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `.oxlintrc.json`).
- Maintain a clean project root containing only essential files (`index.html`, `vite.config.js`, `package.json`, `src/`, `public/`, `AI_PROMPTS.md`).
