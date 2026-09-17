# Airbnb Single Property Listing Page — Implementation Prompt

> **Context**: The following prompt is written from the perspective of a product manager / designer looking at the architecture wireframe diagram and giving explicit instructions to an AI developer to build this exact Airbnb single-property listing web application.

---

### 💬 Prompt to AI:

"Hey! I am looking at the architecture wireframe diagram for our single-property Airbnb listing page. I want you to build this entire page from scratch using **React JS** and **Vite**. 

Here are the detailed requirements and section-by-section specifications based on the architecture diagram:

---

### 1. General Layout & Styling Rules
- **Full-Width Responsive Layout**: The page must expand to **100% of the screen width** (edge-to-edge layout with clean `padding: 0 40px`). Do NOT restrict the page inside a narrow fixed box or add vertical frame lines on the sides.
- **Frontend-Only**: All listing images, photos, reviews, pricing, and property metadata should be stored locally in `src/data/listingData.js`. No backend server is required.
- **Pure React JS**: Use standard JavaScript React files (`.jsx` and `.js`).

---

### 2. Section 1 — Sticky Header / Navbar
- Build a top navigation bar (`position: sticky; top: 0; z-index: 100`).
- **Left**: Airbnb primary brand logo in `#FF385C`.
- **Center**: Decorative 3-part pill search bar (`Anywhere | Anytime | Add guests` + search magnifier icon in a red circle). *Note: This navbar search pill is for visual presentation only*.
- **Right**: `"Become a host"` link, globe language/currency icon button, and user profile menu pill (hamburger menu icon + round avatar icon).

---

### 3. Section 2 — Property Title & Action Header
- Display property title: `"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"` (`26px` bold font).
- **Right Action Buttons**:
  - **Share** button: Upload icon + `"Share"` text (copies listing link on click).
  - **Save** button: Heart icon + `"Save"` / `"Saved"` text (toggles heart fill state on click).

---

### 4. Section 3 — Hero Photo Gallery
- **5-Photo Grid Arrangement**:
  - **Left**: 1 large featured cover photo occupying 50% grid width and 2 rows.
  - **Right**: 4 secondary photos arranged in a 2x2 grid.
  - Apply `12px` rounded outer corners to the grid container.
- **"Show all photos" Pill Button**:
  - Positioned at the bottom-right corner of the 5th photo.
- **Interaction**: Clicking ANY photo or the `"Show all photos"` button opens the **Photo Tour Modal**.

---

### 5. Section 4 — Main Content Area (2-Column Split)
Create a 2-column split grid (`1fr 370px` with an `80px` gap):

#### **Left Column (~65% Width — Property Details)**:
1. **Host Overview**: Host avatar (`Mirashya`), capacity specs (`2 guests · 1 bedroom · 1 bed · 1 bath`), and Superhost badge.
2. **Key Highlights**: 3 bullet items with icons:
   - *Dedicated workspace* (with Wi-Fi)
   - *Self check-in* (with digital keypad lock)
   - *Free cancellation* (up to 48 hours before check-in)
3. **Property Description**: Detailed property summary paragraph with an interactive `"Show more / Show less"` toggle.
4. **Amenities Section**: 2-column grid of top 10 amenities with icons (Wi-Fi, Jacuzzi, Parking, AC, Kitchen, TV, etc.) + `"Show all 10 amenities"` outline button.
5. **Reviews Section**:
   - Header with overall score `4.95` (24 reviews).
   - 6 category rating progress bars (Cleanliness, Accuracy, Communication, Location, Check-in, Value).
   - 2-column grid of reviewer user cards (avatar, name, date, comment text).
6. **Location Section**: Section title `"Where you'll be"`, subtitle `"Candolim, Goa, India"`, and interactive map container card.

#### **Right Column (~35% Width — Sticky Booking Widget)**:
- **Sticky Reservation Card** (`position: sticky; top: 100px; width: 370px`):
  - Header: Price per night `₹6,500 / night` (bold `22px`) + rating badge (`★ 4.95 · 24 reviews`).
  - Input Matrix: `CHECK-IN` and `CHECKOUT` date boxes + `GUESTS` dropdown counter (1-4 guests).
  - Primary Action Button: Large red/pink gradient **Reserve** button (`linear-gradient(90deg, #FF385C, #E00B41)`).
  - Disclaimer text: *"You won't be charged yet"*.
  - Price Calculation Breakdown:
    - `₹6,500 x 5 nights` = `₹32,500`
    - Cleaning fee = `₹1,500`
    - Service fee = `₹4,200`
    - **Total before taxes** = **`₹38,200`**

---

### 6. Section 5 — More Stays Nearby Carousel
- Section header title `"More stays nearby"` with top-right pagination indicator (`Page 1 / 2`) and circular Previous `<` & Next `>` arrow buttons.
- 5-column listing card grid displaying nearby property recommendations (images with `16px` rounded corners, titles, nightly pricing, and star ratings).
- Clicking `<` or `>` switches between Page 1 (`Stay 1` - `Stay 5`) and Page 2 (`Stay 6` - `Stay 10`).

---

### 7. Section 6 — Footer
- Desktop 4-column footer links (Support, Hosting, Airbnb, Community).
- Bottom legal bar: `© 2026 Airbnb, Inc. · Privacy · Terms · Sitemap · English (US) · ₹ INR`.

---

### 8. Section 7 — Modals & Interactive Overlays
1. **Photo Tour Modal**:
   - Sticky top bar with back arrow `<` button, `"Photo tour"` header title, and Share & Save icons.
   - Top horizontal quick-jump category thumbnail bar (`Living room 1`, `Living room 2`, `Full kitchen`, `Bedroom`, `Full bathroom`, `Gym`, `Exterior`, `Pool`, `Additional photos`). Clicking a thumbnail smoothly scrolls down to that room section.
   - 2-column room category feed (Left: Category title & feature tags e.g. `Sofa · Air conditioning · Ceiling fan · TV`; Right: High-res room photos).
2. **Lightbox Modal**:
   - Dark fullscreen overlay (`rgba(0,0,0,0.94)`), photo counter (`1 / 8`), centered image, left `<` and right `>` navigation arrow controls.
   - Supports keyboard arrow keys (`ArrowLeft`, `ArrowRight`) and `Escape` to close.
3. **Amenities Modal**:
   - Popup dialog displaying all property amenities with icons.
