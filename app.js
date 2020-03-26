const express = require('express')
const authRoutes=require('./routes/auth-routes')

const app = express()

app.set('view engine', 'ejs')


//set up routes
app.use('/auth',authRoutes)

//create home route 
app.get('/', (req, res) => {
    res.render('home')
})



app.listen(3000 ,()=> {
    console.log('app working in port 3000');
    
})