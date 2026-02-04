const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: 'auto',
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3001,
    },
    plugins: [
        new ModuleFederationPlugin({
            // Remote 应用名称
            name: 'mf_remote',
            // 远程入口文件名
            filename: 'remoteEntry.js',
            exposes: {
                // 暴露可被 Host 引用的模块
                './RemotePrint': './src/print.js',
            },
        }),
        new HtmlWebpackPlugin({
            title: 'Module Federation Remote',
        }),
        new WebpackManifestPlugin(),
    ],
};
