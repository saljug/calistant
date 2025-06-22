import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/65bef691edd80a23bce20b55b4d77084dab96211?placeholderIfAbsent=true",
    title: "Hybrid Logging",
    description: "Photo • barcode • text • voice—all in one tap."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/0487895667992c943216b0b02d86cd7fa07be1d5?placeholderIfAbsent=true",
    title: "Deep Analytics",
    description: "7/30/90-day trends plus vitamin & fiber tracking."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/da96031fe1d0b06e95343f64f939bdd703299d9b?placeholderIfAbsent=true",
    title: "AI Chat Assistant",
    description: "Get on-demand Q&A and give tasks"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/af7007f5b618f0b620a62508c0081fe431e2776c?placeholderIfAbsent=true",
    title: "Gamification",
    description: "Streaks, badges & global leaderboards drive habit."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/d99667addb191dcb9bbd8f88010e5410ec91ef9d?placeholderIfAbsent=true",
    title: "Smart Shopping",
    description: "Fridge-to-table recipes & auto-built grocery lists."
  }
];

export const FeaturesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={ref}
      id="features"
      className="z-0 flex w-[1372px] max-w-full flex-col items-center text-center mt-[200px] max-md:mt-10"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-white text-[32px] font-bold leading-none">
          Key Features
        </h2>
      </motion.header>
      
      <div className="flex w-full gap-8 justify-center flex-wrap mt-[52px] max-md:mt-10">
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
    </motion.section>
  );
};
