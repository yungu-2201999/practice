# Base3 config

1. 安装 webpack

```bash
npm install webpack webpack-cli --save-dev
touch webpack.config.js
```

2. 配置 css-loader 部分

```
npm install --save-dev style-loader css-loader sass-loader less-loader mini-css-extract-plugin
```

```js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /.scss$/i,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          ,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /.css$/i,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          ,
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
```
3. 若有其他资源需要在 rules 内配置解析方案/loader

```
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
```
4. 安装HtmlWebpackPlugin插件自动生成html文件
```
npm install --save-dev html-webpack-plugin
```
5. 每次构建先清理dist文件
```
 output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
    clean: true,
   },
```


