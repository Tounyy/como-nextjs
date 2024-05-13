"use client"

import React from 'react';
import Image from 'next/image';

const table = '/img/home/table.png';
const networking = '/img/home/networking.png';
const computer = '/img/home/3d-computer.png';

const WorkspaceFeatures = () => {
  return (
    <section className="bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center my-10">Co vám nabízíme ?</h1>
      <div className="mx-auto px-4" style={{ maxWidth: '900px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Blok 1 */}
          <div className="p-6 bg-white rounded-[20px] shadow-lg">
            <div className="mb-4">
              <div className="w-20 h-20 relative mx-auto rounded-[20px] bg-[#c0e5e2] flex justify-center items-center">
                <Image src={table} alt="Flexibilní pracovní prostory" layout="fill" objectFit="contain" priority className='p-[9px]'/>
              </div>
              <h2 className="text-2xl font-bold mt-4 text-center py-2">Flexibilní pracovní prostory</h2>
            </div>
          </div>

          {/* Blok 2 */}
          <div className="p-6 bg-white rounded-[20px] shadow-lg">
            <div className="mb-4">
              <div className="w-20 h-20 relative mx-auto rounded-[20px] bg-[#eceaf2] flex justify-center items-center">
                <Image src={computer} alt="Monitory na vybraných stolech" layout="fill" objectFit="contain" priority className='p-[9px]'/>
              </div>
              <h2 className="text-2xl font-bold mt-4 text-center py-2">Monitory na vybraných stolech</h2>
            </div>
          </div>

          {/* Blok 3 */}
          <div className="p-6 bg-white rounded-[20px] shadow-lg">
            <div className="mb-4">
              <div className="w-20 h-20 relative mx-auto rounded-[20px] bg-blue-200 flex justify-center items-center">
                <Image src={networking} alt="Společenská a kolaborativní atmosféra" layout="fill" objectFit="contain" priority className='p-[9px]'/>
              </div>
              <h2 className="text-2xl font-bold mt-4 text-center py-2">Společenská a kolaborativní atmosféra</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceFeatures;