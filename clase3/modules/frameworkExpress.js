const express = require('express')

const app = express()
let usuario = '\home'

app.get('/home',(req,res)=>{
    res.send(`este es el home ${usuario}`)
})

app.post(usuario,(req,res)=>{ 
    res.send(`este es el home ${usuario}`)
    
})

app.use((req,res) =>{
    res.status('404').send('error 404')
})

app.listen(5353)