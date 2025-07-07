import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Icon } from '@iconify/react';
import clipboardIcon from '@iconify/icons-solar/clipboard-list-bold';
import warningTriangleIcon from '@iconify/icons-solar/danger-triangle-bold';
import shieldCheckIcon from '@iconify/icons-solar/shield-check-bold';

const DeleteAccount: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="items-center relative flex flex-col overflow-hidden bg-neutral-950 pt-[10px] min-h-screen">
      <Navigation />
      
      <main className="w-full flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-8 md:pb-12">
          <div className="text-white font-geist">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Delete Your Calistant Account</h1>
              <div className="text-neutral-400 text-lg">
                <p>Permanently remove your account and all associated data</p>
              </div>
            </div>

            {/* Instructions */}
            <section className="mb-12">
              <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                To delete your Calistant account and all associated data:
              </p>
              
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8">
                <ol className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">1</span>
                    Open the Calistant app.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">2</span>
                    Go to <code className="bg-neutral-800 px-2 py-1 rounded text-sm">Settings &gt; Account &gt; Delete Account</code>.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">3</span>
                    Confirm deletion — your account and data will be permanently removed.
                  </li>
                </ol>
              </div>
            </section>

            {/* Data Deletion Info */}
            <section className="mb-12">
              <div className="bg-blue-950/20 border border-blue-800/30 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-200 flex items-center">
                  <Icon icon={clipboardIcon} className="w-5 h-5 mr-2" />
                  We delete the following data upon request:
                </h3>
                <ul className="space-y-3 text-neutral-300 text-lg leading-relaxed ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Email and profile info (age, height, weight, preferences)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Meal logs, scanned barcodes, photos, AI interaction history
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-950/20 border border-red-800/30 rounded-2xl p-6">
                <p className="text-red-200 text-lg leading-relaxed font-semibold flex items-center">
                  <Icon icon={warningTriangleIcon} className="w-5 h-5 mr-2" />
                  All deletions are permanent and processed immediately.
                </p>
              </div>
            </section>

            {/* Alternative Method */}
            <section className="mb-12">
              <div className="border-t border-neutral-800 pt-8">
                <h2 className="text-3xl font-bold mb-6">Can't access the app?</h2>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  If you're unable to access the Calistant app to delete your account through the normal process, we can help you with manual account deletion.
                </p>
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    Email us at <a href="mailto:support@calistant.com" className="text-blue-400 hover:text-blue-300 underline font-semibold">support@calistant.com</a> and request manual account deletion.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Retention Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Data Retention</h2>
              <div className="bg-green-950/20 border border-green-800/30 rounded-2xl p-6">
                <p className="text-green-200 text-lg leading-relaxed mb-4 flex items-center">
                  <Icon icon={shieldCheckIcon} className="w-5 h-5 mr-2" />
                  <strong>We do not retain deleted user data.</strong> Any backups are overwritten within 7 days.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  Once your account is deleted, your personal information is permanently removed from our active systems. Any backup copies are automatically overwritten within 7 days as part of our data security protocols.
                </p>
              </div>
            </section>

            {/* Additional Resources */}
            <section className="mb-12 border-t border-neutral-800 pt-8">
              <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/privacy" className="block bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-white">Privacy Policy</h3>
                  <p className="text-neutral-400">Learn more about how we handle your data and privacy</p>
                </a>
                <a href="/terms" className="block bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-white">Terms of Service</h3>
                  <p className="text-neutral-400">Review our terms and conditions</p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeleteAccount; 