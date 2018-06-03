const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.join(__dirname, "dist");

module.exports = {
    entry: {
        app: "./src/index.tsx",
    },
    output: {
        filename: "bundle.js",
        path: outputPath
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "typings-for-css-modules-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]-[hash:base64:5]',
                            camelCase: true,
                            namedExport: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([outputPath]),
        new HtmlWebpackPlugin({
            title: "laborantin",
            template: "./src/index.html"
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: outputPath
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}
