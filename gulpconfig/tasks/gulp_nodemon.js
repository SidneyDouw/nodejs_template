module.exports = function(gulp, plugins, config) {

	return plugins.nodemon({
		script: config.paths.src.nodemon,
		ignore: [
			config.paths.src.root, 
			config.paths.dest.root,
			'gulpfile.js',
			'gulp-config.js'
		]
		// watch: config.paths.src.nodemon
	})
	.on('start', function() {
		jsServer();
		setTimeout(() => {
			plugins.browserSync.reload({stream: false});
		}, 2000);
	});

};