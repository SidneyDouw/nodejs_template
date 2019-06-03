module.exports = function() {

	gulp.src(config.paths.src.ts)
	.pipe(plugins.tslint());

	if (config.webpack.entry.ts) {
		config.webpack.entry = config.webpack.entry.ts;
	}
	
	return gulp.src(config.paths.src.tsMain)
	.pipe(plugins.webpackStream(config.webpack, plugins.webpack))
	.on('error', function() {
		this.emit('end');
	})
	.pipe(gulp.dest(config.paths.dest.js))
	.pipe(plugins.browserSync.stream());

};