"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const backgroundImage: string = '/img/home/DSC08064-1-jpg.webp'; 

const Newcomer: React.FC = () => {
  const router = useRouter();

  const navigateTo = (): void => {
    router.push('https://www.coworking-most.cz/novacek/');
  };

  return (
    <section id="newcomer" style={{ backgroundImage: `url(${backgroundImage})` }} className="relative flex items-center justify-center text-left min-h-[52vh] w-full p-5 bg-center bg-cover z-10">
      <div style={{ 
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        backgroundColor: '#003761',
        opacity: 0.7,
        zIndex: -1
      }}></div>
      <div className="newcomer-container mx-auto w-full max-w-[1100px] flex justify-between items-center p-4">
        <div className='hero-1'>
          <h1 className="text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl 3xl:text-6xl leading-tight mb-4 font-bold">
            <strong className="font-semibold">Jsem v COMO nový!</strong>
          </h1>
              
          <p className="text-white font-bold text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-xl">
            Vítejte v COMO! Ať už jste freelancer, start-up nebo hledáte inspirativní místo k práci, jste u nás doma. Zde najdete důležité informace pro váš pohodlný start.
          </p>
            
          <button 
            className="bg-[#008DD2] text-white py-3 px-6 rounded-full text-xs mt-6 uppercase tracking-wider transition-colors duration-300 hover:bg-[#2d547d] focus:outline-none focus:ring focus:ring-blue-[#2d547d] active:bg-blue-[#2d547d]"
            onClick={navigateTo}
          >
            VÍCE INFORMACÍ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newcomer;