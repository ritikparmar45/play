import React, { useRef } from 'react';
import { ChevronLeftIcon, ShareIcon, HeartIcon } from '../common/Icons.jsx';
import { useScrollLock } from '../../hooks/useScrollLock.js';
import { useKeyPress } from '../../hooks/useKeyPress.js';

export const PhotoTourModal = ({
  isOpen,
  categories,
  allPhotos,
  onClose,
  onSelectPhoto,
}) => {
  useScrollLock(isOpen);
  useKeyPress('Escape', onClose, isOpen);

  const sectionRefs = useRef({});

  if (!isOpen) return null;

  const scrollToCategory = (catId) => {
    const el = sectionRefs.current[catId];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={styles.fullscreenOverlay} className="animate-fade-in" role="dialog" aria-modal="true">
      {/* Sticky Header Bar */}
      <div style={styles.topHeader}>
        <button style={styles.backBtn} onClick={onClose} aria-label="Close photo tour">
          <ChevronLeftIcon size={18} />
        </button>
        <span style={styles.headerTitle}>Photo tour</span>
        <div style={styles.rightActions}>
          <button style={styles.iconActionBtn} onClick={() => alert('Link copied!')} aria-label="Share">
            <ShareIcon size={16} />
          </button>
          <button style={styles.iconActionBtn} aria-label="Save">
            <HeartIcon size={16} />
          </button>
        </div>
      </div>

      {/* Main Scrollable Body */}
      <div style={styles.scrollBody}>
        <div style={styles.contentContainer}>
          {/* Quick Jump Category Thumbnails Bar */}
          <div style={styles.thumbnailsNav}>
            {categories.map((cat) => (
              <div
                key={cat.id}
                style={styles.thumbCard}
                onClick={() => scrollToCategory(cat.id)}
              >
                <img src={cat.thumbnail} alt={cat.name} style={styles.thumbImg} />
                <span style={styles.thumbName}>{cat.name}</span>
              </div>
            ))}
          </div>

          <div style={styles.divider} />

          {/* Detailed Room Category Sections */}
          <div style={styles.categoriesList}>
            {categories.map((cat) => (
              <div
                key={cat.id}
                ref={(el) => { sectionRefs.current[cat.id] = el; }}
                style={styles.categorySection}
              >
                <div style={styles.sectionSplit}>
                  {/* Left Column: Title & Feature Tags */}
                  <div style={styles.sectionInfo}>
                    <h2 style={styles.categoryTitle}>{cat.name}</h2>
                    <p style={styles.categorySubtitle}>{cat.subtitle}</p>
                  </div>

                  {/* Right Column: Room Photos */}
                  <div style={styles.photosColumn}>
                    {cat.photos.map((photo) => {
                      const globalIdx = allPhotos.findIndex((p) => p.id === photo.id);
                      return (
                        <div
                          key={photo.id}
                          style={styles.photoWrapper}
                          onClick={() => onSelectPhoto(globalIdx !== -1 ? globalIdx : 0)}
                        >
                          <img src={photo.url} alt={photo.caption} style={styles.mainImg} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  fullscreenOverlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 1000,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  },
  topHeader: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #ebebeb',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100,
  },
  backBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s ease',
  },
  headerTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#222222',
  },
  rightActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  iconActionBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s ease',
  },
  scrollBody: {
    flex: 1,
    overflowY: 'auto',
    padding: '32px 40px 64px 40px',
  },
  contentContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  thumbnailsNav: {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    paddingBottom: '16px',
    marginBottom: '32px',
    scrollbarWidth: 'thin',
  },
  thumbCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    cursor: 'pointer',
    width: '115px',
    flexShrink: 0,
  },
  thumbImg: {
    width: '115px',
    height: '85px',
    borderRadius: '12px',
    objectFit: 'cover',
    transition: 'transform 0.2s ease',
  },
  thumbName: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#222222',
    lineHeight: '16px',
  },
  divider: {
    height: '1px',
    backgroundColor: '#ebebeb',
    marginBottom: '48px',
  },
  categoriesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '64px',
  },
  categorySection: {
    paddingTop: '16px',
  },
  sectionSplit: {
    display: 'grid',
    gridTemplateColumns: '320px 1fr',
    gap: '48px',
  },
  sectionInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  categoryTitle: {
    fontSize: '26px',
    fontWeight: 600,
    color: '#222222',
    lineHeight: '32px',
  },
  categorySubtitle: {
    fontSize: '14px',
    color: '#717171',
    lineHeight: '20px',
  },
  photosColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  photoWrapper: {
    cursor: 'pointer',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  mainImg: {
    width: '100%',
    maxHeight: '560px',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '16px',
    transition: 'transform 0.2s ease',
  },
};
