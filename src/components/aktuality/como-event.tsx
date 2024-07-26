"use client";

import React from 'react';
import Image from 'next/image';

const ComoEvent = () => {
  return (
    <section className="items-center text-left min-h-[30vh] w-full">
      <div className="container hero-container sm:flex-row justify-between items-center mx-auto w-full max-w-[1500px] 4k:max-w-[3000px] p-6">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">

            <div className="mb-4 md:mb-0 order-2 lg:order-2">
              <Image
                src="/img/aktuality/como-event/DSC08010-jpg.webp"
                alt="Workshop session"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          
            <div className="flex flex-col items-start justify-center text-left order-1 lg:order-2">
              <img src="img/aktuality/como-event/projecteventb.png" className="my-6"/>
              
              <p className="text-lg text-gray-600 mb-4">
                V COMO chceme propojovat nejen začínající podniky s leadery v oboru, ale také potencionální spolupracovníky mezi sebou. Věříme, že na Mostecku je mnoho talentovaných a šikovných lidí, kteří potřebují prostor pro nejen svojí práci, ale i na seznámení a spolupráci.
              </p>
              
              <p className="text-lg text-gray-600 mb-4">
                Připojte se k naší komunitě a vybudujme na Mostecku síť profesionálů a nadšenců, kteří spolu tvoří lepší život v Mostě. 
              </p>
            </div>

          </div>
        
        </div>
      </div>
    </section>
  );
};

export default ComoEvent;