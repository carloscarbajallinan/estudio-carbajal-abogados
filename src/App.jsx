import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsSection from './components/ClientsSection';
import PracticeAreas from './components/PracticeAreas';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ContactBooking from './components/ContactBooking';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Navegación */}
      <Navbar onOpenBooking={scrollToContact} />

      {/* Contenido Principal */}
      <main className="flex-1">
        <Hero onOpenBooking={scrollToContact} />
        <ClientsSection />
        <PracticeAreas onOpenBooking={scrollToContact} />
        <AboutSection />
        <TeamSection onOpenBooking={scrollToContact} />
        <ContactBooking />
      </main>

      {/* Pie de página */}
      <Footer />

      {/* Botón WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
