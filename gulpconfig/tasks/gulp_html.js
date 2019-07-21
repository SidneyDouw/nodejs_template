module.exports = function(gulp, plugins, config) {

	return gulp.src(config.paths.src.html)
	.pipe(gulp.dest(config.paths.dest.root))
	.pipe(plugins.browserSync.stream());

};