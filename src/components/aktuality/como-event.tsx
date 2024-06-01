"use client";

import React from 'react';
import Image from 'next/image';

const ComoEvent = () => {
  return (
    <section className="items-center text-left min-h-[30vh] w-full">
      <div className="container hero-container sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="img/aktuality/projecteventb.png" className="my-6"/>
              <p className="text-lg text-gray-600 mb-4">
                V COMO chceme propojovat nejen začínající podniky s leadery v oboru, ale také potencionální spolupracovníky mezi sebou. Věříme, že na Mostecku je mnoho talentovaných a šikovných lidí, kteří potřebují prostor pro nejen svojí práci, ale i na seznámení a spolupráci.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Připojte se k naší komunitě a vybudujme na Mostecku síť profesionálů a nadšenců, kteří spolu tvoří lepší život v Mostě. 
              </p>
            </div>
            <div>
              <Image
                src="/img/aktuality/DSC08010-jpg.webp"
                alt="Workshop session"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-[#028ed2] h-[2px] max-w-[2000px] my-4"></div>
      </div>
    </section>
  );
};

export default ComoEvent;