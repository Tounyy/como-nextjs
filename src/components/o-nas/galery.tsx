"use client";

import React from 'react';
import Image from 'next/image';

const images = [
  { src: "/img/o-nas/galery/DSC07927-jpg.webp", alt: "Description of image 1", width: 500, height: 500 },
  { src: "/img/o-nas/galery/DSC08003-jpg.webp", alt: "Description of image 2", width: 500, height: 500 },
  { src: "/img/o-nas/galery/DSC08010-jpg.webp", alt: "Description of image 3", width: 500, height: 500 },
  { src: "/img/o-nas/galery/DSC08043-jpg.webp", alt: "Description of image 4", width: 500, height: 500 },
  { src: "/img/o-nas/galery/DSC08058-jpg.webp", alt: "Description of image 5", width: 500, height: 500 },
  { src: "/img/o-nas/galery/DSC08064-1-jpg.webp", alt: "Description of image 6", width: 500, height: 500 },
  { src: "/img/o-nas/galery/NAD03285-jpg.webp", alt: "Description of image 7", width: 500, height: 500 },
  { src: "/img/o-nas/galery/NAD03296-1-jpg.webp", alt: "Description of image 8", width: 500, height: 500 },
  { src: "/img/o-nas/galery/NAD03299-jpg.webp", alt: "Description of image 9", width: 500, height: 500 },
];

const Galery: React.FC = () => {

  return (
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
      <div className="container hero-container sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 4k:max-w-[3000px] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-300 rounded-lg transform scale-100 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galery;