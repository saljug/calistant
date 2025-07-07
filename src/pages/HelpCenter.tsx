import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const HelpCenter: React.FC = () => {
  return (
    <div className="items-center relative flex flex-col overflow-hidden bg-neutral-950 pt-[10px] min-h-screen">
      <Navigation />
      
      <main className="w-full flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-8 md:pb-12">
          <div className="text-white font-geist">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
              <div className="text-neutral-400 text-lg">
                <p>Find answers to frequently asked questions and get support for using Calistant.</p>
              </div>
            </div>

            {/* Content Placeholder */}
            <section className="mb-12">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
                <p className="text-neutral-400 text-lg">
                  This page is under construction. Check back soon for comprehensive help documentation and support resources.
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

export default HelpCenter; 