jQuery(document).ready(function($) {
	// CHANGE
	$('.changeSelect').change(function(event) {
		var jThis = $(this),
			option = jThis.children('option:selected'),
			ref = '',
			bloco = jThis.attr('id');

		option.is('[data-ref]') ? ref = option.data('ref') : true;

		// ESCONDER OS INPUTS DO BLOCO ATUAL
		$('.'+bloco).hide();

		// MOSTRAR OS INPUTS DO BLOCO ATUAL
		$('.'+bloco+'.'+ref).show();

	}).change();
});