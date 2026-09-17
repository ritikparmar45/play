import React from 'react';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '../common/Icons.jsx';
import { useScrollLock } from '../../hooks/useScrollLock.js';
import { useKeyPress } from '../../hooks/useKeyPress.js';

export const LightboxModal = ({
  isOpen,
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useScrollLock(isOpen);
  useKeyPress('Escape', onClose, isOpen);
  useKeyPress('ArrowLeft', () => handlePrev(), isOpen);
  useKeyPress('ArrowRight', () => handleNext(), isOpen);

  if (!isOpen || !photos || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onNavigate(nextIndex);
  };

  return (
    <div style={styles.lightboxOverlay} className="animate-fade-in" role="dialog" aria-modal="true">
      {/* Top Header Controls */}
      <div style={styles.topBar}>
        <button style={styles.closeBtn} onClick={onClose} aria-label="Close lightbox">
          <CloseIcon size={18} />
        </button>
        <div style={styles.counterText}>
          {currentIndex + 1} / {photos.length}
        </div>
        <div style={{ width: '40px' }} />
      </div>

      {/* Main Image Container */}
      <div style={styles.imageViewer}>
        <button style={styles.navBtnLeft} onClick={handlePrev} aria-label="Previous photo">
          <ChevronLeftIcon size={20} />
        </button>

        <div style={styles.imageFrame}>
          <img src={currentPhoto.url} alt={currentPhoto.caption} style={styles.mainImg} />
          <p style={styles.captionText}>{currentPhoto.caption}</p>
        </div>

        <button style={styles.navBtnRight} onClick={handleNext} aria-label="Next photo">
          <ChevronRightIcon size={20} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  lightboxOverlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 2000,
    backgroundColor: 'rgba(0, 0, 0, 0.94)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#ffffff',
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 24px',
    zIndex: 10,
  },
  closeBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s ease',
  },
  counterText: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#ffffff',
  },
  imageViewer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    position: 'relative',
  },
  imageFrame: {
    maxWidth: '85vw',
    maxHeight: '75vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainImg: {
    maxWidth: '100%',
    maxHeight: '70vh',
    objectFit: 'contain',
    borderRadius: '4px',
    transition: 'opacity 0.2s ease',
  },
  captionText: {
    fontSize: '14px',
    color: '#dddddd',
    marginTop: '16px',
    textAlign: 'center',
  },
  navBtnLeft: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '1px solid #ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease, background 0.2s ease',
  },
  navBtnRight: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '1px solid #ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease, background 0.2s ease',
  },
};
