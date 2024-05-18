"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ImageBackground: string = "/img/home/Group-17.png";

const AboutUs: React.FC = () => {
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
    <section id="hero" className="relative flex flex-col sm:flex-row-reverse items-center text-left min-h-[30vh] w-full mt-[150px]">
      <div className="container hero-container flex flex-col sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image 
              src={ImageBackground} 
              alt="Team working" 
              className="rounded-lg shadow-lg w-full" 
              width={1000} 
              height={400} 
            />
          </div>
          <div className="w-full md:w-1/2 md:pr-8">
            <h1 className="text-3xl text-black mb-4 leading-none font-bold lg:text-5xl xl:text-6xl 2xl:text-8xl">
              JSME MOST PRO
              <br />
              BUDOUCNOST
            </h1>
            <p className="text-sm text-[#4A4A4A] leading-relaxed lg:text-base font-500 xl:text-lg 2xl:text-xl 2xl:leading-relaxed 4xl:text-2xl mb-4">
              Coworkingové centrum (COMO) v srdci Mostu nabízí nejen flexibilní a vybavené prostory na práci pro freelancery, firmy a týmová setkání, ale také komunitu, která si navzájem pomáhá a profesionální vzdělání zdarma.
            </p>
            <button
              className="px-4 py-2 border-2 border-[#008DD2] text-[#008DD2] rounded-md hover:text-white transition-colors duration-1000 w-[300px] ss:w-[200px] sm:w-[250px] md:w-[300px]"
              style={buttonStyle}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              onFocus={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
              onBlur={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              onClick={navigate}
            >
              VÍCE INFORMACÍ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
