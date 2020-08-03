const fs = require('fs')

module.exports = function (gulp, plugins, config, done) {
    let tsConfig = JSON.parse(fs.readFileSync(process.cwd() + '/tsconfig.json', 'utf8'))

    // exlude files with *.test.ts
    let s = config.paths.src.tsServer
    let excludeTestString = '!' + s.slice(0, s.indexOf('.ts')) + '.test.ts'

    return gulp
        .src([config.paths.src.tsServer, excludeTestString])
        .pipe(plugins.tslint())
        .pipe(plugins.if(!config.isProduction, plugins.sourcemaps.init()))
        .pipe(
            plugins.typescript({
                ...tsConfig.compilerOptions,
                typeRoots: ['src/@types'],
                lib: ['es2016'],
            }),
        )
        .on('error', function (err) {
            config.isProduction ? done(err) : this.emit('end')
        })
        .pipe(plugins.if(!config.isProduction, plugins.sourcemaps.write()))
        .pipe(gulp.dest(config.paths.dest.server))
}
