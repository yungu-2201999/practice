const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } =require('webpack-manifest-plugin')


module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出',
            minify: {
                collapseWhitespace: true,          // 折叠空白字符
                removeComments: true,              // 移除注释
                removeRedundantAttributes: true,   // 移除冗余属性
                removeScriptTypeAttributes: true,  // 移除script的type属性
                removeStyleLinkTypeAttributes: true, // 移除style/link的type属性
                useShortDoctype: true              // 使用短的doctype
            },
            cache: true,                         // 仅在文件更改时重新生成
            hash: false,
        }),
        new WebpackManifestPlugin(/* options */)
    ]
};