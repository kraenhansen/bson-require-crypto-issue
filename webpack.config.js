const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{ test: /\.(js|jsx)$/i, loader: 'babel-loader' },
        ],
    },
};