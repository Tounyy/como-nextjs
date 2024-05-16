"use client"

import React from 'react';
import Image from 'next/image';

const table = '/img/home/table.png';
const networking = '/img/home/networking.png';
const computer = '/img/home/3d-computer.png';

const WorkspaceFeatures = () => {
  return (
    <section className="bg-white py-10">
      <h1 className="text-center text-2xl text-black mb-10 leading-none font-bold s:text-3xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">Co vám nabízíme?</h1>
      <div className="container mx-auto px-4 max-w-[1500px] 7xl:max-w-[1700px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Blok 1 */}
          <div className="bg-white shadow-md sm:rounded-lg border border-gray-300 p-6 text-center flex flex-col items-center">
            <div className="w-20 h-20 mb-4 relative flex justify-center items-center 7xl:w-28 7xl:h-28 7xl:mb-6">
              <Image src={table} alt="Monitory na vybraných stolech" layout="fill" objectFit="contain" className='p-2'/>
            </div>
            <h2 className="text-2xl font-bold mb-2 4xl:text-4xl">Flexibilní pracovní prostory</h2>
            <p className="text-base p-2 font-bold text-gray-500 text-left my-2 4xl:text-2xl">Naše prostory jsou navrženy tak, aby podporovaly kreativitu a produktivitu. Čisté linie, pohodlné křesla a dostatek přirozeného světla vytvářejí ideální prostředí pro váš pracovní den.</p>
          </div>

          {/* Blok 2 */}
          <div className="bg-white shadow-md sm:rounded-lg border border-gray-300 p-6 text-center flex flex-col items-center">
            <div className="w-20 h-20 mb-4 relative flex justify-center items-center 7xl:w-28 7xl:h-28 7xl:mb-6">
              <Image src={computer} alt="Monitory na vybraných stolech" layout="fill" objectFit="contain" className='p-2'/>
            </div>
            <h2 className="text-2xl font-bold mb-2 4xl:text-4xl">Monitory na vybraných stolech</h2>
            <p className="text-base p-2 font-bold text-gray-500 text-left my-2 4xl:text-2xl">Rozumíme potřebě více obrazovek pro efektivní práci. Vybrané stoly v COMO jsou vybaveny kvalitními monitory, které můžete využívat pro svou práci, prezentace či týmové setkání.</p>
          </div>

          {/* Blok 3 */}
          <div className="bg-white shadow-md sm:rounded-lg border border-gray-300 p-6 text-center flex flex-col items-center">
            <div className="w-20 h-20 mb-4 relative flex justify-center items-center 7xl:w-28 7xl:h-28 7xl:mb-6">
              <Image src={networking} alt="Monitory na vybraných stolech" layout="fill" objectFit="contain" className='p-2'/>
            </div>
            <h2 className="text-2xl font-bold mb-2 4xl:text-4xl">Společenská a kolaborativní atmosféra</h2>
            <p className="text-base p-2 font-bold text-gray-500 text-left my-2 4xl:text-2xl">V COMO spojujeme profesionály z různých odvětví, podporujeme sdílení nápadů a budování síťových kontaktů. Staňte se součástí naší různorodé komunity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceFeatures;