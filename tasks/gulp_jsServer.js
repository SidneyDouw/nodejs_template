module.exports = function() {

	return gulp.src(config.paths.src.jsServer)
	.pipe(plugins.jshint({
		esversion: 6
	}))
	.pipe(plugins.jshint.reporter('jshint-stylish'));
};