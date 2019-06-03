module.exports = function() {

	return gulp.src(config.paths.src.audio)
	.pipe(gulp.dest(config.paths.dest.audio));

};