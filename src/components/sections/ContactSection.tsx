// components/sections/ContactSection.tsx
'use client';

import { useState } from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Maneja los cambios en los inputs del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);
  
    const response = await fetch('https://formspree.io/f/mvgakwjq', {
      method: 'POST',
      body: form,
      headers: {
        Accept: 'application/json',
      },
    });
  
    if (response.ok) {
      setStatus('¡Mensaje enviado correctamente!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Hubo un problema al enviar el mensaje.');
    }
  };
  

  return (
    <section id="contact" className={`section section-alt ${styles.contactSection}`}>
      <div className="container">
        <h2>Contacto</h2>
        <p className={styles.contactIntro}>
          ¿Interesado en colaborar o tienes alguna pregunta? No dudes en escribirme.
          Siempre estoy abierto a nuevas ideas y conversaciones interesantes.
        </p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.formTextarea}
            ></textarea>
          </div>
          <button type="submit" className={`btn ${styles.submitBtn}`}>
            Enviar Mensaje
          </button>
        </form>
        {status && <p className={styles.statusMessage}>{status}</p>}
      </div>
    </section>
  );
}
