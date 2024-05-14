"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Address: React.FC = () => {
  const router = useRouter();

  const navigateTo = (url: string): void => {
    router.push(url);
  };

  return (
    <section className="relative min-h w-full overflow-hidden font-poppins text-center py-7">
      <div className="flex justify-center flex-wrap">
        <div className="container m-4 p-5 bg-white rounded-lg max-w-sm">
          <h2 className="text-2xl text-[#353C73] font-bold mb-5 text-left">Stránky</h2>
          <ul className="space-y-2 text-left">
            <li><span onClick={() => navigateTo('https://www.coworking-most.cz/aktuality/')} className="hover:text-blue-600 transition-colors cursor-pointer">Aktuality</span></li>
            <li><span onClick={() => navigateTo('https://www.coworking-most.cz/cenik/')} className="hover:text-blue-600 transition-colors cursor-pointer">Ceník</span></li>
            <li><span onClick={() => navigateTo('https://www.coworking-most.cz/novacek/')} className="hover:text-blue-600 transition-colors cursor-pointer">Pro nováčky</span></li>
            <li><span onClick={() => navigateTo('https://www.coworking-most.cz/o-nas/')} className="hover:text-blue-600 transition-colors cursor-pointer">O nás</span></li>
            <li><span onClick={() => navigateTo('https://www.coworking-most.cz/contact/')} className="hover:text-blue-600 transition-colors cursor-pointer">Kontakty</span></li>
          </ul>
        </div>
        <div className="container m-4 p-5 bg-white rounded-lg max-w-sm">
          <h2 className="text-2xl text-[#353C73] font-bold mb-5 text-left">Sídlo Kanceláře</h2>
          <address className="not-italic space-y-2 text-left">
            <li><span onClick={() => navigateTo('https://www.google.com/maps/place/...')} className="hover:text-blue-600 transition-colors cursor-pointer">Pasáž U Lva Radniční 1/2, Most, 434 01</span></li>
            <li><span onClick={() => navigateTo('tel:(+420)734393753')} className="hover:text-blue-600 transition-colors cursor-pointer">+420 734 393 753</span></li>
            <li><span onClick={() => navigateTo('mailto:info@coworking-most.cz')} className="hover:text-blue-600 transition-colors cursor-pointer">info@coworking-most.cz</span></li>
          </address>
        </div>
        <div className="container m-4 p-5 bg-white rounded-lg max-w-sm">
          <h2 className="text-2xl text-[#353C73] font-bold mb-5 text-left">Pro Novináře</h2>
          <p className="text-left">Brand Manual s logotypy <span onClick={() => navigateTo('...')} className='hover:text-blue-600 transition-colors cursor-pointer'>ZDE</span>.</p>
        </div>
      </div>
    </section>
  );
};

export default Address;