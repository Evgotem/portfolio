$(document).ready(function () {
	// плавный переход по якорной ссылке
	$('#header-btn').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#future').offset().top }, 500);
		e.preventDefault();
	  });
	
	$(window).scroll(function() {
		$('.future-item').each(function() {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("wobble")
			}
		})
	});
});

