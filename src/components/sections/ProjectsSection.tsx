// src/components/sections/ProjectsSection.tsx

// --- AÑADE ESTAS IMPORTACIONES ---
import ProjectCard from '../ui/ProjectCard'; // Importa el componente de tarjeta
import Link from 'next/link';            // Importa el componente Link de Next.js
// --- FIN DE IMPORTACIONES A AÑADIR ---

import styles from './ProjectsSection.module.css';

// --- AÑADE ESTOS DATOS DE PROYECTOS (O TUS PROPIOS DATOS) ---
// Datos de ejemplo - Reemplaza con tus proyectos reales
const projects = [
  {
    title: 'Librería Digital Personal',
    description: 'Una aplicación web para catalogar y reseñar libros, inspirada en estanterías antiguas.',
    imageUrl: '/images/project-library.jpg', // CAMBIA imagen
    tags: ['Next.js', 'React', 'CSS Modules', 'Database'], // Ejemplo de tags (opcional)
    liveUrl: '#', // Enlace a la demo (opcional)
    repoUrl: '#', // Enlace al repositorio (opcional)
  },
  {
    title: 'Visualizador de Música Clásica',
    description: 'Un experimento interactivo que traduce piezas clásicas en visualizaciones abstractas.',
    imageUrl: '/images/project-music.jpg', // CAMBIA imagen
    tags: ['React', 'p5.js', 'Web Audio API'],
    liveUrl: '#',
    repoUrl: '#',
  },
  // ... añade más proyectos si es necesario
];
// --- FIN DE DATOS DE PROYECTOS ---


export default function ProjectsSection() {
  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        <h2>Proyectos Destacados</h2>
        <div className={styles.projectGrid}>
          {/* Ahora 'projects' y 'ProjectCard' están definidos */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
         <div className={styles.discoverMore}>
             {/* Ahora 'Link' está definido */}
             <Link href="/proyectos" className="btn">Descubrir Más</Link>
         </div>
         <div className={styles.decorativeLineConnector}></div>
      </div>
    </section>
  );
}