var dataMexico = ['Alma.JPG', 'Ana.JPG', 'Analy.JPG', 'Areli.JPG','Beatriz.JPG'];
var dataPeru = ['Jesenia.JPG', 'Karen.JPG', 'Lizeth.JPG','Patricia.JPG','Genesis.JPG'];
// var dataPeru = [{image:'Jesenia.JPG', name: 'Jesenia'},{image:'Karen.JPG', name: 'Karen'},{image:'Patricia.JPG', name: 'Patricia'},{image:'Genesis.JPG', name: 'Genesis'}];

$(document).ready(function() {
	// RANDOM DE FOTOS	
	$(".sedes").change(function() {
		var valSedes = $('.sedes').val();
		if(valSedes=="valPeru") {
			$('.imgFoto').css({'background-image': 'url(fotos/peru/' + dataPeru[Math.floor(Math.random() * dataPeru.length)] + ')'});
		} else if (valSedes=="valMexico") {
			$('.imgFoto').css({'background-image': 'url(fotos/mexico/' + dataMexico[Math.floor(Math.random() * dataMexico.length)] + ')'});
		};
	});



});