var swiper = new Swiper(".progress-products", {
    slidesPerView: 4,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    breakpoints: {
        300: {
            spaceBetween: 10,
            slidesPerView: 1
        },
        375: {
            spaceBetween: 10,
            slidesPerView: 1
        },
        420: {
            spaceBetween: 10,
            slidesPerView: 1.2
        },
        520: {
            spaceBetween: 10,
            slidesPerView: 1.5
        },
        767: {
            spaceBetween: 10,
            slidesPerView: 1.8
        },
        991: {
            spaceBetween: 10,
            slidesPerView: 2
        },
        1024: {
            spaceBetween: 10,
            slidesPerView: 2
        },
        1200: {
            spaceBetween: 18,
            slidesPerView: 3
        },
        1440: {
            spaceBetween: 18,
            slidesPerView: 3
        },
        1700: {
            spaceBetween: 24
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".progress-highlights", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    breakpoints: {
        300: {
            spaceBetween: 10,
            slidesPerView: 1
        },
        420: {
            spaceBetween: 10,
            slidesPerView: 1.5
        },
        768: {
            spaceBetween: 10,
            slidesPerView: 2
        },
        1200: {
            spaceBetween: 18
        },
        1700: {
            spaceBetween: 24
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
	
var swiper = new Swiper(".main-slider", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        300: {
            spaceBetween: 0,
            slidesPerView: 1
        },
        768: {
            spaceBetween: 0,
            slidesPerView: 1
        },
        1200: {
            spaceBetween: 0
        },
        1700: {
            spaceBetween: 0
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

$('#nav-icon2').click(function () {
    $(this).toggleClass('open');
});

function openMenu() {
    $('#mobile-menu').toggleClass("active");
    $('#ham').toggleClass("active");
}

function openSubMenu(anchorLink) {
    if (anchorLink == 'madeByUs') {
        $('#madebyusbox').unbind().addClass("active");
    } else if (anchorLink == 'search') {
        $('#searchbox').unbind().addClass("active");
    }
}

function closeSubMenu(anchorLink) {
    $('.mega-menu--multiLevel').removeClass("active");
}
var menuFirstHover = !1;

function hideSearchRes() {
    $('.predictive-box').addClass('hidden').hide(),
        $('#search_result_return').html(''),
        $('#keyword').val('')
}

function toggleMegaMenuClose(e) {
    menuSlideUp(),
        $('.open-menu').removeClass('active'),
        hideSearchRes()
}

function toggleMobSubMenu(e) {
    $('.mob-menu').delay(100).removeClass('show'),
        $('#' + e + '-mob-mega').addClass('show')
}

function toggleMobSubMenu_close(e) {
    $('#' + e + '-mega').slideToggle(),
        $('.bgfade-div').delay(50).fadeOut(),
        $('.open-menu').removeClass('active'),
        $('body').removeClass('overflow-none')
}

function toggleMobSubMenuActive(e) {
    $('.main-ctgry-menu').removeClass('active'),
        setTimeout(function () {
            'true' == $(e).attr('aria-expanded') && $(e).prev().addClass('active')
        }, 300)
}

function menuSlideUp(t = !0) {
    $('.mega-menu .container').hide(),
        $('.mega-menu').removeClass('mega-active').css({
            height: '0'
        }),
        $('.mega-menu').delay(330).queue(function (e) {
            $('.mega-menu').not($(this)).removeClass('active'),
                $('.mega-menu:not(.mega-active)').css('visibility', 'hidden'),
                t && (console.log('fadeBackground = true'), $('.bgfade-div').fadeOut()),
                e()
        })
}
$(function () {
    $('.mega-menu .container').hide();
    var t = '';
    $('li a.open-menu').mouseenter(function () {
            console.log('enetring menu'),
                t = $(this).attr('id'),
                $(this).hasClass('active') ? console.log('same menu enter') : ($('.open-menu')
                    .removeClass('active'), $(this).addClass('active'), $('.' + t).css('height', '0px'),
                    $('.mega-menu').removeClass('mega-active').css('visibility', 'hidden'), $(
                        '.mega-menu .container').hide(), $('.' + t).addClass('mega-active').css({
                        visibility: 'visible',
                        height: '550px'
                    }), $('.mega-menu').css('height', 'auto'), $('.' + t + ' > .container').fadeIn(
                        'slow'), 'hidden' == $('.mega-active').css('visibility') ? $('.bgfade-div')
                    .fadeOut() : $('.bgfade-div').fadeIn(), console.log('menuFirstHover = ',
                        menuFirstHover),
                    $('.search-bx').removeClass('opened').fadeOut(400), hideSearchRes())
        }),
        $('.mega-menu').mouseleave(function (e) {
            e = e.relatedTarget.className || e.toElement.className;
            console.log('hoveredClassOnLeave = ', e), !e || 'border-bottom-sep' != e &&
                'open-menu active' != e ? (console.log('not same menu --- dtMegaMenu = ', t),
                    menuFirstHover = !(t = ''), menuSlideUp(), $('.open-menu').removeClass('active'), $(
                        '.search-bx').removeClass('opened').fadeOut(400), hideSearchRes()) : console.log(
                    'dtMegaMenu = ', t)
        }),
        $('div.top-bar, div.icons-bar, div.logo-wrap').mouseenter(function () {
            menuSlideUp(!1),
                $('.open-menu').removeClass('active'),
                $('.search-bx').hasClass('opened') || (console.log('fadeBackground = false'), $(
                    '.bgfade-div').delay(350).fadeOut())
        }),
        $('.menu-main-h2').click(function (e) {
            $('.open-menu').removeClass('active'),
                menuSlideUp()
        })
})

$(document).ready(function () {
    $(".drop-menu").hover(function () {
        setTimeout(function () {
            $("#keyword").focus();
        }, 1e3)
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(".mega-menu").slideDown(500, "linear").addClass("opened");
        } else {
            $(".mega-menu").slideUp(500, "linear").removeClass("opened");
        }
    });
});

AOS.init();

$(".change-nav-bx li").on("mouseover", function () {
    let gg = $(this).attr("id");
    $(".default").hide();
    $("." + gg).show();
}).on("mouseleave", function () {
    $(".swiper-slide .for-hide").hide();
    $(".default").show();
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('#nourish').toggleClass('nourish', scroll >= $('#nourish').offset().top - 400);
    $('#ebm').toggleClass('ebm', scroll >= $('#ebm').offset().top - 400);
    $('#csr').toggleClass('csr', scroll >= $('#csr').offset().top - 400);
    $('#csr').toggleClass('csr-img', scroll >= $('#csr').offset().top + 200);
    $('#next').toggleClass('next', scroll >= $('#next').offset().top - 600);
    $('#footer-desk').toggleClass('footer-desk', scroll <= $('#footer-desk').offset().top - 400);
    $('#footer-desk').toggleClass('footer-img', scroll <= $('#footer-desk').offset().top + 100);
    $('#ftr-mob').toggleClass('footer-mob', scroll >= $('#ftr-mob').offset().top - 400);
});
//trigger the scroll
$(window).scroll(); //ensure if you're in current position when page is refreshed

var swiper = new Swiper(".main-banner-slider", {
    spaceBetween: 0,
    loop: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   dynamicBullets: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});