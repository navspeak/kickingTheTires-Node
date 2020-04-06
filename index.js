const express = require('express');
const server = express();
const qr = require('./renderQRCode.js');
const { port } = require('./util.js');


server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {rnd: Math.random()});
});

server.get('/qrcode', (req, res) => {
    qr.renderQRCode("https://github.com/navspeak/ngs", res)
});

server.get('/about', (req, res) => {
    res.render('about');
});

server.listen(port, () => {
    console.log(`Express Server is running on port ${port}`);
});