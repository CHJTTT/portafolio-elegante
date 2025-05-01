// src/components/sections/SkillsSection.tsx
import styles from './SkillsSection.module.css';
// --- ¡Importa los iconos que vas a usar! ---
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa'; // Incluye FaDatabase si usas SQLServer genérico
// --- MODIFICADO: Añadido SiPrisma ---
import { SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiWebpack, SiFigma, SiSass, SiPrisma } from 'react-icons/si'; // <- Añadido SiPrisma
import { TbBrandNextjs } from "react-icons/tb";

// --- Define tu tipo de Habilidad ---
interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
}

// --- Define tus habilidades con el nuevo formato ---
// --- ¡¡¡IMPORTANTE!!! Ajusta estos datos a TU experiencia real ---
const skillsData: { [key: string]: Skill[] } = {
  'Lenguajes': [
    { name: 'JavaScript (ES6+)', icon: FaJs, level: 'Intermedio' },
    { name: 'TypeScript', icon: SiTypescript, level: 'Intermedio' },
    { name: 'HTML5', icon: FaHtml5, level: 'Intermedio' },
    { name: 'CSS3/SASS', icon: SiSass, level: 'Intermedio' },
  ],
  'Frameworks/Librerías': [
    { name: 'React', icon: FaReact, level: 'Intermedio' },
    { name: 'Next.js', icon: TbBrandNextjs, level: 'Intermedio' },
    { name: 'Node.js', icon: FaNodeJs, level: 'Intermedio' },
    { name: 'Express', icon: SiExpress, level: 'Básico' },
    // --- AÑADIDO PRISMA AQUÍ ---
    { name: 'Prisma', icon: SiPrisma, level: 'Básico' },
  ],
  'Bases de Datos': [
    { name: 'MongoDB', icon: SiMongodb, level: 'Básico' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 'Intermedio' },
    { name: 'MySQL', icon: SiMysql, level: 'Básico' },
    { name: 'SQLServer', icon: FaDatabase, level: 'Básico' }, // Usando icono genérico
  ],
  'Herramientas': [
    { name: 'Git', icon: FaGitAlt, level: 'Intermedio' },
    { name: 'Docker', icon: FaDocker, level: 'Intermedio' },
    { name: 'Webpack', icon: SiWebpack, level: 'Básico' },
    { name: 'Figma', icon: SiFigma, level: 'Básico' },
  ],
  'Otros': [
    { name: 'Diseño Responsivo', icon: FaReact, level: 'Avanzado' },
    { name: 'APIs RESTful', icon: FaNodeJs, level: 'Intermedio' },
    { name: 'Metodologías Ágiles', icon: FaReact, level: 'Intermedio' },
  ],
};

// --- El componente principal (sin cambios en la lógica de renderizado) ---
export default function SkillsSection() {
  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        <h2>Habilidades Técnicas</h2>
        <div className={styles.skillsGrid}>
          {Object.entries(skillsData).map(([category, skillList]) => (
            <div key={category} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <ul className={styles.skillList}>
                {skillList.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <li key={skill.name} className={styles.skillItem}>
                      <IconComponent className={styles.skillIcon} aria-hidden="true" />
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>({skill.level})</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}