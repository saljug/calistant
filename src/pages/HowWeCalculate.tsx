import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const HowWeCalculate: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="items-center relative flex flex-col overflow-hidden bg-neutral-950 pt-[10px] min-h-screen">
      <Navigation />
      
      <main className="w-full flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-8 md:pb-12">
          <div className="text-white font-geist">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('pages.howWeCalculate.title', 'How We Calculate')}</h1>
              <div className="text-neutral-400 text-lg">
                <p>{t('pages.howWeCalculate.subtitle', 'Understanding the science behind your personalized nutrition recommendations')}</p>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <section className="mb-12 bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t('pages.howWeCalculate.disclaimer.title', 'Important Note')}</h3>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    {t('pages.howWeCalculate.disclaimer.content', 'Calistant is not a medical application. We do not offer medical advice. Any and all recommendations should be viewed as suggestions. Always consult with a healthcare professional before making significant changes to your diet, nutrition, or physical activity plan.')}
                  </p>
                </div>
              </div>
            </section>

            {/* Table of Contents */}
            <section className="mb-12">
              <p className="text-neutral-300 text-lg leading-relaxed mb-4">This page explains:</p>
              <ul className="space-y-2 text-neutral-300 text-lg leading-relaxed ml-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  How we calculate your <strong>Basal Metabolic Rate (BMR)</strong> and <strong>Total Daily Energy Expenditure (TDEE)</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  How your <strong>macronutrient goals</strong> are set
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  How our <strong>AI adapts these numbers over time</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  The <strong>scientific sources</strong> we follow
                </li>
              </ul>
            </section>

            {/* BMR Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.howWeCalculate.bmr.title')}</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                {t('pages.howWeCalculate.bmr.description')}
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                We calculate BMR using the <strong>Mifflin-St Jeor Equation</strong>, which is one of the most accurate formulas validated in nutritional science:
              </p>
              
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-6">
                <h4 className="text-xl font-semibold mb-3 text-green-400">For men:</h4>
                <p className="text-neutral-200 text-lg font-mono bg-neutral-800 p-3 rounded">
                  {t('pages.howWeCalculate.bmr.equations.men')}
                </p>
                
                <h4 className="text-xl font-semibold mb-3 mt-6 text-pink-400">For women:</h4>
                <p className="text-neutral-200 text-lg font-mono bg-neutral-800 p-3 rounded">
                  {t('pages.howWeCalculate.bmr.equations.women')}
                </p>
              </div>

              <div className="bg-blue-950/50 border border-blue-800/50 rounded-2xl p-5">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-200">
                      {t('pages.howWeCalculate.bmr.source')}
                      <a href="https://pubmed.ncbi.nlm.nih.gov/2305711/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline ml-1">
                        View on PubMed
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* TDEE Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.howWeCalculate.tdee.title')}</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                {t('pages.howWeCalculate.tdee.description')}
              </p>

              <div className="overflow-x-auto">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-neutral-800 to-neutral-700">
                        <th className="px-6 py-4 text-left text-white font-semibold">{t('pages.howWeCalculate.tdee.table.activityLevel')}</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">{t('pages.howWeCalculate.tdee.table.multiplier')}</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      <tr className="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors">
                        <td className="px-6 py-4">{t('pages.howWeCalculate.tdee.table.sedentary')}</td>
                        <td className="px-6 py-4 font-mono text-blue-400 font-semibold">BMR × 1.2</td>
                      </tr>
                      <tr className="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors">
                        <td className="px-6 py-4">{t('pages.howWeCalculate.tdee.table.lightlyActive')}</td>
                        <td className="px-6 py-4 font-mono text-green-400 font-semibold">BMR × 1.375</td>
                      </tr>
                      <tr className="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors">
                        <td className="px-6 py-4">{t('pages.howWeCalculate.tdee.table.moderatelyActive')}</td>
                        <td className="px-6 py-4 font-mono text-yellow-400 font-semibold">BMR × 1.55</td>
                      </tr>
                      <tr className="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors">
                        <td className="px-6 py-4">{t('pages.howWeCalculate.tdee.table.veryActive')}</td>
                        <td className="px-6 py-4 font-mono text-orange-400 font-semibold">BMR × 1.725</td>
                      </tr>
                      <tr className="hover:bg-neutral-800/30 transition-colors">
                        <td className="px-6 py-4">{t('pages.howWeCalculate.tdee.table.superActive')}</td>
                        <td className="px-6 py-4 font-mono text-red-400 font-semibold">BMR × 1.9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-neutral-300 text-lg leading-relaxed mt-6">
                This gives us your <strong>baseline calorie needs</strong> to maintain your current weight.
              </p>

              <div className="bg-blue-950 border border-blue-800 rounded-2xl p-4 mt-6">
                <p className="text-blue-200">
                  📚 <strong>Source:</strong> NIH Body Weight Planner – 
                  <a href="https://www.niddk.nih.gov/health-information/weight-management/body-weight-planner" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline ml-1">
                    Visit NIDDK.gov
                  </a>
                </p>
              </div>
            </section>

            {/* Goal-Based Calories */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('pages.howWeCalculate.goals.title')}</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                {t('pages.howWeCalculate.goals.description')}
              </p>
              
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  {t('pages.howWeCalculate.goals.fatLoss')}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  {t('pages.howWeCalculate.goals.maintenance')}
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  {t('pages.howWeCalculate.goals.muscleGain')}
                </li>
              </ul>

              <p className="text-neutral-300 text-lg leading-relaxed mt-6">
                We personalize this based on your experience level, current body weight, and training history.
              </p>
            </section>

            {/* Macronutrient Targets */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">4. Macronutrient Targets</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Your daily calories are split into macros (Protein, Carbs, Fat) based on:
              </p>
              
              <ul className="space-y-2 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Your <strong>goal type</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Your <strong>body weight</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Your <strong>activity level</strong>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">General macro rules we use:</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
                  <span className="text-orange-400 font-semibold">Protein:</span>
                  <span className="text-neutral-300 ml-2">1.6–2.2g per kg of body weight (higher for fat loss & athletes)</span>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
                  <span className="text-yellow-400 font-semibold">Fat:</span>
                  <span className="text-neutral-300 ml-2">~25–30% of daily calories</span>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
                  <span className="text-blue-400 font-semibold">Carbs:</span>
                  <span className="text-neutral-300 ml-2">Remaining calories after protein & fat are set</span>
                </div>
              </div>

              <div className="bg-blue-950/50 border border-blue-800/50 rounded-2xl p-5">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-200 mb-2"><strong>Sources:</strong></p>
                    <ul className="space-y-1 text-blue-200 ml-4">
                      <li>
                        <a href="https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          ISSN Position Stand on Protein & Exercise (2017)
                        </a>
                      </li>
                      <li>
                        <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/macronutrients/faq-20058349" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          Mayo Clinic Macronutrients Guide
                        </a>
                      </li>
                      <li>
                        <a href="https://www.precisionnutrition.com/all-about-macronutrients" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          Precision Nutrition Macronutrient Breakdown
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Micronutrient Guidance */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">5. Micronutrient Guidance</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                While we don't prescribe specific daily values for every vitamin and mineral, Calistant highlights key micronutrients (like iron, folate, B12, vitamin D, etc.) based on:
              </p>
              
              <ul className="space-y-2 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <strong>USDA Recommended Daily Values</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <strong>User-reported health goals</strong>
                </li>
              </ul>

              <div className="bg-blue-950/50 border border-blue-800/50 rounded-2xl p-5">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-200 mb-2"><strong>Sources:</strong></p>
                    <ul className="space-y-1 text-blue-200 ml-4">
                      <li>
                        <a href="https://www.dietaryguidelines.gov" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          USDA Dietary Guidelines
                        </a>
                      </li>
                      <li>
                        <a href="https://www.who.int/data/nutrition" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          WHO Micronutrient Information
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Improvements */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">6. How Our AI Improves These Targets</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Once your base plan is created, Calistant doesn't stop there. Our AI assistant continuously learns from:
              </p>
              
              <ul className="space-y-2 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Your actual food logs
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Your meal times and consistency
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Whether you're under/over-eating certain macros
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Trends over 7/30/90 days
                </li>
              </ul>

              <p className="text-neutral-300 text-lg leading-relaxed mb-4">
                It then offers:
              </p>

              <ul className="space-y-2 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Goal adjustments (e.g., increase carbs on workout days)
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Suggestions for food quality (e.g., "You're low on fiber this week")
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Nudges for hydration, micronutrient balance, or consistency
                </li>
              </ul>

              <p className="text-neutral-300 text-lg leading-relaxed">
                We call this <strong className="text-purple-400">Adaptive Nutrition</strong>, and it makes Calistant more personal over time.
              </p>
            </section>

            {/* Transparency and Accuracy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">7. Transparency and Accuracy</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                We don't invent numbers — everything in your plan is based on:
              </p>
              
              <ul className="space-y-2 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Peer-reviewed nutritional science
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Public health guidelines (NIH, WHO, USDA)
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Ongoing feedback from verified users
                </li>
              </ul>

              <p className="text-neutral-300 text-lg leading-relaxed">
                We cite <strong>publicly available</strong>, <strong>open-access</strong>, and <strong>authoritative</strong> sources. Our system builds on known scientific consensus and presents it transparently — not as proprietary medical advice.
              </p>
            </section>

            {/* Dive Deeper */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">8. Want to Dive Deeper?</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Explore the references we use to build your plan:
              </p>
              
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                <ul className="space-y-3 text-blue-400">
                  <li>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/2305711/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 underline">
                      Mifflin-St Jeor BMR Formula – PubMed
                    </a>
                  </li>
                  <li>
                    <a href="https://www.niddk.nih.gov/health-information/weight-management/body-weight-planner" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 underline">
                      NIH Body Weight Planner – NIDDK
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dietaryguidelines.gov" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 underline">
                      USDA Dietary Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="https://www.who.int/data/nutrition" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 underline">
                      WHO Micronutrient Database
                    </a>
                  </li>
                  <li>
                    <a href="https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 underline">
                      ISSN Protein Intake Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="https://www.precisionnutrition.com/all-about-macronutrients" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 underline">
                      Precision Nutrition on Macronutrients
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/macronutrients/faq-20058349" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 underline">
                      Mayo Clinic Macronutrients Overview
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <div className="bg-green-950 border border-green-800 rounded-2xl p-6">
                <p className="text-green-200 text-lg">
                  If you have questions about your current calorie or macro target, feel free to reach out to our team at{' '}
                  <a href="mailto:hi@calistant.com" className="text-green-400 hover:text-green-300 underline font-semibold">
                    hi@calistant.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowWeCalculate; 