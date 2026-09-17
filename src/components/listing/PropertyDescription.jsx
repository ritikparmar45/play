import React, { useState } from 'react';
import { ChevronRightIcon } from '../common/Icons.jsx';

export const PropertyDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        {isExpanded ? description : `${description.slice(0, 220)}...`}
      </p>
      <button style={styles.showMoreBtn} onClick={() => setIsExpanded(!isExpanded)}>
        <span>{isExpanded ? 'Show less' : 'Show more'}</span>
        <ChevronRightIcon size={14} />
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '24px 0',
    borderBottom: '1px solid #ebebeb',
  },
  text: {
    fontSize: '16px',
    color: '#222222',
    lineHeight: '24px',
    whiteSpace: 'pre-line',
  },
  showMoreBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '16px',
    fontSize: '16px',
    fontWeight: 600,
    color: '#222222',
    textDecoration: 'underline',
  },
};
