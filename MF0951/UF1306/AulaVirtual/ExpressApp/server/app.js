const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

//Configurar middleware para ficheiros estáticos
app.use(express.static(path.join('public')));

//Ruta para a páxina principal
app.get('/', (req,res) => {
    res.sendFile(path.join('public','index.html'))
});

app.listen(port, () => {
    console.log('Servidor escoitando en http://localhost:${port}')
})