"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ImageBackground: string = "/img/home/DSC08064-1-jpg.webp";

const Hero: React.FC = () => {
  const router = useRouter();

  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: 600,
    transition: 'background-color 0.5s'
  };

  const navigate = (): void => {
    router.push('#card');
  };

  return (
    <section id="hero" className="relative flex flex-col sm:flex-row items-center text-left min-h-[30vh] w-full mt-[100px] sm:mt-[180px] xl:mt-[200px] 2xl:mt-[220px]">
      <div className="container hero-container flex flex-col sm:flex-row justify-between items-center mx-auto w-full max-w-[2000px] p-4">
        <div className="order-2 sm:order-1 w-full sm:w-1/2 p-4 max-w-[800px]">
          <h1 className="text-2xl text-black mb-4 leading-none font-bold lg:text-4xl xl:text-6xl 2xl:text-7xl">
            Jsem v COMO nový!
          </h1>
          <p className="text-2xl p-2 font-300 text-gray-500 text-left my-2 4xl:text-2xl">
            Vítejte v COMO! Ať už jste freelancer, start-up nebo hledáte inspirativní místo k práci, jste u nás doma. Zde najdete důležité informace pro váš pohodlný start.
          </p>
          <button 
            className="bg-[#008DD2] text-white rounded-full mt-6 px-10 py-5 text-sm md:px-12 md:py-6 md:text-lg lg:px-12 lg:py-7 lg:text-xl xl:px-20 xl:py-8 xl:text-2xl 2xl:px-14 2xl:py-9 2xl:text-3xl transition-colors duration-500 hover:bg-[#2d547d] focus:bg-[#2d547d] mb-4 text-xs sm:mb-8"
            style={buttonStyle}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
            onFocus={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
            onBlur={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
            onClick={navigate}
          >
            VÍCE INFORMACÍ
          </button>
        </div>
        <div className="order-1 sm:order-2 w-full sm:max-w-[50%] mb-10 sm:mb-0">
          <Image 
            src={ImageBackground} 
            alt="Coworking space" 
            width={1000} 
            height={400} 
            className="max-w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;