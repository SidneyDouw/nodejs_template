const gulp = require('./gulpconfig/gulp-plugins').gulp
const plugins = require('./gulpconfig/gulp-plugins').plugins

const config  = require('./gulpconfig/gulp-config');

// Tasks

function loadPlugin(file) {
	return require(file).bind(null, gulp, plugins, config)
}

const audio = loadPlugin('./gulpconfig/tasks/gulp_audio')
const browserSync = loadPlugin('./gulpconfig/tasks/gulp_browserSync')
const clear = loadPlugin('./gulpconfig/tasks/gulp_clear')
const font = loadPlugin('./gulpconfig/tasks/gulp_font')
const html = loadPlugin('./gulpconfig/tasks/gulp_html')
const img = loadPlugin('./gulpconfig/tasks/gulp_img')
const js = loadPlugin('./gulpconfig/tasks/gulp_js')
const jsServer = loadPlugin('./gulpconfig/tasks/gulp_jsServer')
const less = loadPlugin('./gulpconfig/tasks/gulp_less')
const nodemon = loadPlugin('./gulpconfig/tasks/gulp_nodemon')
const pug = loadPlugin('./gulpconfig/tasks/gulp_pug')
const ts = loadPlugin('./gulpconfig/tasks/gulp_ts')


gulp.task('test', function(done) {
	console.log("Your gulp is up and running!")
	return done()
})

gulp.task('plugins', function(done) {
	console.log(plugins);
	return done();
});


gulp.task('clear', clear);

gulp.task('html', html);
gulp.task('pug', pug);
gulp.task('less', less);
gulp.task('js', js);
gulp.task('ts', ts);
gulp.task('jsServer', jsServer);
gulp.task('img', img);
gulp.task('font', font);
gulp.task('audio', audio);
gulp.task('nodemon', nodemon);


gulp.task('build', gulp.series('clear', gulp.parallel(
	// 'html",'
	'pug', 
	'less',
	// 'js',
	'ts', 
	'jsServer', 
	'img', 
	'font', 
	'audio'
)));

gulp.task('browserSync', gulp.series('build', browserSync));

gulp.task('watch', function(done) {

	// gulp.watch(config.paths.src.html, gulp.parallel('html'));
	gulp.watch('src/**/*.pug', gulp.parallel('pug'));
	gulp.watch(config.paths.src.less, gulp.parallel('less'));
	// gulp.watch(config.paths.src.js, gulp.parallel('js'));
	gulp.watch(config.paths.src.ts, gulp.parallel('ts'));
	gulp.watch(config.paths.src.img, gulp.parallel('img'));

	return done();

});

gulp.task('default', function(done) {
	gulp.parallel('browserSync', 'nodemon', 'watch')

	return done()
});
