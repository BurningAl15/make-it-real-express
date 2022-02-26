const express=require('express');
const server=express();

const PORT=3000;

const isOdd=(number)=>{
  return number%2===0?'Soy Par!':'Soy Impar!';
}

const numberCall=()=>{
  const elements=[];
  for(let i=1;i<=50;i++)
    elements.push(`<p>${i} ${isOdd(i)}</p>`)
  return elements.join('\n')
}

server.get('/',(req,res)=>{
  const value=numberCall();
  res.send(`${value}`);
});

server.listen(PORT,()=>console.log(`Listening on port ${PORT}`))