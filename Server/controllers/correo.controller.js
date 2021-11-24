const { turquoise } = require('color-name');
const { request, response } = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req = request, resp = response) => {
    let body = req.body;

    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        post: 456,
        auth:{
            user: "a01339529@gmail.com",
            pass: "Mmichela99#"
        }
    });

    const opciones = {
        from: "a01339529@gmail.com",
        subject: "Uptime monitor",
        to: "A01339529@tec.mx",
        text: "Vamos a ver que tal funciona esta cosa"
    };

    config.sendMail(opciones, function(err, result){

        if (err) return resp.json({ok: false, msg: err});

        return resp.json({
            ok: true,
            msg: result
        });
    });
}

module.exports = {
    envioCorreo
}