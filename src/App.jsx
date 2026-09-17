import React, { useState } from 'react';
import './styles/globals.css';
import { listingData } from './data/listingData.js';
import { Header } from './components/layout/Header.jsx';
import { PropertyHeader } from './components/listing/PropertyHeader.jsx';
import { HeroGallery } from './components/listing/HeroGallery.jsx';
import { HostOverview } from './components/listing/HostOverview.jsx';
import { HighlightsList } from './components/listing/HighlightsList.jsx';
import { PropertyDescription } from './components/listing/PropertyDescription.jsx';
import { AmenitiesSection } from './components/listing/AmenitiesSection.jsx';
import { ReviewsSection } from './components/listing/ReviewsSection.jsx';
import { LocationSection } from './components/listing/LocationSection.jsx';
import { ReservationCard } from './components/listing/ReservationCard.jsx';
import { MoreStaysNearby } from './components/listing/MoreStaysNearby.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { PhotoTourModal } from './components/modals/PhotoTourModal.jsx';
import { LightboxModal } from './components/modals/LightboxModal.jsx';
import { AmenitiesModal } from './components/modals/AmenitiesModal.jsx';

export function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header Navbar */}
      <Header />

      {/* Main Page Content Container */}
      <main className="container" style={{ flex: 1 }}>
        {/* Title & Actions */}
        <PropertyHeader title={listingData.title} />

        {/* 5-Photo Hero Grid */}
        <HeroGallery
          photos={listingData.heroPhotos}
          onOpenPhotoTour={() => setIsPhotoTourOpen(true)}
          onSelectPhoto={() => setIsPhotoTourOpen(true)}
        />

        {/* 2-Column Split Details Section */}
        <div style={styles.mainGrid}>
          {/* Left Main Details Column */}
          <div style={styles.leftColumn}>
            <HostOverview
              hostName={listingData.hostName}
              hostAvatar={listingData.hostAvatar}
              isSuperhost={listingData.isSuperhost}
              guests={listingData.guests}
              bedrooms={listingData.bedrooms}
              beds={listingData.beds}
              baths={listingData.baths}
            />

            <HighlightsList highlights={listingData.highlights} />

            <PropertyDescription description={listingData.description} />

            <AmenitiesSection
              amenities={listingData.amenities}
              onOpenAmenitiesModal={() => setIsAmenitiesModalOpen(true)}
            />

            <ReviewsSection
              rating={listingData.rating}
              reviewCount={listingData.reviewCount}
              categoryRatings={listingData.categoryRatings}
              reviews={listingData.reviews}
            />

            <LocationSection location={listingData.location} />
          </div>

          {/* Right Sticky Reservation Card Column */}
          <div style={styles.rightColumn}>
            <ReservationCard
              nightlyPrice={listingData.nightlyPrice}
              rating={listingData.rating}
              reviewCount={listingData.reviewCount}
              cleaningFee={listingData.cleaningFee}
              serviceFee={listingData.serviceFee}
            />
          </div>
        </div>

        {/* More Stays Nearby Carousel Section */}
        <MoreStaysNearby />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <PhotoTourModal
        isOpen={isPhotoTourOpen}
        categories={listingData.photoCategories}
        allPhotos={listingData.allPhotos}
        onClose={() => setIsPhotoTourOpen(false)}
        onSelectPhoto={handleOpenLightbox}
      />

      <LightboxModal
        isOpen={isLightboxOpen}
        photos={listingData.allPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

      <AmenitiesModal
        isOpen={isAmenitiesModalOpen}
        amenities={listingData.amenities}
        onClose={() => setIsAmenitiesModalOpen(false)}
      />
    </div>
  );
}

const styles = {
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 370px',
    gap: '80px',
    paddingTop: '32px',
    position: 'relative',
  },
  leftColumn: {
    minWidth: 0,
  },
  rightColumn: {
    position: 'relative',
  },
};

export default App;
