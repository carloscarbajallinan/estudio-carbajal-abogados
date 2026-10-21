import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function ContactBooking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: 'Derecho de Seguros y Reaseguros',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `🏛 *CONSULTA LEGAL - ESTUDIO CARBAJAL ABOGADOS*\n\n` +
      `👤 *Remitente:* ${formData.name || 'Consulta web'}\n` +
      `📞 *Teléfono:* ${formData.phone || 'No especificado'}\n` +
      `⚖ *Área de Interés:* ${formData.area}\n` +
      `📝 *Mensaje/Consulta:* ${formData.message || 'Deseo coordinar una cita con el estudio.'}\n\n` +
      `_Enviado desde el sitio web oficial._`
    );
    return `https://wa.me/51971111730?text=${text}`;
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#1B4D4F] font-bold block mb-2">
            Canales de Atención
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Contacto y Agendamiento de Citas
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Comuníquese con nuestra secretaría legal para coordinar una reunión presencial en nuestra sede de San Isidro o mediante videollamada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Información Oficial de Contacto */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-6">
              
              <div>
                <h3 className="font-editorial text-xl font-bold text-slate-900 mb-1">
                  Estudio Carbajal Abogados
                </h3>
                <p className="text-xs text-slate-500">
                  RUC: 10066665360
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1B4D4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Dirección:</strong>
                    <span>Calle 31 N° 170 Of. 203 Urb. Córpac, San Isidro, Lima - Perú</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#1B4D4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Teléfonos:</strong>
                    <span>Central: (01) 476-2155</span>
                    <span className="block">Celulares: 971 111 730 – 975 137 308</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#1B4D4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Correo Electrónico:</strong>
                    <a href="mailto:estudiocarbajal@usa.com" className="text-[#1B4D4F] hover:underline">
                      estudiocarbajal@usa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#1B4D4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Horario de Atención:</strong>
                    <span>Lunes a Viernes: 08:30 a 18:30 hrs</span>
                  </div>
                </div>
              </div>

              {/* Botón directo de WhatsApp Oficial */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="https://wa.me/51971111730?text=Hola,%20deseo%20hacer%20una%20consulta%20legal%20con%20el%20Estudio%20Carbajal%20Abogados."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Escribir directamente al WhatsApp (971 111 730)</span>
                </a>
              </div>

            </div>

          </div>

          {/* Formulario de Solicitud de Cita */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs">
              
              {sent ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-slate-900">
                    Mensaje Recibido
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Gracias por comunicarse con Estudio Carbajal Abogados. Su mensaje ha sido remitido a nuestra secretaría para su pronta atención.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded bg-emerald-600 text-white font-semibold text-xs flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Confirmar también por WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSent(false)}
                      className="px-4 py-2.5 rounded border border-slate-300 text-slate-700 text-xs hover:bg-slate-50 cursor-pointer"
                    >
                      Nuevo mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-editorial text-xl font-bold text-slate-900 mb-2">
                    Formulario de Consulta & Agendamiento
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nombre Completo o Empresa *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ej. Carlos Martínez / Empresa S.A."
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#1B4D4F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Teléfono / Celular de Contacto *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="971 111 730"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#1B4D4F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="contacto@empresa.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#1B4D4F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Área de Interés Legal *
                      </label>
                      <select
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#1B4D4F]"
                      >
                        <option value="Derecho de Seguros y Reaseguros">Derecho de Seguros y Reaseguros</option>
                        <option value="Derecho Corporativo y Empresarial">Derecho Corporativo y Empresarial</option>
                        <option value="Derecho Civil y Comercial">Derecho Civil y Comercial</option>
                        <option value="Derecho Penal y Procesal Penal">Derecho Penal y Procesal Penal</option>
                        <option value="Derecho Administrativo">Derecho Administrativo</option>
                        <option value="Derecho Laboral y de Familia">Derecho Laboral y de Familia</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Descripción de la Consulta o Caso
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Indique brevemente el motivo de su consulta o el tipo de asesoría requerida..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#1B4D4F]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] text-slate-500">
                      Garantía de estricta reserva y secreto profesional.
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded bg-[#1B4D4F] hover:bg-[#163E40] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar Solicitud</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
