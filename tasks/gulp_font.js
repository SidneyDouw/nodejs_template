module.exports = function() {

	return gulp.src(config.paths.src.font)
	.pipe(gulp.dest(config.paths.dest.font));

};