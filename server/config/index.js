/**
 * Module dependencies.
 */
const extend = require('util')._extend;

const development = require('./env/development');
const common = require('./env/common');
const production = require('./env/production');

/**
 * Expose
 */
module.exports = {
  development: extend(development, common),
  production: extend(production, common),
}[process.env.NODE_ENV || 'development'];
