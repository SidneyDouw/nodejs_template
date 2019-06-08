module.exports = function(gulp, plugins, config, args) {

	return plugins.nodemon({
		script: config.paths.src.nodemon,
		ignore: [
			config.paths.src.root, 
			config.paths.dest.root,
			'gulpfile.js',
			'./gulpconfig/'
		]
		// watch: config.paths.src.nodemon
	})
	.on('start', function() {
		args[0]();
		setTimeout(() => {
			plugins.browserSync.reload({stream: false});
		}, 1000);
	});

};