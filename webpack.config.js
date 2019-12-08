var webpack = require('webpack');

module.exports = {
    entry: './src/components/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true, // hot loading
        inline: true,
        host: '0.0.0.0', // 0.0.0.0 : in case of using remote server
        port: 4000,
        contentBase: __dirname + '/public/' // index file's path
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: [
                    'react-hot-loader/webpack', 
                    'babel-loader?' + JSON.stringify({
                        cacheDirectory: true,
                        presets: ['es2015', 'stage-0', 'react']
                    })
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};