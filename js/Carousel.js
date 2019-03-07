$(document).ready(function(){
  console.log('testingg');
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear'
  });
});
