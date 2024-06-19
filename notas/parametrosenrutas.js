const express = require('express')
//pasar parametros por url
const app = express()

app.get('/hello/:user', (req, res) => {
    res.send(`hello ${req.params.user} `)
})

app.get('/add/:x/:y', (req, res) => {
    const {
        x,
        y
    } = req.params
    const result = parseInt(x) + parseInt(y)
    res.send(`result ${result} `)
})


app.get('/users/:username/photo', (req, res) => {
    const {
        username
    } = req.params

    if (username == "oni") {
        return res.sendFile('./ks.jpg', {
            root: __dirname
        })
    }
    res.send('el usuario no esta permitido')
})


app.get('/name/:name/age/:age', (req, res) => {
    const {
        name,age
    } = req.params
    res.send(`el usuario ${name} tiene ${age}`)
})



app.listen(3000)
console.log("server on port 3000")