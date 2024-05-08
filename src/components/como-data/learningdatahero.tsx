'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const backgroundImage = '/img/como-data/Group-15-1.png';

const LearningDataHero: React.FC = () => {
  const router = useRouter();

  const sectionStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  const navigateToRegister = (): void => {
    router.push('#register');
  };

  return (
    <section 
      id="hero" 
      style={sectionStyle} 
      className="relative flex flex-col sm:flex-row items-center text-center min-h-[100vh] w-full mt-[120px]"
    >
      <div className="mx-auto p-4">
        <h1 className="text-black mb-4 font-bold text-lg sm:text-2xl md:text-2xl lg:text-3xl">
          Naučte se pracovat s <span className="text-[#008DD2]">DATY</span> a
          <br />
          rozšiřte si pracovní možnosti
        </h1>
        <p className="text-lg text-[#7A7A7A] font-bold mb-6">
          Zaregistrujte se, naučte se pracovat s daty a otevřete si nové kariérní příležitosti v dobře placených pozicích.
        </p>
        <button 
          className="bg-[#008DD2] text-white rounded-full px-6 py-3 text-lg leading-tight transition-colors duration-500 hover:bg-[#2d547d] focus:bg-[#2d547d] mb-4"
          onClick={navigateToRegister}
        >
          PŘIHLÁSIT SE
        </button>
      </div>
    </section>
  );
};

export default LearningDataHero;