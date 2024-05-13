"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

interface MenuCardProps {
  title: string;
  time: string;
  price: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string | React.ReactNode;
  feature5: string | React.ReactNode;
  currency: string;
  link: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
  title,
  time,
  price,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  currency,
  link
}) => {
  const router = useRouter();

  const navigateTo = () => {
    router.push(link);
  };

  return (
    <>
      <style jsx>{`
        @media (min-width: 2560px) {
          .menu-4k {
            width: 420px;
            height: 550px;
          }
        }
      `}</style>
      <div className="menu menu-4k w-[280px] h-[480px] md:w-[300px] md:h-[520px] mx-auto bg-white rounded-[27px] shadow-xl transition-transform duration-300 ease-in-out flex flex-col relative" style={{ boxShadow: '5px 5px 5px -2px rgba(0, 0, 0, 0.2), -5px 5px 5px -5px rgba(0, 0, 0, 0.2)' }}>
        <div className="content">
          <span className='overplay'></span>
          <h1 className="text-white font-bold relative z-20 text-lg sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl">
            {title}
          </h1>
          <p className="text-white text-base relative z-20">{time}</p>  
        </div>
        <div className="card-content flex flex-col items-center p-2.5 mt-2.5">
          <div className="flex flex-col items-center">
            <h2 className="text-[#555555] text-[2.9375rem] font-bold -mb-4">{price}<span className="text-lg font-bold">{currency}</span></h2>
          </div>
          <a className="text-[#555555] text-xs pb-5">{feature1}</a>
        </div>
        <div className='info_box mx-auto' style={{ maxWidth: 'max-content' }}>
          <h3 className="text-[#4A4A4A] text-xs text-left p-2 2xl:text-base">{feature2}</h3>
          <h3 className="text-[#4A4A4A] text-xs text-left p-2 2xl:text-base">{feature3}</h3>
          <h3 className="text-[#4A4A4A] text-xs text-left p-2 2xl:text-base">{feature4}</h3>
          {feature5 && <div className="text-[#4A4A4A] text-xs text-center p-2 2xl:text-base">{feature5}</div>}
        </div>
        <div className="flex justify-center">
          <button onClick={navigateTo} className="w-[120px] bg-[#008cd2de] text-white px-6 py-2 rounded-full text-xs font-bold relative mt-8 transition-colors duration-500 ease-in-out hover:bg-[#2d547d] focus:bg-[#2d547d] active:bg-[#2d547d] tracking-wider">
            Objednat
          </button>
        </div>
      </div>
    </>
  );
};

const Menu: React.FC = () => {
  const cardData: MenuCardProps[] = [
    { 
      title: "První návštěva", 
      time: "od 9:00 - 19:00", 
      currency: "",
      price: "ZDARMA", 
      feature1: "na celý den", 
      feature2: "Sdílený stůl", 
      feature3: "Silná wifi síť", 
      feature4: <div aria-hidden="true">&nbsp;</div>,
      feature5: <div aria-hidden="true">&nbsp;</div>,
      link: "https://www.coworking-most.cz/cenik/#cenik-daily" 
    },

    { 
      title: "Měsíční tarif", 
      time: "Neomezený přístup", 
      currency: "Kč",
      price: "1690", 
      feature1: "na 1 měsíc", 
      feature2: "Sdílený stůl", 
      feature3: "Karta do kanceláře", 
      feature4: "Zasedací místnost", 
      feature5: "Uzamykatelná skříň", 
      link: "https://www.coworking-most.cz/cenik/#cenik-daily" 
    },

    { 
      title: "Inkubační tarif", 
      time: "Neomezený přístup", 
      currency: "Kč",
      price: "500", 
      feature1: "na 1 měsíc", 
      feature2: "Sdílený stůl", 
      feature3: "Karta do kanceláře", 
      feature4: "Zasedací místnost", 
      feature5: " Uzamykatelná skříň", 
      link: "https://www.coworking-most.cz/cenik/#cenik-daily" 
    },

    { 
      title: "Zasedací místnost", 
      time: ".",
      currency: "Kč",
      price: "550", 
      feature1: "na 1 hodinu", 
      feature2: "8:00 - 19:00", 
      feature3: "10 míst k sezení", 
      feature4: "Schůzky s klienty",
      feature5: <div aria-hidden="true">&nbsp;</div>,
      link: "https://www.coworking-most.cz/cenik/#cenik-daily" 
    },

    { 
      title: "Jednodenní tarif", 
      time: "od 9:00 - 19:00",
      currency: "Kč",
      price: "250", 
      feature1: "na 1 den", 
      feature2: "Sdílený stůl", 
      feature3: "Karta do kanceláře", 
      feature4: "Silná wifi síť", 
      feature5: <div aria-hidden="true">&nbsp;</div>,
      link: "https://www.coworking-most.cz/cenik/#cenik-daily" 
    },

    { 
      title: "Hodinové tarify", 
      time: "od 9:00 - 19:00", 
      currency: "Kč",
      price: "810", 
      feature1: "30 hodin produktivity", 
      feature2: "Sdílený stůl", 
      feature3: "Karta do kanceláře", 
      feature4: "Zasedací místnost", 
      feature5: <div aria-hidden="true">&nbsp;</div>,
      link: "https://www.coworking-most.cz/cenik/#cenik-daily" 
    },

    { 
      title: "Hodinové tarify", 
      time: "od 9:00 - 19:00", 
      currency: "Kč",
      price: "1500", 
      feature1: "50 hodin produktivity", 
      feature2: "Sdílený stůl", 
      feature3: "Karta do kanceláře", 
      feature4: "Zasedací místnost", 
      feature5: <div aria-hidden="true">&nbsp;</div>,
      link: "https://www.coworking-most.cz/cenik/#cenik-daily" 
    },
  ];

  return (
    <section id="menu" className="py-8">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <MenuCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;