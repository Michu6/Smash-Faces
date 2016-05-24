$(document).ready(function() {
	var randomPeru,
		randomMexico,
		valSedes;
	var puntaje = 0;

	// RANDOM DE FOTOS
	$(".sedes").change(function() {
		valSedes = $(this).val();
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
			randomPeru = Math.floor(Math.random() * dataPeru.length);
			randomMexico = Math.floor(Math.random() * dataMexico.length);
			puntaje += 5;
			$("#textOk").show();
			$("#puntos").html(puntaje);
			$("#textOk").html("BIEN!!!!").fadeOut(1000);
			if(valSedes=="valPeru") {
				$('.imgFoto').css({'background-image': "url('fotos/peru/" +  dataPeru[randomPeru].image + "')"});
			} else if (valSedes=="valMexico") {
				$('.imgFoto').css({'background-image': "url('fotos/mexico/" +  dataMexico[randomMexico].image + "')"});
			}
			$("#boxNombre").val("");
		} else{
			puntaje += -1;
			$("#textOk").show();
			$("#puntos").html(puntaje);
			$("#textOk").html("MAL :(").fadeOut(1000);
			$("#boxNombre").val("");
		}
	});
});