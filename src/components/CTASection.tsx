import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const CTASection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full px-4 md:px-6">
      <motion.section 
        ref={ref}
        className="z-0 flex w-full max-w-6xl mx-auto items-center justify-between bg-neutral-900 mt-24 md:mt-[200px] rounded-2xl md:rounded-3xl p-6 md:p-8 flex-col md:flex-row gap-6"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="text-white text-xl md:text-2xl font-semibold leading-[1.2] text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join our waitlist for exclusive benefits
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-center font-medium"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full md:w-[300px] min-w-[280px] gap-2 overflow-hidden text-sm md:text-base text-neutral-950 text-center bg-[#00DA4B] px-3.5 rounded-2xl hover:bg-[#00c043] transition-colors"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 218, 75, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(0, 218, 75, 0.1)",
                "0 0 30px rgba(0, 218, 75, 0.2)",
                "0 0 20px rgba(0, 218, 75, 0.1)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            Reserve my spot
          </motion.button>
          
          <motion.div 
            className="text-neutral-500 text-xs md:text-sm mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            Limited spots available — secure your place early!
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};
