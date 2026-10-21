import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, Calendar } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      
      {/* Barra superior de contacto rápido */}
      <div className="bg-[#1B4D4F] text-white py-2 px-4 sm:px-8 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Calle 31 N° 170 Of. 203, Urb. Córpac, San Isidro - Lima</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>estudiocarbajal@usa.com</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-slate-200">Central: (01) 476-2155</span>
            <a 
              href="tel:971111730" 
              className="flex items-center gap-1 text-emerald-200 hover:text-white font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>971 111 730</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logotipo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#1B4D4F] text-white flex items-center justify-center font-serif text-xl font-bold shadow-xs">
              C
            </div>
            <div>
              <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-slate-900 block leading-none">
                ESTUDIO CARBAJAL
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#1B4D4F] font-semibold block mt-1">
                Abogados • RUC: 10066665360
              </span>
            </div>
          </a>

          {/* Menú Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#inicio" className="hover:text-[#1B4D4F] transition-colors">
              Inicio
            </a>
            <a href="#clientes" className="hover:text-[#1B4D4F] transition-colors">
              Clientes Principales
            </a>
            <a href="#areas" className="hover:text-[#1B4D4F] transition-colors">
              Áreas de Práctica
            </a>
            <a href="#nosotros" className="hover:text-[#1B4D4F] transition-colors">
              La Firma
            </a>
            <a href="#equipo" className="hover:text-[#1B4D4F] transition-colors">
              Nuestros Abogados
            </a>
            <a href="#contacto" className="hover:text-[#1B4D4F] transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 rounded bg-[#1B4D4F] hover:bg-[#163E40] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar Cita</span>
            </button>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-slate-700 hover:bg-slate-100"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-3">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 border-b border-slate-100"
          >
            Inicio
          </a>
          <a
            href="#clientes"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 border-b border-slate-100"
          >
            Clientes Principales
          </a>
          <a
            href="#areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 border-b border-slate-100"
          >
            Áreas de Práctica
          </a>
          <a
            href="#nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 border-b border-slate-100"
          >
            La Firma
          </a>
          <a
            href="#equipo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 border-b border-slate-100"
          >
            Nuestros Abogados
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800"
          >
            Contacto & Ubicación
          </a>

          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 rounded bg-[#1B4D4F] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita de Consulta</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
