"use client"

import React from 'react';

const Hero: React.FC = () => {
  const ImageBackground: string = "/img/cenik/DSC08111-jpg.webp";

  return (
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left min-h-[30vh] w-full mt-[150px] 2xl:mt-[200px] s:mt-[130px]">
      <div className="container hero-container flex flex-col sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src={ImageBackground} alt="Meeting scene" className="w-full h-full object-cover shadow-2xl rounded-lg border border-gray-300" />
          </div>
          <div className="flex flex-col items-left justify-left text-left w-full md:w-1/2 p-4">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">COMO - KOLIK TO U NÁS STOJÍ</h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Vstupní karty</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              Každý Člen Coworkingu Most (COMO) při podpisu smlouvy v Turistickém a informačním centru (TIC) obdrží oproti záloze 100 Kč identifikační kartu, dle zvoleného tarifu, která mu umožní vstup do COMO, odchod z COMO a identifikaci člena při využívání služeb tiskového centra. Identifikační karty, jejichž platnost vypršela či již nebudou využívány, mohou být vráceny v TIC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;