// components/layout/Footer.tsx
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.mainFooter}>
      <div className="container">
        {/* Puedes añadir links a redes sociales aquí con iconos */}
        <p>© {currentYear} [Tu Nombre]. Todos los derechos reservados.</p>
        <p>Diseñado con inspiración clásica.</p>
      </div>
    </footer>
  );
}