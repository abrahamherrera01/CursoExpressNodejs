/*const http =require ('http');
const fs =require ('fs');

const server = http.createServer((req,res)=>{
   const read = fs.createReadStream('./static/index.html');
    read.pipe(res)
})

server.listen(3000)
console.log("server ")*/

const express = require('express')

const app = express()
app.listen (3000)

app.get('/', (req, resp) =>{
    resp.send('hello word')
})

app.get('/about', (req, resp) =>{
    resp.send('about')
})

app.get('/weather', (req, resp) =>{
    resp.send('The weathwe is Nice')
})

app.use( (req, resp) =>{
    resp.send('No se encontro la pagina')
})

console.log("server on port 3000")