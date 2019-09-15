$(document).ready(function() {

  //Add slick jquery slider to art photos. \
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

    /*--/ Star Typed /--*/
    console.log('here');
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});

  //Remove default scroll bar and set the custom scrollbar to body
  // get the width of the resume /100 so that when scrolling, the bar across the top increases to 100% of the resume box.
  //var MaxWidth = $('#max-resume-width').width()/100;
  //console.log(MaxWidth);
  $("#resume-box").mCustomScrollbar({
    theme: "minimal-dark",
    /*callbacks:{
        whileScrolling:function(){
          console.log(MaxWidth*this.mcs.topPct);
          $('.Resume-Bar').width(MaxWidth*this.mcs.topPct+25);
        }
    }*/
  });

  //Add in the video next to the 'my life' section.  This uses vidbacking jquery
  $('#video-back').vidbacking().css('height',$('.LeftBox').height());
  $('.vidbacking-active-block-back').css('transform','none').css('position','static');

  //Stop scrolling of whole page when inner scrolling is happening
  var toolbox = $('#resume-box'),
    height = toolbox.height(),
    scrollHeight = toolbox.get(0).scrollHeight;

  toolbox.off("mousewheel").on("mousewheel", function(event) {
    var blockScrolling = this.scrollTop === scrollHeight - height && event.deltaY < 0 || this.scrollTop === 0 && event.deltaY > 0;
    return !blockScrolling;
  });

});
