import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Mi Portafolio Clásico',
  description: 'Portafolio con estilo elegante y atemporal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="container">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}