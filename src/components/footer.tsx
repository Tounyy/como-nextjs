"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Footer: React.FC = () => {
  const router = useRouter();

  const navigateTo = (url: string): void => {
    router.push(url);
  };

  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <footer className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
      <div className="relative flex-col md:flex-row max-w-[1500px] 4k:max-w-[3000px] mx-auto p-6 items-center justify-center">

        <div className="flex justify-center w-full">
          <img 
            src="../img/logo.svg" 
            alt="Logo" 
            className="text-white h-[60px]" 
            onClick={goToHomePage}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 mt-10">

          <div className="justify-center">
            <h2 className="mb-6 text-lg font-bold text-gray-900 uppercase dark:text-black">Stránky</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <Link href="/aktuality" className="hover:underline">Aktuality</Link>
              </li>

              <li className="mb-2">
                <Link href="/cenik" className="hover:underline">Ceník
                </Link>
              </li>

              <li className="mb-2">
                <Link href="/novacek" className="hover:underline">Pro nováčky</Link>
              </li>

              <li className="mb-2">
                <Link href="/o-nas" className="hover:underline">O Nás
                </Link>
              </li>

              <li className="mb-2">
                <Link href="/contact" className="hover:underline">Kontakty</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-lg font-bold text-gray-900 uppercase dark:text-black">Sídlo Kanceláře</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Pasáž U Lva Radniční 1/2,<br className="hidden md:inline" /> Most, 434 01
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">info@coworking-most</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">+420 734 393 753</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-lg font-bold text-gray-900 uppercase dark:text-black">Sledujte nás</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">Instagram</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Facebook</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-lg font-bold text-gray-900 uppercase dark:text-black">Pro Novináře</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">Brand Manual s logotypy ZDE.</a>
              </li>
            </ul>
          </div>

        </div>

        <p className='text-center'>
          Copyright © 2024 COMO | COMO je zřízen a provozován statutárním městem Most. Prohlášení o přístupnosti stránek naleznete 
          <span className='hover:text-blue-600 transition-colors cursor-pointer' onClick={() => navigateTo('https://www.coworking-most.cz/prohlaseni-o-pristupnosti/')}> ZDE</span>. Zásady GDPR 
          <span className='hover:text-blue-600 transition-colors cursor-pointer' onClick={() => navigateTo('https://www.coworking-most.cz/souhlas-s-zpracovnim-osobnich-udaju/')}> ZDE</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;