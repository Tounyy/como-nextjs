"use client";

import React from 'react';
import Image from 'next/image';

const Workshop = () => {
  return (
    <section className="items-center text-left min-h-[30vh] w-full">
      <div className="container hero-container sm:flex-row justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/img/aktuality/DSC07927-jpg.webp"
                alt="Workshop session"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg shadow-lg my-6"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-4">
                Jak na business plán, jak si pochytit finance, jak na vytvoření živnosti či jaké formy zaměstnání existují. 
                Krátké, jednodenní workshopy Vám pomůžou se zorientovat rychle ve světě podnikání, aby jste se neztratili a zároveň potkali další, kteří by rádi podnikali.
              </p>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Mezi pořádanými workshopy najdete:</h2>
              <ul className="list-disc pl-5 text-[14px] space-y-1 mt-4">
                <li><strong>•</strong> Jak na business plán</li>
                <li><strong>•</strong> Jak si nastavit prvotní finanční plán</li>
                <li><strong>•</strong> Jak odměnit své pracovníky – forma, daně</li>
                <li><strong>•</strong> Jak na prezentaci neboli pitch deck</li>
                <li><strong>•</strong> a mnoho dalších</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#028ed2] h-[2px] max-w-[2000px] my-4"></div>
      </div>
    </section>
  );
};

export default Workshop;
