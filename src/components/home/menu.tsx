"use client"

import React, { useState } from 'react';

interface ProductDetail {
  "Cena": string
  "Čas": string
  "Sdílený stůl": string
  "Zasedací místnost": string
  "Silná wifi síť": string
  "Karta do kanceláře": string
  "10 míst k sezení": string
  "Uzamykatelná skříň": string
}

interface Product {
  name: string;
  time: string;
  details: ProductDetail;
}

interface FeatureCardProps {
  product: Product;
  feature: keyof ProductDetail;
}

const data = {
  products: 
    [
      { 
        name: "První návštěva", 
        time: "od 9:00 do 19:00",
        details: { 
          "Cena": "Zdarma",
          "Čas": "na celý den",
          "Sdílený stůl": "Ano",
          "Karta do kanceláře": "Ne", 
          "Zasedací místnost": "Ano", 
          "Silná wifi síť": "Ano", 
          "10 míst k sezení": "Ne", 
          "Schůzky s klienty": "Ne",
          "Uzamykatelná skříň": "Ne",
        }
      },

      { 
        name: "Jednodenní tarif",
        time: "od 9:00 - 19:00",
        details: { 
          "Cena": "250 Kč",
          "Čas": "na 1 den",
          "Sdílený stůl": "Ano", 
          "Karta do kanceláře": "Ano", 
          "Zasedací místnost": "Ano", 
          "Silná wifi síť": "Ano", 
          "10 míst k sezení": "Ne", 
          "Schůzky s klienty": "Ne",          
          "Uzamykatelná skříň": "Ne",
        }
      },

      { 
        name: "Inkubační tarif", 
        time: "Neomezený přístup",
        details: { 
          "Cena": "500 Kč",
          "Čas": "na 1 měsíc",
          "Sdílený stůl": "Ano", 
          "Karta do kanceláře": "Ano", 
          "Zasedací místnost": "Ano", 
          "Silná wifi síť": "Ano", 
          "10 míst k sezení": "Ne", 
          "Schůzky s klienty": "Ne",
          "Uzamykatelná skříň": "Ano",
        }
      },

      { 
        name: "Zasedací místnost",
        time: "od  8:00 - 19:00",
        details: { 
          "Cena": "550 Kč",
          "Čas": "na 1 hodinu",
          "Sdílený stůl": "Ano", 
          "Karta do kanceláře": "Ne", 
          "Zasedací místnost": "Ano", 
          "Silná wifi síť": "Ano", 
          "10 míst k sezení": "Ano", 
          "Schůzky s klienty": "Ano",            
          "Uzamykatelná skříň": "Ne",
        }
      },

      { 
        name: "Hodinové tarify", 
        time: "od 9:00 - 19:00",
        details: { 
          "Cena": "810 Kč",
          "Čas": "30 hodin produktivity",
          "Sdílený stůl": "Ano", 
          "Karta do kanceláře": "Ano", 
          "Zasedací místnost": "Ano", 
          "Silná wifi síť": "Ano", 
          "10 míst k sezení": "Ne", 
          "Schůzky s klienty": "Ne",
          "Uzamykatelná skříň": "Ne",
        }
      },

      { 
        name: "Hodinové tarify", 
        time: "od 9:00 - 19:00",
        details: { 
          "Cena": "1500 Kč",
          "Čas": "50 hodin produktivity",
          "Sdílený stůl": "Ano", 
          "Karta do kanceláře": "Ano", 
          "Zasedací místnost": "Ano", 
          "Silná wifi síť": "Ano", 
          "10 míst k sezení": "Ne", 
          "Schůzky s klienty": "Ne",            
          "Uzamykatelná skříň": "Ne",
        }
      },

      { 
        name: "Měsíční tarif", 
        time: "Neomezený přístup",
        details: { 
          "Cena": "1690 Kč",
          "Čas": "na 1 měsíc",
          "Sdílený stůl": "Ano", 
          "Karta do kanceláře": "Ano", 
          "Zasedací místnost": "Ano", 
          "Silná wifi síť": "Ano", 
          "10 míst k sezení": "Ne", 
          "Schůzky s klienty": "Ne",
          "Uzamykatelná skříň": "Ano",
        }
      },
    ],

    features: [
      "Cena",
      "Čas",
      "Sdílený stůl", 
      "Zasedací místnost", 
      "Silná wifi síť", 
      "Karta do kanceláře", 
      "10 míst k sezení",
      "Uzamykatelná skříň",
    ] as const
};

const FeatureCard: React.FC<FeatureCardProps> = ({ product, feature }) => (
  <div className="flex justify-between items-center px-6 py-2 border-b border-gray-200">
      <span className="text-gray-700">{feature}</span>
      <span className={`font-medium ${product.details[feature as keyof ProductDetail] === "Ano" ? 'text-green-500' : product.details[feature as keyof ProductDetail] === "Ne" ? 'text-red-500' : 'text-black'}`}>
          {product.details[feature as keyof ProductDetail]}
      </span>
  </div>
);

const ComparisonTable: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const navigate = (direction: number) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + data.products.length) % data.products.length);
  };

  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: 600,
    transition: 'background-color 0.5s'
  };

  return (
    <section className="relative items-center text-center w-full mt-auto min-h-full">
      <div className="flex flex-col items-center justify-center min-h-full bg-white p-4 mb-50">
        <h1 className="text-2xl text-black mb-10 leading-none font-bold s:text-3xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Vyberte si svůj plán
        </h1>
        <div className="table-container hidden xl:block relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-300 max-w-[1500px] 7xl:max-w-[2000px] overflow-y-auto">
          <table className="w-full text-[15px] text-left text-gray-500 2xxl:text-[16px] 4xl:text-[19px] 5xl:text-[22px] 6xl:text-[25px] 7xl:text-[30px]">
            <thead className="text-[15px] text-gray-700 uppercase bg-gray-50 2xxl:text-[16px] 4xl:text-[19px] 5xl:text-[22px] 6xl:text-[25px] 7xl:text-[30px]">
              <tr>
                <th scope="col" className="py-3 px-6">Vlastnost</th>
                {data.products.map(product => (
                  <th key={product.name} scope="col" className="py-3 px-6">
                    {product.name} <br/>
                    <span className="text-[12px] 2xxl:text-[12px] 4xl:text-[14px] 5xl:text-[17px] 6xl:text-[20px] 7xl:text-[23px] text-gray-400">{product.time}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.features.map(feature => (
                <tr key={feature} className="bg-white border-b">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    {feature}
                  </th>
                  {data.products.map(product => (
                    <td key={product.name} className="py-4 px-6">
                      <span className={`font-medium ${product.details[feature as keyof ProductDetail] === "Ano" ? 'text-green-500' : product.details[feature as keyof ProductDetail] === "Ne" ? 'text-red-500' : 'text-black'}`}>
                        {product.details[feature as keyof ProductDetail]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="xl:hidden w-full max-w-4xl shadow-md p-4 rounded-lg border border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate(-1)} className="text-gray-500">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-center">
              <span className="text-[20px] text-gray-700 uppercase bg-gray-50 2xxl:text-[25px] 4xl:text-[27px] 5xl:text-[28px] 6xl:text-[28px] 7xl:text-[30px] font-bold">{data.products[currentIndex].name}</span><br/>
              <span className="text-[14px] 2xxl:text-[12px] 4xl:text-[14px] 5xl:text-[17px] 6xl:text-[20px] 7xl:text-[23px] text-gray-400 font-bold">{data.products[currentIndex].time}</span>
            </div>

            <button onClick={() => navigate(1)} className="text-gray-500">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {data.features.map((feature: keyof ProductDetail) => (
            <FeatureCard key={feature} product={data.products[currentIndex]} feature={feature} />
          ))}
        </div>
        <button
          style={buttonStyle}
          className="
            text-white bg-[#008DD2] hover:bg-[#2d547d] rounded-lg	
            7xl:mt-6 7xl:py-[16px] 7xl:px-[200px] 7xl:text-[30px]
            lg:mt-6 lg:py-[16px] lg:px-[120px] lg:text-[20px]
            sm:mt-6 sm:py-[16px] sm:px-[60px] sm:text-[15px]
            s:mt-6 s:py-[16px] s:px-[30px] s:text-[12px]"
        >
          ZOBRAZIT CENÍK
        </button>
      </div>
    </section>
  );
};

export default ComparisonTable;