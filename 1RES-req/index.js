const request = require('./request.js');
const response = require('./res.js');

function makerequest(url ,data){
  request.send(url,data);
  return response.read();
}

// we calling the function one time 
const result = makerequest('http://www.google.com','hello');
console.log(result);