const router = require( 'express' ).Router()
const passport=require('passport')

//auth login
router.get('/login', (req, res) => {
res.render('login')
})


//auth logout
router.get('/logout', (req, res) => {
   //handel with passport 
    res.send('logout page ')
})



//auth with google
router.get('/google',
  passport.authenticate('google', { scope:['profile'] }
));

router.get( '/google/callback', 
    passport.authenticate( 'google', { 
        successRedirect: '/google/success',
        failureRedirect: '/google/failure'
}));

// router.get( '/google', passport.authenticate( 'google', {
//     scope:['profile']
// }))

module.exports=router