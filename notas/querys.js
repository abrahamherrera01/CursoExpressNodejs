const express = require('express')
const send = require('send')
//pasar querys por url http://localhost:3000/search/?q=node
const app = express()

app.get('/search', (req, res) => {
   if(req.query.q === 'node'){
    res.send('lista de libros node')
   }
   else{
    res.send('libros normales')
   }

 
})

 

app.listen(3000)
console.log("server on port 3000")