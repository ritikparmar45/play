import React from 'react';
import { StarIcon } from '../common/Icons.jsx';

export const ReviewsSection = ({
  rating,
  reviewCount,
  categoryRatings,
  reviews,
}) => {
  return (
    <div style={styles.container}>
      {/* Summary Header */}
      <div style={styles.header}>
        <StarIcon size={20} />
        <h2 style={styles.title}>
          {rating} · {reviewCount} reviews
        </h2>
      </div>

      {/* Category Breakdown Progress Bars */}
      <div style={styles.categoriesGrid}>
        {categoryRatings.map((cat, idx) => (
          <div key={idx} style={styles.categoryRow}>
            <span style={styles.catName}>{cat.category}</span>
            <div style={styles.scoreBox}>
              <div style={styles.barTrack}>
                <div style={{ ...styles.barFill, width: `${(cat.score / 5) * 100}%` }} />
              </div>
              <span style={styles.scoreText}>{cat.score.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Review Cards Grid */}
      <div style={styles.reviewsGrid}>
        {reviews.map((rev) => (
          <div key={rev.id} style={styles.reviewCard}>
            <div style={styles.userInfo}>
              <img src={rev.avatar} alt={rev.name} style={styles.avatar} />
              <div>
                <h4 style={styles.userName}>{rev.name}</h4>
                <p style={styles.userDate}>{rev.date}</p>
              </div>
            </div>
            <p style={styles.comment}>{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '24px 0',
    borderBottom: '1px solid #ebebeb',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '24px',
  },
  title: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#222222',
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px 80px',
    marginBottom: '32px',
  },
  categoryRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  catName: {
    fontSize: '16px',
    color: '#222222',
  },
  scoreBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '140px',
  },
  barTrack: {
    flex: 1,
    height: '4px',
    backgroundColor: '#dddddd',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#222222',
  },
  scoreText: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#222222',
    minWidth: '24px',
    textAlign: 'right',
  },
  reviewsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px 80px',
  },
  reviewCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  userName: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#222222',
  },
  userDate: {
    fontSize: '14px',
    color: '#717171',
  },
  comment: {
    fontSize: '16px',
    color: '#222222',
    lineHeight: '24px',
  },
};
