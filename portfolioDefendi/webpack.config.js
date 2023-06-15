const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      url: require.resolve('url'),
      stream: require.resolve('stream-browserify')
    },
  },
  module: {
    rules: [
      // Outras regras de configuração de módulos aqui...

      // Regra para processar arquivos HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // Outros plugins aqui...

    // Plugin do HtmlWebpackPlugin para construir a página HTML
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'pages/index.html'), // Caminho para o arquivo HTML de origem
      filename: 'index.html', // Nome do arquivo HTML de saída
      chunks: ['main'] // Nome do chunk JS correspondente
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'pages/contatos.html'), // Caminho para o arquivo HTML de origem
      filename: 'contatos.html', // Nome do arquivo HTML de saída
      chunks: ['main'] // Nome do chunk JS correspondent
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'pages/projetos.html'), // Caminho para o arquivo HTML de origem
      filename: 'projetos.html', // Nome do arquivo HTML de saída
      chunks: ['main'] // Nome do chunk JS correspondent
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'pages/curriculo.html'), // Caminho para o arquivo HTML de origem
      filename: 'curriculo.html', // Nome do arquivo HTML de saída
      chunks: ['main'] // Nome do chunk JS correspondent
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'pages/sobre.html'), // Caminho para o arquivo HTML de origem
      filename: 'sobre.html', // Nome do arquivo HTML de saída
      chunks: ['main'] // Nome do chunk JS correspondent
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'pages/tecnologias.html'), // Caminho para o arquivo HTML de origem
      filename: 'tecnologias.html', // Nome do arquivo HTML de saída
      chunks: ['main'] // Nome do chunk JS correspondent
    })
  ]
};