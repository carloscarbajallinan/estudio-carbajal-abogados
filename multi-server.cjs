const http = require('http');
const fs = require('fs');
const path = require('path');

const versions = [
  { port: 5001, file: 'version-1-editorial-prestige.html', name: 'v1: Editorial Prestige' },
  { port: 5002, file: 'version-2-corporate-san-isidro.html', name: 'v2: Corporativo San Isidro' },
  { port: 5003, file: 'version-3-minimal-executive.html', name: 'v3: Minimal Executive' },
  { port: 5004, file: 'version-4-insurance-defense-split.html', name: 'v4: Dual Portal' },
  { port: 5005, file: 'version-5-conversion-leadgen.html', name: 'v5: Alta Conversión CRO' },
  { port: 5006, file: 'version-6-estudio-rodrigo-inspired.html', name: 'v6: Inspiración Estudio Rodrigo' },
  { port: 5007, file: 'diseno-01-atelier-lujo.html', name: 'v7: L’Atelier Jurídico de Lujo' },
  { port: 5008, file: 'diseno-02-nordic-monolith.html', name: 'v8: Monolito Nórdico Cálido' },
  { port: 5009, file: 'diseno-03-directorio-suizo.html', name: 'v9: Directorio Suizo Internacional' },
  { port: 5010, file: 'diseno-04-narrativa-cronologica.html', name: 'v10: Narrativa Dossier Institucional' },
  { port: 5011, file: 'diseno-05-san-isidro-dark-glass.html', name: 'v11: San Isidro Dark Glass' },
  { port: 5012, file: 'diseno-06-editorial-revista.html', name: 'v12: Revista Legal Contemporánea' },
  { port: 5013, file: 'diseno-07-interactive-slider.html', name: 'v13: Inmersión Cinemática Full-Screen' },
  { port: 5014, file: 'diseno-08-dual-split-monochrome.html', name: 'v14: Bicolor Arquitectónico Split 50/50' },
  { port: 5015, file: 'diseno-09-corporate-firm-uriamendez.html', name: 'v15: Alta Firma Iberoamericana' },
  { port: 5016, file: 'diseno-10-concierge-conversion.html', name: 'v16: Concierge Legal Privado' },
];

versions.forEach(({ port, file, name }) => {
  const filePath = path.join(__dirname, file);

  const server = http.createServer((req, res) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Error al cargar ${file}: ${err.message}`);
        return;
      }
      res.writeHead(200, { 
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache'
      });
      res.end(data);
    });
  });

  server.listen(port, '0.0.0.0', () => {
    console.log(`[ONLINE] ${name} -> http://localhost:${port}/`);
  });
});
