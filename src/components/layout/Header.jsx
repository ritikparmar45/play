import React from 'react';
import { AirbnbLogo, SearchIcon, GlobeIcon, MenuIcon } from '../common/Icons.jsx';

export const Header = () => {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        {/* Left: Airbnb Logo */}
        <div style={styles.left}>
          <AirbnbLogo />
        </div>

        {/* Center: Search Pill Widget */}
        <div style={styles.centerSearchPill}>
          <button style={styles.searchSegmentBold} aria-label="Search destination">
            Anywhere
          </button>
          <span style={styles.divider} />
          <button style={styles.searchSegmentBold} aria-label="Search dates">
            Anytime
          </button>
          <span style={styles.divider} />
          <button style={styles.searchSegmentMuted} aria-label="Add guests">
            Add guests
          </button>
          <div style={styles.searchCircleBtn} aria-label="Search button">
            <SearchIcon size={14} color="#ffffff" />
          </div>
        </div>

        {/* Right: User Menu Actions */}
        <div style={styles.rightActions}>
          <button style={styles.hostBtn}>Become a host</button>
          <button style={styles.iconCircleBtn} aria-label="Language & Currency">
            <GlobeIcon size={18} />
          </button>
          <button style={styles.userProfilePill} aria-label="User profile menu">
            <MenuIcon size={16} />
            <div style={styles.avatarCircle}>
              <svg width="20" height="20" viewBox="0 0 32 32" fill="#717171">
                <path d="M16 2C10.48 2 6 6.48 6 12C6 17.52 10.48 22 16 22C21.52 22 26 17.52 26 12C26 6.48 21.52 2 16 2ZM16 26C9.33 26 2 29.33 2 32H30C30 29.33 22.67 26 16 26Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #ebebeb',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  centerSearchPill: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #dddddd',
    borderRadius: '40px',
    height: '48px',
    padding: '0 8px 0 24px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
    gap: '4px',
    transition: 'box-shadow 0.2s ease',
  },
  searchSegmentBold: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#222222',
    padding: '0 8px',
  },
  searchSegmentMuted: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#717171',
    padding: '0 8px',
  },
  divider: {
    width: '1px',
    height: '24px',
    backgroundColor: '#dddddd',
    margin: '0 4px',
  },
  searchCircleBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#FF385C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '8px',
  },
  rightActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  hostBtn: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#222222',
    padding: '10px 16px',
    borderRadius: '22px',
    transition: 'background 0.2s ease',
  },
  iconCircleBtn: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#222222',
    transition: 'background 0.2s ease',
  },
  userProfilePill: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    border: '1px solid #dddddd',
    borderRadius: '21px',
    padding: '5px 5px 5px 12px',
    transition: 'box-shadow 0.2s ease',
  },
  avatarCircle: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
};
