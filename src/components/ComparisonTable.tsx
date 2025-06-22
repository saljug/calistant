import React from 'react';
import { motion } from 'framer-motion';

const features = [
  "Photo, Barcode, Text, Voice Log",
  "7/30/90-Day Deep Analytics",
  "AI Chat Assistant",
  "Vitamin & Fiber Tracking",
  "Gamification (Streaks & Badges)"
];

export const ComparisonTable: React.FC = () => {
  return (
    <section className="z-0 flex w-full max-w-6xl mx-auto flex-col items-center mt-[200px] px-6 max-md:mt-10">
      <header className="text-center mb-12">
        <h2 className="text-white text-[32px] font-bold leading-none">
          Why We're Better
        </h2>
        <p className="text-neutral-400 text-lg mt-4">
          See how Calistant outshines the competition
        </p>
      </header>
      
      <div className="w-full max-w-4xl">
        {/* Table Container with modern styling */}
        <div className="bg-neutral-900/50 backdrop-blur-sm rounded-3xl border border-neutral-800 overflow-hidden">
          {/* Header Row */}
          <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 border-b border-neutral-700">
            <div className="flex w-full items-center">
              <div className="flex-1 px-6 py-4">
                <h3 className="text-white text-lg font-semibold">Features</h3>
              </div>
              <div className="w-32 px-6 py-4 text-center border-l border-neutral-700">
                <div className="flex flex-col items-center">
                  <h3 className="text-[#00DA4B] text-lg font-semibold">Calistant</h3>
                  <div className="w-8 h-1 bg-[#00DA4B] rounded-full mt-1"></div>
                </div>
              </div>
              <div className="w-32 px-6 py-4 text-center border-l border-neutral-700">
                <div className="flex flex-col items-center">
                  <h3 className="text-neutral-400 text-lg font-semibold">Others</h3>
                  <div className="w-8 h-1 bg-neutral-600 rounded-full mt-1"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Rows */}
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group hover:bg-neutral-800/30 transition-all duration-300 border-b border-neutral-800 last:border-b-0"
            >
              <div className="flex w-full items-center">
                <div className="flex-1 px-6 py-5">
                  <span className="text-white text-base font-medium group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </div>
                
                {/* Calistant Column */}
                <div className="w-32 px-6 py-5 text-center border-l border-neutral-800 group-hover:border-neutral-700 transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-8 h-8 bg-[#00DA4B]/10 rounded-full"
                  >
                    <svg 
                      className="w-5 h-5 text-[#00DA4B]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Others Column */}
                <div className="w-32 px-6 py-5 text-center border-l border-neutral-800 group-hover:border-neutral-700 transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${index === 0 ? 'bg-[#00DA4B]/10' : 'bg-red-500/10'}`}
                  >
                    {index === 0 ? (
                      <svg 
                        className="w-5 h-5 text-[#00DA4B]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2.5} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    ) : (
                      <svg 
                        className="w-5 h-5 text-red-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2.5} 
                          d="M6 18L18 6M6 6l12 12" 
                        />
                      </svg>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-6"
        >
          <p className="text-neutral-500 text-sm">
            ✨ Join others who've already chosen the smarter nutrition assistant
          </p>
        </motion.div>
      </div>
    </section>
  );
};
