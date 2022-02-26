const express=require('express');
const server=express();

const PORT=3000;

const capitalize=(str)=>{
  return str.charAt(0).toUpperCase() + str.slice(1);
}

server.get('/makers/:nombre',(req,res)=>{
  let {nombre}=req.params;
  nombre=capitalize(nombre);
  res.send(`<h1>Hola ${nombre}!</h1>`);
});

server.listen(PORT,()=>console.log(`Listening on port ${PORT}`))