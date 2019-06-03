const gulp 	  = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*'],
											rename: {
													'jshint': 		'jshintG',
													'tslint':		'tslintG',
													'pug':			'pugG',
												}});
const config  = require('./gulp-config.js');



gulp.task('plugins', function(done) {
	console.log(plugins);
	return done();
});


gulp.task('clear', clear);

// gulp.task('html', html);
gulp.task('pug', pug);
gulp.task('less', less);
// gulp.task('js', js);
gulp.task('ts', ts);
gulp.task('jsServer', jsServer);
gulp.task('bower', bower);
gulp.task('img', img);
gulp.task('font', font);
gulp.task('audio', audio);
gulp.task('nodemon', nodemon);


gulp.task('build', gulp.series('clear', gulp.parallel('pug', 'less', 'ts', 'jsServer', 'bower', 'img', 'font', 'audio')));

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

gulp.task('default', gulp.parallel('browserSync', 'nodemon', 'watch'));
