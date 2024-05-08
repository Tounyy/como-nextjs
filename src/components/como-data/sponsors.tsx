'use client';

import React from 'react';
import Image from 'next/image';

const aktin = '/img/como-data/Aktin.png';
const cvut = '/img/como-data/logo_CVUT.jpg';
const uni_karlova = '/img/como-data/PR-56-version1-uk_uzitna_cz_barevna.png';
const kindle = '/img/como-data/Kindle.webp';
const most = '/img/como-data/most_logotyp_b_rgb-pro-obrazovku.svg';

const Sponsors: React.FC = () => {
  return (
    <div className="text-[#00000057] font-bold p-20">
      <h1 className="text-center text-lg md:text-2xl lg:text-3xl py-2">Ve spolupráci s absolventy a profesionály</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        <Image src={uni_karlova} alt="Sponsor 1" width={300} height={300} />
        <Image src={cvut} alt="Sponsor 2" width={300} height={300} />
        <Image src={aktin} alt="Sponsor 3" width={300} height={300} />
        <Image src={kindle} alt="Sponsor 4" width={300} height={300} />
      </div>
      <h1 className="text-center text-lg md:text-xl lg:text-2xl py-8">Kurz pro Vás zdarma zajistilo město</h1>
      <div className="flex justify-center">
        <Image src={most} alt="Most" width={300} height={300} />
      </div>
    </div>
  );
};

export default Sponsors;