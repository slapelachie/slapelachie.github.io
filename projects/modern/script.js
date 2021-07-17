$(document).scroll(function () {
    var $nav = $("#header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $(".scroll-down-arrow").toggleClass('scroll-hide', $(this).scrollTop() > $nav.height());
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 500);
});
