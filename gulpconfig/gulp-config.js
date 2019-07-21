const MinifyPlugin = require("babel-minify-webpack-plugin");

const prod = (process.argv[3] == '-p' || process.argv[3] == '--production') ? true : false;

let webPackSourcemaps;

if (prod) {
	console.log('\nUsing Production Build...\n');
	webPackSourcemaps = 'false';
} else {
	webPackSourcemaps = 'eval-source-map';
}


module.exports = {

	paths: {
		src: {
			root:		'src/',
            html: 		'src/*.html',
            pug: 		'src/views/*.pug',
            less:   	'src/less/*.less',
			js: 		'src/js/*.js',
			ts:			'src/ts/*.ts',
			jsMain: 	'src/js/*.js',
			tsMain:		'src/ts/*.ts',
			jsServer:	'server/**/*.js',
			img:		'src/img/**/*',
			font:		'src/fonts/**/*',
			audio:		'src/audio/**/*',
			nodemon:	'server/app.js'
		},
		dest: {
			root: 		'dist/',
            css:    	'dist/css/',
			js: 		'dist/js/',
			img:		'dist/img/',
			font:		'dist/fonts/',
			audio:		'dist/audio/'
		},
		files: {
			css: 'styles.min.css',
			js: 'index.min.js'
		}
    },
    
	browserSync: {
		// server: 'dist/'
		proxy: 'localhost:8080',
		port: 3000,
		https: true
	},
	
	mainBowerFiles: {
		paths: {
			bowerDirectory: '../../bower_components',
			bowerJson: './bower.json'
		},
		overrides: {}
	},
    
	webpack: {
		entry: {
			js: {
				index: './src/js/index.js',
			},
			ts: {
				index: './src/ts/index.ts'
			}
		},
		module: {
			rules: [{
					test: /\.ts?$/,
					exclude: /node_modules/,
					use: [{
						loader: 'ts-loader',
						options: {}
					}],
				}]
		},
		resolve: {
			extensions: ['.ts', '.js']
		},
		output: {
			filename: '[name].min.js'
		},
		mode: prod ? 'production' : 'development',
		devtool: webPackSourcemaps,
		plugins: [
			new MinifyPlugin()
		]
	},

	isProduction: prod
    
};