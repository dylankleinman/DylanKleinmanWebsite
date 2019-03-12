$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<a class="pointer carousel-control-next" role="button"><span class=" carousel-control-next-icon" aria-hidden="true"></span></a>',
    prevArrow: '<a class="pointer carousel-control-prev" role="button"><span class=" carousel-control-prev-icon" aria-hidden="true"></span></a>',
  });

  //Remove default scroll bar and set the custom scrollbar to body
  $(".body_content").height($(window).height()).mCustomScrollbar({
    theme: "inset-dark",
  })

  $(document).change(function(){
    console.log('changed');
  })
});
