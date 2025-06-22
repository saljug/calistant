
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
      className="flex min-w-60 flex-col overflow-hidden bg-neutral-900 p-5 rounded-3xl hover:bg-neutral-800 transition-colors"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <header className="flex items-center gap-5 text-2xl text-white font-bold leading-none">
        <img
          src={icon}
          className="aspect-[1/1] object-contain w-[50px] self-stretch shrink-0 my-auto"
          alt={`${title} icon`}
        />
        <h3 className="self-stretch my-auto">
          {title}
        </h3>
      </header>
      <p className="text-neutral-500 text-base font-medium mt-6">
        {description}
      </p>
    </motion.article>
  );
};
