$(document).ready(function(){
  console.log('ready');
  var NavOpen = false;
  $('.openbtn').click(function(){
    $("#mySidebar").css('width', '250px');
    $("#main").css('marginLeft', '250px');
  });

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  $('.closebtn').click(function(){
    $("#mySidebar").css('width', '0px');
    $("#main").css('marginLeft', '0px');
  });
  $('#dropdownMenuLink1').attr('aria-expanded',)
});
