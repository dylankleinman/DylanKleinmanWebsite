$(document).ready(function() {
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
  $("#resume-box").mCustomScrollbar({
    theme: "inset-dark",
    callbacks:{
        whileScrolling:function(){
          console.log(this.mcs.topPct);
          $('.Resume-Bar').width(this.mcs.topPct * 13);
        }
    }
  });


  var toolbox = $('#resume-box'),
    height = toolbox.height(),
    scrollHeight = toolbox.get(0).scrollHeight;

  toolbox.off("mousewheel").on("mousewheel", function(event) {
    var blockScrolling = this.scrollTop === scrollHeight - height && event.deltaY < 0 || this.scrollTop === 0 && event.deltaY > 0;
    return !blockScrolling;
  });

});
