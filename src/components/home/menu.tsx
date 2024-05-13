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

    return (
        <div className="flex flex-col items-center justify-center min-h bg-white p-4">
            <h1 className="text-4xl font-bold text-center my-10">Vyberte si svůj plán</h1>
            <div className="hidden xl:block relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-300">
                <table className="w-full text-[15px] text-left text-gray-500">
                    <thead className="text-[15px] text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">Vlastnost</th>
                            {data.products.map(product => (
                                <th key={product.name} scope="col" className="py-3 px-6">
                                    {product.name} <br/>
                                    <span className="text-[12px] text-gray-400">{product.time}</span>
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

            <div className="xl:hidden w-full max-w-3xl">
                <div className="flex items-center justify-between mb-4">
                    <button onClick={() => navigate(-1)} className="text-gray-500">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="text-center">
                        <span className="text-xl font-semibold">{data.products[currentIndex].name}</span>
                        <div className="text-xs">{data.products[currentIndex].time}</div>
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
            <a href="/cenik" className="mt-6 text-white bg-[#008DD2] hover:bg-[#2d547d] font-bold py-3 p-6 rounded-full">
                Zobrazit Ceník
            </a>
        </div>
    );
};

export default ComparisonTable;