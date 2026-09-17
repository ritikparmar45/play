import React from 'react';
import { GlobeIcon } from '../common/Icons.jsx';

export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">
        {/* Top 4-Column Links Grid */}
        <div style={styles.linksGrid}>
          <div style={styles.column}>
            <h4 style={styles.colTitle}>Support</h4>
            <a style={styles.link} href="#">Help Center</a>
            <a style={styles.link} href="#">AirCover</a>
            <a style={styles.link} href="#">Anti-discrimination</a>
            <a style={styles.link} href="#">Disability support</a>
            <a style={styles.link} href="#">Cancellation options</a>
          </div>
          <div style={styles.column}>
            <h4 style={styles.colTitle}>Hosting</h4>
            <a style={styles.link} href="#">Airbnb your home</a>
            <a style={styles.link} href="#">AirCover for Hosts</a>
            <a style={styles.link} href="#">Hosting resources</a>
            <a style={styles.link} href="#">Community forum</a>
            <a style={styles.link} href="#">Hosting responsibly</a>
          </div>
          <div style={styles.column}>
            <h4 style={styles.colTitle}>Airbnb</h4>
            <a style={styles.link} href="#">Newsroom</a>
            <a style={styles.link} href="#">New features</a>
            <a style={styles.link} href="#">Careers</a>
            <a style={styles.link} href="#">Investors</a>
            <a style={styles.link} href="#">Emergency stays</a>
          </div>
          <div style={styles.column}>
            <h4 style={styles.colTitle}>Community</h4>
            <a style={styles.link} href="#">Airbnb.org</a>
            <a style={styles.link} href="#">Combating discrimination</a>
          </div>
        </div>

        <div style={styles.divider} />

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <div style={styles.legalLeft}>
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" style={styles.legalLink}>Privacy</a>
            <span>·</span>
            <a href="#" style={styles.legalLink}>Terms</a>
            <span>·</span>
            <a href="#" style={styles.legalLink}>Sitemap</a>
            <span>·</span>
            <a href="#" style={styles.legalLink}>Company details</a>
          </div>

          <div style={styles.legalRight}>
            <button style={styles.langBtn}>
              <GlobeIcon size={16} />
              <span>English (US)</span>
            </button>
            <button style={styles.currBtn}>
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f7f7f7',
    borderTop: '1px solid #dddddd',
    paddingTop: '48px',
    paddingBottom: '24px',
    marginTop: '64px',
  },
  linksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  colTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#222222',
    marginBottom: '4px',
  },
  link: {
    fontSize: '14px',
    color: '#222222',
    transition: 'text-decoration 0.2s ease',
  },
  divider: {
    height: '1px',
    backgroundColor: '#dddddd',
    margin: '36px 0 24px 0',
  },
  bottomBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#222222',
  },
  legalLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  legalLink: {
    color: '#222222',
  },
  legalRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    fontWeight: 600,
  },
  langBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 600,
  },
  currBtn: {
    fontWeight: 600,
  },
};
