$(document).ready(function(){
	$('.mobile-nav').on('click', function(){
		$('nav ul').slideToggle(400, function(){
			$(this).toggleClass('nav-expanded-menu').css('display','');
		});
	});
});