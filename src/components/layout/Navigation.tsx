'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/types';
import { useTranslation } from '@/hooks/useTranslation';
import navigationTranslations from '@/data/translations/navigation.json';

interface NavigationProps {
  items: NavigationItem[];
  currentPath: string;
}

const Navigation: React.FC<NavigationProps> = ({ items, currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation(navigationTranslations);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getTranslatedName = (url: string) => {
    switch (url) {
      case '/':
        return t('navigation.loft');
      case '/images':
        return t('navigation.images');
      case '/neighbourhood':
        return t('navigation.neighbourhood');
      case '/documents':
        return t('navigation.documents');
      default:
        return url;
    }
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
            {getTranslatedName(item.url)}
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
            {getTranslatedName(item.url)}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
