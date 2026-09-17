import React from 'react';
import { CloseIcon, WifiIcon, JacuzziIcon, WorkspaceIcon } from '../common/Icons.jsx';
import { useScrollLock } from '../../hooks/useScrollLock.js';
import { useKeyPress } from '../../hooks/useKeyPress.js';

export const AmenitiesModal = ({
  isOpen,
  amenities,
  onClose,
}) => {
  useScrollLock(isOpen);
  useKeyPress('Escape', onClose, isOpen);

  if (!isOpen) return null;

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
    <div style={styles.backdrop} className="animate-fade-in" role="dialog" aria-modal="true">
      <div style={styles.modalBox} className="animate-slide-up">
        {/* Modal Top Header */}
        <div style={styles.header}>
          <button style={styles.closeBtn} onClick={onClose} aria-label="Close amenities modal">
            <CloseIcon size={16} />
          </button>
        </div>

        {/* Modal Body Content */}
        <div style={styles.body}>
          <h2 style={styles.title}>What this place offers</h2>
          <div style={styles.list}>
            {amenities.map((item, index) => (
              <div key={index} style={styles.itemRow}>
                <div style={styles.iconBox}>{getIcon(item.icon)}</div>
                <span style={styles.itemName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backdrop: {
    position: 'fixed',
    inset: 0,
    zIndex: 1500,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    width: '100%',
    maxWidth: '680px',
    maxHeight: '85vh',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 28px rgba(0,0,0,0.28)',
  },
  header: {
    padding: '16px 24px',
    borderBottom: '1px solid #ebebeb',
    display: 'flex',
    alignItems: 'center',
  },
  closeBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    overflowY: 'auto',
    padding: '24px 32px',
  },
  title: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#222222',
    marginBottom: '24px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  itemRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    paddingBottom: '16px',
    borderBottom: '1px solid #ebebeb',
  },
  iconBox: {
    color: '#222222',
  },
  itemName: {
    fontSize: '16px',
    color: '#222222',
  },
};
