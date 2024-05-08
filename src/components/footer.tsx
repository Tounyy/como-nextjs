"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const router = useRouter();

  const navigateTo = (url: string): void => {
    router.push(url);
  };

  return (
    <footer className="bg-white min-h-[4.375rem] w-full flex items-center justify-center text-center text-[#353C73] font-600 text-xs sm:text-sm md:text-base lg:text-base">
      <div className="container min-h-[3.75rem] flex flex-col items-center justify-center pb-2.5 relative top-5">
        <p>
          Copyright © 2024 COMO | COMO je zřízen a provozován statutárním městem Most. Prohlášení o přístupnosti stránek naleznete 
          <span className='hover:text-blue-600 transition-colors cursor-pointer' onClick={() => navigateTo('https://www.coworking-most.cz/prohlaseni-o-pristupnosti/')}> ZDE</span>. Zásady GDPR 
          <span className='hover:text-blue-600 transition-colors cursor-pointer' onClick={() => navigateTo('https://www.coworking-most.cz/souhlas-s-zpracovnim-osobnich-udaju/')}> ZDE</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;