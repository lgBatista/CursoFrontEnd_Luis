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
	}).end().find('#main-video').on('click', '.toggleDesc', function(e) {
		e.preventDefault();
		var jThis = $(this),
			desc = $('#main-video').find('div');
		if(jThis.hasClass('vejaMais')){
			jThis.text('Veja Menos');
			console.log(desc.attr('data-originalheight'))
			console.log(desc.data('originalheight'))
			desc.animate({
			    height: desc.attr('data-originalheight')
		  	}, 200);
		}else{
			jThis.text('Veja Mais');
			if(desc.hasClass('min') ){
				desc.animate({
				    height: 80
			  	}, 200);
			}
		}
		jThis.toggleClass('vejaMais vejaMenos');
	});

});

function applySeeMore (){
	var container = $('#main-video').find('div');
	container.removeClass('min').attr('style', '').attr('data-originalheight', container.height()).next('a').remove();
	if(container.height() > 80){
		container.addClass('min').after('<a href="#" title="Veja mais" class="toggleDesc vejaMais">Veja mais</a>');
	}
}