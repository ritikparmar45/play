import React, { useState } from 'react';
import { StarIcon } from '../common/Icons.jsx';

export const ReservationCard = ({
  nightlyPrice,
  rating,
  reviewCount,
  cleaningFee,
  serviceFee,
}) => {
  const [nights] = useState(5);
  const [guestCount, setGuestCount] = useState(1);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

  const baseTotal = nightlyPrice * nights;
  const grandTotal = baseTotal + cleaningFee + serviceFee;

  return (
    <div style={styles.cardContainer}>
      {/* Header Price & Rating */}
      <div style={styles.headerRow}>
        <div>
          <span style={styles.priceAmount}>₹{nightlyPrice.toLocaleString('en-IN')}</span>
          <span style={styles.nightLabel}> / night</span>
        </div>
        <div style={styles.ratingBadge}>
          <StarIcon size={14} />
          <span style={styles.ratingText}>{rating} ·</span>
          <span style={styles.reviewText}>{reviewCount} reviews</span>
        </div>
      </div>

      {/* Date & Guest Input Matrix */}
      <div style={styles.inputMatrix}>
        <div style={styles.dateRow}>
          <div style={styles.dateInputBox}>
            <label style={styles.inputLabel}>CHECK-IN</label>
            <input type="text" defaultValue="20/09/2026" style={styles.inputValue} readOnly />
          </div>
          <div style={styles.dateInputBoxRight}>
            <label style={styles.inputLabel}>CHECKOUT</label>
            <input type="text" defaultValue="25/09/2026" style={styles.inputValue} readOnly />
          </div>
        </div>
        <div style={styles.guestRow} onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}>
          <div style={{ flex: 1 }}>
            <label style={styles.inputLabel}>GUESTS</label>
            <div style={styles.inputValue}>{guestCount} guest{guestCount > 1 ? 's' : ''}</div>
          </div>
          <svg width="16" height="16" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M6 12L16 22L26 12" strokeLinecap="round" />
          </svg>
        </div>

        {/* Dropdown counter */}
        {isGuestDropdownOpen && (
          <div style={styles.guestDropdown}>
            <div style={styles.dropdownRow}>
              <span>Adults</span>
              <div style={styles.counterBox}>
                <button
                  style={styles.counterBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (guestCount > 1) setGuestCount(guestCount - 1);
                  }}
                >
                  -
                </button>
                <span>{guestCount}</span>
                <button
                  style={styles.counterBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (guestCount < 4) setGuestCount(guestCount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Primary Action Reserve Button */}
      <button style={styles.reserveBtn} onClick={() => alert(`Reserved for ${nights} nights! Total: ₹${grandTotal.toLocaleString('en-IN')}`)}>
        Reserve
      </button>

      <p style={styles.disclaimer}>You won't be charged yet</p>

      {/* Price Breakdown Calculation */}
      <div style={styles.calculationList}>
        <div style={styles.calcRow}>
          <span style={styles.calcLabel}>₹{nightlyPrice.toLocaleString('en-IN')} x {nights} nights</span>
          <span style={styles.calcValue}>₹{baseTotal.toLocaleString('en-IN')}</span>
        </div>
        <div style={styles.calcRow}>
          <span style={styles.calcLabel}>Cleaning fee</span>
          <span style={styles.calcValue}>₹{cleaningFee.toLocaleString('en-IN')}</span>
        </div>
        <div style={styles.calcRow}>
          <span style={styles.calcLabel}>Airbnb service fee</span>
          <span style={styles.calcValue}>₹{serviceFee.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <div style={styles.totalDivider} />

      <div style={styles.totalRow}>
        <span style={styles.totalLabel}>Total before taxes</span>
        <span style={styles.totalAmount}>₹{grandTotal.toLocaleString('en-IN')}</span>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    position: 'sticky',
    top: '100px',
    width: '370px',
    backgroundColor: '#ffffff',
    border: '1px solid #dddddd',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  priceAmount: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#222222',
  },
  nightLabel: {
    fontSize: '16px',
    color: '#717171',
  },
  ratingBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
  },
  ratingText: {
    fontWeight: 600,
    color: '#222222',
  },
  reviewText: {
    color: '#717171',
    textDecoration: 'underline',
  },
  inputMatrix: {
    border: '1px solid #b0b0b0',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '16px',
    position: 'relative',
  },
  dateRow: {
    display: 'flex',
    borderBottom: '1px solid #b0b0b0',
  },
  dateInputBox: {
    flex: 1,
    padding: '10px 12px',
    borderRight: '1px solid #b0b0b0',
  },
  dateInputBoxRight: {
    flex: 1,
    padding: '10px 12px',
  },
  inputLabel: {
    display: 'block',
    fontSize: '10px',
    fontWeight: 800,
    color: '#222222',
    letterSpacing: '0.5px',
  },
  inputValue: {
    fontSize: '14px',
    color: '#222222',
    fontWeight: 500,
    border: 'none',
    width: '100%',
    outline: 'none',
    backgroundColor: 'transparent',
    marginTop: '2px',
  },
  guestRow: {
    padding: '10px 12px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  guestDropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    border: '1px solid #dddddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 10,
  },
  dropdownRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: 600,
  },
  counterBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  counterBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '1px solid #b0b0b0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
  },
  reserveBtn: {
    width: '100%',
    background: 'linear-gradient(90deg, #FF385C 0%, #E00B41 100%)',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
    padding: '14px',
    borderRadius: '8px',
    cursor: 'pointer',
    textAlign: 'center',
    marginBottom: '12px',
    transition: 'opacity 0.2s ease',
  },
  disclaimer: {
    textAlign: 'center',
    color: '#717171',
    fontSize: '14px',
    marginBottom: '24px',
  },
  calculationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  calcRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    color: '#222222',
  },
  calcLabel: {
    textDecoration: 'underline',
  },
  calcValue: {
    color: '#222222',
  },
  totalDivider: {
    height: '1px',
    backgroundColor: '#dddddd',
    margin: '24px 0',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: 600,
    color: '#222222',
  },
  totalLabel: {
    fontWeight: 600,
  },
  totalAmount: {
    fontWeight: 600,
  },
};
