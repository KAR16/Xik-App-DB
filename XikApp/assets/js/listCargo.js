$(document).ready(function() {

	console.log('Entre al jQuery');

	function displayCargo(parse_cargo, i){
		$(".cargo").append("<tr> "+ 
								"<td class =\"id_cargo\"> "+ parse_cargo[i].CARGO +"</td>"+
								"<td class =\"carne\">" +parse_cargo[i].CARNE +"</td>"+
								"<td class =\"fecha_transaccion\"> "+ (parse_cargo[i].FECHA_TRANSACCION).substr(0,10) +"</td>"+
								"<td class =\"monto\"> "+ parse_cargo[i].MONTO +"</td>"+
								"<td class =\"saldo\"> "+ parse_cargo[i].SALDO +"</td>"+
								"<td class =\"fecha_vencimiento\"> "+ (parse_cargo[i].FECHA_VENCIMIENTO).substr(0,10) +"</td>"+
								"<td class =\"descripcion\"> "+ parse_cargo[i].DESCRIPCION +"</td>"+
								"<td class =\"moneda\"> "+ parse_cargo[i].MONEDA +"</td>"+

								/*"<td class=\"edit\">"+
									"<a href=\"/user/show/"+ parse_user[i].id +"\"><input class=\"btn btn-primary\" type=\"button\" value=\"See Details\"></a>"+
								"</td>"+
								"<td class=\"delete\">"+
									"<a href=\"/user/delete/"+ parse_user[i].id +"\"><input class=\"btn btn-danger\" type=\"button\" value=\"Delete\"></a>"+
								"</td>"+*/
							"</tr>");
	};


	jQuery(document).ready(function($) { 
      	$.ajax({ 
	        url : "/user/view/cargo",
	        type : 'POST', 
	        dataType : "json",
	        success : function(parse_cargo) {
	        	console.log('Entre a parsear los datos');
	        	for (var i = 0; i < parse_cargo.length; i++) {
					displayCargo(parse_cargo, i);
        		};
			}
		});
	});
});

