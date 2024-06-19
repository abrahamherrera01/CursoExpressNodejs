const express = require('express')

const app = express()

app.get('/products', (req, res) => {
    res.send('lista de productos')
})


/*
app.post('/products', (req, res)=>{
    res.send('creando productos')
})

app.put('/products', (req, res)=>{
    res.send('actualizando productos')
})


app.delete('/products', (req, res)=>{
    res.send('eliminando producto')
})

app.patch('/products', (req, res)=>{
    res.send('actualizando una parte del producto')
})*/

//all funciona para tener todas los metodos get,post,delete,put
app.all('/info', (req, res) => {
    res.send('server info')
 })

app.get('/miarchivo', (req, res) => {
    res.sendFile('./ks.jpg', {
        root: __dirname
    })
})

app.get('/user', (req, res) => {
    res.json({
        'name': 'abraham',
        'lastname': 'herrera',
        'age': '25'
    })
})


app.get('/isAlive', (req, res) => {
    res.status(202)({
    })
})


 
app.listen(3000)
console.log("server on port 3000")