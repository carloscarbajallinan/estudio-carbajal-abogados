import React from 'react';
import { Award, Shield, Check, Clock, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#1B4D4F] font-bold block mb-2">
                Sobre la Firma
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Más de veinte años de experiencia asesorando a empresas y aseguradoras
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              En <strong className="text-slate-900">Estudio Carbajal Abogados</strong>, nuestro objetivo central es brindar una asesoría legal permanente y oportuna. Comprendemos que las contingencias legales no pueden esperar, por lo que ofrecemos una atención cercana que genera tranquilidad y seguridad a nuestros clientes en cada etapa procesal.
            </p>

            <div className="border-l-4 border-[#1B4D4F] pl-4 py-1">
              <p className="text-sm font-semibold text-slate-800">
                “La calidad de nuestros servicios, son nuestra mejor publicidad.”
              </p>
              <span className="text-xs text-slate-500 mt-1 block">
                Principio rector del Estudio Carbajal Abogados
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded border border-slate-200 bg-slate-50">
                <span className="block font-editorial text-2xl font-bold text-[#1B4D4F]">
                  +20 Años
                </span>
                <span className="text-xs text-slate-600 mt-1 block">
                  Experiencia continua asesorando empresas y aseguradoras en el Perú.
                </span>
              </div>
              <div className="p-4 rounded border border-slate-200 bg-slate-50">
                <span className="block font-editorial text-2xl font-bold text-[#1B4D4F]">
                  San Isidro
                </span>
                <span className="text-xs text-slate-600 mt-1 block">
                  Sede en Urb. Córpac, en el corazón del centro empresarial y financiero.
                </span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 space-y-6">
              <h3 className="font-editorial text-xl font-bold text-slate-900">
                Nuestros Compromisos Fundamentales
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D4F]/10 text-[#1B4D4F] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="block text-slate-900">Asesoría Legal Permanente:</strong>
                    <span className="text-xs text-slate-600">Disponibilidad y acompañamiento continuo para resolver dudas y contingencias empresariales al instante.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D4F]/10 text-[#1B4D4F] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="block text-slate-900">Seguridad y Tranquilidad:</strong>
                    <span className="text-xs text-slate-600">Estrategias procesales pensadas y estudiadas rigurosamente para mitigar contingencias y proteger el patrimonio del cliente.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D4F]/10 text-[#1B4D4F] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="block text-slate-900">Especialización Sectorial:</strong>
                    <span className="text-xs text-slate-600">Sólido dominio en compañías de seguros (pólizas, siniestros y reaseguros), clínicas privadas y derecho corporativo.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded bg-white border border-slate-200 text-xs text-slate-600">
                <strong className="text-slate-800">Registro Único de Contribuyente (RUC):</strong> 10066665360
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
