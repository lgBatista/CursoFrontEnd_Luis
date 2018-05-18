$(document).ready(function() {
	applySeeMore ();
	// MONTAR OS THUMBS
	$('#video-container').find('[data-url]').each(function(index, el) {
		var jThis = $(this);
		jThis.find('img').attr('src', 'https://i.ytimg.com/vi/'+jThis.data('url')+'/mqdefault.jpg')
	}).end().find('.video-list').children().click(function(event) {
		createMainVideo($(this));
	}).end().end().find('#main-video').on('click', '.toggleDesc', function(e) {
		e.preventDefault();
		var jThis = $(this),
			desc = $('#main-video').find('div.desc');
		if(jThis.hasClass('vejaMais')){
			jThis.text('Veja Menos');
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

	// CRIAR O MAIN VIDEO
	createMainVideo( $('.video-list').children('li:first-child') );

});

function applySeeMore (){
	var container = $('#main-video').find('div.desc');
	container.removeClass('min').attr('style', '').attr('data-originalheight', container.height()).next('a').remove();
	if(container.height() > 80){
		container.addClass('min').after('<a href="#" title="Veja mais" class="toggleDesc vejaMais">Veja mais</a>');
	}
}

function createMainVideo(ref) {
	$('#main-video').children('iframe, video').hide();
	
	if(ref.is('[data-url]')){
		$('#main-video').children('iframe').show().attr('src', 'https://www.youtube.com/embed/'+ref.data('url') );
	}else{
		$('#main-video').children('video').show().find('source[type="video/mp4"]').attr('src', ref.data('file')+'.mp4').end()
												 .find('source[type="video/webm"]').attr('src', ref.data('file')+'.webm').end()
												 .find('source[type="video/ogg"]').attr('src', ref.data('file')+'.ogv').end()
												 [0].load();


	}

	$('#main-video').find('h2').text(ref.find('h3').text())
					.siblings('div.desc').html(ref.find('.d-none').html());
	
	applySeeMore ();
}