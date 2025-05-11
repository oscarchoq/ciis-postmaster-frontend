"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      } else if (currentScrollY < lastScrollY && currentScrollY < 100) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <header className={`${styles.header} ${showHeader ? styles.visible : styles.hidden}`}>
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
        <div className={styles['header-left']}>
          <Link href="https://ciistacna.com/" passHref target="_blank" rel="noopener noreferrer">
            <div className={styles.logo}>
              <Image
                src={'/logo_ciis.png'}
                alt="CIIS Logo"
                width={120}
                height={33}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </Link>
        </div>

        <div className={`${styles['menu-toggle']} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''} font-title text-4xl font-extrabold pb-2`}>
          <Link href="#inicio" className={styles.link} onClick={closeMenu}>INICIO</Link>
          <Link href="#ponentes" className={styles.link} onClick={closeMenu}>PONENTES</Link>
          <Link href="#horario" className={styles.link} onClick={closeMenu}>HORARIO</Link>
          
           {/*<div className={styles['mobile-only']}>
            <Link href="#" className={styles.link} onClick={closeMenu}>INSCRIBETE</Link>
          </div>*/} 
        </nav>

        {/* <div className={styles['header-right']}>
          <Link
            href="#INSCRIBIRTE"
            className={`${styles.link} font-title text-4xl font-extrabold pb-2`}
          >
            INSCRIBETE
          </Link>
        </div> */}

        
        <div className={styles['header-right']}>
          <div
            className={`${styles.linkNoactive} font-title text-4xl font-extrabold pb-2`}
          >
            PROXIMAMENTE
          </div>
        </div>


      </div>
    </header>
  );
};