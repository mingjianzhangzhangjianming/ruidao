
var case_img = new Swiper('.case_img', {
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        touchRatio: 0.2,
        centeredSlides: true,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 3,
        breakpoints: {
            1199: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    })

    var case_bimg = new Swiper('.case_bimg', {
        spaceBetween: 0,
        autoHeight: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        loop: true,
        // slidesPerView: 1,
        loopedSlides: 3,
    });
    case_img.controller.control = case_bimg;
    case_bimg.controller.control = case_img;



