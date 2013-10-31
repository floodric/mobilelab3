$(function() {
	$("#f1").submit(doPost);
	$("#f2").submit(doPut);
	} );

/* 
 * This is the basic form for an Ajax POST
 */
 
function doPost() {
	$.ajax({
			url: "request",
			type: "post",
			data: {
				testString: $("#ts1").val()
			},
			success: function(data) {
				$('#div1').html(data);
			}
	});
	return false;	
}

/*
 * This is the basic form for an Ajax PUT. The only real difference
 * is the value of the type attribute.   Notice that instead of success
 * being defined within the object passed to $.ajax, this uses the alternative
 * form of defining success separately.
 */

function doPut() {
	var aj = $.ajax({
			url: "request",
			type: "put",
			data: {
				testString: $("#ts2").val()
			},
	});

	aj.done(function(data) {
				$('#div2').html(data);
			});
			
	return false;	
}


	