$(document).ready(function($) {
	// VALIDAR FORM
	if( $('.validateForm').length>0 ){
		// MENSAGEM DE VALIDAÇÃO
        $.validator.messages.required = '* Campo obrigatório';
        $.validator.messages.email = '* Digite um valor válido de e-mail';
		$.validator.messages.equalTo = '* O campo digitado não é igual';

        // ADD METHOD
        $.validator.addMethod("number_nosso", function(value, element) {
            return this.optional(element) || /^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$/.test(value);
        }, "não é um numero nosso");

	    // VALIDATE FORM
	    $('.validateForm').each(function(){
	    	validateForm ($(this));
        });
	}
});


// VALIDATE FORM
function validateForm (jThis){
    jThis.validate({
        // onfocusout: false,
        rules: {
            password_repita: {
              equalTo: "#exampleInputPassword1"
            },
            nosso :{
                number_nosso:true
            }
        },
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