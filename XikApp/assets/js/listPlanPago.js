$(document).ready(function() {

	console.log('Entre al jQuery');

	function displayPlanPago(parse_data, i){
		$(".planPago").append("<tr> "+ 
								"<td class =\"id_plan_pago\"> "+ parse_data[i].PLAN_PAGO +"</td>"+
								"<td class =\"carne\">" +parse_data[i].CARNE +"</td>"+
								"<td class =\"fecha_aplicacion\"> "+ (parse_data[i].FECHA_APLICACION).substr(0,10) +"</td>"+
								"<td class =\"monto\"> "+ parse_data[i].MONTO +"</td>"+
								"<td class =\"cuotas\"> "+ parse_data[i].CUOTAS +"</td>"+
								"<td class =\"moneda\"> "+ parse_data[i].MONEDA +"</td>"+

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
	        url : "/user/view/plan_pago",
	        type : 'POST', 
	        dataType : "json",
	        success : function(parse_data) {
	        	console.log('Entre a parsear los datos');
	        	for (var i = 0; i < parse_data.length; i++) {
					displayPlanPago(parse_data, i);
        		};
			}
		});
	});
});

