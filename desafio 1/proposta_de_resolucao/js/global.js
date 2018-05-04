$(document).ready(function() {
	// HEADER
	!$('html').hasClass('bg-gradient') ? $('header').load('include/header.html') : true;

	// FOOTER
	$('footer').load('include/footer.html');

	// TOGGLE ITEM
	$('.toggleItem').click(function(){
		var jThis = $(this),
			target = jThis.data('target');
		
		// ESCONDE OS IRMÃOS SE NECESSÁRIO
		jThis.is('[data-parent]') ? jThis.parentsUntil(jThis.data('parent')).siblings().find('.toggleItem').removeClass('active').next().stop().slideUp('fast') : true;

		// MOSTRA O ITEM 
		target == 'next' ? jThis.toggleClass('active').next().stop().slideToggle('fast') : true;
	});

	// IMG DE BG
	$('.bg-img-transform').each(function(index, el) {
		var jThis = $(this);
		jThis.css('background-image', 'url("'+jThis.data('src')+'")')
	});

	// FOCUS INPUT
	applyFocus ($('.no-space'));

	// LOGIN
	$('#container_modal-login').load('include/modal_login.html', function() {
		// FOCUS INPUT
		applyFocus ($('#container_modal-login'));

		// OPEN LOGIN MODAL
		$('#modal-login').on('show.bs.modal',function(e){
			var modal = $(e.target),
				target = $(e.relatedTarget);
			modal.find('.title').find('h2').text( target.data('title') );

			target.is('[data-profile]') ? modal.find('.btn-group-toggle').hide() : modal.find('.btn-group-toggle').show()
		})
	});

	// ABRIR O BOX DOS PLANOS 
	$('.openPlanBox').click(function(e) {
		$('#planBox-container').addClass('active')
	});
	$('#planBox-container').children('.close').click(function(){
		$('#planBox-container').removeClass('active')
	});

});

// FOCUS INPUT
function applyFocus (parent){
	parent.find('.form-control').focusin(function(event) {
		$(this).parent().addClass('focus')
	}).focusout(function(event) {
		var jThis = $(this);
		jThis.val() == '' ? jThis.parent().removeClass('focus') : jThis.parent().addClass('focus');
	}).focusout();
}


$(window).scroll(function(event) {
	hasScrolled();
}).scroll();

// MOSTRAR OU NÃO O MENU
var prevScrollpos = window.pageYOffset;
function hasScrolled() {
	
	if(window.pageYOffset > $('#header-container').innerHeight()){
		$('body').addClass('fixed-nav');
		$('#header-container').addClass('hideMenu');
	}else{
		$('body').removeClass('fixed-nav');
	}

	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos || window.innerWidth < 768){
		$('#header-container').removeClass('hideMenu');
	}else{
		$('body').hasClass('fixed-nav') ? $('#header-container').addClass('hideMenu') : true;
	}
	prevScrollpos = currentScrollPos;
}