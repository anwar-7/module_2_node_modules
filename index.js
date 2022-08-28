// node local module
// const { name, add } = require('./other.js');

/* 
// we can also require module this way
const other = require('./other.js');
console.log(other);

const res = other.subtract(5, 2);
console.log(res); 
*/

/* 
// console.log(name);

const result = add(2, 3);
// console.log(result);

// setTimeout(() => {
//   console.log('hello world');
// }, 1000);

// node core module
const http = require('http');

const server = http.createServer(function (req, res) {
  //write code here
  console.log(`server is running...`);
});

// server.listen(5000);

// third party module --> underscore
const _ = require('underscore');

const stooges = [
  { name: 'moe', age: 40 },
  { name: 'larry', age: 50 },
  { name: 'curly', age: 60 },
];
const res = _.pluck(stooges, 'age');
console.log(res);
 */
const http = require('http');

const server = http.createServer((req, res) => {
  //   res.end(`hello node.js`);
  //   console.log(req.url);
  /* 
  // for server like mobile app
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ course: 'ACC' }));
    // res.end();
  }
   */
  /* 
// for server like web app
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<p>This is Home Page</p>');
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<p>This is Contact Page</p>');
    res.end();
  } else if (req.url == '/about-us') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<p>This is About-Us Page</p>');
    res.end();
  } */

  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is Home page</h1>');
    res.end();
  } else if (req.url == '/about-us') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is About Us Page</h1>');
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is Contact page</h1>');
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT);

console.log(`server is listing at ${PORT}`);
