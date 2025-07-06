import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    // If we're already on the home page, scroll to top smoothly
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // If we're on a different page, the Link will navigate to home and then scroll to top will happen naturally
  };

  return (
    <nav className="bg-[rgba(10,10,10,0.5)] backdrop-blur-md fixed z-50 flex w-full max-w-[1228px] justify-between items-center overflow-hidden h-20 px-4 md:px-[17px] py-3.5 rounded-3xl left-2/4 top-4 md:top-10 -translate-x-2/4 font-geist mx-4 md:mx-0">
      {/* Left side - Logo with padding */}
      <div className="flex items-center pl-4">
        <Link to="/" onClick={handleLogoClick} className="flex items-center">
          <img
            src="/logo.svg"
            className="object-contain h-9 shrink-0 my-auto cursor-pointer hover:opacity-80 transition-opacity"
            alt="Calistant logo"
          />
        </Link>
      </div>

      {/* Right side - App Store buttons - hidden on mobile */}
      <div className="hidden md:flex items-center gap-1.5 pr-6">
        {/* App Store Button */}
        <motion.button 
          className="w-[140px] h-[42px] bg-transparent flex items-center justify-center"
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
          className="w-[158px] h-[42px] bg-transparent flex items-center justify-center"
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
      </div>

      {/* Mobile - Empty div to maintain layout balance with matching padding */}
      <div className="md:hidden flex items-center pr-6">
        {/* Empty div with matching padding to balance the layout on mobile */}
        <div className="w-4"></div>
      </div>
    </nav>
  );
};
