var nodeExternals = require('webpack-node-externals');

module.exports = {  
  mode: 'none',
  watch: true,
  output: {
    filename: 'scripts.js',    
  },
  target: 'node',
  externals: [nodeExternals()],
};