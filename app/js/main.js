$(function () {
  $('.header__btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--close');
  });
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });
  let gallery = document.querySelector('.gallery__inner')
  if (gallery) {
    let mixer = mixitup(gallery, {
      load: {
        filter: '.bedroom'
      }
    });
  }
})