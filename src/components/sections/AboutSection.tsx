// components/sections/AboutSection.tsx
import Image from 'next/image';
import styles from './AboutSection.module.css';
import Link from 'next/link'; // Si añades botón

export default function AboutSection() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.aboutContainer}`}>
        {/* Columna Izquierda: Imagen */}
        <div className={styles.aboutImageWrapper}>
          {/* Usaremos un div para crear el marco arqueado con CSS */}
          <div className={styles.imageFrame}>
          <Image
            src="/images/profile-dark-academia.jpg" // <- Tu imagen de perfil (o placeholder)
            alt="Retrato o símbolo Dark Academia"
            width={400} // Mantén width y height si la imagen tiene tamaño intrínseco
            height={550}
            // QUITA objectFit de aquí si estaba
            className={styles.aboutImage} // Usa clases para estilos como object-fit si prefieres
            quality={80}
            // Añade object-fit vía CSS si es necesario en AboutSection.module.css:
            // .aboutImage { object-fit: cover; }
          />
          </div>
        </div>

        {/* Columna Derecha: Texto */}
        <div className={styles.aboutText}>
          {/* Título "I'm Elyse" adaptado */}
          <h3 className={styles.aboutGreeting}>Sobre mi</h3>
          <p className={styles.aboutMainParagraph}>
          Soy un estudiante de desarrollo web apasionado por construir aplicaciones completas, explorando tanto el frontend como el backend. Me inspira la elegancia del diseño moderno y la lógica estructurada, buscando fusionarlas para crear experiencias digitales funcionales y consideradas.
          </p>
          <p>
          Siempre estoy en proceso de aprendizaje, profundizando en tecnologías como React, Next.js y Node.js, y abierto a nuevos desafíos y oportunidades para crecer.
          </p>
          {/* <Link href="/contacto" className={`btn ${styles.aboutBtn}`}>Más sobre mí</Link> */}
        </div>
      </div>
       {/* Elemento decorativo (como el semicírculo en Elyse) */}
       <div className={styles.decorativeCircle}></div>
    </section>
  );
}