import Link from 'next/link';
import { NavigationItem } from '@/types';
import { siteConfig } from '@/data/navigation';
import Navigation from './Navigation';

interface HeaderProps {
  navigationItems: NavigationItem[];
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ navigationItems, currentPath }) => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="columns">
          <div className="column">
            <Link href="/">
              <h1>{siteConfig.title}</h1>
            </Link>
          </div>
          <div></div>
          <div className="column">
            <Navigation items={navigationItems} currentPath={currentPath} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
