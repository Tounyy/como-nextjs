"use client";

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="items-center text-left min-h-[30vh] w-full mt-[150px] 2xl:mt-[200px] s:mt-[130px]">
      <div className="container hero-container sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="mx-auto text-left">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">COMO - O NÁS</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Podporujeme aktivního ducha v Mostě</h1>
          <p className="text-xl font-semibold text-gray-900 mb-4">Tvoříme lepší Most pro budoucnost</p>
          <p className="text-gray-700 leading-relaxed">
            Statutární město Most zařadilo podporu Podnikání jako jednu ze svých strategických oblastí rozvoje. Mezi vybrané deklarované cíle patří rozvoj podnikání v kreativních odvětvích, odvětvích s vyšší přidanou hodnotou založenou především na inovacích. Hlavní podpora bude věnována kreativnímu průmyslu, energetice a informačním technologiím.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Proto jsme se rozhodli vybudovat sdílený kancelářský prostor <strong>COMO – Coworking Most</strong>, který jistě usnadní mnohým začínajícím podnikatelům start podnikání a vytvoří tolik potřebné technické zázemí.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;