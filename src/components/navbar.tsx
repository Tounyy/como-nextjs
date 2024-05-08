"use client"

import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [headerStyle, setHeaderStyle] = useState<CSSProperties>({});
  const router = useRouter();

  const toggleHamburger = (): void => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setHeaderStyle({
          backgroundColor: 'rgb(255, 255, 255)',
          transition: 'background-color 0.3s'
        });
      } else {
        setHeaderStyle({
          backgroundColor: 'rgb(255, 255, 255)',
          transition: 'background-color 0.3s'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = (path: string): void => {
    router.push(path);
    toggleHamburger();
  };

  return (
    <section id="header" style={headerStyle}>
      <div className={`header container ${isActive ? 'active' : ''}`}>
        <div className="nav-bar">
          <div className="brand">
            <a onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
              <Image src="/img/igv.svg" alt="Logo" width={100} height={50} layout="responsive" />
            </a>
          </div>
          <div className="nav-list">
            <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleHamburger}>
              <div className="bar"></div>
            </div>
            <ul className={isActive ? 'active' : ''}>
              <li><a onClick={() => navigate('/aktuality')}>AKTUALITY</a></li>
              <li><a onClick={() => navigate('/cenik')}>CENÍK</a></li>
              <li><a onClick={() => navigate('/novacek')}>PRO NOVÁČKY</a></li>
              <li><a onClick={() => navigate('/o-nas')}>O NÁS</a></li>
              <li><a onClick={() => navigate('/contact')}>KONTAKTY</a></li>
            </ul>
          </div>
          <button className="rezer_button"><a onClick={() => navigate('/reservation')}>REZERVUJTE SI MÍSTO</a></button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;