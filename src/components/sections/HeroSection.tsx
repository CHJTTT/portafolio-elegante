// src/components/sections/HeroSection.tsx
import Link from 'next/link';
import styles from './HeroSection.module.css';
import { FaFeatherAlt } from 'react-icons/fa'; // O el icono/iniciales que prefieras

export default function HeroSection() {
  return (
    // La sección hero ya no necesita la imagen, solo el contenido
    <section className={styles.hero}>
      {/* El div del contenido necesita z-index para estar sobre el fondo del layout */}
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroGraphic}>
          {/* <FaFeatherAlt /> */}
          <span className={styles.initials}>CT</span> {/* Tus iniciales */}
        </div>

        <h1 className={styles.heroTitle}>
           Christian Chinchay {/* Tu Nombre */}
        </h1>
        <p className={styles.heroSubtitle}>
          Full Stack Developer {/* Tu subtítulo */}
        </p>
        <Link href="/#projects" className={`btn ${styles.heroBtn}`}>
          Explorar Proyectos
        </Link>
      </div>
      {/* Línea decorativa inferior */}
      <div className={styles.bottomLine}></div>
    </section>
  );
}