// src/components/layout/Header.tsx

"use client"; // *** AÑADIDO: Marca este como Client Component ***

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.mainHeader} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/">CHRISTIAN</Link>
        </div>
        <nav className={styles.mainNav}>
          <ul>
            <li><Link href="/#about">Sobre Mí</Link></li>
            <li><Link href="/#projects">Proyectos</Link></li>
            <li><Link href="/#skills">Habilidades</Link></li>
            <li><Link href="/#contact">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}