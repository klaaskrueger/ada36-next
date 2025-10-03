'use client';

import { ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
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
  );
};

export default Footer;
