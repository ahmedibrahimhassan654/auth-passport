const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth20')

passport.use(new GoogleStrategy({
    //options for google start
}), () => {
        //passport callback functions
    })
