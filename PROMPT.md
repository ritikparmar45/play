Build the Airbnb-style single-property listing page from scratch using React.js, Vite, JavaScript, and Tailwind CSS.

I want you to implement the project sequentially in the following steps. Complete each step before moving to the next one. Keep the code modular and reusable throughout the project.

Do not skip any required functionality.

==================================================
STEP 1 — PROJECT SETUP & ARCHITECTURE
==================================================

Set up the React + Vite project with Tailwind CSS.

Use JavaScript only (.jsx and .js).

Create this component structure:

src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
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
│   │
│   └── modals/
│       ├── PhotoTourModal.jsx
│       ├── LightboxModal.jsx
│       └── AmenitiesModal.jsx
│
├── data/
│   └── listingData.js
│
├── hooks/
│   ├── useScrollLock.js
│   └── useKeyPress.js
│
├── App.jsx
└── main.jsx

Keep all property information, reviews, pricing, amenities, nearby stays, and image data inside listingData.js.

No backend is required.


==================================================
STEP 2 — HEADER / NAVBAR
==================================================

Build the sticky header first.

Requirements:

- position: sticky
- top: 0
- z-index: 100
- white background
- clean bottom border
- responsive layout

Left:
- Airbnb-style logo
- Use #FF385C as the primary logo color

Center:
Create a decorative search pill:

Anywhere | Anytime | Add guests | Search

The search bar is visual only. No actual search functionality is required.

Right:
- Become a host
- Globe/language icon
- Profile pill
- Hamburger icon
- Circular avatar

Make the navbar responsive for tablet and mobile.


==================================================
STEP 3 — PROPERTY HEADER + HERO GALLERY
==================================================

Build the property header below the navbar.

Property title:

Romantic Jacuzzi 1BHK Candolim | Mirashya UG10

Use approximately 26px bold typography.

Add action buttons on the right:

- Share
- Save

Share:
- Copy the listing URL when clicked.

Save:
- Toggle between Save and Saved.
- Change the heart appearance when saved.

Now build the hero gallery.

Gallery layout:

- 1 large image on the left
- 4 smaller images on the right
- Right side images arranged in a 2x2 grid
- Large image occupies approximately 50% width
- Gallery should have rounded outer corners around 12px
- Use images from listingData.js

Add:

Show all photos

button at the bottom-right of the gallery.

Clicking any image or "Show all photos" must open PhotoTourModal.


==================================================
STEP 4 — MAIN PROPERTY CONTENT
==================================================

Create the main content area using a two-column layout.

Desktop:

grid-template-columns: 1fr 370px;

Gap:

approximately 80px.

LEFT COLUMN:

A. HostOverview

Display:

- Host avatar
- Host name: Mirashya
- 2 guests
- 1 bedroom
- 1 bed
- 1 bath
- Superhost badge

B. HighlightsList

Create three highlight items:

- Dedicated workspace
- Self check-in
- Free cancellation

Use suitable icons.

C. PropertyDescription

Add a realistic property description.

Initially show a shortened version.

Add:

Show more

Clicking it expands the full description.

When expanded:

Show less

D. AmenitiesSection

Create a 2-column grid containing 10 amenities:

- Wi-Fi
- Jacuzzi
- Free parking
- Air conditioning
- Kitchen
- TV
- Workspace
- Pool
- Washing machine
- Hot water

Use suitable icons.

Add:

Show all 10 amenities

Clicking this button must open AmenitiesModal.


==================================================
STEP 5 — REVIEWS + LOCATION
==================================================

Build ReviewsSection.

Display:

4.95

24 reviews

Create six rating categories:

- Cleanliness
- Accuracy
- Communication
- Location
- Check-in
- Value

Display a visual rating/progress bar for each category.

Below that create reviewer cards in a 2-column grid.

Each review card should contain:

- Avatar
- Reviewer name
- Date
- Review comment

Use review data from listingData.js.

Now build LocationSection.

Title:

Where you'll be

Subtitle:

Candolim, Goa, India

Add a large map-style card.

No external map API is required.

The map can be a styled placeholder representing the location.


==================================================
STEP 6 — STICKY RESERVATION CARD
==================================================

Build ReservationCard in the right column.

Desktop behavior:

position: sticky;
top: 100px;

Width:

370px.

Display:

₹6,500 / night

Rating:

★ 4.95 · 24 reviews

Create booking inputs:

CHECK-IN
CHECKOUT
GUESTS

Guest selector should support:

1
2
3
4 guests

Add the primary button:

Reserve

Use this gradient:

linear-gradient(90deg, #FF385C, #E00B41)

Below the button display:

You won't be charged yet

Price breakdown:

₹6,500 × 5 nights = ₹32,500

Cleaning fee = ₹1,500

Service fee = ₹4,200

Total before taxes = ₹38,200

Make the guest selector interactive.


==================================================
STEP 7 — MORE STAYS + FOOTER
==================================================

Build MoreStaysNearby.

Section title:

More stays nearby

Add:

Page 1 / 2

with circular previous and next buttons.

Page 1:

Stay 1
Stay 2
Stay 3
Stay 4
Stay 5

Page 2:

Stay 6
Stay 7
Stay 8
Stay 9
Stay 10

Each card should contain:

- Property image
- Property title
- Nightly price
- Star rating

Clicking the previous/next buttons should switch between the two pages.

Now build Footer.

Create four desktop columns:

- Support
- Hosting
- Airbnb
- Community

Bottom legal bar:

© 2026 Airbnb, Inc. · Privacy · Terms · Sitemap · English (US) · ₹ INR


==================================================
STEP 8 — MODALS & INTERACTIONS
==================================================

Implement all remaining interactive functionality.

--------------------------------------------------
PHOTO TOUR MODAL
--------------------------------------------------

Create a fullscreen Photo Tour modal.

Top bar:

- Back button
- Photo tour title
- Share button
- Save button

Create a horizontal category navigation:

- Living room 1
- Living room 2
- Full kitchen
- Bedroom
- Full bathroom
- Gym
- Exterior
- Pool
- Additional photos

Clicking a category should smoothly scroll to that section.

Each category should contain:

- Category title
- Feature tags
- Description
- High-resolution images

Example tags:

Sofa · Air conditioning · Ceiling fan · TV

Clicking a photo opens the LightboxModal.

--------------------------------------------------
LIGHTBOX MODAL
--------------------------------------------------

Create a fullscreen dark image viewer.

Background:

rgba(0,0,0,0.94)

Include:

- Close button
- Previous button
- Next button
- Current image counter
- Centered image

Example:

1 / 8

Keyboard controls:

ArrowLeft → previous image
ArrowRight → next image
Escape → close

Create/use useKeyPress.js for keyboard handling.

Create/use useScrollLock.js so the background page cannot scroll while a modal is open.

--------------------------------------------------
AMENITIES MODAL
--------------------------------------------------

Create a centered popup dialog containing all property amenities.

Each item should contain:

- Icon
- Amenity name

Include a close button.

Prevent background scrolling while this modal is open.


==================================================
RESPONSIVE DESIGN
==================================================

Make the entire application responsive.

Desktop:
- Two-column main content
- Sticky reservation card
- 5-column nearby stays

Tablet:
- Adjust spacing and gallery dimensions
- Keep content readable

Mobile:
- Convert the main layout to a single column
- Make the reservation card fit the mobile width
- Make the gallery responsive
- Make nearby stays horizontally scrollable if necessary
- Make navbar responsive
- Make modals usable on small screens
- Prevent horizontal overflow


==================================================
CODE QUALITY
==================================================

Follow these rules throughout implementation:

- Use functional React components.
- Use React hooks where required.
- Keep components small and reusable.
- Keep data separate from UI.
- Avoid unnecessary duplication.
- Use semantic HTML.
- Use accessible buttons and labels.
- Add proper hover and focus states.
- Keep styling consistent.
- Avoid unnecessary dependencies.
- Do not create a backend.
- Do not put everything inside App.jsx.
- Keep state close to the component that owns it unless shared state is required.


==================================================
FINAL VERIFICATION
==================================================

After implementing everything:

1. Run the application.
2. Fix compilation errors.
3. Fix console errors.
4. Check all buttons and interactions.
5. Check Save/Saved functionality.
6. Check Share functionality.
7. Check Show More/Show Less.
8. Check gallery and Photo Tour.
9. Check Lightbox navigation.
10. Check keyboard controls.
11. Check Amenities Modal.
12. Check guest selector.
13. Check nearby-stays pagination.
14. Check sticky reservation card.
15. Check responsive behavior on desktop, tablet, and mobile.
16. Make sure there is no horizontal overflow.

The final result should closely match the provided Airbnb-style architecture and wireframe while keeping the implementation clean, modular, and production-like.

Complete the work sequentially from Step 1 through Step 8 and verify the application at the end.