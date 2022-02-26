const express=require('express');
const server=express();

const PORT=3000;

server.get('/',(req,res)=>{
  let {nombre}=req.query;
  if(nombre===undefined)
    nombre='desconocido'
  res.send(`<h1>Hola ${nombre}!</h1>`);
});

server.listen(PORT,()=>console.log(`Listening on port ${PORT}`))