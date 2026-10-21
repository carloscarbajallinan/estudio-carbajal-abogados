import React from 'react';
import { ShieldCheck, ChevronRight, Phone, CheckCircle } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="inicio" className="bg-white border-b border-slate-200 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mensaje Principal */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 border border-slate-300 text-xs font-semibold text-[#1B4D4F]">
              <ShieldCheck className="w-4 h-4 text-[#1B4D4F]" />
              <span>Estudio Jurídico en San Isidro • Más de 20 años de experiencia</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2]">
              Asesoría legal especializada en asuntos <span className="text-[#1B4D4F]">Seguros</span>, <span className="text-[#1B4D4F]">Corporativos</span>, <span className="text-[#1B4D4F]">Civiles</span> y <span className="text-[#1B4D4F]">Penales</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Nuestros servicios se han especializado en dar soporte continuo a compañías de seguros, clínicas del sector salud y empresas privadas, brindándoles seguridad jurídica y tranquilidad en cada decisión.
            </p>

            {/* Puntos del brochure */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-[#1B4D4F] shrink-0 mt-0.5" />
                <span>Asesoría legal permanente adaptada a las necesidades de cada cliente.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-[#1B4D4F] shrink-0 mt-0.5" />
                <span>Patrocinio procesal respaldado por más de 20 años en tribunales y arbitrajes.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-[#1B4D4F] shrink-0 mt-0.5" />
                <span><em>"La calidad de nuestros servicios son nuestra mejor publicidad."</em></span>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded bg-[#1B4D4F] hover:bg-[#163E40] text-white font-semibold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Agendar Consulta</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="#clientes"
                className="px-6 py-3.5 rounded border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors text-center"
              >
                Conocer Clientes Principales
              </a>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Institucional Limpia */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-6 shadow-sm">
              
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs uppercase tracking-wider text-[#1B4D4F] font-bold block">
                  Perfil de la Firma
                </span>
                <h3 className="font-editorial text-2xl font-bold text-slate-900 mt-1">
                  Estudio Carbajal Abogados
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  RUC: 10066665360 • San Isidro, Lima - Perú
                </p>
              </div>

              {/* Cita del brochure */}
              <blockquote className="p-4 rounded bg-white border-l-4 border-[#1B4D4F] text-slate-700 italic text-sm leading-relaxed">
                “El derecho se aprende estudiando, pero se ejerce pensando.”
                <span className="block not-italic font-semibold text-xs text-slate-500 mt-2">
                  — Eduardo J. Couture
                </span>
              </blockquote>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-medium text-slate-500">Socio Principal:</span>
                  <span className="font-semibold text-slate-900">Dr. Carlos Alberto Carbajal Gonzales</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-medium text-slate-500">Posgrado:</span>
                  <span className="font-semibold text-slate-900">Máster Universidad de Lima</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-medium text-slate-500">Sectores Clave:</span>
                  <span className="font-semibold text-slate-900">Seguros, Salud/Clínicas, Corporativo</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-slate-500">Central Telefónica:</span>
                  <span className="font-semibold text-[#1B4D4F]">(01) 476-2155 / 971 111 730</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
