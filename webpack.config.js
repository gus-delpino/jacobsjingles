var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

// ----- PLUGINS
//HTML Webpack Plugin
// var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: APP_DIR + '/index.html',
//     filename: 'index.html'
// });

var IndexHTMLCopyPlugin = new CopyWebpackPlugin([
    { from: APP_DIR + '/index.html', to: BUILD_DIR + '/index.html' }
]);

//Main CSS File
var CSSExtractTextPlugin = new ExtractTextPlugin('css/style.css');

//Images
var ImagesCopyPlugin = new CopyWebpackPlugin([
        { from: __dirname + '/assets/img/albums',    to: BUILD_DIR + '/img/albums'},
        { from: __dirname + '/assets/img/biography', to: BUILD_DIR + '/img/biography'},
        { from: __dirname + '/assets/img/gallery',   to: BUILD_DIR + '/img/gallery'}
    ]);

module.exports = {
    entry: {
        app : APP_DIR + '/index.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    watch: true,
    module: {
        loaders: [
            // JSX
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            //LESS
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', "css-loader!less-loader", {publicPath: '../'})
            },
            //CSS
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader', {publicPath: '../'})
            },

            //IMAGES IN CSS FILES, MOVE TO IMG/ELEMENTS
            {
                test: /\.(jpg|jpeg|png|bmp)$/,
                loader: 'file-loader?name=img/elements/[name].[ext]'
            },
            //FONTS
            //Entypo - fontawesome
            {
                test: /\.(woff|woff2)(\?49384070)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            //All other fonts
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        IndexHTMLCopyPlugin,
        CSSExtractTextPlugin,
        ImagesCopyPlugin
    ]
};