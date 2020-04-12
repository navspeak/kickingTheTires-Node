const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const banner = require('./util').asciiArt;
const { port, mongodbURL } = require('./config');

const app = express();
// eslint-disable-next-line no-unused-vars
const db = mongoose.connect(mongodbURL);
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.listen(port, () => {
  // eslint-disable-next-line global-require
  console.log(banner);
  console.log(`Server is listening on port ${port}`);
});
