"use client";

import React from 'react';

const Contact: React.FC = () => {
  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: '600',
    transition: 'background-color 0.5s',
  };

  return (
    <section className="items-center text-left min-h-[30vh] w-full">
      <div className="container hero-container sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="bg-white p-6 mx-auto">
          <h2 className="text-4xl text-center font-bold mb-4 text-gray-800 py-10">Máte dotaz, nápad či připomínku? Napište nám!</h2>
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
                className="text-xs sm:text-base 4xl:text-2xl bg-gray-300 bg-opacity-50 rounded-lg p-4">
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
                ODESLAT
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;