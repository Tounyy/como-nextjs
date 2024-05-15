"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ImageBackground: string = "/img/home/Group-17.png";

const Hero: React.FC = () => {
  const router = useRouter();

  const buttonStyle: React.CSSProperties = {
    padding: '15px 28px',
    fontSize: '1.4rem',
    letterSpacing: '0.05em',
    fontWeight: 600,
    transition: 'background-color 0.5s'
  };

  const navigate = (): void => {
    router.push('#card');
  };

  return (
    <section id="hero" className="relative flex flex-col sm:flex-row items-center text-left min-h-[30vh] w-full mt-[150px]">
      <div className="container hero-container flex flex-col sm:flex-row justify-between items-center mx-auto w-full max-w-[1100px] p-4">
        <div className="order-2 sm:order-1 w-full sm:w-1/2 p-4">
          <h1 className="text-3xl text-black mb-4 leading-none font-bold">
            JSME MOST PRO
            <br />
            BUDOUCNOST
          </h1>
          <p className="text-lg text-[#4A4A4A] leading-6 max-w-[600px]">
            Coworkingové centrum (COMO) v srdci Mostu nabízí nejen flexibilní a vybavené prostory na práci pro freelancery, firmy a týmová setkání, ale také komunitu, která si navzájem pomáhá a profesionální vzdělání zdarma.
          </p>
          <button 
            className="bg-[#008DD2] text-white rounded-full mt-6 px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg leading-tight sm:leading-normal md:leading-relaxed transition-colors duration-500 hover:bg-[#2d547d] focus:bg-[#2d547d] mb-4 text-xs sm:mb-8"
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
    </section>
  );
};

export default Hero;