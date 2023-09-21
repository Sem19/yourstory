$(document).ready(function () {


    $('.storis-logos').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
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

    $(window).scroll(function(){
        const top = $(window).scrollTop();
        (top > 81) ? $('.header-fixed').addClass('active') : $('.header-fixed').removeClass('active')
    })
    
});

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