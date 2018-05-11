$(document).ready(function() {
	applySeeMore ();
	// MONTAR OS THUMBS
	$('#video-container').find('[data-src]').each(function(index, el) {
		var jThis = $(this);
		jThis.find('img').attr('src', 'https://i.ytimg.com/vi/'+jThis.data('src')+'/mqdefault.jpg')
	}).click(function(event) {
		var jThis = $(this);
		$('#main-video').children('iframe').attr('src', 'https://www.youtube.com/embed/'+jThis.data('src') )
						.siblings('h2').text( jThis.find('h3').text() )
						.siblings('div').html(jThis.find('.d-none').html());
		applySeeMore ();
	});
});

function applySeeMore (){
	var container = $('#main-video').find('div');

	container.removeClass('min').next('a').remove();

	if(container.height() > 80){
		container.addClass('min').after('<a href="#" title="Veja mais">Veja mais</a>');
	}
}