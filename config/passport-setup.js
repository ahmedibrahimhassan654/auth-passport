const passport = require('passport')
const keys = require( './keys' )

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    // key:keys.google.key,
    clientID:'AIzaSyAZ7oxPmauV_RfzOxzzdBhSWEBbEJy5KcE' ,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));





// const GoogleStrategy = require('passport-google-oauth20')

// passport.use(
//     new GoogleStrategy( {
//     //options for google start

//     callbackURL:'/auth/google/redirect',
//     key:keys.google.key
// }), () => {
//         //passport callback functions
//     })
