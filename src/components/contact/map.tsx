"use client";

import React from 'react';

const ContactFormWithMap: React.FC = () => {
  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: '600',
    transition: 'background-color 0.5s',
  };

  return (
    <section className="items-center text-left min-h-[30vh] w-full mt-[150px] 2xl:mt-[200px] s:mt-[130px]">
      <h1 className="text-2xl text-black mb-10 leading-none font-bold s:text-3xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-center">Kontakt</h1>
      <div className="min-h flex items-center justify-center p-4">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-2 sm:p-8 min-h-[30vh] max-w-[1200px] mx-auto 4xl:max-w-[1500px] 4xl:min-h-[50vh] 3xl:max-w-[1500px] 3xl:min-h-[30vh] sss:shadow-md sss:rounded-lg sss:border sss:border-gray-300">
          {/* Left */}
          <div className="space-y-6 bg-[#353c73] p-8 rounded-lg shadow-xl text-white">
            <h2 className="text-2xl text-white mb-10 leading-none font-bold s:text-2xl md:text-3xl 3xl:text-5xl">
              Napište nám!
            </h2>
            <p className="text-base font-400 mb-6 4xl:text-2xl">
              Dotaz, přihlášku, připomínku, cokoliv. Napište nám a my se Vám budeme snažit odpovědět do 24h. 

            </p>
            <p className="text-base font-400 mb-6 4xl:text-2xl">
              COMO - NAPSAT NÁM NENÍ VŮBEC TĚŽKÉ
            </p>

            <div className="relative shadow-md rounded-lg border border-gray-300 overflow-hidden">
              <div className="w-full h-450">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1268.8331809643482!2d13.640568!3d50.503167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a211c6fa73d61%3A0x973f5a8fb7dfe3c1!2sCoworking%20Most!5e0!3m2!1sen!2sus!4v1717062884643!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="bg-white p-2 sm:p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[16px] font-bold text-gray-700 sm:text-base 4xl:text-3xl">
                  Jméno<span className='text-red-500'>*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-2 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none 4xl:text-2xl"
                  placeholder="Vaše jméno"
                />
              </div>

              <div>
                <label htmlFor="last_name" className="block text-[16px] font-bold text-gray-700 sm:text-base 4xl:text-3xl">
                  Příjmení<span className='text-red-500'>*</span>
                </label>
                <input 
                  type="text" 
                  id="last_name" 
                  className="mt-2 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none 4xl:text-2xl"
                  placeholder="Vaše Přijmení"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[16px] font-bold text-gray-700 sm:text-base 4xl:text-3xl">
                  E-mail <span className='text-red-500'>*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-2 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none 4xl:text-2xl"
                  placeholder="Vaše e-mailová adresa"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[16px] font-bold text-gray-700 sm:text-base 4xl:text-3xl">
                  Zpráva <span className='text-red-500'>*</span>
                </label>
                <textarea 
                  id="message" 
                  className="mt-2 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none resize-none 4xl:text-2xl"
                  rows={5} 
                  placeholder="Vaše zpráva" 
                  required>
                </textarea>
              </div>

              <div className="flex items-center mb-6">
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
              <div className="flex justify-center">
                <button 
                  className="
                    text-white bg-[#008DD2] hover:bg-[#2d547d] rounded-lg	
                    4xl:mt-6 4xl:py-[20px] 4xl:px-[240px] 4xl:text-[1.5rem]
                    lg:mt-6 lg:py-[20px] lg:px-[140px] lg:text-[1.2rem]
                    ss:mt-2 ss:py-[18px] ss:px-[60px] ss:text-[1rem]
                    s:mt-2 s:py-[18px] s:px-[60px] s:text-[1rem]
                    mt-6 py-[20px] px-[100px] text-[1rem]
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
      </div>
    </section>
  );
};

export default ContactFormWithMap;
