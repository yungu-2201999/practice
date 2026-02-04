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
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /.scss$/i,
                use: [
                    // 开发模式直接使用 style-loader 注入样式
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            // Host 应用名称
            name: 'mf_host',
            // 远程应用定义
            remotes: {
                mf_remote: 'mf_remote@http://localhost:3001/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            title: 'Module Federation Host',
        }),
        new WebpackManifestPlugin(),
    ],
};
