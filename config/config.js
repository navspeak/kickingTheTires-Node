/*  eslint-disable global-require */
let configPath;
if (process.env.NODE_ENV === 'Test') {
  configPath = '../config_testing.json';
} else {
  configPath = '../config_prod.json';
}
// eslint-disable-next-line import/no-dynamic-require
const { port, mongodbURL } = require(configPath);
module.exports = {
  port,
  mongodbURL
};
