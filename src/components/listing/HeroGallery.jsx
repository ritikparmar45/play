import React from 'react';
import { GridIcon } from '../common/Icons.jsx';

export const HeroGallery = ({ photos, onOpenPhotoTour, onSelectPhoto }) => {
  if (!photos || photos.length < 5) return null;

  return (
    <div style={styles.galleryWrapper}>
      <div style={styles.gridContainer}>
        {/* Main Large Image (Left, 50% width) */}
        <div style={styles.mainPhotoBox} onClick={() => onSelectPhoto(0)}>
          <img src={photos[0].url} alt={photos[0].caption} style={styles.img} />
          <div style={styles.hoverOverlay} />
        </div>

        {/* 4 Secondary Small Images (Right, 2x2 matrix) */}
        <div style={styles.secondaryGrid}>
          {photos.slice(1, 5).map((photo, index) => (
            <div key={photo.id} style={styles.subPhotoBox} onClick={() => onSelectPhoto(index + 1)}>
              <img src={photo.url} alt={photo.caption} style={styles.img} />
              <div style={styles.hoverOverlay} />
            </div>
          ))}
        </div>
      </div>

      {/* Floating "Show all photos" Pill Button */}
      <button style={styles.showAllBtn} onClick={onOpenPhotoTour} aria-label="Show all photos">
        <GridIcon size={14} />
        <span>Show all photos</span>
      </button>
    </div>
  );
};

const styles = {
  galleryWrapper: {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    marginTop: '12px',
    marginBottom: '24px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    height: '480px',
  },
  mainPhotoBox: {
    position: 'relative',
    height: '100%',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  secondaryGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '8px',
    height: '100%',
  },
  subPhotoBox: {
    position: 'relative',
    height: '100%',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.3s ease',
  },
  hoverOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: 'background-color 0.2s ease',
  },
  showAllBtn: {
    position: 'absolute',
    bottom: '24px',
    right: '24px',
    backgroundColor: '#ffffff',
    border: '1px solid #222222',
    borderRadius: '8px',
    padding: '7px 15px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#222222',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.18)',
    transition: 'transform 0.1s ease, background 0.2s ease',
    zIndex: 5,
  },
};
