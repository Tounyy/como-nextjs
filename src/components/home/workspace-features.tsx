"use client"

import React from 'react';
import Image from 'next/image';

const table: string = '/img/home/table.png';
const networking: string = '/img/home/networking.png';
const computer: string = '/img/home/3d-computer.png';

const WorkspaceFeatures: React.FC = () => {
  return (
    <section id="workspacefeatures" className="flex justify-center items-center py-10 min-h-[50vh]" style={{ backgroundColor: "#eaf4f4" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center gap-8">
          {/* Blok 1 */}
          <div className="w-full md:w-1/4">
            <div className="mb-4">
              <div className="mx-auto" style={{ width: 56, height: 56, position: 'relative' }}>
                <Image src={table} alt="Flexibilní pracovní prostory" layout="fill" objectFit="contain" priority />
              </div>
              <h2 className="text-3xl font-bold mt-4">Flexibilní pracovní prostory</h2>
            </div>
            <p style={{ color: "#4A4A4A", fontSize: "20px" }}>
              Naše prostory jsou navrženy tak, aby podporovaly kreativitu a produktivitu. Čisté linie, pohodlné křesla a dostatek přirozeného světla vytvářejí ideální prostředí pro váš pracovní den.
            </p>
          </div>

          {/* Blok 2 */}
          <div className="w-full md:w-1/4">
            <div className="mb-4">
              <div className="mx-auto" style={{ width: 56, height: 56, position: 'relative' }}>
                <Image src={computer} alt="Monitory na vybraných stolech" layout="fill" objectFit="contain" priority/>
              </div>
              <h2 className="text-3xl font-bold mt-4">Monitory na vybraných stolech</h2>
            </div>
            <p style={{ color: "#4A4A4A", fontSize: "20px" }}>
              Rozumíme potřebě více obrazovek pro efektivní práci. Vybrané stoly v COMO jsou vybaveny kvalitními monitory, které můžete využívat pro svou práci, prezentace či týmové setkání.
            </p>
          </div>

          {/* Blok 3 */}
          <div className="w-full md:w-1/4">
            <div className="mb-4">
              <div className="mx-auto" style={{ width: 56, height: 56, position: 'relative' }}>
                <Image src={networking} alt="Společenská a kolaborativní atmosféra" layout="fill" objectFit="contain" priority/>
              </div>
              <h2 className="text-3xl font-bold mt-4">Společenská a kolaborativní atmosféra</h2>
            </div>
            <p style={{ color: "#4A4A4A", fontSize: "20px" }}>
              V COMO spojujeme profesionály z různých odvětví, podporujeme sdílení nápadů a budování síťových kontaktů. Staňte se součástí naší různorodé komunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceFeatures;