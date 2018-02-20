let path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const merge = require('webpack-merge');
//const template = require('./src/views/index.pug');

let pathsToClean = [
    'dist',
    'build'
];

let pathToViews = path.resolve(__dirname, 'dist', 'views');
console.log("pathToViews:", pathToViews);

// the clean options to use
let cleanOptions = {
    // root:     '/full/webpack/root/path',
    // exclude:  ['shared.js'],
    verbose:  true,
    dry:      false
}

module.exports = {

    entry:
        {   frontend  : './src/frontend_entrypoint.ts',
            bootstrap : './src/bootstrap_entrypoint.ts'
        },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist', 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['css-loader', 'style-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: pathToViews
                        }
                    }
                ]
            },
            {
                test: /\.(pug|jade)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'vs/',
                            outputPath: 'vw/'

                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css',  '.scss', '.sass', '.pug']
    },
    plugins: [

        new CleanWebpackPlugin(pathsToClean, cleanOptions),

        new CopyWebpackPlugin([
            {
                from: 'src/views',
                to: 'views/[name].[ext]'
            }
        ],
            { debug : 'info' }
        ),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),

    ]

};
