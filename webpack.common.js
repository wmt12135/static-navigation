const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tailwindcss = require('tailwindcss');
const { DefinePlugin } = require('webpack');
const { ProgressPlugin } = require('webpack');
//公共环境
module.exports = {
    entry: {
        app: './src/views/app',
        study: './src/views/study',
        play: './src/views/play'
    },
    output: {
        assetModuleFilename: 'static/[contenthash][ext][query]',
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
    plugins: [
        new ProgressPlugin(),
        new CleanWebpackPlugin(),
        new DefinePlugin({
            __VUE_OPTIONS_API__ : true,
            __VUE_PROD_DEVTOOLS__ : false
        }),
    ],
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: false,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [
                                    tailwindcss,
                                    autoprefixer,
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.[png|jpg]$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                      maxSize: 4 * 1024,
                    },
                },
            },
        ],
    },

};