$(document).ready(function () {
	console.log("Hello world");
	$('.menu-toggle').click(function () {
		$('.main-menu').toggleClass('opened');
		$('.sub-menu').removeClass('active');
	});
	console.log($(window).width());
	if ($(window).width() <= 991) {
		$('.sub-menu').click(function () {
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}else {
				$('.sub-menu').removeClass('active');
				$(this).addClass('active');
			}
			
		});

	} else {
		$('.sub-menu').hover(function () {
			$(this).toggleClass('active');
		});
	}
	$('.can-active').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		} else {
			$('.can-active').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.baggages-box .box').click(function(){
		$('.baggages-box .box').removeClass('active');
		$(this).addClass('active');
	}); 
});