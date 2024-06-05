const express = require('express');

const app = express();

app.get('/', (req, res) => {
 res.end("hello kanbha")
})

app.get('/msg', (req, res) => {
 res.end("<h1>hello kanbha</h1><br><h2>Wel come to the server</h2>")
 
})

app.listen(3000, ()=>{
 console.log('listening on 3000');
});
