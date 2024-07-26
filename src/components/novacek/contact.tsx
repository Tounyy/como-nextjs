"use client";

import React from 'react';

const Contact: React.FC = () => {
  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: '600',
    transition: 'background-color 0.5s',
  };

  return (
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
      <div className="flex flex-wrap max-w-[1500px] 4k:max-w-[3000px] mx-auto font-thin w-full p-6">
        <div className="w-full bg-white mx-auto">
          
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl text-center font-bold text-gray-800 mb-12">
            Máte nějaké dotazy? Chcete první vstup zdarma? Máte zájem o nájem? Napište nám.
          </h2>
        </div>


          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Jméno" className="border-2 p-2 rounded-lg border-gray-300 focus:ring-0 focus:border-black focus:outline-none resize-none"/>
              <input type="text" placeholder="Příjmení" className="border-2 p-2 rounded-lg border-gray-300 focus:ring-0 focus:border-black focus:outline-none resize-none"/>
            </div>

            <input type="email" placeholder="Email" className="border-2 p-2 rounded-lg border-gray-300 w-full mb-4 focus:ring-0 focus:border-black focus:outline-none resize-none"/>

            <textarea placeholder="Vaše zpráva" className="border-2 p-2 rounded-lg border-gray-300 w-full mb-4 focus:ring-0 focus:border-black focus:outline-none resize-none" rows={5}></textarea>

            <div className="flex items-center">
              <label 
                htmlFor="consent" 
                className="text-xs sm:text-base 4xl:text-2xl bg-gray-300 bg-opacity-50 rounded-lg p-4 w-full">
                <input
                  type="checkbox"
                  id="consent"
                  className="mr-2"
                />
                Souhlasím se zpracováním osobních údajů v rozsahu <a href="https://www.coworking-most.cz/souhlas-s-zpracovanim-osobnich-udaju/" className="text-black underline">Zásad ochrany osobních údajů</a> Coworkingem Most (statutární město Most),
              </label>
            </div>
            
            <div className="flex justify-center mt-6">
              <button 
                className="
                  w-full
                  text-white bg-[#008DD2] hover:bg-[#2d547d] rounded-lg py-[20px]
                  4xl:py-[20px] 4xl:text-[1.5rem]
                  lg:py-[20px] lg:text-[1.2rem]
                  py-[20px] text-[1rem]
                  transition-colors duration-200 ease-in-out
                "
                style={buttonStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2d547d'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#008DD2'}
                onFocus={e => e.currentTarget.style.backgroundColor = '#2d547d'}
                onBlur={e => e.currentTarget.style.backgroundColor = '#008DD2'}
              >
                POSLAT
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;