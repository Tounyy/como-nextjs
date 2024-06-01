"use client";

import React from 'react';

const Hero: React.FC = () => {
  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: 600,
    transition: 'background-color 0.5s'
  };

  return (
    <section className="items-center text-left min-h-[30vh] w-full mt-[150px] 2xl:mt-[200px] s:mt-[130px]">
      <div className="container hero-container sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="flex flex-col items-left justify-left text-left w-full xl:w-1/2 p-4">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">COMO - ŽIVOT V COMO I MIMO NĚJ</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">COMO JE VÍC NEŽ KANCELÁŘ</h1>
          <p className="text-gray-700 leading-relaxed">
            COMO není jenom místo, kde můžete pracovat na svém nápadu. Je to místo, kde Vám pomůžeme se vzděláním, propojením a konzultací, aby Vás nápad se zmaterializovat. 
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Váš úspěch je náš úspěch, proto Vás budeme podporovat a vzdělávat.
          </p>
          <button 
            className="bg-[#008DD2] hover:bg-[#2d547d] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out mt-[20px]"
            style={buttonStyle}
          >
            Více informací zde
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;