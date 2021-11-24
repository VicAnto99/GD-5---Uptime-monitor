const { turquoise } = require('color-name');
const { request, response } = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req = request, resp = response) => {
    let body = req.body;

    let config = nodeMailer.createTransport({
        host: 'Hostmail',
        post: 587,
        auth:{
            user: "A01339529@tec.mx",
            pass: "Man09IjJcnV#07"
        }
    });

    const opciones = {
        from: "",
        subject: "Uptime monitor",
        to: "A01339529@tec.mx",
        text: "Prueba 1"
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