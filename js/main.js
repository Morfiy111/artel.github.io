$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 700,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('autoplay.play.owl', [4000])
})
$('.stop').on('click', function () {
    owl.trigger('autoplay.stop.owl')
})

var itemsCount = 4;
if (window.matchMedia("(max-width: 991px)").matches) {
    itemsCount = 3;
}
if (window.matchMedia("(max-width: 767px)").matches) {
    itemsCount = 2;
}
var owl = $('.owl-carousel-photo');
owl.owlCarousel({
    items: itemsCount,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 700,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('autoplay.play.owl', [4000])
})
$('.stop').on('click', function () {
    owl.trigger('autoplay.stop.owl')
})

document.querySelector('.text-center-small .btn-main-white').onclick = () => {
    document.querySelector('.cookie').style.display = 'none';
    document.querySelector('.cookie').classList.remove('is-active');
}