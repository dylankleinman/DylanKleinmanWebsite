$(document).ready(function(){
  //$(".sidebar").mCustomScrollbar();

  $('.openbtn').click(function(){
    $("#mySidebar").css('width', '250px');
    $("#main").css('marginLeft', '250px');
  });

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  $('.closebtn').click(function(){
    $("#mySidebar").css('width', '0px');
    $("#main").css('marginLeft', '0px');
  });

  /*moves the other menu items down when a dropdown is opened*/
  $('#dropdownMenuLink1').click(function(){
    if($(this).attr('aria-expanded') == 'false'){
      $('.MenuItem').each(function(){
        $(this).addClass('transform-down');
      });
    }else{
      $('.MenuItem').each(function(){
        $(this).removeClass('transform-down');
      });
    }
  });
});
