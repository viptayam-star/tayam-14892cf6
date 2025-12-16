import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Languages, Menu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navigation = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'portfolio', path: '/portfolio' },
    { key: 'packages', path: '/packages' },
    { key: 'contact', path: '/contact' },
  ];

  const NavLinks = ({ mobile = false, onItemClick }: { mobile?: boolean; onItemClick?: () => void }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.key}
          to={item.path}
          onClick={onItemClick}
          className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover-glow ${
            location.pathname === item.path
              ? 'text-primary'
              : 'text-foreground hover:text-primary'
          } ${mobile ? 'block text-lg py-3' : ''}`}
        >
          {t(item.key)}
          {location.pathname === item.path && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
          )}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary hover-glow transition-all duration-300">
            Design Pulse
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <NavLinks />
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover-glow"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hover-glow"
            >
              <Languages className="h-4 w-4" />
              <span className="ml-1 rtl:ml-0 rtl:mr-1 text-xs">
                {language === 'ar' ? 'EN' : 'ع'}
              </span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="hover-glow">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side={language === 'ar' ? 'right' : 'left'} 
                className="w-[300px] p-6"
              >
                <div className="mt-6 space-y-4">
                  <NavLinks mobile onItemClick={() => {}} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;