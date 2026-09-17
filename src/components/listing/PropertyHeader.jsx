import React, { useState } from 'react';
import { ShareIcon, HeartIcon } from '../common/Icons.jsx';

export const PropertyHeader = ({ title }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.actionsGroup}>
        <button style={styles.actionBtn} onClick={() => alert('Listing link copied to clipboard!')}>
          <ShareIcon size={16} />
          <span style={styles.actionLabel}>Share</span>
        </button>
        <button style={styles.actionBtn} onClick={() => setIsSaved(!isSaved)}>
          <HeartIcon size={16} filled={isSaved} />
          <span style={{ ...styles.actionLabel, textDecoration: isSaved ? 'none' : 'underline' }}>
            {isSaved ? 'Saved' : 'Save'}
          </span>
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '24px',
    marginBottom: '16px',
  },
  title: {
    fontSize: '26px',
    fontWeight: 600,
    color: '#222222',
    lineHeight: '30px',
  },
  actionsGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  actionBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#222222',
    transition: 'background 0.2s ease',
  },
  actionLabel: {
    textDecoration: 'underline',
  },
};
