# Airbnb Single Property Listing Web Application

A pixel-perfect, high-performance, single-property vacation rental listing page built from scratch with **React JS** and **Vite**.

![React](https://img.shields.io/badge/React-18-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5-purple.svg)
![Deployment](https://img.shields.io/badge/Vercel-Ready-black.svg)

---

## ✨ Features

- **Full-Width Edge-to-Edge Responsive Layout**: Expands to 100% viewport width without restrictive fixed box containers.
- **Sticky Top Navbar**: Features the signature Airbnb logo (`#FF385C`), 3-part search pill (`Anywhere | Anytime | Add guests`), host link, globe icon, and profile menu pill button.
- **Property Header & Interactive Actions**: Property title (`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`) with interactive **Share** (link copy) and **Save** (heart toggle state) action buttons.
- **5-Photo Hero Gallery**: 1 large cover image + 4 secondary photos in a 2x2 grid with `12px` rounded outer corners and floating `"Show all photos"` pill button.
- **Main Content Details Grid (2-Column Split)**:
  - **Left Column**: Host specs (`Mirashya`, 2 guests, 1 bed, 1 bath), key highlight badges (Dedicated workspace, self check-in with keypad, free cancellation), expandable description text, amenities list with icons, 4.95 rating reviews with category progress bars, and Candolim Beach map card.
  - **Right Column (Sticky `top: 100px`)**: Fixed reservation card featuring `₹6,500 / night`, check-in/checkout inputs, guest dropdown counter, pink/red gradient **Reserve** button, and total price calculation breakdown (`₹38,200`).
- **More Stays Nearby Carousel**: 5-column property recommendation card grid located above the footer with page counter (`Page 1/2`) and circular Previous `<` & Next `>` arrow buttons.
- **Interactive Modals & Overlays**:
  - **Photo Tour Modal**: Fullscreen modal with a top quick-jump thumbnail bar (`Living room 1`, `Full kitchen`, `Bedroom`, `Pool`, etc.) and 2-column room category photo feeds.
  - **Lightbox Modal**: Dark fullscreen photo viewer (`rgba(0,0,0,0.94)`), photo counter (`1 / 8`), navigation arrows, and keyboard arrow key event listeners (`ArrowLeft`, `ArrowRight`, `Escape`).
  - **Amenities Modal**: Popup dialog displaying all property amenities.
- **Desktop 4-Column Footer**: Footer links (Support, Hosting, Airbnb, Community) and `© 2026 Airbnb Inc.` legal bar.

---

## 🛠️ Tech Stack

- **Frontend**: React JS (`.jsx` / `.js`)
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with CSS Custom Property Tokens
- **Icons**: Scalable Inline SVG Components
- **Deployment**: Vercel (Configured via `vercel.json`)

---

## 📁 Project Folder Structure

```text
play/
├── PROMPT.md                  # Comprehensive AI implementation prompt
├── README.md                  # Project documentation
├── vercel.json                # Vercel SPA routing configuration
├── vite.config.js             # Vite build configuration
├── index.html                 # HTML entry point
├── package.json               # NPM dependencies & scripts
├── public/                    # Public static assets & icons
└── src/
    ├── main.jsx               # React DOM entry script
    ├── App.jsx                # Main layout manager & modal state provider
    ├── App.css                # Base App stylesheet
    ├── index.css              # Global layout reset
    ├── data/
    │   └── listingData.js     # Property listing dataset & photo categories
    ├── hooks/
    │   ├── useScrollLock.js   # Locks body scroll for active modals
    │   └── useKeyPress.js     # Handles ESC and Arrow keyboard events
    ├── components/
    │   ├── common/
    │   │   └── Icons.jsx      # Scalable SVG icon components
    │   ├── layout/
    │   │   ├── Header.jsx     # Sticky top navbar component
    │   │   └── Footer.jsx     # Desktop 4-column footer component
    │   ├── listing/
    │   │   ├── PropertyHeader.jsx
    │   │   ├── HeroGallery.jsx
    │   │   ├── HostOverview.jsx
    │   │   ├── HighlightsList.jsx
    │   │   ├── PropertyDescription.jsx
    │   │   ├── AmenitiesSection.jsx
    │   │   ├── ReviewsSection.jsx
    │   │   ├── LocationSection.jsx
    │   │   ├── ReservationCard.jsx
    │   │   └── MoreStaysNearby.jsx
    │   └── modals/
    │       ├── PhotoTourModal.jsx
    │       ├── LightboxModal.jsx
    │       └── AmenitiesModal.jsx
    └── styles/
        ├── variables.css      # Color tokens & typography rules
        └── globals.css        # Reset & animation keyframes
```

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
Build the project for production:
```bash
npm run build
```

### 4. Deploy to Vercel
Deploy directly using Vercel CLI:
```bash
npx vercel
```
