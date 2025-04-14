const express=require('express');

const router = express.Router();

const conexion=require('./database/db');

//MOSTRAR REGISTROS

router.get('/',(req, res)=>{

//
//res.render('index',{ var1: 'Esto es una variable'});

//res.render('index');


	conexion.query('select * from users',(error, results)=>{
		if (error) {
			throw error;
		}else{

			//res.send(results);
			res.render('index', {results:results});
		}
	})

	

}) // se mantiene la llave y parentesis del req

/*

router.get('/contacto',(req, res)=>{
	res.send('CONTACTO');
})
*/


// CREAR REGISTROS

router.get('/create',(req,res) => {
	res.render('create');

})

const crud= require('./controllers/crud');
router.post('/save', crud.save)

// agregado edit 
router.post('/UPDATE', crud.update);

//RUTA PARA EDITAR REGISTROS

router.get('/edit/:id', (req, res)=>{
	const id= req.params.id;
	conexion.query('SELECT * FROM users WHERE ID=?',[id], (error, results)=>{
		if (error) {
			throw error;
		}else{
			res.render('edit',{user:results[0]});
		}
	})
})


//RUTA PARA ELIMINAR EL REGISTRO

router.get('/delete/:id', (req,res)=>{
	const id=req.params.id;
	 conexion.query('DELETE FROM users WHERE id=?',[id], (error, results)=>{
	 	if (error) {
			throw error;
		}else{
			res.redirect('/');
		}

	 })

})



module.exports= router;