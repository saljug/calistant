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
      <div className="flex items-center gap-[9px] text-2xl md:text-4xl text-white font-semibold whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b872b8b6abae4d0cb339db9d1b6a8455/4536baf7148759ab3244d0b3996326f36f0edc49?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-7 md:w-9 self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
          alt="Calistant logo"
        />
        <div className="self-stretch my-auto">
          calistant
        </div>
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
