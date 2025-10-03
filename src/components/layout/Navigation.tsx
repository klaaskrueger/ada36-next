'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/types';

interface NavigationProps {
  items: NavigationItem[];
  currentPath: string;
}

const Navigation: React.FC<NavigationProps> = ({ items, currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="site-nav">
        {items.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className={`nav-links ${currentPath === item.url ? 'current' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="mob-nav">
        <button
          id="menu-btn"
          className={`menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`pop-site-nav ${isMobileMenuOpen ? 'visible' : ''}`}>
        {items.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className={`nav-links ${currentPath === item.url ? 'current' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
