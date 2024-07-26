"use client"

import React from 'react';

interface PlanFeature {
  feature: string;
}

interface Plan {
  name: string;
  time: string;
  details: string;
  price: string;
  features: PlanFeature[];
  excludedFeatures?: PlanFeature[];
  bestDeal?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Základní',
    details: 'Bez kompromisů',
    price: '1690 Kč',
    time: 'za 1 měsíc',
    features: [
      { feature: '24/7' },
      { feature: 'Kávovar' },
      { feature: 'Skvělé zázemí' },
      { feature: '8 hod. Zasedací místnost' },
      { feature: 'Uzamykatelná skříň' },
    ],
    excludedFeatures: [
      { feature: '10 míst k sezení' },
      { feature: 'Interaktivní tabule' },
    ],
  },

  {
    name: 'Inkubační',
    details: 'Pro inkubaci vašich nápadů',
    price: '500 Kč',
    time: 'za 1 měsíc',
    features: [
      { feature: '24/7' },
      { feature: 'Kávovar' },
      { feature: 'Skvělé zázemí' },
      { feature: '2 hod. Zasedací místnost' },
      { feature: 'Uzamykatelná skříň' },
    ],
    excludedFeatures: [
      { feature: '10 míst k sezení' },
      { feature: 'Interaktivní tabule' },
    ],
  },
];

const MonthTariff: React.FC = () => {

  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    transition: 'background-color 0.5s',
  };

  return (
    <div className="flex flex-wrap justify-center items-center max-w-[1500px] 4k:max-w-[3000px] mx-auto font-semibold px-6">
      
      <div className="w-full flex relative grid lg:grid-cols-1 sm:grid-cols-1">

        <div className="w-full flex justify-center relative">
          <h2 className="text-gray-800 text-4xl font-bold py-6">Měsíční tarify</h2>
        </div>

        <ul className='px-0 lg:px-20 mt-6'>
            <p className='font-thin'><span className='font-bold'> - </span>
              Měsíční tarify se uzavírají na dobu minimálně 1 měsíce. V rámci tohoto tarifu má Člen přístup do COMO 24 hodin denně a možnost využívat zasedací místnost v rozsahu 9 hodin/měsíc.
            </p>
            <p className='font-thin'><span className='font-bold'> - </span>
              Každý Člen COMO měsíčního tarifu má možnost využít uzamykatelnou skříňku, možnost přednostní registrace na všech pořádaných akcích v rámci COMO a poradentství v rozsahu konzultačních hodin COMO (nutno rezervovat předem).
            </p>
            <p className='font-thin'><span className='font-bold'> - </span>
              Přístup: Neomezeně (s již přidělenou identifikační kartou, jinak dle provozní doby TIC)
            </p>
            <p className='font-thin'><span className='font-bold'> - </span>
              K dispozici máte i WiFi a tiskové centrum
            </p>
        </ul>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-6 w-full">
        {plans.map((plan) => (
          <div key={plan.name} className="border border-black rounded-lg overflow-hidden">

            <div className='bg-[#008DD2] p-6 py-10'>
              <h3 className="text-white text-xl md:text-2xl text-center font-semibold">{plan.name}</h3>      
              <p className="text-sm text-white text-center">{plan.time}</p>
            </div>

            <div className='p-6'>
              <div className="mt-0">
                <h3 className="text-black text-3xl font-semibold text-center">{plan.price}</h3>
                <p className="text-sm text-[#555555] text-center">{plan.details}</p>
              </div>
              
              <div className="mt-6">

                <ul className="mt-6 space-y-4">
                  {plan.features.map((item) => (
                    <li key={item.feature} className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-3 fill-green-500" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                      </svg>
                      {item.feature}
                    </li>
                  ))}

                  {plan.excludedFeatures && plan.excludedFeatures.map((item) => (
                    <li key={item.feature} className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-3 fill-red-500" viewBox="0 0 24 24">
                        <path d="M19.5 6.5a1.5 1.5 0 00-2.12 0L12 11.88 6.62 6.5A1.5 1.5 0 104.5 8.62L9.88 14 4.5 19.38a1.5 1.5 0 102.12 2.12L12 16.12l5.38 5.38a1.5 1.5 0 102.12-2.12L14.12 14l5.38-5.38a1.5 1.5 0 000-2.12z"/>
                      </svg>
                      {item.feature}
                    </li>
                  ))}

                </ul>

                <div className="flex justify-center">
                  <button 
                    className="mt-6 w-full h-12 text-white bg-[#008DD2] hover:bg-[#2d547d] font-bold rounded-lg"
                    style={buttonStyle}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2d547d'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#008DD2'}
                    onFocus={e => e.currentTarget.style.backgroundColor = '#2d547d'}
                    onBlur={e => e.currentTarget.style.backgroundColor = '#008DD2'}
                  >
                    Získejte ho zde
                  </button>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default MonthTariff;