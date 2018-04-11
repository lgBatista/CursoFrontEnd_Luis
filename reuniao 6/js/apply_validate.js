$(document).ready(function($) {
	// VALIDAR FORM
	if( $('.validateForm').length>0 ){
		// MENSAGEM DE VALIDAÇÃO
        $.validator.messages.required = '* Campo obrigatório';
		$.validator.messages.email = '* Digite um valor válido de e-mail';

	    // VALIDATE FORM
	    $('.validateForm').each(function(){
	    	validateForm ($(this));
        });
	}
});


// VALIDATE FORM
function validateForm (jThis){
    jThis.validate({
        onfocusout: false,
    	invalidHandler: function(event, validator) {
            for (var i = 0; i < validator.errorList.length; i++) {
                var elm = $(validator.errorList[i].element);
                if(elm.is('select')){
                    elm.siblings('.chosen-container').find('>a').addClass('error');
                }
            };
        },
        errorPlacement: function(error, elm) {
			if(elm.is('select')){
				error.insertAfter('#'+elm.siblings('.chosen-container').attr('id'));
			}else if(elm.is('[type="checkbox"]')){
				error.insertAfter(elm.parent())
			}else{
				error.insertAfter(elm);
			}
		},
        submitHandler: function(form) {

            if (form.classList.contains('submeter')) {
                form.submit();
            }else{
                var loading =  $('#loading'),
                    form = $(form);

                form.find('.alert-content').find('>div').hide();
                loading.show();

                $.post(form.attr('action'), form.serialize(), function(data){
                    console.log('ação para post verdadeiro');
                    form.find('.alert-success').show();
                }).fail(function() {
                    console.log('ação para post falso');
                    form.find('.alert-danger').show();
                }).always(function(){
                    loading.hide();
                });
            }

        }
    });
}