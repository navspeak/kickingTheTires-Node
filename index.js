const express = require('express');
const server = express();
const util = require('./util');
const { port } = require('./config');
console.log(port);

server.set('view engine', 'ejs');

server.get('/qrcode/:pkg', (req, res) => {
    const pkg = req.params.pkg;
    util.renderQRCode(pkg, res)
});

server.get('/about', (req, res) => {
    res.render('about');
});

server.listen(port, () => {
    console.log(util.asciiArt);
    console.log(`Express Server is running on port ${port}`);
});