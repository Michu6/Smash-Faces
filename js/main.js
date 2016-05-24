
$(document).ready(function() {
	var randomPeru,
		randomMexico;
	
	var puntaje = 0;
	// var textOk = $("#textOk").html();

	// RANDOM DE FOTOS
	$(".sedes").change(function() {
		var valSedes = $('.sedes').val();
		randomPeru = Math.floor(Math.random() * dataPeru.length);
		randomMexico = Math.floor(Math.random() * dataMexico.length);

		if(valSedes=="valPeru") {
			$('.imgFoto').css({'background-image': "url('fotos/peru/" +  dataPeru[randomPeru].image + "')"});
		} else if (valSedes=="valMexico") {
			$('.imgFoto').css({'background-image': "url('fotos/mexico/" + dataMexico[randomMexico].image + "')"});
		};
	});

	$("#btnComprobar").click(function(){
		var coderName = $("#boxNombre").val();
		if(dataPeru[randomPeru].name==coderName||dataMexico[randomMexico].name==coderName){
			puntaje += 5;
			$("#puntos").html(puntaje);
			var textOk = $("#textOk").html("BIEN!!!!");
			$("#textOk").fadeOut( "slow", function() {
			});
			// $("#textOk").fadeOut( "slow", function() {
			// 	var textOk = $("#textOk").html("BIEN!!!!");
			// });
		} else{
			puntaje += -1;
			$("#puntos").html(puntaje);
		}
	});

});