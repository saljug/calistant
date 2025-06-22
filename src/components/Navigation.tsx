
import React from 'react';

export const Navigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 140; // Increased offset for better visibility
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-[rgba(10,10,10,0.5)] backdrop-blur-md fixed z-50 flex w-[1228px] max-w-full justify-between items-center overflow-hidden h-20 px-[17px] py-3.5 rounded-3xl left-2/4 top-10 -translate-x-2/4 font-geist">
      <div className="flex items-center gap-[9px] text-4xl text-white font-semibold whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/4536baf7148759ab3244d0b3996326f36f0edc49?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
          alt="Calistant logo"
        />
        <div className="self-stretch w-[152px] my-auto">
          calistant
        </div>
      </div>
      
      <div className="flex items-center gap-[40px_52px] text-base font-medium">
        <div className="flex items-center gap-8 text-white leading-[4.5]">
          <button 
            onClick={() => scrollToSection('features')}
            className="hover:text-gray-300 transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="hover:text-gray-300 transition-colors"
          >
            FAQ
          </button>
        </div>
        <button
          onClick={() => scrollToSection('hero')}
          className="shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-white h-[52px] gap-2 overflow-hidden text-neutral-950 text-center w-[200px] px-3.5 rounded-2xl hover:bg-gray-100 transition-colors"
        >
          Reserve my spot
        </button>
      </div>
    </nav>
  );
};
