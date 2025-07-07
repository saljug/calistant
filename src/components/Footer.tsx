import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0a0a0a] w-full flex flex-col font-geist mt-24 md:mt-[200px]">
      {/* Top Section - Logo/CTA Left, Buttons Right */}
      <div className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
            
            {/* Left Side - Logo and CTA */}
            <div className="flex flex-col text-center lg:text-left lg:max-w-lg">
              {/* Logo */}
              <div className="mb-6">
                <img
                  src="/logo.svg"
                  className="h-8 md:h-10 object-contain mx-auto lg:mx-0"
                  alt="Calistant logo"
                />
              </div>

              {/* CTA Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {t('footer.cta.title')}
                </h2>
                <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
                  {t('footer.cta.subtitle')}
                </p>
              </div>
            </div>

            {/* Right Side - App Store Badges */}
            <div className="flex flex-row items-center gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform"
              >
                <img
                  src="/Mobile app store badge.png"
                  className="h-11 md:h-12 object-contain"
                  alt="Download on the App Store"
                />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform"
              >
                <img
                  src="/Mobile app store badge-1.png"
                  className="h-11 md:h-12 object-contain"
                  alt="Get it on Google Play"
                />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Navigation Links */}
      <div className="border-t border-neutral-800 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Learn More Column */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-6">{t('footer.sections.learnMore')}</h3>
              <div className="space-y-4">
                <a href="/about" className="block text-neutral-400 hover:text-white transition-colors">
                  {t('footer.links.aboutApp')}
                </a>
                <a href="/how-we-calculate" className="block text-neutral-400 hover:text-white transition-colors">
                  {t('footer.links.howWeCalculate')}
                </a>
                <a href="/team" className="block text-neutral-400 hover:text-white transition-colors">
                  {t('footer.links.ourTeam')}
                </a>
                <a href="/press-kit" className="block text-neutral-400 hover:text-white transition-colors">
                  {t('footer.links.pressKit')}
                </a>
              </div>
            </div>

            {/* Resources Column */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-6">{t('footer.sections.resources')}</h3>
              <div className="space-y-4">
                <a href="/help-center" className="block text-neutral-400 hover:text-white transition-colors">
                  {t('footer.links.helpCenter')}
                </a>
                <a href="/features" className="block text-neutral-400 hover:text-white transition-colors">
                  {t('footer.links.features')}
                </a>
              </div>
            </div>

            {/* Connect Column */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-6">{t('footer.sections.connect')}</h3>
              <div className="space-y-4">
                {/* Social Icons */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a 
                    href="https://www.instagram.com/calistantapp/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-gray hover:social-icon-white transition-all duration-300"
                    aria-label={t('footer.socialAlt.instagram')}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/52556a22c90a84538511e5f34e46566538e023e4?placeholderIfAbsent=true"
                      className="w-6 h-6 object-contain transition-all duration-300"
                      alt="Instagram"
                    />
                  </a>
                  <a 
                    href="https://x.com/calistantapp" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-gray hover:social-icon-white transition-all duration-300"
                    aria-label={t('footer.socialAlt.twitter')}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/1fc7280f8b5ebb04985a8ff1d8dd4fcf7d68bbc5?placeholderIfAbsent=true"
                      className="w-6 h-6 object-contain transition-all duration-300"
                      alt="X (Twitter)"
                    />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/calistant/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-gray hover:social-icon-white transition-all duration-300"
                    aria-label={t('footer.socialAlt.linkedin')}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/3582355bbe62a8116bcb497e97b17b9487fadcb1?placeholderIfAbsent=true"
                      className="w-6 h-6 object-contain transition-all duration-300"
                      alt="LinkedIn"
                    />
                  </a>
                  <a 
                    href="https://www.reddit.com/r/calistant/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300"
                    aria-label={t('footer.socialAlt.reddit')}
                  >
                    <svg className="w-6 h-6 text-[#737373] hover:text-white transition-all duration-300" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Language Selector */}
                <div className="pt-2">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright, Legal Links, and Backed By */}
      <div className="border-t border-neutral-800 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left - Copyright */}
            <div className="text-neutral-500 text-sm order-2 lg:order-1">
              {t('footer.copyright')}
            </div>

            {/* Center - Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm order-1 lg:order-2">
              <a 
                href="/privacy" 
                className="text-neutral-500 hover:text-white transition-colors"
              >
                {t('footer.links.privacyPolicy')}
              </a>
              <a 
                href="/terms" 
                className="text-neutral-500 hover:text-white transition-colors"
              >
                {t('footer.links.terms')}
              </a>
              <a 
                href="/how-we-calculate" 
                className="text-neutral-500 hover:text-white transition-colors"
              >
                {t('footer.links.howWeCalculate')}
              </a>
              <span className="text-neutral-700">|</span>
              <a 
                href="/cookie-notice" 
                className="text-neutral-500 hover:text-white transition-colors"
              >
                {t('footer.links.cookieNotice')}
              </a>
              <a 
                href="/health-disclaimer" 
                className="text-neutral-500 hover:text-white transition-colors"
              >
                {t('footer.links.healthDisclaimer')}
              </a>
            </div>

            {/* Right - Backed by */}
            <div className="flex items-center gap-3 order-3">
              <div className="text-neutral-500 text-sm font-normal">
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
        </div>
      </div>
    </footer>
  );
};
