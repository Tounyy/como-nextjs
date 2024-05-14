"use client";

import React from 'react';
import Image from 'next/image';

const key: string = '/img/home/door-key.png';
const plane: string = '/img/home/paper-plane.png';
const phone: string = '/img/home/telephone.png';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const buttonStyle: React.CSSProperties = {
    fontSize: '1rem',
    letterSpacing: '0.05em',
    fontWeight: '600',
    transition: 'background-color 0.5s',
  };

  return (
    <section id="card" className="min-h-screen flex items-center justify-center p-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-2 shadow-md sm:rounded-lg border border-gray-300 sm:p-8">        
        {/* Left */}
        <div className="space-y-6 bg-[#353c73] p-8 rounded-lg shadow-xl text-white">
          <h2 className="text-xl font-bold mb-6 sm:text-2xl">
            Kontaktujte nás nebo přijďte nás navštívit.
          </h2>
          <p className="text-white mb-6 sm:text-sm">
            Klientům s týdenním nebo měsíčním tarifem nabízíme přístup 24/7.
          </p>
          <p className="text-white mb-6 sm:text-sm">
            Pro jednodenní vstupy se řiďte následující otevírací dobou.
          </p>

          {/* Phone */}
          <div className="bg-[#41487f] p-4 rounded-lg flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Image src={phone} alt="Phone" width={50} height={50} className="text-white" />
            <div className=''>
              <h3 className="text-white text-lg sm:text-base ">Telefon</h3>
              <p className="text-white text-sm sm:text-xs">+420 734 393 753</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#41487f] p-4 rounded-lg flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Image src={plane} alt="E-mail" width={50} height={50} className="text-white" />
            <div>
              <h3 className="text-white text-lg sm:text-base">E-mail</h3>
              <p className="text-white text-sm sm:text-xs">info@coworking-most.cz</p>
            </div>
          </div>

          {/* Otevírací doba */}
          <div className="bg-[#41487f] p-4 rounded-lg flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Image src={key} alt="Open Hours" width={50} height={50} className="text-white" />
            <div>
              <h3 className="text-white text-lg sm:text-base">Otevírací doba</h3>
              <p className="text-white text-sm sm:text-xs">Po – Pá 9:00 – 19:00</p>
              <p className="text-white text-sm sm:text-xs">Měsíční členství: 24/7</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white p-2 sm:p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[16px] font-bold text-gray-700 sm:text-sm">
                Jméno a příjmení <span className='text-red-500'>*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none"
                placeholder="Vaše jméno a příjmení"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[16px] font-bold text-gray-700 sm:text-sm">
                E-mail <span className='text-red-500'>*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none"
                placeholder="Vaše e-mailová adresa"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-[16px] font-bold text-gray-700 sm:text-sm">
                Zpráva <span className='text-red-500'>*</span>
              </label>
              <textarea 
                id="message" 
                className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black focus:outline-none resize-none"
                rows={5} 
                placeholder="Vaše zpráva" 
                required>
              </textarea>
            </div>

            <div className="flex items-center mb-6">
              <label htmlFor="consent" className="text-base sm:text-xs bg-gray-300 bg-opacity-50 rounded-lg p-4">
                <input
                  type="checkbox"
                  id="consent"
                  className="mr-2"
                />
                Souhlasím se zpracováním osobních údajů v rozsahu <a href="https://www.coworking-most.cz/souhlas-s-zpracovanim-osobnich-udaju/" className="text-black underline">Zásad ochrany osobních údajů</a> Coworkingem Most (statutární město Most),
              </label>
            </div>

            <button 
              className="bg-[#008DD2] text-white rounded-full mt-6 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg leading-tight sm:leading-normal sm:leading-relaxed transition-colors duration-500 hover:bg-[#2d547d] focus:bg-[#2d547d] mb-4 text-xs sm:mb-8"
              style={buttonStyle}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2d547d'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#008DD2'}
              onFocus={e => e.currentTarget.style.backgroundColor = '#2d547d'}
              onBlur={e => e.currentTarget.style.backgroundColor = '#008DD2'}
            >
              ODESLAT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;