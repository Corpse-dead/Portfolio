
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Linkedin, Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ theme, toggleTheme, handleSocialClick, isMenuOpen, setIsMenuOpen }) => {
  const { scrollYProgress } = useScroll();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold"
            >
              Pratik Srivastav
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="hover:text-gray-300 transition-colors text-sm font-medium">{link.label}</a>
              ))}
              
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="hover:bg-white/10"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                
                <Button variant="ghost" size="icon" onClick={() => handleSocialClick('https://www.linkedin.com/in/pratik-srivastav-b8a830348/')}>
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-white/10"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block hover:text-gray-300 transition-colors">{link.label}</a>
                ))}
                
                <div className="flex space-x-2 pt-4 border-t border-white/10">
                  <Button variant="ghost" size="icon" onClick={() => handleSocialClick('https://www.linkedin.com/in/pratik-srivastav-b8a830348/')}>
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

const Footer = ({ handleSocialClick }) => (
  <footer className="py-12 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <span className="text-2xl font-bold">Pratik Kumar Srivastav</span>
          <p className="text-gray-400 mt-1">Future Data Scientist & Content Creator</p>
        </div>
        
        <div className="flex space-x-6">
          <Button variant="ghost" size="icon" onClick={() => handleSocialClick('https://www.linkedin.com/in/pratik-srivastav-b8a830348/')}>
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Pratik Kumar Srivastav. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Layout = ({ children, theme, toggleTheme, handleSocialClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        handleSocialClick={handleSocialClick}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main>{children}</main>
      <Footer handleSocialClick={handleSocialClick} />
    </div>
  );
};

export default Layout;
