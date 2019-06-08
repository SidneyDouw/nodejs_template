module.exports = function(gulp, plugins, config) {
	
	return plugins.browserSync.init(config.browserSync);
    
};