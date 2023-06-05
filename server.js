const express = require('express')
const app = express()

// CONFIG
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

  
// BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the World of Bread!')
})

// 404 PAGE (Wildcard, Bottom of Page)
app.get('*', (req, res) => {
    res.send('404')
  })
  
  
// CHECK GIT
app.listen(PORT, ()=> {
    console.log('listening on port: ', PORT)
})