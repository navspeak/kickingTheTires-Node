const https = require('http');

const port = process.env.SERVER_TEST_PORT;
const optionsgetReadBooks = {
  host: 'localhost',
  port,
  path: '/api/books?read=true', // the rest of the url with parameters if needed
  method: 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsgetReadBooks);
console.info('Do the GET call');

// do the GET request
const reqGet = https.request(optionsgetReadBooks, (res) => {
  console.log('statusCode: ', res.statusCode);
  // uncomment it for header details
  //  console.log("headers: ", res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

reqGet.end();
reqGet.on('error', (e) => {
  console.error(e);
});

const jsonObject = {
  title: 'Santaram',
  genre: 'Autobiography',
  author: 'Greogory David Roberts',
  read: 'false'
};


const postheaders = {
  'Content-Type': 'application/json',
  'Content-Length': Buffer.byteLength(JSON.stringify(jsonObject), 'utf8')
};


const optionspost = {
  host: 'localhost',
  port,
  path: '/api/books',
  method: 'POST',
  headers: postheaders
};

console.info('Options prepared:');
console.info(optionspost);
console.info('Do the POST call');

// do the POST call
const reqPost = https.request(optionspost, (res) => {
  console.log('statusCode: ', res.statusCode);
  // uncomment it for header details
  //  console.log("headers: ", res.headers);

  res.on('data', (d) => {
    console.info('POST result:\n');
    process.stdout.write(d);
    console.info('\n\nPOST completed');
  });
});

// write the json data
reqPost.write(JSON.stringify(jsonObject));
reqPost.end();
reqPost.on('error', (e) => {
  console.error(e);
});

// /**
//  * Get Message - GET
//  */
// // options for GET
// var optionsgetmsg = {
//   host : 'graph.facebook.com', // here only the domain name
//   // (no http/https !)
//   port : 443,
// eslint-disable-next-line max-len
//   path : '/youscada/feed?access_token=you_api_key', // the rest of the url with parameters if needed
//   method : 'GET' // do GET
// };
//
// console.info('Options prepared:');
// console.info(optionsgetmsg);
// console.info('Do the GET call');
//
// // do the GET request
// var reqGet = https.request(optionsgetmsg, function(res) {
//   console.log("statusCode: ", res.statusCode);
//   // uncomment it for header details
// //  console.log("headers: ", res.headers);
//
//
//   res.on('data', function(d) {
//     console.info('GET result after POST:\n');
//     process.stdout.write(d);
//     console.info('\n\nCall completed');
//   });
//
// });
//
// reqGet.end();
// reqGet.on('error', function(e) {
//   console.error(e);
// });
