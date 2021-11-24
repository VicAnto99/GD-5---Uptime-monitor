const express = require('express');
const app = express();

let envio = require('../controllers/correo.controller');

app.post('/enviar', envio.envioCorreo);
app.post('/correoTiempo', envio.correoTiempo);

module.exports = app;