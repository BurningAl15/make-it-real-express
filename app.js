const express=require('express');
const server=express();

const PORT=3000;

server.set('view engine','pug');
server.set('views','views');

server.use("/static", express.static('public'));
server.use(express.urlencoded());
server.use(express.json());

server.get('/',(req,res)=>{
  res.render('index')
});

server.post('/',(req,res)=>{
  res.send(`<h1>Hola ${req.body.name}!</h1>`);  
})

server.listen(PORT,()=>console.log(`Listening on port ${PORT}`))