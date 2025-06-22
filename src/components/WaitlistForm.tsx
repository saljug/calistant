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

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', country: '', source: '' });
    setIsSubmitting(false);
    setShowConfirmation(true);
  };

  if (variant === 'cta') {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col items-center font-medium font-geist ${className}`}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-[300px] max-w-full gap-2 overflow-hidden text-base text-neutral-950 text-center bg-[#00DA4B] px-3.5 rounded-2xl hover:bg-[#00c043] transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Reserving...' : 'Reserve my spot'}
        </button>
        <div className="text-neutral-500 text-sm mt-4">
          Limited spots available — secure your place early!
        </div>
        <ConfirmationDialog 
          isOpen={showConfirmation} 
          onClose={() => setShowConfirmation(false)} 
        />
      </form>
    );
  }

  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className={`flex w-full max-w-[430px] flex-col items-stretch text-base text-neutral-500 font-medium rounded-xl font-geist ${className}`}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
          className="text-neutral-500 self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full gap-2 overflow-hidden bg-neutral-900 px-3.5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-white/20 placeholder:text-neutral-500"
        />
        
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
          className="text-neutral-500 self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[52px] w-full gap-2 overflow-hidden bg-neutral-900 mt-4 px-3.5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-white/20 placeholder:text-neutral-500"
        />
        
        <div className="relative mt-4">
          <select
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
            <option value="other">Other</option>
          </select>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/23bbd05afb8dc449c617176fc2e326a201cf6d5a?placeholderIfAbsent=true"
            className="absolute right-3.5 top-1/2 transform -translate-y-1/2 aspect-[1] object-contain w-6 pointer-events-none"
            alt="Dropdown arrow"
          />
        </div>
        
        <div className="relative mt-4">
          <select
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
          className="self-stretch shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-white h-[52px] w-full gap-2 overflow-hidden text-neutral-950 text-center mt-4 px-3.5 rounded-2xl hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Reserving...' : 'Reserve my spot'}
        </button>
        
        <div className="text-neutral-500 text-sm self-center mt-4">
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
