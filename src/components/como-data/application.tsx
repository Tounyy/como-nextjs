'use client';

import React from 'react';
import Image from 'next/image';

const background = '/img/como-data/Desktop7.png';
const logocomo = '/img/como-data/como_data.png';

const ComoDataForm: React.FC = () => {
  return (
    <div 
      className="min-h-screen flex justify-center items-center p-4"
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-2xl" style={{ maxWidth: '800px' }}>
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Image src={logocomo} alt="COMO DATA" width={600} height={300}/>
          </div>

          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jméno a příjmení (povinné)" required />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email"></label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="Email (povinný)" required />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone"></label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="tel" placeholder="Tel. číslo (povinný)" required />
              </div>
            </div>

            <div className="flex mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" required />
                <span className="ml-2 text-sm text-gray-600">Souhlasím se zpracováním osobních údajů pro zpracování nezávazné přihlášky (statutární město Most)</span>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                POSLAT PŘIHLÁŠKU
              </button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              Po odeslání dostanete kopii vašich odpovědí na mail. Zkontrolujte prosím i váš spam.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComoDataForm;