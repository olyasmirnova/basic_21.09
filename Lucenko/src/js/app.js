
$( document ).ready(function() {
    //nav btn
    $('.nav__btn').click(function(){
        $('.header__nav').toggleClass("active");
    })

    $('ul.tabs__list li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs__list li').removeClass('current');
		$('.tab-text').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
});

