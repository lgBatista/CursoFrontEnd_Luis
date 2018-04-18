jQuery(document).ready(function($) {
	var options =  {
	  onKeyPress: function(cep, e, field, options) {
	    var masks = ['(00)90000-0000', '(00)0-0000-0000'];
	    var mask = (cep.length>13) ? masks[1] : masks[0];
	    $('.crazy_cep-mask').mask(mask, options);
	}};

	$('.crazy_cep-mask').mask('(00)0000-00009', options);
	$('.mask-cpf').mask('000.000.000-09', {clearIfNotMatch: true} );
});