const express= require('express');
const app=express();
const pokemon= require('./models/pokemon.js');
const { response } = require('express');



app.get('/pokemon', (request, response)=>{
   response.render('index.ejs',{
    allpokemon:pokemon
 })
});
app.listen(3000,()=>{
    console.log("serveris listening to port...")
});