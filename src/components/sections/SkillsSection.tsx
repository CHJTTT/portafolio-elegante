// components/sections/SkillsSection.tsx
import styles from './SkillsSection.module.css';
// Podrías importar iconos aquí si quieres (ej. de react-icons)

const skills = {
  'Lenguajes': ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3/SASS'],
  'Frameworks/Librerías': ['React', 'Next.js', 'Node.js', 'Express'],
  'Bases de Datos': ['MongoDB', 'PostgreSQL', 'MySQL'],
  'Herramientas': ['Git', 'Docker', 'Webpack', 'Figma', 'VS Code'],
  'Otros': ['Diseño Responsivo', 'APIs RESTful', 'Metodologías Ágiles']
};

export default function SkillsSection() {
  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        <h2>Habilidades Técnicas</h2>
        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <ul className={styles.skillList}>
                {skillList.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    {/* Podrías poner un icono antes del skill */}
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}