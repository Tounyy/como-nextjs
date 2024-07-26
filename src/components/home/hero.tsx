"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    transition: 'background-color 0.5s',
  };

  return (
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
      <div className="flex flex-wrap justify-center items-center max-w-[1500px] 4k:max-w-[3000px] mx-auto font-semibold p-6">

        <div className="relative rounded-xl overflow-hidden">
          <img src="../img/home/hero/Group 184.png" alt="Access Control" className="w-full h-full object-cover"/>

          <div className='absolute top-0 right-0 h-100 w-[650px] text-center text-white p-4 rounded-3xl'>
            <div className="px-4">

              <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="absolute right-4 top-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M4 6h16M4 12h16m-7 6h7" />  
                  </svg>
                </button>
              </div>

              <ul className={`flex justify-between items-center h-12 ${isOpen ? 'flex-col' : 'hidden'} lg:flex lg:flex-row lg:items-center`}>
                <li className="text-white hover:text-blue-600">
                  <Link href="/aktuality">AKTUALITY</Link>
                </li>
                <li className="text-white hover:text-blue-600">
                  <Link href="/cenik">CENÍK</Link>
                </li>
                <li className="text-white hover:text-blue-600">
                  <Link href="/pro-novacky">PRO NOVÁČKY</Link>
                </li>
                <li className="text-white hover:text-blue-600">
                  <Link href="/o-nas">O NÁS</Link>
                </li>
                <li className="text-white hover:text-blue-600">
                  <Link href="/contact">KONTAKTY</Link>
                </li>
              </ul>

            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-200 w- w-full text-center text-white p-12 xl:p-24">
            <div className="text-left text-6xl font-bold xl:text-7xl">
              <h2>JSME MOST</h2>
              <h2>PRO BUDOUCNOST</h2>
            </div>

            <p className="text-left font-SemiBold my-4">Nejen Coworkingové prostory pro Vaši práci.</p>

            <div className="flex justify-left">
              <button 
                className="
                  w-1/4 text-white bg-[#008DD2] hover:bg-[#2d547d] font-bold rounded-lg	
                  lg:mt-2 lg:py-[20px] lg:text-[1.2rem]
                  ss:mt-2 ss:py-[18px] ss:text-[1rem]
                  s:mt-2 s:py-[18px] s:text-[1rem]
                  mt-2 py-[20px] text-[1rem]
                  "
                style={buttonStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2d547d'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#008DD2'}
                onFocus={e => e.currentTarget.style.backgroundColor = '#2d547d'}
                onBlur={e => e.currentTarget.style.backgroundColor = '#008DD2'}
              >
                REZERVUJTE SI MÍSTO
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;