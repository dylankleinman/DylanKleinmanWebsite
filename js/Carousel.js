$(document).ready(function(){
  console.log('testingg');
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<a class="carousel-control-next" role="button"><span class="pointer carousel-control-next-icon" aria-hidden="true"></span></a>',
    prevArrow: '<a class="carousel-control-prev" role="button"><span class="pointer carousel-control-prev-icon" aria-hidden="true"></span></a>',
  });
});
