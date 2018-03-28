$(window).resize(function(){
	var windowSize = $(window).height(),
		form = $('#loginForm'),
		formSize = form.height();

	formSize > windowSize ? form.addClass('size') : form.removeClass('size')
}).resize();