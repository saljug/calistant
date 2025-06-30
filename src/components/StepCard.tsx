import React from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  icon: string;
  title: string;
  description: string;
}

export const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => {
  return (
    <motion.article 
      className="items-center self-stretch flex min-w-60 flex-col overflow-hidden justify-center w-[364px] bg-neutral-900 my-auto p-6 md:p-8 rounded-3xl hover:bg-neutral-800 transition-colors"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex max-w-full w-[300px] flex-col items-center justify-center">
        <img
          src={icon}
          className="aspect-[1/1] object-contain w-16 md:w-20"
                     style={{
             filter: 'hue-rotate(-124deg) saturate(2) brightness(1.4)'
           }}
          alt={`${title} icon`}
        />
        <h3 className="text-white text-xl md:text-2xl font-bold leading-none mt-4 md:mt-5 text-center">
          {title}
        </h3>
        <p className="text-neutral-500 text-sm md:text-base font-medium leading-5 md:leading-6 mt-4 md:mt-5 text-center">
          {description}
        </p>
      </div>
    </motion.article>
  );
};
