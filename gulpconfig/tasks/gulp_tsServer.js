const fs = require('fs')

module.exports = function (gulp, plugins, config) {
    let tsConfig = JSON.parse(fs.readFileSync(process.cwd() + '/tsconfig.json', 'utf8'))

    return gulp
        .src(config.paths.src.tsServer)
        .pipe(plugins.tslint())
        .pipe(plugins.if(!config.isProduction, plugins.sourcemaps.init()))
        .pipe(
            plugins.typescript({
                ...tsConfig.compilerOptions,
                lib: ['es2016'],
            }),
        )
        .on('error', function () {
            this.emit('end')
        })
        .pipe(plugins.if(!config.isProduction, plugins.sourcemaps.write()))
        .pipe(gulp.dest(config.paths.dest.server))
}
