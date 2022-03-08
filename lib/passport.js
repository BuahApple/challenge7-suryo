const passport = require('passport');
const { ExtractJwt } = require('passport-jwt/lib');
const JwtStrategy = require('passport-jwt/lib/strategy');
const LocalStrategy = require('passport-local').Strategy
const { user_game }= require('../models')

// JWT options 
const options = {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),

    secretOrKey:'kata sandi'
}

passport .use(new JwtStrategy (options, async (payload, done) => {
    
    user_game.findByPk (payload.id)
    .then(user => done(null, user))
    .catch(err => done(err, false))
    }))


// fungsi auth
async function authenticate( username, password, done) {
    try {
        const user = await  user_game.authenticate({ username, password})

        return done(null, user)
    }
    catch(err) {
        return done(null, false, {message: err.message})
    }
}

module.exports = passport;