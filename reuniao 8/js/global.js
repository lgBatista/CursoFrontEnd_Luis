jQuery(document).ready(function($) {
	$('.datepicker').datepicker({
		format: 'dd/mm/yyyy',
		language: 'pt-BR'
	});

	$('.input-daterange').each(function() {
		var option = {
			format: 'dd/mm/yyyy',
			language: 'pt-BR'
		},
		jThis = $(this);

	    jThis.children('.initialDate').datepicker(option).on('changeDate', function(e) {
        	jThis.children('.finalDate').datepicker('setStartDate', e.date)
    	});

    	jThis.children('.finalDate').datepicker(option);
	});
});