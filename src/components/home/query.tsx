"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Query: React.FC = () => {
  const router = useRouter();

  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: 600,
    transition: 'background-color 0.5s'
  };

  const navigateToContact = (): void => {
    router.push('#contact');
  };

  return (
    <section id="query" className="flex justify-center items-center py-10 min-h py-[100px]">
      <div className="container mx-auto px-4 max-w-[1500px] 4xl:max-w-[2000px]">
        <div className="flex flex-wrap justify-center text-left">
          <div className="w-full md:w-1/3 p-2">
            <div className="mb-4">
              <p className="text-sm text-[#4A4A4A] font-bold leading-relaxed lg:text-base xl:text-lg 2xl:text-xl 2xl:leading-relaxed 4xl:text-3xl">
                Užívání sdílených kanceláří přináší mnoho předností.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-2">
            <div className='hero-1'>
              <p className="text-sm text-[#4A4A4A] font-bold leading-relaxed lg:text-base xl:text-lg 2xl:text-xl 2xl:leading-relaxed 4xl:text-3xl mb-4">
                Máte nějaké další dotazy? Jsme zde pro vás, abychom vám na vše odpověděli.
              </p>
              <button 
                className="hidden ss:block text-white bg-[#008DD2] hover:bg-[#2d547d] rounded-lg	
                  7xl:mt-6 7xl:py-[16px] 7xl:px-[90px] 7xl:text-[30px]
                  lg:mt-6 lg:py-[16px] lg:px-[80px] lg:text-[20px]
                  sm:mt-6 sm:py-[16px] sm:px-[50px] sm:text-[15px]
                  s:mt-6 s:py-[16px] s:px-[40px] s:text-[12px]"
                style={buttonStyle}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
                onFocus={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
                onBlur={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
              >
                KONTAKT
              </button>
            </div>
          </div>
          <button 
            className="ss:hidden px-4 py-2 border-2 border-[#008DD2] text-white rounded-lg transition-colors duration-500 hover:bg-[#2d547d] focus:bg-[#2d547d] w-[300px] ss:w-[200px] sm:w-[250px] md:w-[300px]"
            style={buttonStyle}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
            onFocus={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
            onBlur={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
            onClick={navigateToContact}
          >
            KONTAKT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Query;