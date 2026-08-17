import React, { useState, useEffect } from 'react';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between w-full px-6 sm:px-12 lg:px-16 py-4 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-[#8C6D4F]/25 shadow-[0_10px_30px_rgba(0,0,0,0.4)]' : 'bg-transparent'
      }`}
    >
      <a
        href="#"
        className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        HARSHA.
      </a>

      {/* Navigation Links */}
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

      {/* Right Actions */}
      <div className="flex items-center space-x-3 ml-auto md:ml-0">
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
    </header>
  );
};

export default Navbar;
