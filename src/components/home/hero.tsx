"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ImageBackground: string = "/img/home/Group-17.png";

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
      <div className="container mx-auto w-full max-w-7xl p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="order-2 sm:order-1 w-full sm:w-1/2 p-4">
            <h1 className="text-3xl text-black mb-4 leading-none font-bold lg:text-5xl xl:text-6xl 2xl:text-8xl">
              JSME MOST PRO
              <br />
              BUDOUCNOST
            </h1>
            <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-[850px] lg:text-xl xl:text-2xl 2xl:text-4xl 2xl:leading-relaxed">
              Coworkingové centrum (COMO) v srdci Mostu nabízí nejen flexibilní a vybavené prostory na práci pro freelancery, firmy a týmová setkání, ale také komunitu, která si navzájem pomáhá a profesionální vzdělání zdarma.
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
              NEVÁHEJTE A PŘIDEJTE SE K NÁM
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
      </div>
    </section>
  );
};

export default Hero;