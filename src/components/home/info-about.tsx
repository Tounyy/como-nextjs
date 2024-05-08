"use client"

import React from 'react';

const InfoAbout: React.FC = () => {
  return (
    <section className="bg-white py-10 min-h-[50vh]">
      <div className="container mx-auto p-4">
        <h1 className="mt-4 text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-gray-900 font-bold text-left max-w-2xl mx-auto">
          Důležité informace
        </h1>
        <p className="mt-4 text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg text-gray-600 font-bold text-left max-w-2xl mx-auto leading-4" style={{ color: "#4A4A4A"}}>
          Vážení návštěvníci a členové COMO, abyste mohli plně využívat našeho coworkingového prostoru a cítili se zde jako doma, 
          sestavili jsme pro vás přehled nejdůležitějších informací a pokynů. Ať už hledáte detaily o našich otevíracích hodinách, 
          technologickém vybavení nebo bezpečnostních protokolech, naleznete je zde přehledně a stručně.
        </p>
      </div>
    </section>
  );
};

export default InfoAbout;