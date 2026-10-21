import React from 'react';
import { ShieldCheck, Building2, Scale, AlertOctagon, FileText, Users, ArrowRight } from 'lucide-react';

export default function PracticeAreas({ onOpenBooking }) {
  const areas = [
    {
      title: 'Derecho de Seguros y Reaseguros',
      icon: ShieldCheck,
      highlight: true,
      description: 'Más de dos décadas brindando soporte especializado a aseguradoras líderes (Pacífico Seguros, Rímac, Protecta, HDI).',
      points: [
        'Atención y liquidación jurídica de siniestros complejos.',
        'Controversias de cobertura y reclamos de pólizas.',
        'Acciones de recupero y subrogación aseguradora.',
        'Asesoría técnica y regulatoria en seguros y EPS.'
      ]
    },
    {
      title: 'Derecho Corporativo y Empresarial',
      icon: Building2,
      description: 'Asesoría jurídica preventiva y permanente orientada a la protección y crecimiento de las empresas.',
      points: [
        'Gobierno corporativo y contratos mercantiles.',
        'Prevención de riesgos legales y cumplimiento normativo.',
        'Estructuración de acuerdos comerciales y societarios.',
        'Asistencia en negociaciones estratégicas.'
      ]
    },
    {
      title: 'Derecho Civil y Comercial',
      icon: Scale,
      description: 'Patrocinio procesal y resolución de controversias contractuales y patrimoniales en fueros judiciales y arbitrales.',
      points: [
        'Indemnización por daños y perjuicios (responsabilidad civil).',
        'Incumplimiento y resolución de contratos.',
        'Cobranza judicial de deudas complejas y títulos valores.',
        'Derechos reales, propiedades y garantías.'
      ]
    },
    {
      title: 'Derecho Penal y Procesal Penal',
      icon: AlertOctagon,
      description: 'Defensa técnica especializada en materia penal sustantiva y procesal para empresas y particulares.',
      points: [
        'Delitos contra el patrimonio y fraude económico.',
        'Defensa procesal en investigaciones fiscales y juicios.',
        'Patrocinio de la parte agraviada en procesos penales.',
        'Consultoría penal preventiva para directores y gerentes.'
      ]
    },
    {
      title: 'Derecho Administrativo',
      icon: FileText,
      description: 'Gestión y defensa jurídica ante entidades de la administración pública y organismos reguladores.',
      points: [
        'Procedimientos sancionadores ante SUSALUD, SBS e INDECOPI.',
        'Recursos de reconsideración y apelación administrativa.',
        'Procesos Contencioso Administrativos en el Poder Judicial.',
        'Auditoría y asesoría en cumplimiento normativo estatal.'
      ]
    },
    {
      title: 'Derecho Laboral y de Familia',
      icon: Users,
      description: 'Asistencia en relaciones laborales empresariales y patrocinio en asuntos civiles de familia y patrimonio.',
      points: [
        'Asesoría en contratación laboral y desvinculaciones.',
        'Inspecciones laborales y conciliaciones en SUNAFIL.',
        'Procesos de familia, sucesiones y división de herencias.',
        'Acuerdos de régimen patrimonial y de alimentos.'
      ]
    }
  ];

  return (
    <section id="areas" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#1B4D4F] font-bold block mb-2">
              Especialización Jurídica
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Nuestras Áreas de Práctica
            </h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Asesoría legal en asuntos Penales, Civiles, Comerciales y Administrativos, con especial foco en empresas de seguros y corporaciones.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="self-start md:self-end px-5 py-2.5 rounded bg-[#1B4D4F] hover:bg-[#163E40] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <span>Consultar un Asunto</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grilla de Áreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-xl border transition-all flex flex-col justify-between bg-white ${
                  area.highlight
                    ? 'border-[#1B4D4F] shadow-sm ring-1 ring-[#1B4D4F]/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-[#1B4D4F]/10 text-[#1B4D4F] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    {area.highlight && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#1B4D4F] text-white">
                        Especialidad Principal
                      </span>
                    )}
                  </div>

                  <h3 className="font-editorial text-lg font-bold text-slate-900 mb-2">
                    {area.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {area.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-100 pt-4">
                    {area.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="text-[#1B4D4F] font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-[#1B4D4F] hover:text-[#163E40] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Solicitar asesoría en esta materia</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
