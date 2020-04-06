const fs = require('fs');
const qrcode = require('qrcode');
var imageFile = '';

// run().catch(error => console.error(error.stack));

let func = async (url, res) => {
    const data = await qrcode.toDataURL(url);
    // fs.writeFileSync(imageFile, `<img src="${res}">`);
    res.render('index', {imageData: data});
}

module.exports = {
    renderQRCode: func
}