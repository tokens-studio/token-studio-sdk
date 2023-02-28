const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    entry: './server/main.tsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new HtmlWebpackPlugin({
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            onlyCompileBundledFiles: true,
                            projectReferences: true,
                            //Do not use rel paths here
                            //https://github.com/TypeStrong/ts-loader/issues/405
                            configFile: 'tsconfig.cypress.json'
                        }
                    }
                ]
            }
        ]
    }
};