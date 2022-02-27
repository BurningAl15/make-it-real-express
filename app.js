const express=require('express');
const server=express();

const PORT=3000;

server.set('view engine','pug');
server.set('views','views');

server.use("/static", express.static('public'));
server.use(express.urlencoded());
server.use(express.json());

server.get('/',(req,res)=>{
  res.status(200,{'Content-Type':'text/json'});
  const value=req.headers['sec-ch-ua']||'mi-super-navegador';
  console.log(value);
  res.send(`<h1>${value}</h1>`)
});

server.listen(PORT,()=>console.log(`Listening on port ${PORT}`))