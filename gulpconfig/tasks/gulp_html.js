module.exports = function(gulp, plugins, config) {

	let timestamp = Date.now();

	let htmlRegex = new RegExp('href="([a-z]*)\.html"', "g")
	let cssRegex = new RegExp("(css)\/(" + config.paths.files.css + ")");
	let jsRegex = new RegExp("(js)\/(" + config.paths.files.js + ")");

	return gulp.src(config.paths.src.html)
	.pipe(plugins.if(config.isProduction, plugins.replace(htmlRegex, 'href="$1"')))
	.pipe(plugins.if(config.isProduction, plugins.replace(cssRegex, '$1.'+timestamp+'/$2')))
	.pipe(plugins.if(config.isProduction, plugins.replace(jsRegex, '$1.'+timestamp+'/$2')))
	.pipe(gulp.dest(config.paths.dest.root))
	.pipe(plugins.browserSync.stream());

};