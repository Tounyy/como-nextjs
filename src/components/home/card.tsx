"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Card: React.FC = () => {
  const router = useRouter();

  const navigateTo = (url: string): void => {
    router.push(url);
  };

  return (
    <section id="card">
      <div className="card container">
        <div className="card-wrapper">
          <div className="card w-80 h-[500px] w-[300px] bg-white relative rounded-[27px_27px_25px_25px] transition-transform duration-300 ease-in-out">
            <div className="content">
              <span className='overplay'></span>
              <h1 className="text-white text-2xl font-bold relative z-20">První návštěva</h1>
              <p className="text-white text-base relative z-20">od 9:00 - 19:00</p>  
            </div>            
            <div className="card-content flex flex-col items-center p-2.5 mt-2.5">
              <h2 className="text-[#555555] text-[2.9375rem] font-bold -mb-4">ZDARMA</h2>
              <span className="text-[#555555] text-xs font-bold pb-5">na celý den</span>
            </div>
            <div className='info_box'>
              <h3 className="text-[#4A4A4A] text-xs text-center p-2">Sdílený stůl</h3>
              <div className="lwrapper"></div>
              <h3 className="text-[#4A4A4A] text-xs text-center p-2">Silná wifi síť</h3>
            </div>
            <button className="bg-[#008cd2de] text-white px-6 py-2 rounded-full text-xs font-bold relative mt-11 transition-colors duration-500 ease-in-out hover:bg-[#2d547d] focus:bg-[#2d547d] active:bg-[#2d547d] tracking-wider"
              onClick={() => navigateTo("https://www.coworking-most.cz/cenik/#cenik-daily")}>
              ZKUSIT IHNED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;