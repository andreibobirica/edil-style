'use client';

import { useState, useEffect } from 'react';
import { siteContent } from '../data/content';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white shadow-md' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/logo.svg" alt="Edil Style" className="h-10 w-auto" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteContent.header.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-text-primary hover:text-primary' 
                    : 'text-text-primary hover:text-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contatti"
              className="px-6 py-2.5 bg-gradient-primary text-white font-medium rounded-lg shadow-primary hover:shadow-lg transition-all duration-300"
            >
              Contattaci
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-6 mt-2">
          <nav className="flex flex-col space-y-4">
            {siteContent.header.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-text-primary hover:text-primary font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contatti"
              className="px-6 py-2.5 bg-gradient-primary text-white font-medium rounded-lg shadow-primary hover:shadow-lg transition-all duration-300 text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contattaci
            </a>
          </nav>
        </div>
      )}
    </header>
  );
} 