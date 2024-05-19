"use client";

import React from 'react';
import Image from 'next/image';

const key: string = '/img/home/door-key.png';
const plane: string = '/img/home/paper-plane.png';
const phone: string = '/img/home/telephone.png';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: '600',
    transition: 'background-color 0.5s',
  };

  return (
    <section className="min-h flex items-center justify-center p-4">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-2 shadow-md sm:rounded-lg border border-gray-300 sm:p-8 min-h-[30vh] max-w-[1200px] mx-auto 4xl:max-w-[1500px] 4xl:min-h-[50vh] 3xl:max-w-[1500px] 3xl:min-h-[30vh]">
        {/* Left */}
        <div className="space-y-6 bg-[#353c73] p-8 rounded-lg shadow-xl text-white">
          <h2 className="text-2xl text-white mb-10 leading-none font-bold s:text-2xl md:text-3xl 3xl:text-5xl">
            Kontaktujte nás nebo přijďte nás navštívit.
          </h2>
          <p className="text-base font-400 mb-6 4xl:text-2xl">
            Klientům s týdenním nebo měsíčním tarifem nabízíme přístup 24/7.
          </p>
          <p className="text-base font-400 mb-6 4xl:text-2xl">
            Pro jednodenní vstupy se řiďte následující otevírací dobou.
          </p>

          {/* Phone */}
          <div className="bg-[#41487f] p-4 rounded-lg flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Image src={phone} alt="Phone" width={50} height={50} className="text-white 4xl:w-[80px] 4xl:h-[80px]" />
            <div className=''>
              <h3 className="text-white text-lg sm:text-base 4xl:text-2xl">Telefon</h3>
              <p className="text-base font-500 4xl:text-xl">+420 734 393 753</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#41487f] p-4 rounded-lg flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Image src={plane} alt="E-mail" width={50} height={50} className="text-white 4xl:w-[80px] 4xl:h-[80px]" />
            <div>
              <h3 className="text-white text-lg sm:text-base 4xl:text-2xl">E-mail</h3>
              <p className="text-base font-500 4xl:text-xl">info@coworking-most.cz</p>
            </div>
          </div>

          {/* Otevírací doba */}
          <div className="bg-[#41487f] p-4 rounded-lg flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Image src={key} alt="Open Hours" width={50} height={50} className="text-white 4xl:w-[80px] 4xl:h-[80px]" />
            <div>
              <h3 className="text-white text-lg sm:text-base 4xl:text-2xl">Otevírací doba</h3>
              <p className="text-base font-500 4xl:text-xl">Po – Pá 9:00 – 19:00</p>
              <p className="text-base font-500 4xl:text-xl">Měsíční členství: 24/7</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white p-2 sm:p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[16px] font-bold text-gray-700 sm:text-base 4xl:text-3xl">
                Jméno a příjmení <span className='text-red-500'>*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                className="mt-2 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none 4xl:text-2xl"
                placeholder="Vaše jméno a příjmení"
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
    </section>
  );
};

export default Contact;