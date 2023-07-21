const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Alert1234'
}

passport.use(new JWTStrategy(opts, function (jwtPayload, done) {
    User.findById(jwtPayload._id).then(function (user) {

        if (user) {
            return done(null, user);
        }
        return done(null, false);
    }).catch(function (error) {
        console.log('Error in finding the User from JWT')
        return done(error);
    });
}))


module.exports = passport;
