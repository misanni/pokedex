const express= require('express');
const app=express();
const pokemon= require('./models/pokemon.js');
const { response } = require('express');
app.use(express.urlencoded({extended: true}));




app.get('/pokemon', (request, response)=>{
   response.render('index.ejs',{
    allpokemon:pokemon
 })
});
app.get('/pokemon/:id /edit',(request, response)=>{

    response.render('index.ejs', {allpokemon:pokemon});
})

app.get('/pokemon/:id', (request, response)=>{
    response.render("show.ejs",{pokemonname : pokemon[request.params.id].name, pokemonimg:pokemon[request.params.id].img, pokemontype:pokemon[request.params.id].type })
})
app.listen(3000,()=>{
    console.log("serveris listening to port...")
});