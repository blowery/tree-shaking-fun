const config = require( './webpack.config.js' );

delete config.entry.one;
delete config.entry.two;

module.exports = config;