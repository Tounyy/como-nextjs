"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const router = useRouter();

  const ImageBackground: string = "/img/novacek/DSC08073-jpg.webp";

  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: 600,
    transition: 'background-color 0.5s'
  };

  const navigate = (): void => {
    router.push('/cenik');
  };

  return (
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left min-h-[30vh] w-full mt-[150px] 2xl:mt-[200px] s:mt-[130px]">
      <div className="container hero-container flex flex-col sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="flex-1 flex flex-col justify-center pl-12 pr-6">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">COMO - JSI U NÁS POPRVÉ?</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Výběr tarifu</h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Zde najdete tipy, pravidla, které respektujeme v COMO.
          </p>
          <button 
            className="bg-[#008DD2] hover:bg-[#2d547d] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out"
            style={buttonStyle}
            onClick={navigate}
          >
            Více informací zde
          </button>
        </div>

        <div className="flex-1">
          <img src={ImageBackground} alt="Meeting scene" className="w-full h-full object-cover shadow-2xl rounded-lg border border-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


