const express = require('express')
const send = require('send')
const app = express()
//MIDDLEWARES
app.use((req,res,next)=>{
   console.log(`Route: ${req.url} Method: ${req.method}`)
   next()
})


app.use((req,res,next)=>{
    if( req.query.login === 'one.com'){
      next()
    }else{
      return res.send( 'No autorizado')
    }
})


app.get('/dashboard', (req, res) => {
   res.send('dashboard page')
})

app.get('/profile', (req, res) => {
   res.send('profile page')
})



app.listen(3000)
console.log("server on port 3000")