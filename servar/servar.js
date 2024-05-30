const http  = require('http');

const servar =  http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Hello World kanbha');
})

servar.listen(3000);