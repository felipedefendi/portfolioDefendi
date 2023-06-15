const path = require('path');

module.exports = {
  mode: 'production', // Defina como 'production' para otimização de produção
  target: 'web', // Defina como 'node' se você estiver construindo para o ambiente Node.js

  entry: './src/server.js', // Arquivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Pasta de saída do build
    filename: 'bundle.js', // Nome do arquivo de saída
  },
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      fs: require.resolve('browserify-fs'),
      path: require.resolve('path-browserify'),
      url: require.resolve("url"),
      stream: require.resolve("stream-browserify")
    },
  },
};