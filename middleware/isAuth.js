// const ObjectId = require("mongodb").ObjectId;
// const JwtStrategy = require("passport-jwt").Strategy
// const ExtractJwt = require("passport-jwt").ExtractJwt
// const passport = require("passport");
// var opts = {
//   jwtFromRequest: ExtractJwt.fromHeader("authorization"),
//   secretOrKey: process.env.JWT_SECRET,
//   passReqToCallback: true,
// };

// const jwtLogin = new JwtStrategy(opts, async (req, payload, done) => {
//   let getUser = await User.findOne({ _id: new ObjectId(payload._id) });
//   if (getUser) {
//     return done(null, user);
//   }
//   const error = new Error("Please login");
//   error.status = 401;
//   return done(error, false);
// });

// passport.use(jwtLogin);

// module.exports = {
//   isAuth : passport.authenticate("jwt", { session: false }),
// };

let JwtStrategy = require("passport-jwt").Strategy;
let ExtractJwt = require("passport-jwt").ExtractJwt;
const { ObjectId } = require("mongodb");
let User = require("../module/v1/userLogin/userModal");


module.exports = function (passport) {
    passport.use(
        new JwtStrategy(
            {
                secretOrKey : process.env.JWT_SECRET,
                jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
            },
            function (jwtPayload, done) {
                if(!jwtPayload){
                    return done(null, false);
                }
                return User.findOne({ _id: new ObjectId(jwtPayload.userID)  })
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

