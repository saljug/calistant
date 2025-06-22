import React from 'react';
import { WaitlistForm } from './WaitlistForm';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="border-[color:var(--Gray-900,#171717)] z-0 flex w-full max-w-7xl mx-auto flex-col overflow-hidden pt-[120px] pb-6 px-6 rounded-[48px] border-2 border-solid max-md:pt-[100px] max-md:px-5 font-geist"
    >
      <div className="flex w-full items-center gap-8 lg:gap-20 flex-wrap lg:flex-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/facd76401aa8d54a934ede956718acbdd3128a5a?placeholderIfAbsent=true"
          className="aspect-[0.91] object-contain w-full max-w-lg lg:max-w-xl xl:max-w-2xl self-stretch min-w-60 my-auto"
          alt="Calistant app interface preview"
        />
        
        <div className="self-stretch flex min-w-60 flex-col items-center justify-center flex-1 my-auto">
          <div className="w-full max-w-md">
            <header className="w-full">
              <motion.h1 
                className="text-white text-4xl lg:text-5xl font-bold leading-tight max-md:text-3xl"
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
                  animate={{ opacity: 1, color: "#00DA4B" }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Nutrition Assistant
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-neutral-500 text-xl font-normal leading-[1.2] mt-8"
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
              <WaitlistForm className="mt-8" />
            </motion.div>
          </div>
          
          <div className="flex items-center gap-2.5 text-sm text-neutral-500 font-normal leading-[1.2] mt-[52px] max-md:mt-10">
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
