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
    <nav className="bg-[rgba(10,10,10,0.5)] backdrop-blur-md fixed z-50 flex w-full max-w-[1228px] justify-between items-center overflow-hidden h-20 px-4 md:px-[17px] py-3.5 rounded-3xl left-2/4 top-4 md:top-10 -translate-x-2/4 font-geist mx-4 md:mx-0">
      <div className="flex items-center">
        <img
          src="/logo.svg"
          className="object-contain h-9 shrink-0 my-auto"
          alt="Calistant logo"
        />
      </div>
      
      <button
        onClick={() => scrollToSection('hero')}
        className="shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-white h-[52px] gap-2 overflow-hidden text-neutral-950 text-center text-sm md:text-base font-medium px-4 md:px-6 w-40 md:w-[220px] rounded-2xl hover:bg-gray-100 transition-colors whitespace-nowrap"
      >
        Reserve my spot
      </button>
    </nav>
  );
};
