// src/app/layout.tsx

import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import Image from 'next/image'; // Necesitas importar Image
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './globals.css'; // Asegúrate que este archivo exista en app/globals.css

// Configuración de Fuentes (ajusta pesos/estilos si es necesario)
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-lato',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

// Metadatos de tu sitio
export const metadata: Metadata = {
  title: 'PORTAFOLIO CN', // Cambia esto
  description: 'Portafolio de Christian Chinchay, explorando la elegancia clásica en el desarrollo web.', // Cambia esto
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Aplica las variables de fuente al HTML
    <html lang="es" className={`${lato.variable} ${playfairDisplay.variable}`}>
      <body>
        {/* ============================================= */}
        {/*      CONTENEDOR PARA EL FONDO FIJO          */}
        {/* ============================================= */}
        <div
          style={{
            position: 'fixed', // Fijo, no se mueve con el scroll
            width: '100vw',    // Ancho completo de la ventana
            height: '100vh',   // Alto completo de la ventana
            zIndex: -1,       // ¡IMPORTANTE! Detrás de todo el contenido
            overflow: 'hidden', // Evita scrollbars si la imagen es ligeramente más grande
          }}
        >
                   {/* <Image
          src="/images/dark-library-bg.jpg" // <- Tu fondo
          alt="Fondo atmosférico de una biblioteca oscura..."
          fill // <-- USA 'fill'
          quality={80}
          priority
          style={{
            // Aplica objectFit y objectPosition aquí
            objectFit: 'cover',
            objectPosition: 'center center', // O 'center bottom', etc.
            // Aplica filtros aquí también
            filter: 'brightness(0.6) contrast(1.1)', // Tu filtro
          }}
          // QUITA las props: layout, objectFit, objectPosition si estaban fuera de style
        /> */}
          {/* --- Overlay Opcional sobre la imagen fija --- */}
          {/* Descomenta si necesitas oscurecer/teñir más que con el filtro */}
          {/*
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.15)' // Ejemplo: Negro muy sutil al 15%
            }}
          ></div>
          */}
        </div>

        {/* ============================================= */}
        {/*      CONTENIDO PRINCIPAL DE LA PÁGINA       */}
        {/* ============================================= */}
        {/* Header necesita z-index positivo para estar sobre el contenido */}
        <Header />

        {/* Main necesita z-index positivo para estar sobre el fondo fijo */}
        <main style={{ position: 'relative', zIndex: 1 }}>
          {children} {/* Aquí se renderizarán tus páginas (page.tsx) */}
        </main>

        {/* Footer necesita z-index positivo para estar sobre el fondo fijo */}
        <Footer />
      </body>
    </html>
  );
}