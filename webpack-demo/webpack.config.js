const path = require("path")

//热模块替换的插件  HMR  在webback中内置了
const webpack = require("webpack")

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/main.js", //entry 是指打包文件的入口,可以使用相对路径
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./src", //托管的根目录
        hot: true, //我要开启或关闭HMR
        open: true, //自动打开浏览器
        port: 3000 //设置devServer的端口号
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: "development"
}