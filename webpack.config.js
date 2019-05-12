const path = require("path");

module.exports = {
    entry: './src/application.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: [/\.css$/, /\.scss$/],
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        port: 8080,
        compress: true,
        hot: true,
        contentBase: path.join(__dirname, 'dist')
    },
    watch: true
}