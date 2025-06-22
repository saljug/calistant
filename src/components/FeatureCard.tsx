import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.article 
      className="w-full h-full p-5 overflow-hidden rounded-3xl flex-col justify-start items-start gap-6 inline-flex transition-colors"
      style={{ backgroundColor: '#171717' }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="justify-start items-center gap-5 inline-flex">
        <div className="w-[50px] h-[50px] relative bg-neutral-950 overflow-hidden rounded-xl">
          <img
            src={icon}
            className="w-10 h-10 left-[5px] top-[5px] absolute"
            alt={`${title} icon`}
          />
        </div>
        <div className="text-white text-2xl font-bold font-geist leading-6 break-words text-left">
          {title}
        </div>
      </div>
      <div className="text-neutral-500 text-base font-medium font-geist leading-6 break-words text-left">
        {description}
      </div>
    </motion.article>
  );
};
