$(document).ready(function () {
    $('.program-block').click(function () {
        $('.program-block').removeClass('active')
        $(this).addClass('active')
    })

    // log in, log out header;

    $('.acount-link').click(function (e) {
        e.preventDefault()
        $('.acount-link').removeClass('active')
        $(this).addClass('active')
    })

    // price block;

    $('.price-block').click(function (e) {
        e.preventDefault()
        $('.price-block').removeClass('active')
        $(this).addClass('active')
    })

    $('.review-sliders').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="btn slick-btn prev-btn"></button>',
        nextArrow: '<button class="btn slick-btn next-btn active"></button>',
        responsive: [{
            breakpoint: 451,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        }]
    })

    $('.review-sliders .slick-btn').click(function () {
        $('.slick-btn').removeClass('active')
        $(this).addClass('active')
    })

    $('.burger').click(function () {
        $('.burger').toggleClass('active')
        $('.nav').toggleClass('active')
    })

    $('.Sign-Up').click(function (e) {
        e.preventDefault()
        $('.popup').addClass('active')
        $('.form-register').addClass('active')

    })

    $('.login').click(function (e) {
        e.preventDefault()
        $('.popup').addClass('active')
        $('.form-login').addClass('active')

    })

    $('.btn-close').click(function () {
        $('.popup').removeClass('active')
        $('.form-register').removeClass('active')
    })

    // tabs slids

    $('.faq-title').click(function () {
        $('.faq-title').removeClass('active');
        $(this).addClass('active');
        $('.faq-tab-text').slideUp(800);
        $(this).siblings().slideDown(800);
    });

    //selected
    if(!$('.js-example-basic-single').length) {
        return false
    } else {
        $('.js-example-basic-single').select2();
    }
    
});

const togglepassword = document.querySelector('#togglepassword')
const password = document.querySelector('#password')

togglepassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    this.classList.toggle('eye-close');
    password.setAttribute('type', type);
})

const button = document.querySelector('.video-control')
const videoPlay = document.querySelector('#video')
const video = document.querySelector('.video')

function playClick(media) {
    media.play();
}
if (button) {
    button.addEventListener('click', function () {
        video.classList.add('hide');
        button.classList.add('hide');

        playClick(videoPlay);
    })
}