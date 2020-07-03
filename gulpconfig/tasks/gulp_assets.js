// prettier-ignore
module.exports = function (gulp, plugins, config) {
    return gulp
        .src(config.paths.src.assets)
        .pipe(gulp.dest(config.paths.dest.assets))
}
