module.exports = function(done) {

	plugins.browserSync.init(config.browserSync);
	return done();
    
};