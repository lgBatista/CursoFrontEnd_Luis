$(document).ready(function(){	

	// TOGGLE CONTENT 
    if($('.toggleNext').length > 0){
        $('.toggleNext').click(function(){
        	$(this).toggleClass('active');
            $(this).next($(".conteudo")).stop().slideToggle('fast')
        });
    }

});