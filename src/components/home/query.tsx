"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Query: React.FC = () => {
  const router = useRouter();

  const navigateToContact = (): void => {
    router.push('#contact');
  };

  return (
    <section id="query" className="flex justify-center items-center py-10 min-h py-[100px]">
      <div className="container mx-auto px-4" style={{ maxWidth: '1500px' }}>
        <div className="flex flex-wrap justify-center text-left">
          <div className="w-full md:w-1/3 p-2">
            <div className="mb-4">
              <p className="text-black font-bold text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg">
                Užívání sdílených kanceláří přináší mnoho předností.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-2">
            <div className='hero-1'>
              <p className="text-[#4A4A4A] font-bold text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg">
                Máte nějaké další dotazy? Jsme zde pro vás, abychom vám na vše odpověděli.
              </p>
              <button 
                className="bg-[#008DD2] text-white py-3 px-6 rounded-full text-xs mt-6 uppercase tracking-wider transition-colors duration-300 hover:bg-[#2d547d] focus:outline-none focus:ring focus:ring-blue-[#2d547d] active:bg-blue-[#2d547d]"
                onClick={navigateToContact}
              >
                KONTAKT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Query;