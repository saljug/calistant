import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer 
      id="team"
      className="items-stretch self-stretch border-t-[color:var(--Gray-900,#171717)] z-0 flex w-full flex-col overflow-hidden justify-center mt-[200px] px-6 py-16 border-t border-solid max-md:mt-10 max-md:px-5 font-geist"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Content */}
        <div className="flex w-full items-center justify-between flex-wrap gap-8 max-md:flex-col max-md:items-center">
          {/* Left Section - Logo */}
          <div className="flex items-center gap-[9px] text-4xl text-white font-semibold">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/4536baf7148759ab3244d0b3996326f36f0edc49?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
              alt="Calistant logo"
            />
            <div className="self-stretch my-auto">
              calistant
            </div>
          </div>
          
          {/* Center Section - Navigation Links */}
          <nav className="flex items-center gap-8 text-base text-neutral-500 font-medium max-md:gap-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-neutral-500 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-neutral-500 hover:text-white transition-colors"
            >
              Our Team
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-neutral-500 hover:text-white transition-colors"
            >
              FAQ
            </button>
          </nav>
          
          {/* Right Section - Social Media Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/calistantapp/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow us on Instagram"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/52556a22c90a84538511e5f34e46566538e023e4?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6"
                alt="Instagram"
              />
            </a>
            <div className="opacity-40 cursor-not-allowed" title="Coming soon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/1fc7280f8b5ebb04985a8ff1d8dd4fcf7d68bbc5?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6"
                alt="Twitter (Coming soon)"
              />
            </div>
            <a 
              href="https://www.linkedin.com/company/calistant/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow us on LinkedIn"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/3582355bbe62a8116bcb497e97b17b9487fadcb1?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        
        {/* Bottom Section - Copyright, Made with love, and Backed by */}
        <div className="flex w-full items-center justify-between flex-wrap gap-4 mt-12 pt-8 border-t border-neutral-800 max-md:flex-col max-md:items-center max-md:text-center">
          {/* Copyright */}
          <div className="text-neutral-500 text-sm font-medium">
            © 2025 Calistant
          </div>
          
          {/* Made with love */}
          <div className="text-neutral-500 text-sm font-medium">
            Made with 🫀 in Istanbul
          </div>
          
          {/* Backed by */}
          <div className="flex items-center gap-2.5 text-sm text-neutral-500 font-normal leading-[1.2]">
            <div className="text-neutral-500">
              Backed by
            </div>
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/8c97286a6606c0df83382111633afde9c5217362?placeholderIfAbsent=true"
              className="aspect-[49/32] object-contain w-[49px] fill-neutral-500 cursor-pointer"
              alt="YTU Startup House logo"
              whileHover={{ 
                scale: 1.1, 
                filter: "brightness(2)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
