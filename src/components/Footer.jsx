import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Columna 1 */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#1B4D4F] text-white flex items-center justify-center font-serif text-lg font-bold">
                C
              </div>
              <span className="font-editorial text-lg font-bold tracking-tight text-white">
                ESTUDIO CARBAJAL ABOGADOS
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Más de veinte años brindando asesoría legal permanente y especializada en seguros, corporativo, civil y penal en el Perú.
            </p>

            <div className="text-[11px] text-slate-500">
              RUC: 10066665360 • San Isidro, Lima - Perú
            </div>
          </div>

          {/* Columna 2: Áreas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">
              Áreas de Práctica
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#areas" className="hover:text-white transition-colors">Derecho de Seguros y Reaseguros</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Derecho Corporativo y Empresarial</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Derecho Civil y Comercial</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Derecho Penal y Procesal Penal</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Derecho Administrativo</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Derecho Laboral y de Familia</a></li>
            </ul>
          </div>

          {/* Columna 3: Clientes Clave */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">
              Sectores
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Compañías de Seguros</li>
              <li>Empresas EPS & Clínicas</li>
              <li>Sector Corporativo</li>
              <li>Asuntos Civiles y Litigios</li>
              <li><a href="#clientes" className="text-emerald-400 hover:underline">Ver Clientes Principales</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">
              Sede San Isidro
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Calle 31 N° 170 Of. 203 Urb. Córpac, San Isidro</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>(01) 476-2155 / 971 111 730</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>estudiocarbajal@usa.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Estudio Carbajal Abogados. Todos los derechos reservados.
          </div>
          <div>
            Diseño institucional y corporativo.
          </div>
        </div>

      </div>
    </footer>
  );
}
