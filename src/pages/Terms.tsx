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
        <div className="max-w-4xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-8 md:pb-12">
          <div className="text-white font-geist">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <div className="text-neutral-400 text-lg">
                <p><em>Last updated: July 2025</em></p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Welcome to <strong>Calistant</strong> — your AI-powered nutrition assistant. These Terms of Service ("Terms") govern your access to and use of the Calistant mobile application and website (collectively, the "Services"). By accessing or using our Services, you confirm that you have read, understood, and agreed to be bound by these Terms and our <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>.
              </p>
            </section>

            {/* 1. Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">1. Overview</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Calistant is a mobile app designed to help users track their nutrition and improve their health through AI-powered insights, logging tools, and personalized recommendations. Calistant is <strong>not a medical or healthcare provider</strong>, and the information provided should not be treated as medical advice.
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Use of Calistant is entirely at your own risk. You should always consult a qualified healthcare provider before making changes to your diet or exercise habits.
              </p>
            </section>

            {/* 2. Eligibility */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">2. Eligibility</h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                To use Calistant, you must be at least <strong>18 years old</strong>. If we learn that a user is under the age of 18, we will terminate the account and delete all associated data. By registering, you confirm that you meet the age requirement.
              </p>
            </section>

            {/* 3. Account Registration and Responsibilities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">3. Account Registration and Responsibilities</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                You may be required to create an account to access certain features of Calistant. During registration, you must provide:
              </p>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  A valid email address
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Accurate personal information such as age, height, weight, gender
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Optional preferences like dietary habits, allergies, or favorite foods
                </li>
              </ul>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                You are solely responsible for keeping your account credentials safe and for any activity under your account. If you suspect unauthorized use, please notify us immediately.
              </p>

              <h3 className="text-2xl font-semibold mb-4">3.1 User Responsibility for Account Credentials</h3>
              <p className="text-neutral-300 text-lg leading-relaxed mb-4">
                You are solely responsible for maintaining the confidentiality of your login credentials, including any username, password, or authentication method associated with your account. You must not share your credentials with any third party or allow anyone else to access the App using your account. You are fully responsible for all activities that occur under your account, whether or not authorized by you.
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed">
                We are not liable for any loss or damage arising from your failure to protect your credentials or from any unauthorized access to your account.
              </p>
            </section>

            {/* 4. Plans & Subscriptions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">4. Plans & Subscriptions</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                We offer two types of plans:
              </p>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <strong>Free Plan</strong>: Allows limited logging (meals, water, steps via photo, barcode, text, or voice) and basic analytics.
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <strong>Pro Plan</strong>: Offers full access including unlimited tracking, detailed nutritional analytics, personalized plans, habit-based insights, and AI assistant features.
                </li>
              </ul>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Subscriptions are available in <strong>monthly and yearly</strong> billing options. Plans are billed via Apple App Store or Google Play.
              </p>
            </section>

            {/* 5. Payments and Renewals */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">5. Payments and Renewals</h2>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Payments are handled via <strong>RevenueCat</strong>, which manages billing through Apple or Google.
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  You may manage, cancel, or renew your plan in your App Store or Play Store account settings.
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Refunds and cancellations follow Apple or Google's respective policies.
                </li>
              </ul>
              <p className="text-neutral-300 text-lg leading-relaxed">
                We do not store payment information directly.
              </p>
            </section>

            {/* 6. Use of Artificial Intelligence Technologies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">6. Use of Artificial Intelligence Technologies</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Calistant uses proprietary and third-party AI models to offer recommendations, track user patterns, and personalize experiences. These systems operate on anonymized or pseudonymized data and adapt over time based on user input and feedback.
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                AI is used for:
              </p>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Interpreting voice and text meal entries
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Detecting and extracting information from food photos
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Suggesting meals, calorie plans, and behavioral tips
                </li>
              </ul>
              <p className="text-neutral-300 text-lg leading-relaxed">
                While we strive for high accuracy, AI-generated outputs may contain errors. Always review suggestions critically and consult with a professional if needed.
              </p>
            </section>

            {/* 7. Data We Collect */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">7. Data We Collect</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                To personalize your experience and provide accurate nutritional guidance, we collect the following data:
              </p>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Email and basic demographics (age, height, weight, gender)
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Meal entries, photos, scanned barcodes, and logging history
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Preferences: allergies, dietary restrictions, favorite foods, water/step input
                </li>
              </ul>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                We do <strong>not</strong> sell or share your data with advertisers or third parties.
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Your data is processed securely to provide tailored recommendations, and is stored in compliance with relevant data protection laws. For full details, see our <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>.
              </p>
            </section>

            {/* 8. How We Calculate Recommendations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">8. How We Calculate Recommendations</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Our calorie and macronutrient recommendations are based on widely recognized scientific models and sources:
              </p>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/2305711/" className="text-blue-400 hover:text-blue-300 underline">Mifflin-St Jeor Equation</a> — to estimate Basal Metabolic Rate (BMR)
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <a href="https://www.niddk.nih.gov/bwp" className="text-blue-400 hover:text-blue-300 underline">NIH Body Weight Planner</a> — for weight goals
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <a href="https://www.efsa.europa.eu/en/efsajournal/pub/3005" className="text-blue-400 hover:text-blue-300 underline">EFSA Guidelines</a> — for energy requirements
                </li>
              </ul>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Our AI system adapts these calculations to your goals using your profile, inputs, and meal history. Learn more on our <a href="/how-we-calculate" className="text-blue-400 hover:text-blue-300 underline">How We Calculate</a> page.
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed">
                <strong>Disclaimer</strong>: These tools are for informational purposes only. Calistant does not provide individualized health advice.
              </p>
            </section>

            {/* 9. Acceptable Use */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">9. Acceptable Use</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                When using Calistant, you agree not to:
              </p>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Provide false or misleading information
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Use the app to track another person without consent
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Attempt to reverse-engineer, copy, or exploit the platform
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Upload content that is harmful, illegal, or offensive
                </li>
              </ul>
              <p className="text-neutral-300 text-lg leading-relaxed">
                We reserve the right to suspend or terminate any account that violates these conditions.
              </p>
            </section>

            {/* 10. Account Deletion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">10. Account Deletion</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                You can delete your account anytime via the app's settings. Upon deletion:
              </p>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Your personal data is permanently removed from our servers
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Your subscription will be canceled at the end of the billing cycle
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  This action cannot be undone
                </li>
              </ul>
            </section>

            {/* 11. Application Stores and Distribution Platforms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">11. Application Stores and Distribution Platforms</h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Calistant is distributed through third-party platforms, including the Apple App Store and Google Play Store. Your use of the app is subject to their respective terms and conditions. Any in-app purchases, billing disputes, or refunds must be handled via the relevant store.
              </p>
            </section>

            {/* 12. Limitation of Liability and Indemnity */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">12. Limitation of Liability and Indemnity</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                To the fullest extent permitted by law, Calistant and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use or inability to use the Services.
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                You agree to indemnify, defend, and hold harmless Calistant and its affiliates from any claim or demand made by any third party due to or arising out of:
              </p>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Your use of the Services
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Your violation of these Terms
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Your violation of any rights of another
                </li>
              </ul>
            </section>

            {/* 13. No Warranties */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">13. No Warranties</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                The Services are provided on an "as is" and "as available" basis. Calistant makes no warranties or representations about the accuracy, completeness, or reliability of the Services.
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed">
                We disclaim all warranties, express or implied, including any implied warranties of merchantability, fitness for a particular purpose, non-infringement, or availability.
              </p>
            </section>

            {/* 14. Governing Law */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">14. Governing Law</h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                These Terms are governed by the laws of the <strong>Republic of Turkey</strong>, unless otherwise required by local laws in your country of residence.
              </p>
            </section>

            {/* 15. Changes to These Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">15. Changes to These Terms</h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                We may occasionally update these Terms. If material changes are made, we will notify you via email or in-app. Continued use of the app after changes means acceptance of the updated Terms.
              </p>
            </section>

            {/* 16. Contact */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">16. Contact</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                For any questions, issues, or legal inquiries, you can reach us at:
              </p>
              <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">📧</span>
                  Email: <a href="mailto:support@calistant.com" className="text-blue-400 hover:text-blue-300 underline">support@calistant.com</a>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">📸</span>
                  Instagram: <a href="https://instagram.com/calistant" className="text-blue-400 hover:text-blue-300 underline">@calistant</a>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">💬</span>
                  Reddit: <a href="https://reddit.com/r/calistant" className="text-blue-400 hover:text-blue-300 underline">r/calistant</a>
                </li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section className="mb-12 border-t border-neutral-800 pt-8">
              <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                <strong>Disclaimer</strong>: Calistant does not provide medical advice. Any and all recommendations should be viewed as general suggestions. Always consult a licensed professional before starting any dietary or lifestyle changes.
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed italic">
                Thank you for using Calistant — your assistant in mindful, smarter nutrition.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms; 