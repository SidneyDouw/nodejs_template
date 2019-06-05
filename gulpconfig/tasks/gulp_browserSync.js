module.exports = function(gulp, plugins, config) {
	
	plugins.browserSync.init(config.browserSync);
	return done();
    
};