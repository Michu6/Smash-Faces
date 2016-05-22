// RANDOM DE FOTOS
$(document).ready(function() {
	var images = ['Alma.JPG', 'Ana.JPG', 'Analy.JPG'];
	
	$(".sedes").change(function() {
  		$('.imgFoto').css({'background-image': 'url(fotos/mexico/' + images[Math.floor(Math.random() * images.length)] + ')'});
	});
});