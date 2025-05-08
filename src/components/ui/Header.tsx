"use client";

import { useState, useEffect } from 'react';
import { getBasePath } from '@/lib';
import Image from 'next/image';
import styles from '../../styles/Header.module.css';
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
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // scroll hacia abajo
      } else {
        setShowHeader(true); // scroll hacia arriba
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${!showHeader ? styles.hidden : ''}`}>
      <div className={styles['header-left']}>
        <Link href="https://ciistacna.com/" passHref target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <Image
              src={getBasePath('/logo_ciis.png')}
              alt="CIIS Logo"
              width={120}
              height={50}
              priority
            />
          </div>
        </Link>
      </div>

      <div className={styles['menu-toggle']} onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''} ${!showHeader ? styles.hidden : ''}`}>

        <Link href="#inicio" className={styles.link} onClick={closeMenu}>INICIO</Link>
        <Link href="#ponentes" className={styles.link} onClick={closeMenu}>PONENTES</Link>
        <Link href="#horario" className={styles.link} onClick={closeMenu}>HORARIO</Link>

        <div className={styles['mobile-only']}>
          <Link href="#INSCRIBIRTE" className={styles.link} onClick={closeMenu}>INSCRIBETE</Link>
        </div>
      </nav>

      <div className={styles['header-right']}>
        <Link href="#INSCRIBIRTE" className={styles.link}>INSCRIBETE</Link>
      </div>
    </header>
  );
};
