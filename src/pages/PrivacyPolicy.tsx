import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="items-center relative flex flex-col overflow-hidden bg-neutral-950 pt-[10px] min-h-screen">
      <Navigation />
      
      <main className="w-full flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-8 md:pb-12">
          <div className="text-white font-geist">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('pages.privacyPolicy.title')}</h1>
              <div className="text-neutral-400 text-lg">
                <p>{t('pages.privacyPolicy.lastRevised')}</p>
                <p>{t('pages.privacyPolicy.effective')}</p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.privacyPolicy.content.intro.title')}</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                {t('pages.privacyPolicy.content.intro.p1')}
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                {t('pages.privacyPolicy.content.intro.p2')}
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {t('pages.privacyPolicy.content.intro.p3')}
              </p>
            </section>

            {/* Medical Disclaimer */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.privacyPolicy.content.medicalDisclaimer.title')}</h2>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.medicalDisclaimer.items.0')}
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.medicalDisclaimer.items.1')}
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.medicalDisclaimer.items.2')}
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.medicalDisclaimer.items.3')}
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.medicalDisclaimer.items.4')}
                </li>
              </ul>
              <p className="text-neutral-300 text-lg leading-relaxed mt-6">
                {t('pages.privacyPolicy.content.medicalDisclaimer.note')}
              </p>
            </section>

            {/* AI Limitations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.privacyPolicy.content.aiLimitations.title')}</h2>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.aiLimitations.items.0')}
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.aiLimitations.items.1')}
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.aiLimitations.items.2')}
                </li>
              </ul>
            </section>

            {/* Personal Information Collection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.privacyPolicy.content.dataCollection.title')}</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                {t('pages.privacyPolicy.content.dataCollection.intro')}
              </p>

              <h3 className="text-2xl font-semibold mb-4">{t('pages.privacyPolicy.content.dataCollection.directCollection.title')}</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-neutral-200">{t('pages.privacyPolicy.content.dataCollection.directCollection.account.title')}</h4>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  {t('pages.privacyPolicy.content.dataCollection.directCollection.account.content')}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-neutral-200">{t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.title')}</h4>
                <p className="text-neutral-300 text-lg leading-relaxed mb-4">
                  {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.intro')}
                </p>
                <ul className="space-y-2 text-neutral-300 text-lg leading-relaxed ml-6">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.items.0')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.items.1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.items.2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.items.3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.items.4')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.items.5')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.items.6')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.items.7')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.items.8')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.items.9')}
                  </li>
                </ul>
                <p className="text-neutral-300 text-lg leading-relaxed mt-4">
                  {t('pages.privacyPolicy.content.dataCollection.directCollection.foodData.note')}
                </p>
              </div>
            </section>

            {/* Automatic Data Collection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.privacyPolicy.content.automaticCollection.title')}</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                {t('pages.privacyPolicy.content.automaticCollection.intro')}
              </p>

              <h3 className="text-2xl font-semibold mb-4">{t('pages.privacyPolicy.content.automaticCollection.cookies.title')}</h3>
              <p className="text-neutral-300 text-lg leading-relaxed mb-4">
                {t('pages.privacyPolicy.content.automaticCollection.cookies.content')}
              </p>

              <h3 className="text-2xl font-semibold mb-4">{t('pages.privacyPolicy.content.automaticCollection.management.title')}</h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {t('pages.privacyPolicy.content.automaticCollection.management.content')}
              </p>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.privacyPolicy.content.dataUsage.title')}</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                {t('pages.privacyPolicy.content.dataUsage.intro')}
              </p>

              <h3 className="text-2xl font-semibold mb-4">{t('pages.privacyPolicy.content.dataUsage.functionality.title')}</h3>
              <p className="text-neutral-300 text-lg leading-relaxed mb-4">{t('pages.privacyPolicy.content.dataUsage.functionality.intro')}</p>
              <ul className="space-y-2 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.dataUsage.functionality.items.0')}
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.dataUsage.functionality.items.1')}
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.dataUsage.functionality.items.2')}
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.dataUsage.functionality.items.3')}
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  {t('pages.privacyPolicy.content.dataUsage.functionality.items.4')}
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.privacyPolicy.content.dataSharing.title')}</h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {t('pages.privacyPolicy.content.dataSharing.intro')}
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.privacyPolicy.content.dataRetention.title')}</h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {t('pages.privacyPolicy.content.dataRetention.content')}
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.privacyPolicy.content.dataSecurity.title')}</h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {t('pages.privacyPolicy.content.dataSecurity.content')}
              </p>
            </section>

            {/* Privacy Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.privacyPolicy.content.privacyRights.title')}</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                {t('pages.privacyPolicy.content.privacyRights.intro')}
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {t('pages.privacyPolicy.content.privacyRights.contact')}
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 