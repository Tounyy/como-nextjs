"use client";

import React from 'react';

const ImageBackground: string = "/img/o-nas/banner/DSC08010-jpg.webp";

const Banner: React.FC = () => {

  return (
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
      <div className="container hero-container sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 4k:max-w-[3000px] mx-auto p-6">
        <div className="relative h-[450px] overflow-hidden rounded-lg ">
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
      </div>
    </section>
  );
};

export default Banner;