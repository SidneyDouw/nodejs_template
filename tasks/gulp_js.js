module.exports = function() {

	gulp.src(config.paths.src.js)
	.pipe(plugins.jshint({
		esversion: 6
	}))
	.pipe(plugins.jshint.reporter('jshint-stylish'));

	if (config.webpack.entry.js) {
		config.webpack.entry = config.webpack.entry.js;
	}

	return gulp.src(config.paths.src.jsMain)
	.pipe(plugins.webpackStream(config.webpack, plugins.webpack))
	.on('error', function() {
		this.emit('end');
	})
	.pipe(gulp.dest(config.paths.dest.js))
	.pipe(plugins.browserSync.stream());

};