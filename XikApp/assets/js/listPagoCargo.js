$(document).ready(function() {

	console.log('Entre al jQuery');

	function displayPagoCargo(parse_cargo, i){
		$(".pagoCargo").append("<tr> "+ 
								"<td class =\"id_pago_cargo\"> "+ parse_cargo[i].PAGO_CARGO +"</td>"+
								"<td class =\"id_pago\">" +parse_cargo[i].PAGO +"</td>"+
								"<td class =\"id_ cargo\"> "+ parse_cargo[i].CARGO +"</td>"+
								"<td class =\"monto\"> "+ parse_cargo[i].MONTO +"</td>"+

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
	        url : "/user/view/pago_cargo",
	        type : 'POST', 
	        dataType : "json",
	        success : function(parse_cargo) {
	        	console.log('Entre a parsear los datos');
	        	for (var i = 0; i < parse_cargo.length; i++) {
					displayPagoCargo(parse_cargo, i);
        		};
			}
		});
	});
});

