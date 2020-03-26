const router = require('express').Router()

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
router.get('/google', (req, res) => {
    // handle with passport 
    res.send('logging with google ')
})

module.exports=router