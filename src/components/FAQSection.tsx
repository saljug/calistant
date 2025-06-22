import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "What do I get by joining the waitlist?",
    answer: "By signing up now, you'll receive exclusive early access to Calistant, first dibs on beta-only features, priority support, and special launch pricing when we go live."
  },
  {
    question: "When will Calistant launch?",
    answer: "We're targeting a private beta this summer, followed by a public release shortly thereafter. Waitlisters go first!"
  },
  {
    question: "Is Calistant free?",
    answer: "Yes—our Free tier remains free forever. Upgrading to Pro unlocks unlimited logs, deep analytics, AI meal plans, and more."
  },
  {
    question: "How accurate are the nutritional estimates?",
    answer: "Our AI is lab-validated to within ±10% on common meals and uses a nutritionist-verified database with manual spot-checks—so while minor discrepancies can occur, you can trust your numbers. Continuous AI retraining on real-world user feedback ensures your numbers stay precise and trustworthy."
  },
  {
    question: "Can I cancel my Pro subscription at any time?",
    answer: "Absolutely. There's no long-term commitment—you can upgrade, downgrade or cancel at any moment."
  },
  {
    question: "Which platforms and integrations are supported?",
    answer: "Calistant runs on iOS & Android. We also sync with Apple Health, Google Fit and popular wearables out of the box (more integrations coming soon)."
  },
  {
    question: "How is my personal data protected?",
    answer: "All data is encrypted in transit and at rest; we never share without your consent."
  },
  {
    question: "Will Calistant support multiple languages?",
    answer: "English at launch; Spanish, French, Turkish and more coming shortly after."
  }
];

export const FAQSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section 
      ref={ref}
      id="faq"
      className="z-0 flex w-full max-w-4xl mx-auto flex-col items-center mt-[200px] px-6 max-md:mt-10"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-white text-[32px] font-bold leading-none text-center">
          FAQ
        </h2>
      </motion.header>
      
      <div className="w-full max-w-2xl text-base text-neutral-500 font-medium mt-[52px] max-md:mt-10 space-y-4">
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
