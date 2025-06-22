import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { StepCard } from './StepCard';

const steps = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/23aedc181027ec85f41273befc91fb52fafc6c3c?placeholderIfAbsent=true",
    title: "Log in a Snap",
    description: "Tap the + and snap a photo, scan a barcode, type or speak your meal."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/57441d4f979423b915b48d9dd7250adfb32a2a52?placeholderIfAbsent=true",
    title: "See Instant Result",
    description: "Get calories & macros and more auto-analyzed in seconds"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/676f2db26b6ca4695f5e15fcd1985b272a1f9af4?placeholderIfAbsent=true",
    title: "Add & Earn",
    description: "Hit \"Add\" to save your entry, unlock AI tips and earn badges."
  }
];

export const HowItWorksSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={ref}
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
          How it Works
        </h2>
      </motion.header>
      
      <div className="flex w-full items-center gap-6 justify-center flex-wrap mt-[52px] max-md:mt-10">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.8 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <StepCard
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </motion.div>
            
            {index < steps.length - 1 && (
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/ac0a3fd488fc89dc12068d8df6c952a05a6718a3?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[72px] self-stretch shrink-0 my-auto"
                alt="Arrow pointing to next step"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
};
