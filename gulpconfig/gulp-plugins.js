module.exports = {

    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')({pattern: ['*'],
											rename: {
													'jshint': 		'jshintG',
													'tslint':		'tslintG',
													'pug':			'pugG',
												}})

}