"use client"

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ImageBackground1: string = "/img/home/NAD04625-jpg.webp";
const ImageBackground2: string = "/img/home/NAD05131-1-jpg.webp";

const Banner: React.FC = () => {
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
    <section className="relative flex flex-col sm:flex-row items-center text-left min-h mt-[100px] w-full">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image 
              src={ImageBackground1} 
              alt="Team working" 
              className="w-full max-w-xs rounded-lg"
              width={500}
              height={200}
            />
            <Image 
              src={ImageBackground2} 
              alt="Team working" 
              className="w-full max-w-xs rounded-lg"
              width={500}
              height={200}
            />
          </div>

          <div className="flex flex-col items-left justify-left text-left w-full md:w-1/2 p-4">
            <h1 className="text-3xl text-[#028dd3] mb-2 leading-none font-bold lg:text-5xl xl:text-5xl">
              Naučte se naprogramovat 
              <br/>
              vlastní aplikaci za 6 dní.
            </h1>
            <p className="text-sm text-[#4A4A4A] leading-relaxed lg:text-base font-500 xl:text-lg 2xl:text-xl 2xl:leading-relaxed 4xl:text-2xl mb-4">
              Připojte se k nám a začněte kariéru programátora, která je v současné době jedna z nejlépe ohodnocených prací
            </p>
            <button 
              className="bg-[#008DD2] text-white rounded-lg mt-6 px-8 py-5 text-sm md:px-12 md:py-6 md:text-lg lg:px-12 lg:py-7 lg:text-xl xl:px-20 xl:py-8 xl:text-2xl 2xl:px-14 2xl:py-6 2xl:text-3xl transition-colors duration-500 hover:bg-[#2d547d] focus:bg-[#2d547d] mb-4 text-xs sm:mb-8"
              style={buttonStyle}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
              onFocus={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
              onBlur={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
              onClick={navigate}
            >
              PŘIHLÁSIT SE NA KURZ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
