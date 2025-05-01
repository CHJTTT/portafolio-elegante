// src/components/ui/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techIcons: React.ComponentType<any>[];
  liveUrl?: string;
  repoUrl?: string;
}

// --- Añade las nuevas props ---
interface ProjectCardProps {
  project: Project;
  index: number;
  onImageClick: (index: number) => void;
}

export default function ProjectCard({ project, index, onImageClick }: ProjectCardProps) { // <-- Recibe las props
  return (
    <div className={styles.card}>
      {/* --- Añade onClick al wrapper --- */}
      <div className={styles.imageWrapper} onClick={() => onImageClick(index)}>
        <Image
          src={project.imageUrl}
          alt={`Vista previa de ${project.title}`}
          fill
          className={styles.cardImage}
          quality={70}
          style={{
             // Cambiado a contain
             objectFit: 'contain',
           }}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>

        <div className={styles.techIcons}>
          {project.techIcons.map((IconComponent, iconIndex) => (
            <IconComponent key={iconIndex} className={styles.techIcon} title={IconComponent.displayName || 'Tecnología'} />
          ))}
        </div>

        <div className={styles.cardLinks}>
           {project.liveUrl && project.liveUrl !== '#' && (
             <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
               Ver Demo
             </Link>
           )}
           {project.repoUrl && project.repoUrl !== '#' && (
             <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
               Ver Código
             </Link>
            )}
        </div>
      </div>
    </div>
  );
}