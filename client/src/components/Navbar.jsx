import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import bbciLogoImg from '../assets/BBCI_Logo.jpeg';
import Icon from './Icon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Research', path: '/research' },
    { name: 'Projects', path: '/projects' },
    { name: 'Publications', path: '/publications' },
    { name: 'Events', path: '/activities' },
    { name: 'Leadership', path: '/people' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5' 
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Brand Logo & Title */}
          <Link 
            to="/" 
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-bbci-indigo rounded-lg py-1"
            aria-label="Binary Brains Council of Intellects - Home"
          >
            <img 
              src={bbciLogoImg} 
              alt="Binary Brains Council of Intellects Official Logo" 
              className="h-10 w-10 object-contain mix-blend-multiply flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-bbci-indigo text-base leading-none">
                BBCI
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-bbci-teal hidden sm:inline-block mt-0.5">
                Council of Intellects
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `
                  px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all
                  ${isActive 
                    ? 'text-bbci-indigo bg-slate-100/90 font-bold border-b-2 border-bbci-magenta' 
                    : 'text-slate-600 hover:text-bbci-indigo hover:bg-slate-50'
                  }
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/membership"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wide text-white bg-bbci-indigo hover:bg-bbci-indigo-light shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-bbci-magenta"
            >
              <span>Join BBCI</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-bbci-indigo hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-bbci-indigo"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Icon name={mobileMenuOpen ? "FiX" : "FiMenu"} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={closeMobileMenu}
                className={({ isActive }) => `
                  px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-colors flex items-center justify-between
                  ${isActive 
                    ? 'text-bbci-indigo bg-slate-100 font-bold border-l-4 border-bbci-magenta' 
                    : 'text-slate-700 hover:bg-slate-50 hover:text-bbci-indigo'
                  }
                `}
              >
                <span>{link.name}</span>
                <Icon name="FiChevronRight" className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link
                to="/membership"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-white bg-bbci-indigo hover:bg-bbci-indigo-light shadow-sm transition-colors"
              >
                <span>Join BBCI</span>
                <Icon name="FiArrowRight" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
