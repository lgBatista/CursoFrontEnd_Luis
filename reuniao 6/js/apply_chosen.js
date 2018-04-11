$(document).ready(function($) {
	// VALIDAR FORM
	if( $('.chosen').length>0 ){
        $(".chosen").find('option:first-child').text('').end().chosen({
            disable_search_threshold: 50,
            no_results_text: "Nenhum resultado encontrado!",
            width:'100%'
        }).change(function(event) {
            $(this).siblings('.chosen-container').find('>a').removeClass('error')
        });
	}
});