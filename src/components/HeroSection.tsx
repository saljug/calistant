import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section 
      id="hero"
      className="border-[color:var(--Gray-900,#171717)] z-0 flex w-full max-w-7xl mx-auto flex-col overflow-hidden pt-[120px] md:pt-[120px] pb-6 px-4 md:px-6 rounded-[24px] md:rounded-[48px] md:border-2 border-solid mt-4 md:mt-0 font-geist"
    >
      <div className="flex w-full items-center gap-6 md:gap-8 lg:gap-20 flex-col lg:flex-row">
        {/* Left side - Hero Image */}
        <div className="w-full lg:w-auto flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl min-w-60">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-white rounded-[24px] overflow-hidden">
              <div className="absolute w-full h-full left-0 top-[54%] bg-brand-orange rounded-full blur-[150px] opacity-80 transform scale-150"></div>
            </div>
            {/* Hero image */}
            <img
              src="/hero.png"
              className="relative z-10 aspect-[0.91] object-contain w-full"
              alt={t('hero.heroImageAlt')}
            />
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="self-stretch flex min-w-60 flex-col items-center lg:items-start justify-center flex-1 order-1 lg:order-2">
          <div className="w-full max-w-lg">
            <header className="w-full text-center lg:text-left">
              <motion.h1 
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight break-words"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t('hero.title1')}
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {t('hero.title2')}
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="text-[#737373] text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-normal leading-relaxed mt-4 md:mt-6 lg:mt-8 break-words"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="mb-2">
                  {t('hero.subtitle')}
                </p>
                <p>
                  {t('hero.subtitle2')}
                </p>
              </motion.div>
            </header>
            
            {/* Download Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-5 mt-6 md:mt-8 lg:mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {/* App Store Button */}
              <motion.button 
                className="w-[176px] h-[59px] bg-transparent flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img
                  src="/Mobile app store badge.png"
                  alt="Download on the App Store"
                  className="w-full h-full object-contain"
                />
              </motion.button>
              
              {/* Google Play Button */}
              <motion.button 
                className="w-[198px] h-[59px] bg-transparent flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img
                  src="/Mobile app store badge-1.png"
                  alt="Get it on Google Play"
                  className="w-full h-full object-contain"
                />
              </motion.button>
            </motion.div>
          </div>
          
          {/* Backed by section */}
          <motion.div
            className="flex items-center gap-2.5 text-sm text-[#737373] font-normal leading-[1.2] mt-6 md:mt-8 lg:mt-[52px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="text-[#737373] self-stretch my-auto">
              {t('hero.backedBy')}
            </div>
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/175aea35cd9502e9ff6ddfe120883035064a3de9?placeholderIfAbsent=true"
              className="aspect-[49/32] object-contain w-[49px] fill-[#737373] self-stretch shrink-0 my-auto cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-150"
              alt="YTU Startup House logo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
