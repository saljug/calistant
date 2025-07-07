import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Icon } from '@iconify/react';
import sadCircleIcon from '@iconify/icons-solar/sad-circle-bold';
import homeIcon from '@iconify/icons-solar/home-2-bold';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="items-center relative flex flex-col overflow-hidden bg-neutral-950 pt-[10px] min-h-screen">
      <Navigation />
      
      <main className="w-full flex flex-col items-center flex-1">
        <div className="max-w-4xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-8 md:pb-12 flex-1 flex items-center justify-center">
          <div className="text-center text-white font-geist">
            {/* 404 Icon and Number */}
            <div className="mb-8">
              <Icon icon={sadCircleIcon} className="w-24 h-24 mx-auto mb-6 text-neutral-400" />
              <h1 className="text-8xl md:text-9xl font-bold text-neutral-300 mb-4">404</h1>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
              <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-2">
                Sorry, we couldn't find the page you're looking for.
              </p>
              <p className="text-lg text-neutral-500">
                The page <code className="bg-neutral-800 px-2 py-1 rounded text-sm text-neutral-300">{location.pathname}</code> doesn't exist.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/" 
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Icon icon={homeIcon} className="w-5 h-5 mr-2" />
                Go Back Home
              </Link>
              
              <button 
                onClick={() => window.history.back()} 
                className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 border border-neutral-700"
              >
                Go Back
              </button>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 pt-8 border-t border-neutral-800">
              <p className="text-neutral-400 mb-6">You might be looking for:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link to="/features" className="text-neutral-400 hover:text-white transition-colors">
                  Features
                </Link>
                <Link to="/help-center" className="text-neutral-400 hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
