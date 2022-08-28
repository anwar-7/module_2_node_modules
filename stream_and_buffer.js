const fs = require('fs');

const readStream = fs.createReadStream('./data1.txt');

readStream.on('data', (chunk) => {
  console.log(`..............`);
  console.log(chunk);
});

readStream.on('open', () => {
  console.log(`Read stream open`);
});

setTimeout(() => {
  readStream.pause();
  console.log(`Read stream push`);
}, 6);
setTimeout(() => {
  readStream.resume();
  console.log(`Read stream resume`);
}, 8000);
