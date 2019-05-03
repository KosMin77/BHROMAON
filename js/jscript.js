$('.nav-menu').on('click', 'a', function () {
    var ID = $(this).attr('href');
	// полчаем смещение елемента с id якоря
    var offset = $(ID).offset().top;
    $('html').stop().animate({scrollTop:offset}, 900, 'swing', function() {});
});