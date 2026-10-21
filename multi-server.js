const http = require('http');
const fs = require('fs');
const path = require('path');

const versions = [
  { port: 5001, file: 'version-1-editorial-prestige.html', name: 'Versión 1: Editorial Prestige' },
  { port: 5002, file: 'version-2-corporate-san-isidro.html', name: 'Versión 2: Corporativo San Isidro' },
  { port: 5003, file: 'version-3-minimal-executive.html', name: 'Versión 3: Minimal Executive' },
  { port: 5004, file: 'version-4-insurance-defense-split.html', name: 'Versión 4: Dual Portal' },
  { port: 5005, file: 'version-5-conversion-leadgen.html', name: 'Versión 5: Alta Conversión (CRO)' },
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
    console.log(`[ONLINE] ${name} escuchando en http://localhost:${port}/`);
  });
});
