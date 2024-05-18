"use client"

import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
    router.push(path, { scroll: true });
    toggleHamburger();
  };

  return (
    <section id="header" style={headerStyle}>
      <div className={`header container ${isActive ? 'active' : ''}`}>
        <div className="nav-bar">
          <div className="brand">
            <Link href="/" style={{ cursor: 'pointer' }}>
              <Image src="/img/igv.svg" alt="Logo" width={100} height={50} layout="responsive" />
            </Link>
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
              <li><Link href="/reservation" className="font-600 rezer_button">REZERVUJTE SI MÍSTO</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;