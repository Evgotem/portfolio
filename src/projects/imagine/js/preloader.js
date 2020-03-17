$(document).ready(function () {
  let numb_start = $("#counter").text(); // Получаем начальное число
		
		$({numberValue: numb_start}).animate({numberValue: 100}, {
		
			duration: 7000, // Продолжительность анимации
			easing: "swing",
			
			step: function(val) {
			
				$("#counter").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				
      }			
      
    });

    setTimeout(function () {
      $('.preloader').addClass('done')
      }, 7000); 
      
});

