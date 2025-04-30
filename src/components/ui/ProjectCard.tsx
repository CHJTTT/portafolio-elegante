// components/ui/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

// ... (definición de interfaz Project igual que antes) ...

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      {/* Imagen Superior */}
      <div className={styles.imageWrapper}>
      <Image
        src={project.imageUrl} // <- Imagen del proyecto
        alt={`Vista previa de ${project.title}`}
        fill // <-- USA 'fill' si quieres que llene su contenedor .imageWrapper
        // QUITA layout, objectFit si estaban
        className={styles.cardImage}
        quality={70}
        style={{
            // Si usas fill, aplica objectFit aquí
            objectFit: 'cover',
        }}
        // Si NO usas fill, necesitas width/height y puedes quitar objectFit del style
        // width={400}
        // height={280}
      />
      </div>
      {/* Contenido Inferior con Forma */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        {/* Enlaces sutiles opcionales */}
        <div className={styles.cardLinks}>
           {project.liveUrl && <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">Ver Demo</Link>}
           {project.repoUrl && <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">Ver Código</Link>}
        </div>
      </div>
    </div>
  );
}