const express = require('express');

const app= express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended: false}));
//app.use(express(json));

app.use(express.json());


//referencia archivo router.js
app.use('/', require('./router'));


/*
//salida
app.get('/',(req, res)=>{
	res.send('hola ');
})*/
 
app.listen(5000, ()=>{

console.log('Server corriendo');

});