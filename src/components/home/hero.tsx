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
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left min-h-[30vh] w-full mt-[150px] 2xl:mt-[200px] s:mt-[130px]">
      <div className="container hero-container flex flex-col sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image 
              src={ImageBackground} 
              alt="Team working" 
              className="w-full" 
              width={1000} 
              height={400} 
            />
          </div>
          <div className="w-full md:w-1/2 md:pr-8">
            <h1 className="text-3xl text-black mb-4 leading-none font-bold lg:text-5xl xl:text-6xl 2xl:text-[5rem]">
              JSME MOST PRO
              <br />
              BUDOUCNOST
            </h1>
            <p className="text-sm text-[#4A4A4A] leading-relaxed lg:text-base font-500 xl:text-lg 2xl:text-xl 2xl:leading-relaxed 4xl:text-3xl mb-2">
              Coworkingové centrum (COMO) v srdci Mostu nabízí nejen flexibilní a vybavené prostory na práci pro freelancery, firmy a týmová setkání, ale také komunitu, která si navzájem pomáhá a profesionální vzdělání zdarma.
            </p>
            <button 
              className="bg-[#008DD2] text-white rounded-lg mt-6 px-10 py-5 text-sm md:px-12 md:py-6 md:text-lg lg:px-12 lg:py-7 lg:text-xl xl:px-20 xl:py-8 xl:text-2xl 2xl:px-14 2xl:py-9 2xl:text-3xl transition-colors duration-500 hover:bg-[#2d547d] focus:bg-[#2d547d] mb-4 text-xs sm:mb-2"
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
        </div>
      </div>
    </section>
  );
}

export default Hero;