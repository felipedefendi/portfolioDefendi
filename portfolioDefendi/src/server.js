const http = require('http');
const fs = require('fs');
const path = require('path');

const routes = {
  '/': 'index.html',
  '/contatos': 'contatos.html',
  '/projetos': 'projetos.html',
  '/curriculo': 'curriculo.html',
  '/sobre': 'sobre.html',
  '/tecnologias': 'tecnologias.html',
};

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
};

const getMimeType = (filePath) => {
  const extname = path.extname(filePath);
  return mimeTypes[extname] || 'application/octet-stream';
};

const server = http.createServer((req, res) => {
  const route = req.url;

  if (routes.hasOwnProperty(route)) {
    const filePath = path.join(__dirname, '..', 'Pages', routes[route]);

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Arquivo não encontrado!');
        return;
      }
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Erro interno do servidor!');
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', getMimeType(filePath));
        res.end(data);
      });
    });
  } else if (route === '/style.css') {
    const filePath = path.join(__dirname, '..', 'style', 'style.css');

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Arquivo CSS não encontrado!');
        return;
      }

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Erro interno do servidor!');
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', getMimeType(filePath));
        res.end(data);
      });
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Rota não encontrada!');
  }
});
const port = 3000;

server.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}/`);
});