module.exports = function (gulp, plugins, config, done) {
    gulp.src(config.paths.src.js)
        .pipe(
            plugins.jshint({
                esversion: 6,
            }),
        )
        .pipe(plugins.jshint.reporter('jshint-stylish'))

    if (config.webpack.entry.js) {
        config.webpack.entry = config.webpack.entry.js
    }

    return gulp
        .src(config.paths.src.js)
        .pipe(plugins.webpackStream(config.webpack, plugins.webpack))
        .on('error', function (err) {
            config.isProduction ? done(err) : this.emit('end')
        })
        .pipe(gulp.dest(config.paths.dest.js))
        .pipe(plugins.browserSync.stream())
}
