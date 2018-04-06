$(window).resize(function(){
	var form = $('#loginForm');
	form[0].clientHeight > window.innerHeight ? form.addClass('minHeight') : form.removeClass('minHeight')
}).resize();