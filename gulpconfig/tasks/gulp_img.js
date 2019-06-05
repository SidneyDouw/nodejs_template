module.exports = function(gulp, plugins, config) {

	return gulp.src(config.paths.src.img)
    .pipe(plugins.imagemin([
		plugins.imagemin.jpegtran({progressive: true})
	], {
		verbose: true
	}))
    .pipe(gulp.dest(config.paths.dest.img));

};