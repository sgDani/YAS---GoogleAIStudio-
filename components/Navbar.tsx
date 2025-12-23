import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Check if we need to navigate back to home first
    if (onNavigate) {
        onNavigate();
        // Allow time for state update and re-render of Home components
        setTimeout(() => {
            const targetId = href.replace('#', '');
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onNavigate) {
          onNavigate();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: CONTENT.nav.about[lang], href: '#about' },
    { name: CONTENT.nav.projects[lang], href: '#projects' },
    { name: CONTENT.nav.process[lang], href: '#process' },
    { name: CONTENT.nav.contact[lang], href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-cream/95 backdrop-blur-sm border-b border-warmGray/20 py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo - Textual & Elegant */}
        <a 
            href="#" 
            onClick={handleLogoClick}
            className="font-serif text-2xl md:text-3xl tracking-wide text-softBlack hover:opacity-70 transition-opacity"
        >
          Yanelle Schwarz
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-sans font-light text-softBlack hover:text-warmGray transition-colors tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Selector */}
          <div className="flex items-center space-x-2 text-sm font-sans tracking-widest ml-4 border-l border-warmGray/50 pl-6">
            <button 
                onClick={() => setLang('de')} 
                className={`transition-colors ${lang === 'de' ? 'text-softBlack font-medium' : 'text-warmGray hover:text-softBlack'}`}
            >
                DE
            </button>
            <span className="text-warmGray">/</span>
            <button 
                onClick={() => setLang('es')} 
                className={`transition-colors ${lang === 'es' ? 'text-softBlack font-medium' : 'text-warmGray hover:text-softBlack'}`}
            >
                ES
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-softBlack focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-cream z-40 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button className="absolute top-8 right-6 text-softBlack" onClick={() => setIsOpen(false)}>
                <X size={24} strokeWidth={1} />
            </button>
          {navItems.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-serif text-3xl font-light text-softBlack hover:text-warmGray transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-6 mt-8">
            <button onClick={() => { setLang('de'); setIsOpen(false); }} className={`text-xl ${lang === 'de' ? 'text-softBlack border-b border-softBlack' : 'text-warmGray'}`}>DE</button>
            <button onClick={() => { setLang('es'); setIsOpen(false); }} className={`text-xl ${lang === 'es' ? 'text-softBlack border-b border-softBlack' : 'text-warmGray'}`}>ES</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;