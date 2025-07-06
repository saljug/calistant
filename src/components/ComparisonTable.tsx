import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const ComparisonTable: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    t('comparison.hybridLogging'),
    t('comparison.deepAnalytics'),
    t('comparison.aiGuidance'),
    t('comparison.smartShopping'),
    t('comparison.gamification')
  ];

  return (
    <section className="z-0 flex w-full max-w-6xl mx-auto flex-col items-center mt-24 md:mt-[200px] px-4 md:px-6">
      <header className="text-center mb-8 md:mb-12">
        <h2 className="text-white text-2xl md:text-[32px] font-bold leading-none">
          {t('comparison.title')}
        </h2>
        <p className="text-neutral-400 text-base md:text-lg mt-4">
          {t('comparison.subtitle')}
        </p>
      </header>
      
      <div className="w-full max-w-4xl">
        {/* Table Container with modern styling */}
        <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-neutral-800 overflow-hidden">
          {/* Header Row */}
          <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 border-b border-neutral-700">
            <div className="flex w-full items-center">
              <div className="flex-1 px-3 md:px-6 py-3 md:py-4">
                <h3 className="text-white text-base md:text-lg font-semibold">{t('comparison.feature')}</h3>
              </div>
              <div className="w-20 md:w-32 px-2 md:px-6 py-3 md:py-4 text-center border-l border-neutral-700">
                <div className="flex flex-col items-center">
                  <h3 className="text-brand-orange text-sm md:text-lg font-semibold">{t('comparison.calistant')}</h3>
                  <div className="w-6 md:w-8 h-1 bg-brand-orange rounded-full mt-1"></div>
                </div>
              </div>
              <div className="w-20 md:w-32 px-2 md:px-6 py-3 md:py-4 text-center border-l border-neutral-700">
                <div className="flex flex-col items-center">
                  <h3 className="text-neutral-400 text-sm md:text-lg font-semibold">{t('comparison.others')}</h3>
                  <div className="w-6 md:w-8 h-1 bg-neutral-600 rounded-full mt-1"></div>
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
                <div className="flex-1 px-3 md:px-6 py-4 md:py-5">
                  <span className="text-white text-sm md:text-base font-medium group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </div>
                
                {/* Calistant Column */}
                <div className="w-20 md:w-32 px-2 md:px-6 py-4 md:py-5 text-center border-l border-neutral-800 group-hover:border-neutral-700 transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-6 md:w-8 h-6 md:h-8 bg-[#00DA4B]/10 rounded-full"
                  >
                    <svg 
                      className="w-3 md:w-5 h-3 md:h-5 text-[#00DA4B]" 
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
                <div className="w-20 md:w-32 px-2 md:px-6 py-4 md:py-5 text-center border-l border-neutral-800 group-hover:border-neutral-700 transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-6 md:w-8 h-6 md:h-8 rounded-full ${index === 0 ? 'bg-[#00DA4B]/10' : 'bg-red-500/10'}`}
                  >
                    {index === 0 ? (
                      <svg 
                        className="w-3 md:w-5 h-3 md:h-5 text-[#00DA4B]" 
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
                        className="w-3 md:w-5 h-3 md:h-5 text-red-500" 
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
          <p className="text-neutral-500 text-xs md:text-sm">
            {t('comparison.footerNote')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
