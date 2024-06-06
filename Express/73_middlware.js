const express = require('express');

const app = express();

const friends = [

{
 id : 1,
 name : 'kanbha',
},

{
 id : 2,
 name : 'vimal',
},

{
 id : 2,
 name : 'mukesh',
},

{
 id : 3,
 name : 'kaha',
},

{
 id : 5,
 name : 'kanbha',
}
]


// use of middle ware
app.use((req, res,next) => {
 // hear it will use middle ware and print the req and method that we user in get 
 console.log(`${req.method} ${req.url}`);
 next();
})

app.get('/', (req, res) => {
 res.end("hello kanbha")
})

app.get('/friends', (req, res) => {
 res.json(friends);
})

app.get('/friends/:id', (req, res) => {
 const friendid = Number(req.params.id);
 const friend = friends[friendid];
 if (friend){
  res.json(friend);
 }else{
  res.end("<h1>404 NOT FOUND</h1>")
 }
})

app.get('/msg', (req, res) => {
 res.end("<h1>hello kanbha</h1><br><h2>Wel come to the server</h2>")
 
})

app.listen(3000, ()=>{
 console.log('listening on 3000');
});
