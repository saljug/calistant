import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FAQItem } from './FAQItem';



export const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const faqs = [
    {
      question: t('faq.questions.free.question'),
      answer: t('faq.questions.free.answer')
    },
    {
      question: t('faq.questions.accuracy.question'),
      answer: t('faq.questions.accuracy.answer')
    },
    {
      question: t('faq.questions.cancel.question'),
      answer: t('faq.questions.cancel.answer')
    },
    {
      question: t('faq.questions.platforms.question'),
      answer: t('faq.questions.platforms.answer')
    },
    {
      question: t('faq.questions.privacy.question'),
      answer: t('faq.questions.privacy.answer')
    },
    {
      question: t('faq.questions.languages.question'),
      answer: t('faq.questions.languages.answer')
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="faq"
      className="z-0 flex w-full max-w-4xl mx-auto flex-col items-center mt-24 md:mt-[200px] px-4 md:px-6"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-white text-2xl md:text-[32px] font-bold leading-none text-center">
          {t('faq.title')}
        </h2>
      </motion.header>
      
      <div className="w-full max-w-2xl text-sm md:text-base text-neutral-500 font-medium mt-8 md:mt-[52px] space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.4 + index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <FAQItem
              question={faq.question}
              answer={faq.answer}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
