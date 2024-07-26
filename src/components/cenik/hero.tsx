"use client"

import React from 'react';

const Hero: React.FC = () => {
  const ImageBackground: string = "/img/cenik/hero/DSC08111-jpg.webp";

  return (
    <section className="relative items-center text-left min-h-[30vh] w-full">
      <div className="container hero-container mx-auto w-full max-w-[1500px] 4k:max-w-[3000px] p-6 grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="mb-4 md:mb-0">
          <img src={ImageBackground} alt="Meeting scene" className="w-full h-full object-cover shadow-2xl rounded-lg border border-gray-300" />
        </div>
        <div className="flex flex-col items-start justify-center text-left px-0 xl:p-6">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">COMO - KOLIK TO U NÁS STOJÍ</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vstupní karty</h1>
          <p className="text-gray-700 leading-relaxed">
            Každý Člen Coworkingu Most (COMO) při podpisu smlouvy v Turistickém a informačním centru (TIC) obdrží oproti záloze 100 Kč identifikační kartu, dle zvoleného tarifu, která mu umožní vstup do COMO, odchod z COMO a identifikaci člena při využívání služeb tiskového centra. Identifikační karty, jejichž platnost vypršela či již nebudou využívány, mohou být vráceny v TIC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;