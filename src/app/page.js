'use client';
import Book from '../components/Book';

// Páginas internas del libro
function Portada() {
  return <h1 className="titulo">Mi Portafolio Clásico</h1>;
}
function SobreMi() {
  return (
    <>
      <h2 className="subtitulo">Sobre mí</h2>
      <p>Soy amante de la música clásica, los libros y un buen vino…</p>
    </>
  );
}
function Proyectos() {
  return (
    <>
      <h2 className="subtitulo">Proyectos</h2>
      <ul>
        <li>Proyecto A</li>
        <li>Proyecto B</li>
      </ul>
    </>
  );
}
function Contacto() {
  return (
    <>
      <h2 className="subtitulo" id="contacto">Contacto</h2>
      <p>Email: tu-email@example.com</p>
    </>
  );
}

export default function HomePage() {
  const pages = [Portada, SobreMi, Proyectos, Contacto];
  return (
    <section className="container">
      <Book pages={pages} />
    </section>
  );
}