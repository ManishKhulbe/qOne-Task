
let JwtStrategy = require("passport-jwt").Strategy;
let ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = function (passport) {
    passport.use(
        new JwtStrategy(
            {
                secretOrKey : process.env.secretOrKey,
                jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
            },
            function (jwtPayload, done) {
                return done(null, jwtPayload);
            }
        )
    );
};
