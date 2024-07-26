"use client";

import React from 'react';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    transition: 'background-color 0.5s',
  };

  return (
    <section className="min-h flex items-center justify-center">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white my-8 p-6 mx-auto max-w-[1500px] 4k:max-w-[3000px] sss:border sss:border-gray-300">
        
        <div className="bg-gray-100 p-2 p-8 rounded-lg border border-300 sm:p-8">
          <form>

            <div>
              <img src="../img/logo.svg" alt="Logo" className="text-white w-auto h-[60px] mb-4" />

              <h2 className="text-2xl mb-4 leading-none font-bold s:text-2xl md:text-3xl 3xl:text-5xl">
                Kontaktujte nás nebo přijďte nás navštívit.
              </h2>

              <p className="text-sm font-100 text-gray-500">
                Klientům s týdenním nebo měsíčním tarifem nabízíme přístup 24/7.
              </p>

              <p className="text-sm font-100 text-gray-500">
                Pro jednodenní vstupy se řiďte následující otevírací dobou.
              </p>
            </div>

            <div className='space-y-8 mt-8'>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label htmlFor="email" className="block text-[16px] font-bold text-gray-700 sm:text-base 4xl:text-3xl">
                    Jméno <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="mt-2 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none 4xl:text-2xl bg-gray-100"
                    placeholder="Vaše jméno"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[16px] font-bold text-gray-700 sm:text-base 4xl:text-3xl">
                    Příjmení <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                  className="mt-2 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none 4xl:text-2xl bg-gray-100"
                    placeholder="Vaše příjmení"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[16px] font-bold text-gray-700 sm:text-base 4xl:text-3xl">
                  E-mail <span className='text-red-500'>*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-2 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none 4xl:text-2xl bg-gray-100"
                  placeholder="Vaše e-mailová adresa"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[16px] font-bold text-gray-700 sm:text-base 4xl:text-3xl">
                  Zpráva <span className='text-red-500'>*</span>
                </label>
                <textarea 
                  id="message" 
                  className="mt-2 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none resize-none 4xl:text-2xl bg-gray-100"
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
                    w-full text-white bg-[#008DD2] hover:bg-[#2d547d] font-bold rounded-lg	
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
                  ODESLAT
                </button>
              </div>

            </div>

          </form>
        </div>

        <div className="relative bg-black text-white rounded-lg shadow-xl overflow-hidden">
          <img src="../img/home/contact/DSC08111-jpg.webp" alt="Access Control" className="w-full h-full object-cover" style={{ opacity: 0.5 }}/>
        </div>

      </div>
    </section>
  );
};

export default Contact;