const http = require("http");

const sever = http.createServer((req, res) => {
  // we add a ura as a reuqest
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>hello welcome to the servar");
    res.end();
  } else if (req.url === "/student") {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>hello welcome to the student page");
    res.end();
  } else {
    console.log("error");
    res.setHeader("Content-type", "text/html");
    res.write("<h1>404 Not found");
    res.end();
  }
});

sever.listen(3000);
