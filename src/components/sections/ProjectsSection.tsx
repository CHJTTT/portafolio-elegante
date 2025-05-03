// src/components/sections/ProjectsSection.tsx

"use client"; // *** MARCA ESTE COMO CLIENT COMPONENT ***

import { useState } from 'react'; // Importa useState
import ProjectCard from '../ui/ProjectCard';
import Link from 'next/link';
import styles from './ProjectsSection.module.css';
import { SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiWebpack, SiFigma, SiSass, SiPrisma, SiTailwindcss, SiFramer, } from 'react-icons/si'; // <- Añadido SiPrisma
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaDatabase, FaEnvelope } from 'react-icons/fa'; // Incluye FaDatabase si usas SQLServer genérico
// Importa Lightbox y sus estilos
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Opcional: Importa plugins si los quieres usar (ej. Zoom)
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/zoom.css";

// --- Importa los iconos de tecnología que usarás ---

import { TbBrandNextjs } from 'react-icons/tb'; // Ajusta según tus proyectos
// Añade más importaciones de iconos si es necesario

// --- Define los datos de tus proyectos ---


const projects = [
  {
    title: 'Yarlos Asesoría Web',
    description: 'Página web informativa y de contacto para servicios de asesoría, enfocada en un diseño limpio, profesional y responsivo.',
    imageUrl: '/images/project-yarlos.jpg', // <-- CAMBIA A TU SCREENSHOT
    techIcons: [
      TbBrandNextjs,
      FaReact,
      SiTypescript,
      SiTailwindcss,
      SiFramer,
      FaEnvelope,
    ],
    
    liveUrl: 'https://yarlos-asesoria-iuef.vercel.app/',
    repoUrl: 'https://github.com/CHJTTT/yarlos-asesoria.git',
  },
  {
    title: 'Portafolio  (Este Sitio)',
    description: 'Mi portafolio personal diseñado con estética clasico, usando Next.js, React y CSS Modules para mostrar mis proyectos y habilidades.',
    imageUrl: '/images/project-portfolio.jpg', // <-- CAMBIA A TU SCREENSHOT
    techIcons: [TbBrandNextjs, FaReact, FaCss3Alt], // Ejemplo: Next.js, React, CSS
    liveUrl: '#', // Actualiza cuando lo despliegues
    repoUrl: 'https://github.com/CHJTTT/portafolio-elegante.git', // Asume este repo
  },
   { // Ejemplo para añadir más proyectos
    title: 'Sistema de ventas',
     description: 'Tienda online de productos orgánicos con panel de administración, gestión de productos y contacto.',
    imageUrl: '/images/project-otro.jpg',
    techIcons: [
      TbBrandNextjs,
      FaReact,
      SiTypescript,
      SiTailwindcss,
      SiPostgresql,
      FaDocker,
      SiPrisma
      
    ],
    liveUrl: 'https://ecomarket1.vercel.app/',
     repoUrl: 'https://github.com/CHJTTT/ecomarket1.git',
   },
];

// --- El Componente Principal ---
export default function ProjectsSection() {
  // Estado para controlar el Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Prepara las imágenes para el Lightbox
  const slides = projects.map(p => ({ src: p.imageUrl }));

  // Función que se ejecuta al hacer clic en la imagen de una tarjeta
  const handleImageClick = (index: number) => {
    setLightboxIndex(index); // Guarda el índice de la imagen clickeada
    setLightboxOpen(true); // Abre el Lightbox
  };

  return (
    // Usa un Fragment (<>) para poder renderizar la sección y el Lightbox al mismo nivel
    <>
      <section id="projects" className={`section ${styles.projectsSection}`}>
        <div className="container">
          <h2>Proyectos Destacados</h2>
          <div className={styles.projectGrid}>
            {/* Mapea los datos de proyectos para crear cada tarjeta */}
            {projects.map((project, index) => (
              <ProjectCard
                key={index} // Key única para el map
                project={project} // Pasa los datos del proyecto
                index={index} // Pasa el índice actual
                onImageClick={handleImageClick} // Pasa la función para manejar el clic
              />
            ))}
          </div>
          {/* Elemento decorativo opcional */}
          <div className={styles.decorativeLineConnector}></div>
          {/* Botón "Descubrir Más" - Comentado por ahora */}
          {/*
          <div className={styles.discoverMore}>
              <Link href="/proyectos" className="btn">Descubrir Más</Link>
          </div>
          */}
        </div>
      </section>

      {/* Componente Lightbox: Se renderiza aquí pero solo es visible cuando lightboxOpen es true */}
      <Lightbox
        open={lightboxOpen} // Controla si está visible
        close={() => setLightboxOpen(false)} // Función para cerrarlo
        slides={slides} // Las imágenes a mostrar
        index={lightboxIndex} // Qué imagen mostrar primero
        // plugins={[Zoom]} // Descomenta para añadir plugins como Zoom
      />
    </>
  );
}