const express = require('express');

const conectarDB = require('./config/db');

// Creacion Servidor

const app = express();

//Conectar a la bnase de datos
conectarDB();

app.use(express.json());

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/oficinas', require('./routes/oficinas'));
app.use('/api/inmueble', require('./routes/inmuebles'));



app.listen(4000, () => {
    console.log('este servidor esta corriendo prefectamente')
})