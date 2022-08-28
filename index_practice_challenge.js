/* <----- Practice Challenge ----> */
/* 
// 1. You will have to create a server using core node_modules where there will be a root route (‘/’).
*/
/* 
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.write(`Hello World...`);
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT);
console.log(`server is listening at ${PORT}`);
 */
/* 
// 2. When a user hits the root route(‘/) with GET request you will have to send an HTML file containing ‘‘Welcome to Full Stack Development “.
*/
/* 
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Welcome to Full Stack Development</h1>`);
    res.end();
  }
//   if (req.url == '/app') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ content: 'app' }));
//   }
});

const PORT = 5000;
server.listen(PORT);
console.log(`server is listening at ${PORT}`);
 */
/* 
3 You will have to create a file in the root folder of your project called first.txt containing some text.

For example: “ I am a pull stack developer !!! 🤣 ”
*/
/* 
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    fs.writeFile('first.txt', 'I am a pull stack developer !!! 🤣', (err) => {
      if (err) {
        res.write('Fail to write new file');
        res.end();
      } else {
        res.write('Successfully create a new file in the file system');
        res.end();
      }
    });
  }
});

const PORT = 5000;
server.listen(PORT);
console.log(`server is listening at ${PORT}`); 
*/

/* 
 4 There will be four more routes to handle requests. When a user hits the routes you will have to do the following:

 1 '/read' - to read the first.txt file from the file system using the core fs module

2 '/write' - You have to read the text of the first.txt file and write it to the second.txt file.

3 '/append' - You have to append the text “ No! It will be full not pull ! 😑 ” in the first.txt file.

 4 '/delete' - You have to delete the second.txt file
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/read') {
    fs.readFile('first.txt', (err, data) => {
      if (err) {
        res.write('Failed to Read data');
        res.end();
      } else if (data) {
        res.write(data);
        res.end();
      }
    });
  }

  if (req.url == '/write') {
    fs.readFile('first.txt', (err, data) => {
      if (err) {
        res.write('Failed to Read data');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });

    fs.writeFile('second.txt', 'I am a pull stack developer !!! 🤣', (err) => {
      if (err) {
        res.write('Failed to Write in data');
        res.end();
      } else {
        res.write('Success');
        res.end();
      }
    });
  }

  if (req.url == '/append') {
    fs.appendFile(
      'first.txt',
      '  No! It will be full not pull ! 😑 ',
      (err) => {
        if (err) {
          res.write('Failed to append data');
          res.end();
        } else {
          res.write('Successfully append data');
          res.end();
        }
      }
    );
  }

  if (req.url == '/delete') {
    fs.unlink('second.txt', (err) => {
      if (err) {
        res.write('Failed to delete file second.txt');
        res.end();
      } else {
        res.write('second.txt file delete successfully');
        res.end();
      }
    });
  }
});

// console.log(fs);
const PORT = 5000;
server.listen(PORT);
console.log(`server is listening at ${PORT}`);
