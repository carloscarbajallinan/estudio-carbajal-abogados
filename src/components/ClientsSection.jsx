import React from 'react';
import { Shield, Building, Stethoscope, Briefcase } from 'lucide-react';

export default function ClientsSection() {
  const clients = [
    {
      name: 'Pacífico Seguros',
      category: 'Compañía de Seguros & Reaseguros',
      icon: Shield,
      description: 'Proveedor legal en litigios de cobertura, siniestros y asesoría técnica aseguradora.'
    },
    {
      name: 'Rímac Seguros y Reaseguros',
      category: 'Compañía de Seguros',
      icon: Shield,
      description: 'Asesoría y patrocinio legal especializado en siniestralidad y derecho de seguros.'
    },
    {
      name: 'Rímac EPS',
      category: 'Empresa Prestadora de Salud',
      icon: Stethoscope,
      description: 'Soporte jurídico en planes de salud, coberturas y controversias asistenciales.'
    },
    {
      name: 'Clínica Internacional',
      category: 'Sector Salud & Clínicas',
      icon: Stethoscope,
      description: 'Asesoramiento legal en contingencias de salud y responsabilidad sanitaria.'
    },
    {
      name: 'Protecta Security',
      category: 'Compañía de Seguros de Vida',
      icon: Shield,
      description: 'Patrocinio en siniestros y consultoría jurídica aseguradora.'
    },
    {
      name: 'HDI Seguros',
      category: 'Compañía Aseguradora',
      icon: Shield,
      description: 'Gestión y patrocinio procesal en controversias de seguros patrimoniales.'
    },
    {
      name: 'ADECCO Perú',
      category: 'Recursos Humanos & Servicios Corporativos',
      icon: Briefcase,
      description: 'Asesoría jurídica corporativa y soporte laboral empresarial.'
    },
    {
      name: 'Touring Escuela SAC',
      category: 'Servicios de Capacitación y Transporte',
      icon: Building,
      description: 'Asesoramiento legal integral en asuntos corporativos y administrativos.'
    }
  ];

  return (
    <section id="clientes" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#1B4D4F] font-bold block mb-2">
            Trayectoria Comprobada
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
            Nuestros Clientes Principales
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            A lo largo de más de dos décadas, hemos brindado soporte legal continuo a corporaciones líderes del mercado asegurador, empresas prestadoras de salud (EPS), clínicas privadas y firmas multinacionales.
          </p>
        </div>

        {/* Grilla de Clientes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {clients.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-5 rounded-lg border border-slate-200 hover:border-[#1B4D4F]/40 transition-colors shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-slate-100 text-[#1B4D4F] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {client.name}
                  </h3>
                  <span className="text-xs font-medium text-[#1B4D4F] block mt-1">
                    {client.category}
                  </span>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
