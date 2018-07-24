const passportJWT = require('passport-jwt');

const CONFIG = require('../index');
const User = require('../../models/user/user');

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

module.exports = new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: CONFIG.SECRET
  },
  (jwtPayload, cb) => User.findById(jwtPayload.id)
    .then(user => cb(null, user))
    .catch(err => cb(err))
);
