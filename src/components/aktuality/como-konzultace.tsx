"use client";

import React from 'react';
import Image from 'next/image';

const ComoKonzultace = () => {
  return (
    <section className="items-center text-left min-h-[30vh] w-full">
      <div className="container hero-container sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="img/aktuality/projectkonzultaceb.png" className="my-6"/>
              <p className="text-lg text-gray-600 mb-4">
                Každý z nás bude mít chvilky pochybnosti, nejasnosti a tato chvilka nám může bránit v posunu našeho projektu. Může to být problém s business plánem, s finančním plánem ale také jednoduše zaměstnanecký problém. 
              </p>
              <p className="text-lg text-gray-600 mb-4">
                COMO s CzechInvest a ICUK nabízí konzultační hodiny, při kterých se pokusíme spolu zaměřit na pochybnosti a nejasnosti. Neváhejte a využijte možnosti.
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-start space-y-8 sm:space-y-0 sm:space-x-8 mt-4">
                <a href="https://icuk.cz/" target="_blank" rel="noopener noreferrer">
                  <img src="img/aktuality/ICUK_logo_Oficial_cerna_1_PRUH_103.svg" alt="ICUK Logo" className="h-12 filter grayscale" />
                </a>
                <a href="https://www.czechinvest.org/CMSMessages/Error.aspx?aspxerrorpath=/CMSPages/blank.aspx" target="_blank" rel="noopener noreferrer">
                  <img src="img/aktuality/logo.svg" alt="CzechInvest Logo" className="h-12" />
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/img/aktuality/DSC08052-jpg.webp"
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

export default ComoKonzultace;