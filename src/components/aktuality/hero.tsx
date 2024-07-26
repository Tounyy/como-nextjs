"use client"

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const ImageBackground: string = "/img/aktuality/hero/DSC07970-jpg.webp";

  return (
    <section className="items-center text-left min-h-[30vh] w-full">
      <div className="container hero-container sm:flex-row justify-between items-center mx-auto w-full max-w-[1500px] 4k:max-w-[3000px] p-6">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
            
            <div className="mb-4 md:mb-0 order-1 lg:order-2">
              <Image
                src={ImageBackground}
                alt="Workshop session"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="flex flex-col items-start justify-center text-left order-2 lg:order-1">
              <h2 className="text-lg font-semibold text-gray-600 mb-2">COMO - KOLIK TO U NÁS STOJÍ</h2>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Vstupní karty</h1>
              <p className="text-gray-700 leading-relaxed">
                Každý Člen Coworkingu Most (COMO) při podpisu smlouvy v Turistickém a informačním centru (TIC) obdrží oproti záloze 100 Kč identifikační kartu, dle zvoleného tarifu, která mu umožní vstup do COMO, odchod z COMO a identifikaci člena při využívání služeb tiskového centra. Identifikační karty, jejichž platnost vypršela či již nebudou využívány, mohou být vráceny v TIC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;