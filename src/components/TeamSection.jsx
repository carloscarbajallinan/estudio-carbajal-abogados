import React from 'react';
import { Mail, Phone, GraduationCap, Award, Shield } from 'lucide-react';

export default function TeamSection({ onOpenBooking }) {
  const associates = [
    {
      name: 'Dr. Julio Chavarry Valdez',
      role: 'Abogado Asociado',
      area: 'Especializado en Civil y Laboral',
      description: 'Litigios civiles, controversias contractuales, relaciones laborales y solución de conflictos.'
    },
    {
      name: 'Dr. Osmar Sánchez Bustamante',
      role: 'Abogado Asociado',
      area: 'Especializado en Penal y Seguros',
      description: 'Patrocinio procesal penal corporativo, delitos patrimoniales y controversias complejas de siniestros.'
    },
    {
      name: 'Dr. Daniel Liñan Gambini',
      role: 'Abogado Asociado',
      area: 'Especializado en Administrativo',
      description: 'Procedimientos administrativos ante organismos estatales, reguladores y fuero contencioso administrativo.'
    },
    {
      name: 'Dra. Jandira Barrera Lagos',
      role: 'Abogada Asociada',
      area: 'Especializada en Familia',
      description: 'Asesoría y patrocinio en derecho de familia, sucesiones, partición de patrimonios y conciliaciones.'
    }
  ];

  return (
    <section id="equipo" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#1B4D4F] font-bold block mb-2">
            Cuerpo Profesional
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Nuestros Abogados
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Un equipo multidisciplinario con sólida formación técnica y experiencia comprobada en las distintas ramas del derecho.
          </p>
        </div>

        {/* Tarjeta Destacada: Socio Principal Dr. Carlos Alberto Carbajal Gonzales */}
        <div className="mb-12 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-slate-200 border-4 border-white shadow-sm flex items-center justify-center text-slate-400 font-serif text-5xl">
                <span>⚖</span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#1B4D4F] block">
                  Socio Principal & Fundador
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Dr. Carlos Alberto Carbajal Gonzales
                </h3>
              </div>

              {/* Formación y Grados Reales del Brochure */}
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <GraduationCap className="w-4 h-4 text-[#1B4D4F] shrink-0" />
                <span>Especialización Penal y <strong>Máster en Derecho Empresarial por la Universidad de Lima</strong>.</span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Más de veinte años de trayectoria asesorando de manera continua a empresas de seguros de primer orden en el Perú, clínicas del sector salud y empresas privadas. Ejerce la dirección estratégica de los litigios de mayor complejidad del despacho.
              </p>

              {/* Áreas de Trabajo del Socio Principal */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 block mb-2">
                  Áreas de Trabajo:
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded bg-white border border-slate-200 text-xs font-medium text-slate-800">
                    Derecho Corporativo
                  </span>
                  <span className="px-3 py-1 rounded bg-[#1B4D4F]/10 border border-[#1B4D4F]/20 text-xs font-semibold text-[#1B4D4F]">
                    Derecho de Seguros
                  </span>
                  <span className="px-3 py-1 rounded bg-white border border-slate-200 text-xs font-medium text-slate-800">
                    Derecho Penal Económico
                  </span>
                </div>
              </div>

              {/* Datos Directos del Socio Principal */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#1B4D4F]" />
                  <span>Contacto: 971 111 730</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#1B4D4F]" />
                  <span>estudiocarbajal@usa.com</span>
                </span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold text-[#1B4D4F] hover:underline cursor-pointer"
                >
                  Solicitar Consulta con el Socio Principal →
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Abogados Asociados del Estudio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {associates.map((lawyer, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  {lawyer.role}
                </span>
                <h4 className="font-editorial text-lg font-bold text-slate-900 mt-1">
                  {lawyer.name}
                </h4>
                <div className="inline-block mt-2 px-2.5 py-1 rounded bg-slate-100 text-xs font-semibold text-[#1B4D4F]">
                  {lawyer.area}
                </div>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  {lawyer.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={onOpenBooking}
                  className="text-xs text-slate-600 hover:text-[#1B4D4F] font-medium cursor-pointer"
                >
                  Agendar consulta →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
