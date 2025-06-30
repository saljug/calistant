import React, { useState } from 'react';
import { ConfirmationDialog } from './ConfirmationDialog';

interface WaitlistFormProps {
  variant?: 'hero' | 'cta';
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  country: string;
  source: string;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ 
  variant = 'hero', 
  className = '' 
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    country: '',
    source: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState<string>('');

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Google Sheets configuration
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyoGCWToE1wyXRhChC6OXwOUcauzy1ZbwB_3Y3Cm8WONN16JHxd26qCFNNMU_e6ObcKIg/exec';
      
      // Check if we're in development mode
      const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      
      if (isDevelopment) {
        // In development, just simulate success
        console.log('🚀 Development Mode: Would submit to Google Sheets:', {
          name: formData.name,
          email: formData.email,
          country: formData.country,
          source: formData.source,
          timestamp: new Date().toISOString()
        });
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFormData({ name: '', email: '', country: '', source: '' });
        setShowConfirmation(true);
        return;
      }

      // Create form data for Google Sheets
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('country', formData.country);
      submitData.append('source', formData.source);
      submitData.append('timestamp', new Date().toISOString());

      console.log('Submitting to Google Sheets:', {
        name: formData.name,
        email: formData.email,
        country: formData.country,
        source: formData.source,
        timestamp: new Date().toISOString()
      });

      // Submit to Google Sheets via Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: submitData,
        mode: 'no-cors' // Required for Google Apps Script
      });

      // Note: With no-cors mode, we can't read the response
      // But if we reach here without throwing, it likely worked
      console.log('Google Sheets submission completed');
      
      // Success!
      setFormData({ name: '', email: '', country: '', source: '' });
      setShowConfirmation(true);
      
      // Optional: Track with analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'waitlist_signup', {
          event_category: 'engagement',
          event_label: variant
        });
      }
      
    } catch (err) {
      setError('Failed to join waitlist. Please try again.');
      console.error('Form submission error:', err);
      
      // Log more details for debugging
      if (err instanceof Error) {
        console.error('Error message:', err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'cta') {
    return (
      <div className={`flex flex-col items-center font-medium font-geist ${className}`}>
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full max-w-[430px]"
        >
          {error && (
            <div className="text-red-400 text-sm mb-4 text-center">
              {error}
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
            className="text-neutral-500 self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full gap-2 overflow-hidden bg-neutral-900 px-3.5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-white/20 placeholder:text-neutral-500"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
            className="text-neutral-500 self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full gap-2 overflow-hidden bg-neutral-900 mt-4 px-3.5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-white/20 placeholder:text-neutral-500"
          />
          
          <div className="relative mt-4 w-full">
            <select
              name="country"
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              required
              className="text-neutral-500 appearance-none self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full gap-2 overflow-hidden bg-neutral-900 px-3.5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-white/20 cursor-pointer"
            >
              <option value="">Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="TR">Turkey</option>
              <option value="other">Other</option>
            </select>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/23bbd05afb8dc449c617176fc2e326a201cf6d5a?placeholderIfAbsent=true"
              className="absolute right-3.5 top-1/2 transform -translate-y-1/2 aspect-[1] object-contain w-6 pointer-events-none"
              alt="Dropdown arrow"
            />
          </div>
          
          <div className="relative mt-4 w-full">
            <select
              name="source"
              value={formData.source}
              onChange={(e) => handleInputChange('source', e.target.value)}
              required
              className="text-neutral-500 appearance-none self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full gap-2 overflow-hidden bg-neutral-900 px-3.5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-white/20 cursor-pointer"
            >
              <option value="">Where did you hear about us?</option>
              <option value="social">Social Media</option>
              <option value="search">Search Engine</option>
              <option value="friend">Friend/Family</option>
              <option value="blog">Blog/Article</option>
              <option value="ad">Advertisement</option>

              <option value="other">Other</option>
            </select>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/23bbd05afb8dc449c617176fc2e326a201cf6d5a?placeholderIfAbsent=true"
              className="absolute right-3.5 top-1/2 transform -translate-y-1/2 aspect-[1] object-contain w-6 pointer-events-none"
              alt="Dropdown arrow"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full gap-2 overflow-hidden text-base text-neutral-950 text-center bg-[#F05B25] px-3.5 rounded-2xl hover:bg-[#d94d1f] transition-colors disabled:opacity-50 mt-4"
          >
            {isSubmitting ? 'Reserving...' : 'Reserve my spot'}
          </button>
        </form>
        
        <div className="text-neutral-500 text-sm mt-4">
          Limited spots available — secure your place early!
        </div>
        
        <ConfirmationDialog 
          isOpen={showConfirmation} 
          onClose={() => setShowConfirmation(false)} 
        />
      </div>
    );
  }

  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className={`flex w-full max-w-[430px] flex-col items-stretch text-sm md:text-base text-neutral-500 font-medium rounded-xl font-geist ${className}`}
      >

        {error && (
          <div className="text-red-400 text-xs md:text-sm mb-4">
            {error}
          </div>
        )}
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
          className="text-neutral-500 self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full gap-2 overflow-hidden bg-neutral-900 px-3 md:px-3.5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-white/20 placeholder:text-neutral-500 text-sm md:text-base"
        />
        
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
          className="text-neutral-500 self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full gap-2 overflow-hidden bg-neutral-900 mt-4 px-3 md:px-3.5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-white/20 placeholder:text-neutral-500 text-sm md:text-base"
        />
        
        <div className="relative mt-4">
          <select
            name="country"
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            required
            className="text-neutral-500 appearance-none self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full gap-2 overflow-hidden bg-neutral-900 px-3 md:px-3.5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-white/20 cursor-pointer text-sm md:text-base"
          >
            <option value="">Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="TR">Turkey</option>
            <option value="other">Other</option>
          </select>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/23bbd05afb8dc449c617176fc2e326a201cf6d5a?placeholderIfAbsent=true"
            className="absolute right-3 md:right-3.5 top-1/2 transform -translate-y-1/2 aspect-[1] object-contain w-5 md:w-6 pointer-events-none"
            alt="Dropdown arrow"
          />
        </div>
        
        <div className="relative mt-4">
          <select
            name="source"
            value={formData.source}
            onChange={(e) => handleInputChange('source', e.target.value)}
            required
            className="text-neutral-500 appearance-none self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full gap-2 overflow-hidden bg-neutral-900 px-3 md:px-3.5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-white/20 cursor-pointer text-sm md:text-base"
          >
            <option value="">Where did you hear about us?</option>
            <option value="social">Social Media</option>
            <option value="search">Search Engine</option>
            <option value="friend">Friend/Family</option>
            <option value="blog">Blog/Article</option>
            <option value="ad">Advertisement</option>

            <option value="other">Other</option>
          </select>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/23bbd05afb8dc449c617176fc2e326a201cf6d5a?placeholderIfAbsent=true"
            className="absolute right-3 md:right-3.5 top-1/2 transform -translate-y-1/2 aspect-[1] object-contain w-5 md:w-6 pointer-events-none"
            alt="Dropdown arrow"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-white h-[52px] w-full gap-2 overflow-hidden text-neutral-950 text-center mt-4 px-3 md:px-3.5 rounded-2xl hover:bg-gray-100 transition-colors disabled:opacity-50 text-sm md:text-base font-medium"
        >
          {isSubmitting ? 'Reserving...' : 'Reserve my spot'}
        </button>
        
        <div className="text-neutral-500 text-xs md:text-sm self-center mt-4 text-center">
          Limited spots available — secure your place early!
        </div>
      </form>
      
      <ConfirmationDialog 
        isOpen={showConfirmation} 
        onClose={() => setShowConfirmation(false)} 
      />
    </>
  );
};
