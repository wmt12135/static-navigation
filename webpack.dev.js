const HtmlWebpackPlugin = require('html-webpack-plugin');
const { default: merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


//开发环境
module.exports = merge(common, {
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        port: 8080,
        // hot: true,
    },
    output: {
        filename: '[name]/[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: './test.html',
            filename: 'test.html',
            chunks: ['app'],
            favicon: './favicon.ico',
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['app'],
            favicon: './favicon.ico',
        }),
        new HtmlWebpackPlugin({
            template: './src/views/study/index.html',
            filename: 'study/index.html',
            chunks: ['study'],
            favicon: './favicon.ico',
        }),
        new HtmlWebpackPlugin({
            template: './src/views/play/index.html',
            filename: 'play/index.html',
            chunks: ['play'],
            favicon: './favicon.ico',
        })
    ],
});
