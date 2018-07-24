const passport = require('passport');

const jwt = require('./jwt');
const local = require('./local');

module.exports = () => {
  passport.use(local);
  passport.use(jwt);
};