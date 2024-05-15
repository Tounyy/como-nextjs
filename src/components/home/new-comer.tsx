"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AboutUs: React.FC = () => {
  const router = useRouter();
  const navigateTo = (): void => {
    router.push('https://www.coworking-most.cz/novacek/');
  };

  const [mainImage, setMainImage] = useState('/img/home/DSC08064-1-jpg.webp');
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/img/home/DSC08064-1-jpg.webp',
    '/img/home/DSC07970-jpg.webp',
    '/img/home/DSC08062-jpg.webp',
    '/img/home/DSC08064-1-jpg.webp',
    '/img/home/DSC07970-jpg.webp',
    '/img/home/DSC08062-jpg.webp',
    '/img/home/DSC08064-1-jpg.webp',
    '/img/home/DSC07970-jpg.webp',
  ];

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const start = currentIndex;
    const end = start + 4;
    const visibleImages = images.slice(start, end);

    if (visibleImages.length < 4) {
      return [...visibleImages, ...images.slice(0, 4 - visibleImages.length)];
    }

    return visibleImages;
  };

  return (
    <section id="newcomer" className="relative flex items-center justify-center text-left min-h w-full p-5 bg-center bg-cover z-10">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              src={mainImage}
              alt="Main"
              className="rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4"><strong>Jsem v COMO nový!</strong></h2>
            <p className="text-gray-700 mb-4">
              Vítejte v COMO! Ať už jste freelancer, start-up nebo hledáte inspirativní místo k práci, jste u nás doma. Zde najdete důležité informace pro váš pohodlný start.
            </p>
            <button 
              className="bg-[#008DD2] text-white py-3 px-6 rounded-[14px] text-sm lg:text-base uppercase tracking-wider transition-colors duration-300 hover:bg-[#0070a3] focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700"
              onClick={navigateTo}
            >
              VÍCE INFORMACÍ
            </button>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <button onClick={handlePrev} className="mr-4 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex justify-center space-x-4">
            {getVisibleImages().map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-1/6 rounded-lg shadow-md cursor-pointer transition-transform duration-300 transform hover:scale-105"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
          <button onClick={handleNext} className="ml-4 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
