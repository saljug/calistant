import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

export const FooterBackup: React.FC = () => {
  const { t } = useTranslation();
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
      className="items-stretch self-stretch border-t-[color:var(--Gray-900,#171717)] z-0 flex w-full flex-col overflow-visible justify-center mt-24 md:mt-[200px] px-6 md:px-8 py-8 md:py-10 border-t border-solid font-geist min-h-[240px] md:min-h-[280px]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Content */}
        <div className="w-full max-w-[1220px] mx-auto flex items-start md:items-center justify-between flex-col md:flex-row gap-8 md:gap-6">
          {/* Left Section - Logo, Language Selector and Backed by */}
          <div className="w-full md:w-[240px] flex flex-col justify-start items-center md:items-start gap-6 md:gap-7">
            {/* Logo */}
            <div className="w-full h-9 relative">
              <div className="flex items-center justify-center md:justify-start">
                <img
                  src="/logo.svg"
                  className="object-contain h-9"
                  alt="Calistant logo"
                />
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="flex justify-center md:justify-start relative">
              <LanguageSelector />
            </div>
            
            {/* Backed by */}
            <div className="flex items-center gap-3">
              <div className="text-neutral-500 text-sm font-normal font-geist leading-[16.8px]">
                {t('footer.backedBy')}
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
          <div className="w-full md:w-auto flex flex-col justify-center items-center md:items-end gap-6 md:gap-8">
            {/* Navigation Links */}
            <div className="flex flex-row md:flex-col justify-center items-center md:items-end gap-4 md:gap-3">
              <div className="text-neutral-500 text-base font-medium font-geist text-center md:text-right hover:text-neutral-300 transition-colors cursor-pointer">
                {t('footer.about')}
              </div>
              <div className="text-neutral-500 text-base font-medium font-geist text-center md:text-right hover:text-neutral-300 transition-colors cursor-pointer">
                {t('footer.ourTeam')}
              </div>
              <a 
                href="/privacy" 
                className="text-neutral-500 text-base font-medium font-geist text-center md:text-right hover:text-neutral-300 transition-colors"
              >
                {t('footer.privacyPolicy')}
              </a>
              <a 
                href="/terms" 
                className="text-neutral-500 text-base font-medium font-geist text-center md:text-right hover:text-neutral-300 transition-colors"
              >
                {t('footer.terms')}
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-6">
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
              <a 
                href="https://x.com/calistantapp" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Follow us on X (Twitter)"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/1fc7280f8b5ebb04985a8ff1d8dd4fcf7d68bbc5?placeholderIfAbsent=true"
                  className="w-6 h-6 object-contain"
                  alt="X (Twitter)"
                />
              </a>
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
            <div className="text-neutral-500 text-base font-medium font-geist text-center md:text-right">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 