import React from 'react';

export const HostOverview = ({
  hostName,
  hostAvatar,
  isSuperhost,
  guests,
  bedrooms,
  beds,
  baths,
}) => {
  return (
    <div style={styles.container}>
      <div>
        <h2 style={styles.hostTitle}>Entire rental unit hosted by {hostName}</h2>
        <p style={styles.specsSub}>
          {guests} guests · {bedrooms} bedroom · {beds} bed · {baths} bath
        </p>
      </div>
      <div style={styles.avatarWrapper}>
        <img src={hostAvatar} alt={hostName} style={styles.avatarImg} />
        {isSuperhost && (
          <div style={styles.superhostBadge} title="Superhost">
            <svg width="12" height="12" viewBox="0 0 32 32" fill="#FF385C">
              <path d="M16 2L20.9 11.9L32 13.5L24 21.3L25.9 32L16 26.8L6.1 32L8 21.3L0 13.5L11.1 11.9L16 2Z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '24px',
    borderBottom: '1px solid #ebebeb',
  },
  hostTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#222222',
    marginBottom: '4px',
  },
  specsSub: {
    fontSize: '16px',
    color: '#717171',
  },
  avatarWrapper: {
    position: 'relative',
    width: '56px',
    height: '56px',
  },
  avatarImg: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  superhostBadge: {
    position: 'absolute',
    bottom: '-2px',
    right: '-2px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    padding: '3px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
