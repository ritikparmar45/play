import React from 'react';
import { WorkspaceIcon, KeyIcon, CalendarIcon } from '../common/Icons.jsx';

export const HighlightsList = ({ highlights }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'workspace':
        return <WorkspaceIcon size={24} />;
      case 'key':
        return <KeyIcon size={24} />;
      case 'calendar':
        return <CalendarIcon size={24} />;
      default:
        return <KeyIcon size={24} />;
    }
  };

  return (
    <div style={styles.container}>
      {highlights.map((item, index) => (
        <div key={index} style={styles.itemRow}>
          <div style={styles.iconContainer}>{getIcon(item.icon)}</div>
          <div>
            <h3 style={styles.itemTitle}>{item.title}</h3>
            <p style={styles.itemSub}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '24px 0',
    borderBottom: '1px solid #ebebeb',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  itemRow: {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
  },
  iconContainer: {
    color: '#222222',
    marginTop: '2px',
  },
  itemTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#222222',
    marginBottom: '4px',
  },
  itemSub: {
    fontSize: '14px',
    color: '#717171',
    lineHeight: '20px',
  },
};
