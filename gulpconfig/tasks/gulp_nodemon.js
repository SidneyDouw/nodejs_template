module.exports = async function (gulp, plugins, config) {
    return plugins
        .nodemon({
            script: 'dist/server/app.js',
            watch: 'dist/server/app.js',
            nodeArgs: ['-r', 'source-map-support/register'],
            env: {
                NODE_ENV: 'development',
            },
        })
        .on('start', () => {
            plugins.browserSync.reload({ stream: false })
        })
}
