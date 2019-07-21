module.exports = function(gulp, plugins, config) {

	return gulp.src(config.paths.src.pug)
    .pipe(plugins.plumber(function(error) {
		plugins.util.log(plugins.util.colors.red('--------------------------------------------------\n\n'))
		plugins.util.log(plugins.util.colors.red('Error (' + error.plugin + '):\n' + error.message + '\n\n'));
		plugins.util.log(plugins.util.colors.red('--------------------------------------------------\n'))
	}))
    .pipe(plugins.pug())
    .on('error', function() {
        this.emit('end');
	})
	.pipe(gulp.dest(config.paths.dest.root))
	.pipe(plugins.browserSync.stream());

};