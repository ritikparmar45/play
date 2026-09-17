import React from 'react';

export const LocationSection = ({ location }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Where you'll be</h2>
      <p style={styles.subtitle}>{location}</p>
      <div style={styles.mapCard}>
        <div style={styles.mapOverlayText}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="#FF385C">
            <path d="M16 2C10.5 2 6 6.5 6 12C6 19.5 16 30 16 30C16 30 26 19.5 26 12C26 6.5 21.5 2 16 2ZM16 16C13.8 16 12 14.2 12 12C12 9.8 13.8 8 16 8C18.2 8 20 9.8 20 12C20 14.2 18.2 16 16 16Z" />
          </svg>
          <span style={{ fontSize: '16px', fontWeight: 600, color: '#222222' }}>Candolim Beach Area</span>
        </div>
      </div>
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
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#717171',
    marginBottom: '24px',
  },
  mapCard: {
    width: '100%',
    height: '350px',
    borderRadius: '12px',
    backgroundColor: '#e5e3df',
    backgroundImage: 'radial-gradient(#b0c4de 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  mapOverlayText: {
    backgroundColor: '#ffffff',
    padding: '12px 20px',
    borderRadius: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
};
