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
    <section id="newcomer" style={{ backgroundImage: `url(${backgroundImage})` }} className="relative flex items-center justify-center text-left min-h-[50vh] w-full p-5 bg-center bg-cover z-10">
      <div style={{ 
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 55, 97, 0.65)',
        zIndex: -1
      }}></div>
      <div className="newcomer-container relative w-full max-w-[600px] flex flex-col justify-center items-start p-8 bg-white/95 backdrop-blur-lg shadow-lg rounded-lg">
        <h1 className="text-[#003761] text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight mb-4 font-bold">
          <strong>Jsem v COMO nový!</strong>
        </h1>
        <p className="text-gray-800 font-normal text-base lg:text-lg xl:text-xl mb-6">
          Vítejte v COMO! Ať už jste freelancer, start-up nebo hledáte inspirativní místo k práci, jste u nás doma. Zde najdete důležité informace pro váš pohodlný start.
        </p>
        <button 
          className="bg-[#008DD2] text-white py-3 px-6 rounded-lg text-sm lg:text-base uppercase tracking-wider transition-colors duration-300 hover:bg-[#0070a3] focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700"
          onClick={navigateTo}
        >
          VÍCE INFORMACÍ
        </button>
      </div>
    </section>
  );
};

export default Newcomer;