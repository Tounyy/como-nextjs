"use client"

import React, { useState, useEffect } from 'react';

const texts: string[] = ['KOMUNITU CO SI POMÁHÁ', 'VZDĚLÁVACÍ KURZY ZDARMA', 'SKVĚLE VYBAVENÉ KANCELÁŘE'];

const KineticText: React.FC = () => {
  const [visibleText, setVisibleText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [animation, setAnimation] = useState<string>('');

  useEffect(() => {
    const changeText = () => {
      setAnimation('animate-fadeOutDown'); 
      setTimeout(() => {
        setVisibleText(texts[index]);
        setAnimation('animate-riseUp'); 
      }, 2000); 
    };

    const timeoutId = setTimeout(changeText, 2000); 

    const nextTextTimeoutId = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);  

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(nextTextTimeoutId);
    };
  }, [index]);

  return (
    <section id="about" className="relative z-10 flex items-center justify-center text-center min-h w-full md:h-[400px]">
      <div className="container relative z-10 h-[200px] w-full flex items-center justify-center text-center">
        <div className="about-1 block box-border relative">
          <div className="text-xl md:text-2xl lg:text-5xl 8xl:text-9xl font-bold text-[#353C73] py-2">
            MÁME
          </div>
          <div className={`text-xl md:text-2xl lg:text-5xl 8xl:text-9xl font-bold ${animation}`} style={{ color: "#008DD2" }}>
            <strong>{visibleText}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KineticText;