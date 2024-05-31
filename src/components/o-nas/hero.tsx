"use client";

import React from 'react';
import Image from 'next/image';

const ImageBackground: string = "/img/o-nas/DSC08010-jpg.webp";

const images = [
  { src: "/img/o-nas/DSC07927-jpg.webp", alt: "Description of image 1", width: 500, height: 500 },
  { src: "/img/o-nas/DSC08003-jpg.webp", alt: "Description of image 2", width: 500, height: 500 },
  { src: "/img/o-nas/DSC08010-jpg.webp", alt: "Description of image 3", width: 500, height: 500 },
  { src: "/img/o-nas/DSC08043-jpg.webp", alt: "Description of image 4", width: 500, height: 500 },
  { src: "/img/o-nas/DSC08058-jpg.webp", alt: "Description of image 5", width: 500, height: 500 },
  { src: "/img/o-nas/DSC08064-1-jpg.webp", alt: "Description of image 6", width: 500, height: 500 },
  { src: "/img/o-nas/NAD03285-jpg.webp", alt: "Description of image 7", width: 500, height: 500 },
  { src: "/img/o-nas/NAD03296-1-jpg.webp", alt: "Description of image 8", width: 500, height: 500 },
  { src: "/img/o-nas/NAD03299-jpg.webp", alt: "Description of image 9", width: 500, height: 500 },
];

const Hero: React.FC = () => {
  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: '600',
    transition: 'background-color 0.5s',
  };

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

        <div className="relative h-[450px] overflow-hidden rounded-lg mt-10">
          
          <img
            src={ImageBackground}
            alt="3D prohlídka on-line"
            className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1500 ease-in-out hover:scale-110"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center transition-all duration-1000 ease-out hover:bg-opacity-0">
            <h1 className="text-2xl font-bold mb-2">3D prohlídka on-line</h1> 
            <p className="mb-4">Prohlédněte si naše prostory z domova na vašich obrazovek</p>
            <a href="https://my.matterport.com/show/?m=bZjrr34KwKr" target="_blank" rel="noopener noreferrer">
                <button 
                  type="button" 
                  className="text-white hover:text-black border border-white hover:bg-white focus:outline-none focus:ring-white dark:border-white dark:hover:bg-white dark:focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                >
                    Klikni zde
                </button>
            </a>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-300 rounded-lg transform scale-95 hover:scale-100"
              />
            </div>
          ))}
        </div>

        <div className="bg-white p-6 mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Máte dotaz, nápad či připomínku? Napište nám!</h2>
          <form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Jméno" className="border-2 p-2 rounded-lg border-gray-300 focus:ring-0 focus:border-black focus:outline-none resize-none"/>
              <input type="text" placeholder="Příjmení" className="border-2 p-2 rounded-lg border-gray-300 focus:ring-0 focus:border-black focus:outline-none resize-none"/>
            </div>

            <input type="email" placeholder="Email" className="border-2 p-2 rounded-lg border-gray-300 w-full mb-4 focus:ring-0 focus:border-black focus:outline-none resize-none"/>

            <textarea placeholder="Vaše zpráva" className="border-2 p-2 rounded-lg border-gray-300 w-full mb-4 focus:ring-0 focus:border-black focus:outline-none resize-none" rows={5}></textarea>

            <div className="flex items-center">
              <label 
                htmlFor="consent" 
                className="text-xs sm:text-base 4xl:text-2xl bg-gray-300 bg-opacity-50 rounded-lg p-4">
                <input
                  type="checkbox"
                  id="consent"
                  className="mr-2"
                />
                Souhlasím se zpracováním osobních údajů v rozsahu <a href="https://www.coworking-most.cz/souhlas-s-zpracovanim-osobnich-udaju/" className="text-black underline">Zásad ochrany osobních údajů</a> Coworkingem Most (statutární město Most),
              </label>
            </div>
            
            <div className="flex justify-center mt-6">
              <button 
                className="
                  w-full
                  text-white bg-[#008DD2] hover:bg-[#2d547d] rounded-lg py-[20px]
                  4xl:py-[20px] 4xl:text-[1.5rem]
                  lg:py-[20px] lg:text-[1.2rem]
                  py-[20px] text-[1rem]
                  transition-colors duration-200 ease-in-out
                "
                style={buttonStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2d547d'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#008DD2'}
                onFocus={e => e.currentTarget.style.backgroundColor = '#2d547d'}
                onBlur={e => e.currentTarget.style.backgroundColor = '#008DD2'}
              >
                ODESLAT
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Hero;