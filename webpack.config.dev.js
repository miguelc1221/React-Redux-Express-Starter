var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
          'sinon': 'sinon/pkg/sinon'
        }
    },
    module: {
        // don't run babel-loader through the sinon module
        noParse: [/node_modules\/sinon\//],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },{
                test: /\.(scss|css)$/,
                loaders: ['style?sourceMap','css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]','postcss', 'sass']
            },{
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }
        ]
    },
    // required for enzyme to work properly
    externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window'
    },
    postcss: function() {
        return [
            autoprefixer({ browsers: ['last 2 versions'] }),
        ];
    }
};
