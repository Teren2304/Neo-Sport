$('.js-toggle').click(() => {
  $('.nav').toggleClass('nav--active');
});

$('.js-modal-icon').click(() => {
  $('.modal--active').removeClass('modal--active');
});

$('.js-bet-menu-icon').click(function () {
  $('.js-bet-menu').removeClass('bet-menu--active')
})

$(document).on('click', '.js-top-link', function() {
  $($(this).attr('data')).toggleClass('modal--active');}
);

$(document).on('click', '.js-settings-item', function () {
  $('body').toggleClass($(this).attr('data-color'));
});

$('.js-search-icon').click(()=>{$('.top').toggleClass('top--search');});

$(document).ready(function(){

  $('.js-header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false
  });

  $('.js-default-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true
  });

  $('.js-schedule-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true
  });
});

$('.js-ipn-classification-wrapper-header').click(function(){
  $(this).parent().toggleClass('ipn-classification__wrapper--open')
});

$('.js-bet-nav-link').click(function () {
  $(this).toggleClass('bet-nav__link--active')
  $('.js-bet-menu').toggleClass('bet-menu--active')
})

$('.js-bet-sport-category').click(function () {
  $(this).parent().toggleClass('bet-sport--active')
  $('.js-ipn-classification').toggleClass(`ipn-classification--${$(this).parent()[0].classList[2].split('--')[1]}`)
})

$('.js-bet-sport-favourite').click(function () {
  $(this).toggleClass('bet-sport__favourite--active')
})
