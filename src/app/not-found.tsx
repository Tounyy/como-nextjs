
"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

import Footer from "@/components/footer";

export default function Custom404() {
  const router = useRouter();
  
  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[30rem] text-center px-4 min-h-[30vh] w-full mt-[100px] 2xl:mt-[150px] s:mt-[80px]">
        <h1 className="text-3xl md:text-5xl font-bold">Vypadá to, že tato stránka neexistuje.</h1>
        <p className="mt-4 text-lg md:text-xl">Vypadá to, že odkaz, který vás sem odkázal, byl chybný. Nechcete zkusit vyhledávání?</p>
        <button onClick={goToHomePage} className="mt-6 text-blue-500">Zpět na hlavní stránku</button>
        <br/>
        <div className="relative flex items-center">
          <input 
            type="text" 
            placeholder="Search..."
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          ></input>
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-4"></button>
        </div>
      </div>
      <Footer/>
    </>
  );
};
