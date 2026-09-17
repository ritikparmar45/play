import React, { useState } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '../common/Icons.jsx';

const page1Stays = [
  {
    id: 1,
    title: 'Beautiful Studio with a view to die for',
    price: '₹23,600',
    rating: 4.91,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'NAQAB - 1bhk with private pool',
    price: '₹42,218',
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    price: '₹44,506',
    rating: 4.94,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'The Tropical Studio | 5 mins to Beach',
    price: '₹22,824',
    rating: 4.96,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    price: '₹39,942',
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
  },
];

const page2Stays = [
  {
    id: 6,
    title: 'Ocean Breeze Villa Candolim',
    price: '₹28,500',
    rating: 4.98,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    title: 'Sunset Palms Suite Goa',
    price: '₹31,000',
    rating: 4.92,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    title: 'Seaside Cottage Calangute',
    price: '₹25,400',
    rating: 4.89,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    title: 'Luxury Penthouse Anjuna',
    price: '₹48,900',
    rating: 4.97,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 10,
    title: 'Boutique Garden Villa Baga',
    price: '₹34,200',
    rating: 4.93,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
  },
];

export const MoreStaysNearby = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentList = currentPage === 1 ? page1Stays : page2Stays;

  return (
    <div style={styles.container}>
      {/* Header Row */}
      <div style={styles.headerRow}>
        <h2 style={styles.title}>More stays nearby</h2>
        <div style={styles.navControls}>
          <span style={styles.pageCounter}>{currentPage} / 2</span>
          <button
            style={{
              ...styles.arrowBtn,
              opacity: currentPage === 1 ? 0.4 : 1,
              cursor: currentPage === 1 ? 'default' : 'pointer',
            }}
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeftIcon size={14} />
          </button>
          <button
            style={{
              ...styles.arrowBtn,
              opacity: currentPage === 2 ? 0.4 : 1,
              cursor: currentPage === 2 ? 'default' : 'pointer',
            }}
            onClick={() => setCurrentPage(2)}
            disabled={currentPage === 2}
            aria-label="Next page"
          >
            <ChevronRightIcon size={14} />
          </button>
        </div>
      </div>

      {/* 5-Column Listing Cards Carousel */}
      <div style={styles.grid}>
        {currentList.map((stay) => (
          <div key={stay.id} style={styles.card} onClick={() => alert(`Selected ${stay.title}`)}>
            <div style={styles.imgWrapper}>
              <img src={stay.image} alt={stay.title} style={styles.img} />
            </div>
            <h3 style={styles.cardTitle}>{stay.title}</h3>
            <div style={styles.priceRow}>
              <span style={styles.price}>{stay.price}</span>
              <div style={styles.ratingBox}>
                <StarIcon size={12} />
                <span>{stay.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    paddingTop: '48px',
    paddingBottom: '32px',
    borderTop: '1px solid #ebebeb',
    marginTop: '48px',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#222222',
  },
  navControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  pageCounter: {
    fontSize: '14px',
    color: '#717171',
    marginRight: '8px',
  },
  arrowBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '1px solid #b0b0b0',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'border-color 0.2s ease, transform 0.1s ease',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '16px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  imgWrapper: {
    width: '100%',
    height: '210px',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  cardTitle: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#222222',
    marginTop: '10px',
    marginBottom: '4px',
    lineHeight: '20px',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#222222',
  },
  price: {
    fontWeight: 600,
  },
  ratingBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontWeight: 500,
  },
};
