const express = require('express')

const path= require ("path")

const app= express()
app.use(express.static(path.join(__dirname,'../public')))

const PORT = process.env.PORT;

app.listen( PORT, ()=> {
    console.log(`El servidor se ha iniciado correctamente en el puerto ${PORT}`)
})

app.get("/",(req, res)=> {
    res.sendFile(path.join(__dirname, "/views/home.html") )
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});