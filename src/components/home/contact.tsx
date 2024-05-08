"use client"

import React from 'react';
import Image from 'next/image';

const backgroundImage: string = '/img/home/DSC08062-jpg.webp';
const key: string = '/img/home/door-key.png';
const plane: string = '/img/home/paper-plane.png';
const phone: string = '/img/home/telephone.png';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const buttonStyle: React.CSSProperties = {
    padding: '15px 28px',
    fontSize: '1rem',
    letterSpacing: '0.05em',
    fontWeight: '600',
    transition: 'background-color 0.5s',
  };

  return (
    <section
      id='contact'
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="relative flex items-center justify-center text-left min-h-[52vh] w-full p-5 bg-center bg-cover z-10 text-white"
    >
    <div style={{ 
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
          backgroundColor: '#353C73',
          opacity: 0.89,
          zIndex: -1
    }}></div>
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* Left Side */}
        <div className="w-full p-4 lg:w-1/2 mb-8 lg:mb-0 p-10">
          <h2 className="text-xl sm:text-4xl font-bold mb-6">
            Kontaktujte nás nebo přijďte náš navštívit.
          </h2>
          <p className="mb-6">
            Klientům s týdenním nebo měsíčním tarifem nabízíme přístup 24/7.
          </p>
          <p className="mb-6">
            Pro jednodenní vstupy se řiďte následující otevírací dobou.
          </p>
          <div className="flex flex-col items-center mb-8">
            <Image src={phone} alt="Phone" width={80} height={80} />
            <span>Telefon</span>
            <span>+420 734 393 753</span>
          </div>
          <div className="flex flex-col items-center mb-8">
            <Image src={plane} alt="E-mail" width={80} height={80} />
            <span>E-mail</span>
            <span>info@coworking-most.cz</span>
          </div>
          <div className="flex flex-col items-center mb-8">
            <Image src={key} alt="Open Hours" width={80} height={80} />
            <span>Otevírací doba</span>
            <span>Po – Pá 9:00 – 19:00</span>
            <span>Měsíční členství: 24/7</span>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="w-full lg:w-1/2 items-center">
          <div className="rounded-lg p-10">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg mb-2 text-white">Jméno a příjmení <span className='text-red-500'>*</span></label>
                <input type="text" id="name" className="text-black w-full p-4 rounded" placeholder="Vaše jméno a příjmení" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg mb-2 text-white">E-mail <span className='text-red-500'>*</span></label>
                <input type="email" id="email" className="text-black w-full p-4 rounded" placeholder="Vaše e-mailová adresa" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg mb-2 text-white">Zpráva <span className='text-red-500'>*</span></label>
                <textarea id="message" className="text-black w-full p-4 rounded" rows={5} placeholder="Vaše zpráva" required></textarea>
              </div>
              <div className="flex items-center mb-6">
                <label htmlFor="consent" className="text-white bg-white bg-opacity-50 rounded-lg p-4">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mr-2"
                  />
                  Souhlasím se zpracováním osobních údajů v rozsahu <a href="https://www.coworking-most.cz/souhlas-s-zpracovnim-osobnich-udaju/" className="text-black underline">Zásad ochrany osobních údajů</a> Coworkingem Most (statutární město Most),
                </label>
              </div>
              <button 
                className="bg-[#008DD2] text-white rounded-full mt-6 px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg leading-tight sm:leading-normal md:leading-relaxed transition-colors duration-500 hover:bg-[#2d547d] focus:bg-[#2d547d] mb-4 text-xs sm:mb-8"
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
      </div>
    </section>
  );
};

export default Contact;