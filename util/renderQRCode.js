// const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const qrcode = require('qrcode');

// run().catch(error => console.error(error.stack));

const func = async (pkg, res) => {
  const url = `https://www.npmjs.com/package/${pkg}`;
  console.log(`Getting QR code for ${url}`);
  const data = await qrcode.toDataURL(url);
  // fs.writeFileSync(imageFile, `<img src="${res}">`);
  res.render('index', { qr: data, pkg });
};

module.exports = {
  renderQRCode: func
};
