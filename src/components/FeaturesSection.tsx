import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FeatureCard } from './FeatureCard';



export const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/65bef691edd80a23bce20b55b4d77084dab96211?placeholderIfAbsent=true",
      title: t('features.hybridLogging.title'),
      description: t('features.hybridLogging.description')
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/0487895667992c943216b0b02d86cd7fa07be1d5?placeholderIfAbsent=true",
      title: t('features.deepAnalytics.title'),
      description: t('features.deepAnalytics.description')
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/da96031fe1d0b06e95343f64f939bdd703299d9b?placeholderIfAbsent=true",
      title: t('features.aiChat.title'),
      description: t('features.aiChat.description')
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/af7007f5b618f0b620a62508c0081fe431e2776c?placeholderIfAbsent=true",
      title: t('features.gamification.title'),
      description: t('features.gamification.description')
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/d99667addb191dcb9bbd8f88010e5410ec91ef9d?placeholderIfAbsent=true",
      title: t('features.smartShopping.title'),
      description: t('features.smartShopping.description')
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="features"
      className="z-0 flex w-full max-w-7xl mx-auto flex-col items-center text-center mt-24 md:mt-[200px] px-4 md:px-6"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-white text-2xl md:text-[32px] font-bold leading-none">
          {t('features.title')}
        </h2>
      </motion.header>
      
      {/* Mobile: Single column, Desktop: 3 top + 2 bottom */}
      <div className="w-full mt-8 md:mt-[52px] max-w-[1400px]">
        {/* Mobile layout - all cards in single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Desktop layout - 3 top, 2 bottom */}
        <div className="hidden md:flex flex-col gap-8">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-3 gap-8 justify-items-center">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="w-full max-w-[380px]"
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom row - 2 cards centered */}
          <div className="flex gap-8 justify-center">
            {features.slice(3, 5).map((feature, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + (index + 3) * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="w-full max-w-[380px]"
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
