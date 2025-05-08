"use client";

import { useState } from 'react';
import { getBasePath } from '@/lib';
import Image from 'next/image';
import styles from '../../styles/Header.module.css';
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
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
      <div className={styles['menu-toggle']} onClick={toggleMenu}>
        ☰
      </div>

      {/* Navegación central (incluye INSCRIBETE en móviles) */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <Link href="#inicio" className={styles.link} onClick={closeMenu}>INICIO</Link>
        <Link href="#ponentes" className={styles.link} onClick={closeMenu}>PONENTES</Link>
        <Link href="#horario" className={styles.link} onClick={closeMenu}>HORARIO</Link>

        {/* INSCRIBETE también visible en menú móvil */}
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
