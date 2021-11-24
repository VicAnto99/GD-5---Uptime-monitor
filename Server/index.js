const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser');

app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use('/api/correo',require('./routes/correo.routes'));

app.listen('3000', () => {
    console.log('¡Servidor lsito! :)');
});