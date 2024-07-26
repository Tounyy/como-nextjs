"use client";

import React from 'react';
import Image from 'next/image';

const ComoKonzultace = () => {
  return (
    <section className="items-center text-left min-h-[30vh] w-full">
      <div className="container hero-container sm:flex-row justify-between items-center mx-auto w-full max-w-[1500px] 4k:max-w-[3000px] p-6">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div className="mb-4 md:mb-0 order-2 lg:order-2">
              <Image
                src="/img/aktuality/como-konzultace/DSC08052-jpg.webp"
                alt="Workshop session"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="flex flex-col items-start justify-center text-left order-1 lg:order-1">
              <img src="img/aktuality/como-konzultace/projectkonzultaceb.png" className="my-6"/>

              <p className="text-lg text-gray-600 mb-4">
                Každý z nás bude mít chvilky pochybnosti, nejasnosti a tato chvilka nám může bránit v posunu našeho projektu. Může to být problém s business plánem, s finančním plánem ale také jednoduše zaměstnanecký problém. 
              </p>

              <p className="text-lg text-gray-600 mb-4">
                COMO s CzechInvest a ICUK nabízí konzultační hodiny, při kterých se pokusíme spolu zaměřit na pochybnosti a nejasnosti. Neváhejte a využijte možnosti.
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-start space-y-8 sm:space-y-0 sm:space-x-8">
                <a href="https://icuk.cz/" target="_blank" rel="noopener noreferrer">
                  <img src="img/aktuality/como-konzultace/ICUK_logo_Oficial_cerna_1_PRUH_103.svg" alt="ICUK Logo" className="h-12 filter grayscale" />
                </a>
                <a href="https://www.czechinvest.org/CMSMessages/Error.aspx?aspxerrorpath=/CMSPages/blank.aspx" target="_blank" rel="noopener noreferrer">
                  <img src="img/aktuality/como-konzultace/logo.svg" alt="CzechInvest Logo" className="h-12" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ComoKonzultace;