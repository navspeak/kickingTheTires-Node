const express = require('express');
const server = express();
const qr = require('./renderQRCode.js');
const { port } = require('./util.js');


server.set('view engine', 'ejs');

server.get('/qrcode/:pkg', (req, res) => {
    const pkg = req.params.pkg;
    qr.renderQRCode(pkg, res)
});

server.get('/about', (req, res) => {
    res.render('about');
});

server.listen(port, () => {
    console.log(`Express Server is running on port ${port}`);
});