import React from 'react';

export const AirbnbLogo = ({ color = '#FF385C' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 1C11.5 1 7.2 4.1 6.1 8.6C5.3 12.1 6.8 15.6 9.5 18L16 24.5L22.5 18C25.2 15.6 26.7 12.1 25.9 8.6C24.8 4.1 20.5 1 16 1ZM16 13C14.3 13 13 11.7 13 10C13 8.3 14.3 7 16 7C17.7 7 19 8.3 19 10C19 11.7 17.7 13 16 13Z"
        fill={color}
      />
    </svg>
    <span style={{ fontSize: '22px', fontWeight: 800, color, letterSpacing: '-0.5px' }}>airbnb</span>
  </div>
);

export const SearchIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="4">
    <circle cx="14" cy="14" r="10" />
    <path d="M21 21L29 29" strokeLinecap="round" />
  </svg>
);

export const ShareIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M16 3V21M16 3L10 9M16 3L22 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 17V27C4 28.1 4.9 29 6 29H26C27.1 29 28 28.1 28 27V17" strokeLinecap="round" />
  </svg>
);

export const HeartIcon = ({ size = 16, filled = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={filled ? '#FF385C' : 'none'}
    stroke={filled ? '#FF385C' : 'currentColor'}
    strokeWidth="2.5"
  >
    <path d="M16 28C16 28 3 20 3 11.5C3 7.36 6.36 4 10.5 4C13.04 4 15.28 5.27 16 7.23C16.72 5.27 18.96 4 21.5 4C25.64 4 29 7.36 29 11.5C29 20 16 28 16 28Z" />
  </svg>
);

export const StarIcon = ({ size = 14, color = '#222222' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill={color}>
    <path d="M16 2L20.9 11.9L32 13.5L24 21.3L25.9 32L16 26.8L6.1 32L8 21.3L0 13.5L11.1 11.9L16 2Z" />
  </svg>
);

export const GridIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
    <circle cx="7" cy="7" r="3" />
    <circle cx="16" cy="7" r="3" />
    <circle cx="25" cy="7" r="3" />
    <circle cx="7" cy="16" r="3" />
    <circle cx="16" cy="16" r="3" />
    <circle cx="25" cy="16" r="3" />
    <circle cx="7" cy="25" r="3" />
    <circle cx="16" cy="25" r="3" />
    <circle cx="25" cy="25" r="3" />
  </svg>
);

export const GlobeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="16" cy="16" r="13" />
    <path d="M3 16H29M16 3C19.5 7.5 21.5 11.5 21.5 16C21.5 20.5 19.5 24.5 16 29C12.5 24.5 10.5 20.5 10.5 16C10.5 11.5 12.5 7.5 16 3Z" />
  </svg>
);

export const MenuIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M4 8H28M4 16H28M4 24H28" strokeLinecap="round" />
  </svg>
);

export const ChevronLeftIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M20 6L10 16L20 26" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronRightIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M12 6L22 16L12 26" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CloseIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M6 6L26 26M26 6L6 26" strokeLinecap="round" />
  </svg>
);

export const WorkspaceIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="6" width="24" height="16" rx="2" />
    <path d="M10 26H22M16 22V26" strokeLinecap="round" />
  </svg>
);

export const KeyIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="16" r="6" />
    <path d="M17 16H27M23 16V20M27 16V20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CalendarIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="6" width="24" height="22" rx="2" />
    <path d="M4 12H28M10 3V7M22 3V7" strokeLinecap="round" />
  </svg>
);

export const WifiIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 10C10.5 4.5 21.5 4.5 28 10M8 15C12.5 11 19.5 11 24 15M12 20C14.5 17.5 17.5 17.5 20 20" strokeLinecap="round" />
    <circle cx="16" cy="25" r="1.5" fill="currentColor" />
  </svg>
);

export const JacuzziIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 16C4 22.6 9.4 28 16 28C22.6 28 28 22.6 28 16V14H4V16Z" />
    <path d="M9 8C9 8 11 10 9 12M16 8C16 8 18 10 16 12M23 8C23 8 25 10 23 12" strokeLinecap="round" />
  </svg>
);
