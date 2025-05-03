// src/components/layout/Footer.tsx
import styles from './Footer.module.css';
// Importa Link y iconos si los quieres usar para redes sociales
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Ejemplo

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.mainFooter}>
      {/* --- ENVUELVE TODO EL CONTENIDO DEL FOOTER CON ESTE DIV --- */}
      <div className="container">

        {/* --- Iconos de Redes Sociales (Opcional) --- */}
        <div className={styles.socialLinks}>
          <Link href="https://github.com/CHJTTT" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className={styles.socialIcon} />
          </Link>
          {/* Añade tu LinkedIn si tienes */}
          {/* <Link href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className={styles.socialIcon} />
          </Link> */}
          {/* Añade más si quieres... */}
        </div>

        {/* Contenido de Texto */}
        <p>© {currentYear} Christian Chinchay DEV WEB. Todos los derechos reservados.</p>
        

      </div> {/* --- CIERRE DEL DIV container --- */}
    </footer>
  );
}