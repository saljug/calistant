import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const Terms: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="items-center relative flex flex-col overflow-hidden bg-neutral-950 pt-[10px] min-h-screen">
      <Navigation />
      
      <main className="w-full flex flex-col items-center flex-1">
        <div className="max-w-4xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="text-white font-geist">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('pages.terms.title')}</h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              {t('pages.terms.comingSoon')}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms; 