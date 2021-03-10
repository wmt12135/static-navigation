const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { default: merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const minifyObj = {
    html5: true,
    removeComments: true,
    collapseWhitespace: true,
    minifyCss: true,
}

//生产环境
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'js/[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[contenthash].css'
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
    optimization: {
        minimize: true,
        minimizer: [
            '...',
            new CssMinimizerPlugin({
                test: /\.css$/i,
                parallel: true,
            }),
        ],
    },
});