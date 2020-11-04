$('.scrollto a').on('click', function () {

  let href = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, {
    duration: 370, // по умолчанию «400» 
    easing: "linear" // по умолчанию «swing» 
  });

  return false;
});

$(document).ready(function () {
  $('.slider-track').slick({
  arrows:true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight:true,
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight:true,
        autoplay:true,
        arrows:false,
        dots: true,

      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight:true,
        autoplay:true,
        arrows:false,
        dots: true,
        variableWidth:false,
        centerMode:false
      }
    },
     {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight:true,
        autoplay:true,
        arrows:false,
        dots: true,
        variableWidth:true,
        centerMode:true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});

$(document).ready(function($) {
	$('.open-popup').click(function() {
    $('.popup-fade').fadeIn();
    $('.body').css('overflow-y', 'hidden');
		return false;
	});	
	
	$('.popup-close').click(function() {
    $(this).parents('.popup-fade').fadeOut();
    $('.body').css('overflow-y', 'scroll');
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
      $('.popup-fade').fadeOut();
      $('.body').css('overflow-y', 'scroll');
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();					
      $('.body').css('overflow-y', 'scroll');
		}
	});
});


const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.mob-navbar');
const upperline = document.querySelector('.header-top');
const fixedscroll = document.querySelector('.body')
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('burger-menu-x');
})
menuIcon.addEventListener('click', () => {
  fixedscroll.classList.toggle('body-fixed');
})

// Форма обратной связи
$(function(){
 $('#form').validate({
 rules: {
 name: {
 required: true,
 minlength: 2
 },
 email: {
   email: true,
   required: true
 },
 phone: {
   required: true,
 }
 },
 messages: {
 name: {
 required: "Поле 'Имя' обязательно к заполнению",
 minlength: "Введите не менее 2-х символов в поле 'Имя'"
 },
 email: {
 required: "Поле 'Email' обязательно к заполнению",
 email: "Введите корректный адрес email" 
 },
 phone: {
  required: "Поле 'Номер телефона' обязательно к заполнению",
  phone: "Введите корректный номер телефона"
} 
 }
 });
}); 

// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form.name.value == '' || document.form.phone.value == '' || document.form.email.value == '' || !document.form.email.value.includes('@')) {
  		valid = false;
	  	return valid;
		}
    $.ajax({
			type: "POST",
			url: "../mail.php",
			data: $(this).serialize()
		}).done(function() {
      $('.popup-close').parents('.popup-fade').fadeOut();
      $('.body').css('overflow-y', 'scroll');
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});

// $(document).ready(function(){   
//     $("#email").inputmask("email")
// });
