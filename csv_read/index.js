const fs = require('fs');
const parse = require('csv-parse');

const result = [];

fs.createReadStream('nasa.csv')
.on('data', (data) => {
  result.push(data);
})
.on('error', (err) => {
  console.error(err);
})
.on('end', () => {
  console.log(result);
  console.log("data was read from stream");
});
