"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const router = useRouter();

  const ImageBackground: string = "/img/novacek/hero/DSC08073-jpg.webp";

  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: 600,
    transition: 'background-color 0.5s'
  };

  const navigate = (): void => {
    router.push('/cenik');
  };

  return (

    <section className="relative items-center text-left min-h-[30vh] w-full">
      <div className="container hero-container mx-auto w-full max-w-[1500px] 4k:max-w-[3000px] p-6 grid grid-cols-1 xl:grid-cols-2 gap-4">

        <div className="mb-4 md:mb-0">
          <img src={ImageBackground} alt="Meeting scene" className="w-full h-full object-cover shadow-2xl rounded-lg border border-gray-300" />
        </div>

        <div className="flex flex-col items-left justify-center text-left px-0 md:p-6">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">COMO - JSI U NÁS POPRVÉ?</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Výběr tarifu</h1>
          <p className="text-gray-700 leading-relaxed">
            Zde najdete tipy, pravidla, které respektujeme v COMO.
          </p>
          <button 
            className="bg-[#008DD2] hover:bg-[#2d547d] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out w-2/3 mt-6"
            style={buttonStyle}
            onClick={navigate}
          >
            Více informací zde
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;