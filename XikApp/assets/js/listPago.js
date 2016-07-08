$(document).ready(function() {

	console.log('Entre al jQuery');

	function displayPago(parse_data, i){
		$(".pago").append("<tr> "+ 
								"<td class =\"id_pago\"> "+ parse_data[i].PAGO +"</td>"+
								"<td class =\"carne\">" +parse_data[i].CARNE +"</td>"+
								"<td class =\"fecha_aplicacion\"> "+ (parse_data[i].FECHA_APLICACION).substr(0,10) +"</td>"+
								"<td class =\"monto\"> "+ parse_data[i].MONTO +"</td>"+
								"<td class =\"descripcion\"> "+ parse_data[i].DESCRIPCION +"</td>"+
								"<td class =\"moneda\"> "+ parse_data[i].MONEDA +"</td>"+
								"<td class =\"tipo_cambio\"> "+ parse_data[i].TIPO_CAMBIO +"</td>"+

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
	        url : "/user/view/pago",
	        type : 'POST', 
	        dataType : "json",
	        success : function(parse_data) {
	        	console.log('Entre a parsear los datos');
	        	for (var i = 0; i < parse_data.length; i++) {
					displayPago(parse_data, i);
        		};
			}
		});
	});
});

