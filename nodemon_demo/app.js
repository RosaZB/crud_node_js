const http = require ('http');

const servidor = http.createServer((req, res) =>{
	 res.end('Hola Mundo NODE JS CLASE');

});

const PUERTO= 3420;
 
servidor.listen (PUERTO, () =>{
	console.log('El servidor esta escuchando en el puerto');
});