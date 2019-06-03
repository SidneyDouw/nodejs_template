module.exports = function() {

	return gulp.src(plugins.mainBowerFiles(config.mainBowerFiles))
	.pipe(gulp.dest(config.paths.dest.js + 'lib/'));

};