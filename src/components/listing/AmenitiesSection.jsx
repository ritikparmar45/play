import React from 'react';
import { WifiIcon, JacuzziIcon, WorkspaceIcon } from '../common/Icons.jsx';

export const AmenitiesSection = ({ amenities, onOpenAmenitiesModal }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'jacuzzi':
        return <JacuzziIcon size={24} />;
      case 'wifi':
        return <WifiIcon size={24} />;
      case 'workspace':
        return <WorkspaceIcon size={24} />;
      default:
        return <WifiIcon size={24} />;
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>What this place offers</h2>
      <div style={styles.grid}>
        {amenities.slice(0, 8).map((amenity, idx) => (
          <div key={idx} style={styles.amenityRow}>
            <div style={styles.icon}>{getIcon(amenity.icon)}</div>
            <span style={styles.name}>{amenity.name}</span>
          </div>
        ))}
      </div>
      <button style={styles.showAllBtn} onClick={onOpenAmenitiesModal}>
        Show all {amenities.length} amenities
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '24px 0',
    borderBottom: '1px solid #ebebeb',
  },
  title: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#222222',
    marginBottom: '24px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px 24px',
    marginBottom: '32px',
  },
  amenityRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  icon: {
    color: '#222222',
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: '16px',
    color: '#222222',
  },
  showAllBtn: {
    border: '1px solid #222222',
    borderRadius: '8px',
    padding: '13px 23px',
    fontSize: '16px',
    fontWeight: 600,
    color: '#222222',
    transition: 'background 0.2s ease',
  },
};
