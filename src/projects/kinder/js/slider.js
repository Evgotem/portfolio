jQuery(document).ready(function($) {
	$(".my-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
			breakpoint: 1124,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: false
				}
			},{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
				}
			},{
			breakpoint: 375,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				autoplaySpeed: 2000
				}
			}
		]
	})
});	