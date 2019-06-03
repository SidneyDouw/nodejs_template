module.exports = function() {

    let timestamp = Date.now();

	let htmlRegex = new RegExp('href="([a-z]*)\.html"', "g")
	let cssRegex = new RegExp("(css)\/(" + config.paths.files.css + ")");
	let jsRegex = new RegExp("(js)\/(" + config.paths.files.js + ")");

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
	.pipe(plugins.if(config.isProduction, plugins.replace(htmlRegex, 'href="$1"')))
	.pipe(plugins.if(config.isProduction, plugins.replace(cssRegex, '$1.'+timestamp+'/$2')))
	.pipe(plugins.if(config.isProduction, plugins.replace(jsRegex, '$1.'+timestamp+'/$2')))
	.pipe(gulp.dest(config.paths.dest.root))
	.pipe(plugins.browserSync.stream());

};