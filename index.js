const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  /* 
  const address_url = `http://localhost:5000/contact?name=anwar&country=bangladesh`;
  const parsed_url = url.parse(address_url, true);
  console.log(parsed_url);
  const queryObject = parsed_url.host;
  console.log(queryObject); 
  */

  const address_url = `http://localhost:5000/contact?name=anwar&country=bangladesh`;

  const parsed_url = url.parse(address_url, true);
  console.log(parsed_url);
  const queryObject = parsed_url.protocol;
  console.log(queryObject);
});

// console.log(url);
const PORT = 5000;
server.listen(PORT);
console.log(`Server is listen a ${PORT}`);
