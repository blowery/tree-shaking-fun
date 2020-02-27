const config = require( './webpack.config.js' );

delete config.entry.index;
delete config.entry.one;

module.exports = config;