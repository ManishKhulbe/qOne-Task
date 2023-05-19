let JwtStrategy = require("passport-jwt").Strategy;
let ExtractJwt = require("passport-jwt").ExtractJwt;
const { ObjectId } = require("mongodb");
let User = require("../module/v1/userLogin/userModal");
const customException = require("../customException");

module.exports = function (passport) {
  passport.use(
    new JwtStrategy(
      {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken({
          failMessage: "No token provided",
        }),
      },
      function (jwtPayload, done) {
        if (!jwtPayload) {
          return done(customException.unauthorizedUser(), false);
        }
        return User.findOne({ _id: new ObjectId(jwtPayload.userID) })
          .then((user) => {
            return done(null, user);
          })
          .catch((err) => {
            return done(err);
          });
      }
    )
  );
};
