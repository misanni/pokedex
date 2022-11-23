const express= require('express');
const app=express();
const pokemon= require('./models/pokemon.js');
const { response } = require('express');
const morgan =require("morgan");
app.use(express.urlencoded({extended: false}));
const methodOverride=require('method-override');
app.use(methodOverride('_method'));





app.get('/pokemon', (request, response)=>{
   response.render('index.ejs',{
    allpokemon:pokemon
 })
});
//app.get('/pokemon/:id /edit',(request, response)=>{

   // response.render('index.ejs', {allpokemon:pokemon});
//});

app.get('/pokemon/:id', (request, response)=>{
    response.render("show.ejs",{i:request.params.id,
         pokemonname : pokemon[request.params.id].name,
         pokemonimg:pokemon[request.params.id].img,
          pokemontype:pokemon[request.params.id].type});
           
});

app.get('/pokemons/new', (request, response)=>{
    console.log(request.body);
    response.render("new.ejs");

});
app.get('/pokemon/:id/edit',(request, response)=>{
response.render("edit.ejs",{i:request.params.id,
    pokemonname : pokemon[request.params.id].name, 
    pokemonimg:pokemon[request.params.id].img, 
    pokemontype:pokemon[request.params.id].type, 
    pokemonid:pokemon[request.params.id].id});
    
});

app.post('/pokemon', (request, response)=>{
    console.log(request.body);
    pokemon.push(request.body);
    
    response.redirect("/pokemon");
});


app.delete('/pokemon/:id', (request, response)=>{
    pokemon.splice(request.params.id, 1);
    response.redirect('/pokemon');
});
app.put('/pokemon/:id',(request, response)=>{
    pokemon[request.params.id] = request.body; 
	response.redirect('/Pokemon');
})
app.listen(3000,()=>{
    console.log("serveris listening to port...")
});