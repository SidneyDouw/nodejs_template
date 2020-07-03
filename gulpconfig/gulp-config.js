const MinifyPlugin = require('babel-minify-webpack-plugin')

const prod = process.argv[3] == '-p' || process.argv[3] == '--production' ? true : false

let webPackSourcemaps = prod ? 'false' : 'eval-source-map'

if (prod) console.log('\nUsing Production Build...\n')

let Configuration = function () {
    this.paths = {
        src: {
            // html: 'src/client/html/**/*.html',
            pug: 'src/pug/**/*.pug',
            less: 'src/client/less/**/*.less',
            // js: 		'src/client/js/**/*.js',
            ts: 'src/client/ts/**/*.ts',
            // jsServer:	'src/server/**/*.js',
            tsServer: 'src/server/**/*.ts',
            // img: 'src/client/img/**/*',
            assets: 'src/client/assets/**/*',
        },
        dest: {
            root: 'dist/',
            client: 'dist/client/',
            server: 'dist/server/',
            views: 'dist/views/',
            css: 'dist/client/css/',
            js: 'dist/client/js/',
            img: 'dist/client/img/',
            assets: 'dist/client/assets/',
        },
        files: {
            css: 'styles.min.css',
            js: 'index.min.js',
        },
    }

    this.browserSync = {
        // server: 'dist/'
        proxy: 'localhost:8080',
        port: 3000,
        https: true,
    }

    this.webpack = {
        entry: {
            js: {
                index: './src/client/js/index.js',
                // index2: ./src/client/js/index2.js
            },
            ts: {
                index: './src/client/ts/index.ts',
                // index2: ./src/client/ts/index2.ts
            },
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {},
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            filename: '[name].min.js',
        },
        mode: prod ? 'production' : 'development',
        devtool: webPackSourcemaps,
        plugins: [new MinifyPlugin()],
    }

    this.isProduction = prod
}

module.exports = new Configuration()
