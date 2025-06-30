import React from 'react';
import { WaitlistForm } from './WaitlistForm';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="border-[color:var(--Gray-900,#171717)] z-0 flex w-full max-w-7xl mx-auto flex-col overflow-hidden pt-[120px] md:pt-[120px] pb-6 px-4 md:px-6 rounded-[24px] md:rounded-[48px] md:border-2 border-solid mt-4 md:mt-0 font-geist"
    >
      <div className="flex w-full items-center gap-6 md:gap-8 lg:gap-20 flex-col lg:flex-row">
        <div className="w-full lg:w-auto flex justify-center order-2 lg:order-1">
          <img
            src="/assets/hero.png"
            className="aspect-[0.91] object-contain w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl min-w-60"
            alt="Calistant app interface preview"
          />
        </div>
        
        <div className="self-stretch flex min-w-60 flex-col items-center justify-center flex-1 order-1 lg:order-2">
          <div className="w-full max-w-md">
            <header className="w-full text-center lg:text-left">
              <motion.h1 
                className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Your AI-Powered
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, color: "#ffffff" }}
                  animate={{ opacity: 1, color: "#F05B25" }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Nutrition Assistant
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-neutral-500 text-lg md:text-xl font-normal leading-[1.2] mt-6 md:mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Join our waitlist for exclusive benefits
              </motion.p>
            </header>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <WaitlistForm className="mt-6 md:mt-8" />
            </motion.div>
          </div>
          
          <div className="flex items-center gap-2.5 text-sm text-neutral-500 font-normal leading-[1.2] mt-8 md:mt-[52px]">
            <div className="text-neutral-500 self-stretch my-auto">
              Backed by
            </div>
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/175aea35cd9502e9ff6ddfe120883035064a3de9?placeholderIfAbsent=true"
              className="aspect-[49/32] object-contain w-[49px] fill-neutral-500 self-stretch shrink-0 my-auto cursor-pointer"
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
    </section>
  );
};
