const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    /* fs.readFile('data.txt', (err, data) => {
      if (err) {
        res.write('Fail');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
    */
    /* 
    const data = fs.readFileSync('data.txt');
    res.write(data);
    res.end();
     */
    /* 
    fs.writeFile('data.txt', 'Hello world...', (err) => {
      if (err) {
        res.write('Fail');
        res.end();
      } else {
        res.write('Successful');
        res.end();
      }
    }); 
    */

    fs.writeFile('newData.txt', 'Hi, I am new in your File system', (err) => {
      if (err) {
        res.write('Fail New file');
        res.end();
      } else {
        res.write('success New File');
        res.end();
      }
    });
  }
});

const PORT = 5000;
server.listen(PORT);
console.log(`Server is listen at ${PORT}`);
