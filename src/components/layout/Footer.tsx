'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Footer Navigation Links */}
      <div className="footer-nav">
        <Link href="/datenschutzerklaerung" className="footer-nav-links">
          Datenschutz
        </Link>
        <Link href="/impressum" className="footer-nav-links">
          Impressum
        </Link>
      </div>

      {/* Footer with Scroll to Top */}
      <footer className="site-footer">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="semi-circle">
                <button 
                  className="move-down"
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                >
                  <ChevronDown className="arrow-down w-6 h-6 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
