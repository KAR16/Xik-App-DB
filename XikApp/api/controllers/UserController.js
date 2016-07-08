/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	viewPlanPago: function(req, res){
	    oracleServices.Query(
	      "SELECT * FROM PLAN_PAGO " +
	      "ORDER BY PLAN_PAGO",
	       // "FROM RegistredUsers ",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        var data = [];
	        //console.log(result);
	        //console.log('Todos los rows:', result.rows);
	        //console.log('Row en especifico: ', result.rows[0]);
	        console.log('Users / Numero de ITEMS: ', (result.rows).length);
	        for (var i = 0; i < (result.rows).length; i++ ){

	        	data.push({
	        		"PLAN_PAGO": result.rows[i][0],
	        		"CARNE": result.rows[i][1], 
	        		"FECHA_APLICACION": result.rows[i][2], 
	        		"MONTO": result.rows[i][3], 
	        		"CUOTAS": result.rows[i][4], 
	        		"MONEDA": result.rows[i][5]
	        	});
	        };
	        console.log(data);
	        res.json(data);
	    });
	},
	viewCargo: function(req, res){
		oracleServices.Query(
	      "SELECT * FROM CARGO " +
	      "ORDER BY CARGO",
	       // "FROM RegistredUsers ",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        var data = [];
	        //console.log(result);
	        //console.log('Todos los rows:', result.rows);
	        //console.log('Row en especifico: ', result.rows[0]);
	        console.log('ListUsers / Numero de ITEMS: ', (result.rows).length);
	        for (var i = 0; i < (result.rows).length; i++ ){

	        	data.push({
	        		"CARGO": result.rows[i][0],
	        		"CARNE": result.rows[i][1], 
	        		"FECHA_TRANSACCION": result.rows[i][2], 
	        		"MONTO": result.rows[i][3], 
	        		"SALDO": result.rows[i][4], 
	        		"FECHA_VENCIMIENTO": result.rows[i][5], 
	        		"DESCRIPCION": result.rows[i][6],
	        		"MONEDA": result.rows[i][7]
	        	});
	        };
	        console.log(data);
			res.json(data);
		});
	},
	viewPago: function(req, res){
		oracleServices.Query(
	      "SELECT * FROM PAGO " +
	      "ORDER BY PAGO",
	       // "FROM RegistredUsers ",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        var data = [];
	        //console.log(result);
	        //console.log('Todos los rows:', result.rows);
	        //console.log('Row en especifico: ', result.rows[0]);
	        console.log('ListUsers / Numero de ITEMS: ', (result.rows).length);
	        for (var i = 0; i < (result.rows).length; i++ ){

	        	data.push({
	        		"PAGO": result.rows[i][0],
	        		"CARNE": result.rows[i][1], 
	        		"FECHA_APLICACION": result.rows[i][2], 
	        		"MONTO": result.rows[i][3], 
	        		"DESCRIPCION": result.rows[i][4], 
	        		"MONEDA": result.rows[i][5], 
	        		"TIPO_CAMBIO": result.rows[i][6]
	        	});
	        };
	        console.log(data);
			res.json(data);
		});
	},
	viewPagoCargo: function(req, res){
		oracleServices.Query(
	      "SELECT * FROM PAGO_CARGO " +
	      "ORDER BY PAGO_CARGO",
	       // "FROM RegistredUsers ",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        var data = [];
	        //console.log(result);
	        //console.log('Todos los rows:', result.rows);
	        //console.log('Row en especifico: ', result.rows[0]);
	        console.log('ListUsers / Numero de ITEMS: ', (result.rows).length);
	        for (var i = 0; i < (result.rows).length; i++ ){

	        	data.push({
	        		"PAGO_CARGO": result.rows[i][0],
	        		"PAGO": result.rows[i][1], 
	        		"CARGO": result.rows[i][2], 
	        		"MONTO": result.rows[i][3]
	        	});
	        };
	        console.log(data);
			res.json(data);
		});
	}/*
	insert:function(req, res){
		console.log('Inserté');

		var userObj = {
			name: req.param('name'),
			lastname: req.param('lastname'),
			username: req.param('username'),
			email: req.param('email')
		}

		console.log(userObj);

		var consulta = ("BEGIN\n"+ 
						"INSERT INTO REGISTREDUSERS\n"+
						"VALUES (UserId.NEXTVAL,\'" + userObj.name + "\', \'"+ userObj.lastname +"\', \'"+ userObj.username +"\', \'"+ userObj.email +"\', SYSDATE, SYSDATE);\n"+
						"COMMIT;\n"+
						"END;");

		console.log(consulta);

		oracleService.Query(
	      consulta,
	       // "FROM RegistredUsers ",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        console.log(result);
	        res.redirect('user/table_user');
		});


		//console.log(userObj);

		//console.log(user);
	},
	show:function(req, res, next){

		var consulta = "SELECT * FROM RegistredUsers " +
	      "WHERE ID = "+ req.param('id') +"";

	    console.log(consulta);
		oracleService.Query(
	      consulta,
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        var data = [];
	        console.log('Todos los rows:', result.rows);
	        for (var i = 0; i < (result.rows).length; i++ ){
	        	//Parseamos los datos y los insertamos en el array data
	        	data.push({
	        		"id": result.rows[i][0],
	        		"name": result.rows[i][1], 
	        		"lastName": result.rows[i][2], 
	        		"userName": result.rows[i][3], 
	        		"email": result.rows[i][4], 
	        		"createdUser": result.rows[i][5], 
	        		"updatedUser": result.rows[i][6]
	        	});
	        };

	        //Aqui mostramos la data final
	        console.log('Data de Show', data[0]);
	        data = data[0]; //Le damos el valor a la data
			res.view({data}); //Enviamos la data
		});
	}, 
 	edit:function(req, res, next){
		oracleService.Query(
	      "SELECT * FROM RegistredUsers " +
	      "WHERE ID = "+ req.param('id') +"",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        var data = [];
	        console.log('Todos los rows:', result.rows);
	        for (var i = 0; i < (result.rows).length; i++ ){
	        	//Parseamos los datos y los insertamos en el array data
	        	data.push({
	        		"id": result.rows[i][0],
	        		"name": result.rows[i][1], 
	        		"lastName": result.rows[i][2], 
	        		"userName": result.rows[i][3], 
	        		"email": result.rows[i][4], 
	        		"createdUser": result.rows[i][5], 
	        		"updatedUser": result.rows[i][6]
	        	});
	        };
	    	 data = data[0]; //Le damos el valor a la data
			res.view({data}); //Enviamos la data
		});

	}, 

	update:function(req, res, next){
		console.log('Update');

		var userObj = {
			id: req.param('id'),
			name: req.param('name'),
			lastname: req.param('lastname'),
			username: req.param('username'),
			email: req.param('email')
		}

		var consulta = ("BEGIN\n"+ 
						"UPDATE REGISTREDUSERS\n"+
						"SET NAME = \'" + userObj.name + "\', LASTNAME = \'"+ userObj.lastname +"\', USERNAME = \'"+ userObj.username +"\', EMAIL = \'"+ userObj.email +"\', UPDATEDUSER = SYSDATE\n"+
						"WHERE ID = "+ req.param('id') +";\n"+
						"COMMIT;\n"+
						"END;");

		console.log(consulta);

		oracleService.Query(
	      consulta,
	       // "FROM RegistredUsers ",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        res.redirect('user/show/' + userObj.id);
		});
	},

	delete:function(req, res, next){
		console.log('Delete:');

		var consulta = "BEGIN\n" +
	      	"DELETE FROM RegistredUsers \n" +
	      	"WHERE ID = "+ req.param('id') +";\n" +
	      	"COMMIT;\n" +
		  	"END;";
		console.log(consulta);
		oracleService.Query(consulta,
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
			res.redirect('user/table_user');
		});
	}*/
};

