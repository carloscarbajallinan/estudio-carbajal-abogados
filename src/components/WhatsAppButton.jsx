import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const phone = '51971111730';
  const message = encodeURIComponent('Hola, me comunico a través del sitio web del Estudio Carbajal Abogados. Deseo realizar una consulta legal.');

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp al Estudio Carbajal Abogados"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-lg transition-colors"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Legal: 971 111 730</span>
      </a>
    </div>
  );
}
