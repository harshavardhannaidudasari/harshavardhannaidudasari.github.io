import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between w-full px-6 sm:px-12 lg:px-16 py-4 transition-all duration-500 ${
          scrolled || menuOpen ? 'bg-black/80 backdrop-blur-md border-b border-[#8C6D4F]/25 shadow-[0_10px_30px_rgba(0,0,0,0.4)]' : 'bg-transparent'
        }`}
      >
        <a
          href="#"
          className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          HARSHA.
        </a>

        {/* Navigation Links (desktop) */}
        <nav
          className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions (desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://www.linkedin.com/in/harsha-vardhan-naidu-d-768b581a6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center justify-center w-9 h-9 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#D4AF37] transition-all duration-300 backdrop-blur-sm text-[11px] font-bold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            in
          </a>

          <a
            href="#contact"
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>
        </div>

        {/* Hamburger Toggle (mobile) */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden relative z-[60] flex items-center justify-center w-10 h-10 text-[#EAD8C7]"
        >
          <span className="relative w-6 h-4 flex flex-col justify-between">
            <span
              className={`block h-[1.5px] w-full bg-current transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`block h-[1.5px] w-full bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`block h-[1.5px] w-full bg-current transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-black/97 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav
              className="flex flex-col items-center space-y-7"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="text-2xl tracking-[0.2em] uppercase text-[#E8DFD8] hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex items-center space-x-4 mt-12"
            >
              <a
                href="https://www.linkedin.com/in/harsha-vardhan-naidu-d-768b581a6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                aria-label="LinkedIn Profile"
                className="flex items-center justify-center w-11 h-11 border border-[#8C6D4F]/50 text-[#EAD8C7] text-xs font-bold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                in
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center space-x-2 text-[11px] tracking-[0.24em] uppercase py-3 px-6 border border-[#D4AF37]/60 text-[#EAD8C7]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>LET&apos;S TALK</span>
                <span className="text-xs">↗</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
