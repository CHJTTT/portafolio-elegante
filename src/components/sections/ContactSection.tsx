// components/sections/ContactSection.tsx
import styles from './ContactSection.module.css';

export default function ContactSection() {
  // Aquí podrías añadir lógica para manejar el envío del formulario
  // (ej. usando state y una API route o un servicio como Formspree)

  return (
    <section id="contact" className={`section section-alt ${styles.contactSection}`}>
      <div className="container">
        <h2>Contacto</h2>
        <p className={styles.contactIntro}>
          ¿Interesado en colaborar o tienes alguna pregunta? No dudes en escribirme.
          Siempre estoy abierto a nuevas ideas y conversaciones interesantes.
        </p>
        <form className={styles.contactForm} /* onSubmit={handleSubmit} */ >
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows={6} required className={styles.formTextarea}></textarea>
          </div>
          <button type="submit" className={`btn ${styles.submitBtn}`}>Enviar Mensaje</button>
        </form>
        {/* También puedes añadir enlaces a LinkedIn, GitHub, etc. aquí */}
        {/* <div className={styles.socialLinks}> ... </div> */}
      </div>
    </section>
  );
}