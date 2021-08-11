$(function () {
  $('.header__btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--close');
  });

  if($(window).width() < 651) {
    $('.works-path__item--measuring').appendTo($('.works-path__items-box'));
  }

  $('.header__btn-menu').on('click', function() {
    $('.menu').toggleClass('menu--open');
  });
 
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  $('.contact-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings:{
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1511,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.article-slider__box').slick({
     prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"> <img src="images/arrow-slide-left.svg" alt="arrow left"> </button>',
     nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"> <img src="images/arrow-slide-right.svg" alt="arrow right"> </button>',
  })

  let gallery = document.querySelector('.gallery__inner')
  if (gallery) {
    let mixer = mixitup(gallery, {
      load: {
        filter: '.bedroom'
      }
    });
  }
})