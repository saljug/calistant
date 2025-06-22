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
      className="items-stretch self-stretch border-t-[color:var(--Gray-900,#171717)] z-0 flex w-full flex-col overflow-hidden justify-center mt-24 md:mt-[200px] px-4 md:px-6 py-8 md:py-11 border-t border-solid font-geist min-h-[280px] md:h-[356px]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Content */}
        <div className="w-full max-w-[1220px] mx-auto flex items-start md:items-center justify-between flex-col md:flex-row gap-8 md:gap-0">
          {/* Left Section - Logo and Backed by */}
          <div className="w-full md:w-[197px] flex flex-col justify-start items-center md:items-start gap-8 md:gap-[200px]">
            {/* Logo */}
            <div className="w-full h-9 relative">
              <div className="flex items-center justify-center md:justify-start gap-[9px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/4536baf7148759ab3244d0b3996326f36f0edc49?placeholderIfAbsent=true"
                  className="w-9 h-9 object-contain"
                  alt="Calistant logo"
                />
                <div className="text-white text-3xl md:text-4xl font-semibold font-geist">
                  calistant
                </div>
              </div>
            </div>
            
            {/* Backed by */}
            <div className="flex items-center gap-2.5">
              <div className="text-neutral-500 text-sm font-normal font-geist leading-[16.8px]">
                Backed by
              </div>
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/8c97286a6606c0df83382111633afde9c5217362?placeholderIfAbsent=true"
                className="w-[49px] h-8 object-contain cursor-pointer"
                alt="YTU Startup House logo"
                whileHover={{ 
                  scale: 1.1, 
                  filter: "brightness(2)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>
          
          {/* Right Section - Navigation, Social, and Copyright */}
          <div className="w-full md:w-[130px] flex flex-col justify-center items-center md:items-end gap-8 md:gap-[72px]">
            {/* Navigation Links */}
            <div className="w-full md:w-[72px] flex flex-row md:flex-col justify-center items-center md:items-end gap-6 md:gap-4">
              <div className="text-neutral-500 text-base font-medium font-geist text-center">
                About
              </div>
              <div className="text-neutral-500 text-base font-medium font-geist text-center">
                Our Team
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-5">
              <a 
                href="https://www.instagram.com/calistantapp/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Follow us on Instagram"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/52556a22c90a84538511e5f34e46566538e023e4?placeholderIfAbsent=true"
                  className="w-6 h-6 object-contain"
                  alt="Instagram"
                />
              </a>
              <div className="opacity-40 cursor-not-allowed" title="Coming soon">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/1fc7280f8b5ebb04985a8ff1d8dd4fcf7d68bbc5?placeholderIfAbsent=true"
                  className="w-6 h-6 object-contain"
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
                  className="w-6 h-6 object-contain"
                  alt="LinkedIn"
                />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="w-full text-neutral-500 text-base font-medium font-geist text-center md:text-right">
              © 2025 Calistant
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
