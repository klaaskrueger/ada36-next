'use client';

import Link from 'next/link';
import { NavigationItem } from '@/types';
import Navigation from './Navigation';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';
import navigationTranslations from '@/data/translations/navigation.json';

interface HeaderProps {
  navigationItems: NavigationItem[];
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ navigationItems, currentPath }) => {
  const { t } = useTranslation(navigationTranslations);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="columns">
          <div className="column">
            <Link href="/">
              <h1>{t('site.title')}</h1>
            </Link>
          </div>
          <div></div>
          <div className="column">
            <div className="header-right-content">
              <LanguageSwitcher />
              <Navigation items={navigationItems} currentPath={currentPath} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
