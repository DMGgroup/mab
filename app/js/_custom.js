document.addEventListener("DOMContentLoaded", function() {

    feather.replace()

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    })

    var $slickBig = $('.gall-slider-big')
    var $slickSmall = $('.gall-slider-small')
    var $slickNorm = $('.gall-slider-norm')
    var $slickLogos = $('.slider-logo')
    var $slickNews = $('.slider-news')


    $slickBig.slick({
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        asNavFor: '.gall-slider-small',
        dots: false,
        speed: 700,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    })

    $slickSmall.slick({
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        dots: false,
        speed: 500,
        asNavFor: '.gall-slider-big',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    })

    $slickNorm.slick({
        speed: 400,
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        dots: false,
        asNavFor: '.gall-slider-small, .gall-slider-big',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    })

    $slickLogos.slick({
        autoplay: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        dots: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    })

    $slickNews.slick({
        autoplay: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        adaptiveHeight: false,
        dots: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    })

    $('.gall-prev').click(function() {
        if (!$(this).hasClass('hid')) {
            $slickNorm.slick('slickPrev')
        }
    })

    $('.gall-next').click(function() {
        if (!$(this).hasClass('hid')) {
            $slickNorm.slick('slickNext')
        }
    })

    $('.news-prev').click(function() {
        if (!$(this).hasClass('hid')) {
            $slickNews.slick('slickPrev')
        }
    })

    $('.news-next').click(function() {
        if (!$(this).hasClass('hid')) {
            $slickNews.slick('slickNext')
        }
    })

})

function swLang(lang) {
    var melg = $('html').attr('lang')

    if (lang !== melg) {
        $('html').attr('lang', lang)
    }

    if (lang === 'en-US') {
        console.log(lang === 'en-US')
    } else {

    }

}

$(window).scroll(function() {
    var height = $(window).scrollTop()
    if (height > $(window).height()) {
        $('header').addClass('active')
        setTimeout(function() {
            $('header').addClass('ready')
        }, 300)
    } else {
        $('header').removeClass('ready')
        $('header').removeClass('active')

    }
})

$('#swLang a').on('click', function(e) {
    e.preventDefault()
    $('#swLang a').removeClass('active')
    $(this).addClass('active')
})
$('#navbarNav a').on('click', function(e) {
    e.preventDefault()
    $('#navbarNav a').removeClass('active')
    $(this).addClass('active')
})

$(document).on('click', '[data-href]', function(e) {
    e.preventDefault()
    var target = $(this).data('href')
    var goto = $(target)
    $('html, body').animate({
        scrollTop: goto.offset().top - 60
    }, 800)
})