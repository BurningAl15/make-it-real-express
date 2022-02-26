const express=require('express');
const server=express();

const PORT=3000;

server.get('/',(req,res)=>{
  let {nombre}=req.query;
  res.send(`<h1>Hola ${nombre}!</h1>`);
});

server.listen(PORT,()=>console.log(`Listening on port ${PORT}`))