
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer?: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="w-full">
      <button
        onClick={toggleOpen}
        className="justify-between items-center shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex min-h-[52px] w-full gap-[40px_100px] overflow-hidden flex-wrap bg-neutral-900 p-3.5 rounded-2xl max-md:max-w-full hover:bg-neutral-800 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-white self-stretch my-auto text-left">
          {question}
        </span>
        <motion.img
          src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/0ecfaa7f1b4805375bfe9efa777505dad9be59b4?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          alt="Expand/collapse arrow"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </button>
      <AnimatePresence>
        {isOpen && answer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-2 p-4 bg-neutral-800 rounded-2xl">
              <p className="text-neutral-400 text-sm leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};
