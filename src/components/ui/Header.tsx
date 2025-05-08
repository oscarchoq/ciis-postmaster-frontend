"use client";

import { useState, useEffect } from 'react';
import { getBasePath } from '@/lib';
import Image from 'next/image';
import styles from '../../styles/Header.module.css';
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);  // Determina si el header está visible
  const [lastScrollY, setLastScrollY] = useState(0);   // Guarda la última posición del scroll

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si el usuario hace scroll hacia abajo y se desplaza más de 100px, ocultamos el header
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);  // Ocultar el header
      }
      // Si el usuario hace scroll hacia arriba y está cerca de la parte superior de la página, mostramos el header
      else if (currentScrollY < lastScrollY && currentScrollY < 100) {
        setShowHeader(true);   // Mostrar el header
      }
      
      setLastScrollY(currentScrollY);  // Actualiza la última posición del scroll
    };

    // Escuchar el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento cuando el componente se desmonta
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${showHeader ? styles.visible : styles.hidden}`}>
      {/* Sección izquierda: Logo */}
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

      {/* Botón hamburguesa solo visible en móviles */}
      <div className={`${styles['menu-toggle']} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
        ☰
      </div>

      {/* Navegación central (incluye INSCRIBETE en móviles) */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <Link href="#inicio" className={styles.link} onClick={closeMenu}>INICIO</Link>
        <Link href="#ponentes" className={styles.link} onClick={closeMenu}>PONENTES</Link>
        <Link href="#horario" className={styles.link} onClick={closeMenu}>HORARIO</Link>

        <div className={styles['mobile-only']}>
          <Link href="#INSCRIBIRTE" className={styles.link} onClick={closeMenu}>INSCRIBETE</Link>
        </div>
      </nav>

      {/* Acción INSCRIBETE solo visible en pantallas grandes */}
      <div className={styles['header-right']}>
        <Link href="#INSCRIBIRTE" className={styles.link}>INSCRIBETE</Link>
      </div>
    </header>
  );
};
