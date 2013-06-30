$(document).ready(function() {
  $('#moreWork').click(function(){
    $('#point').fadeOut(250, function(){
      $('#credentials').fadeIn(250);
    });
  });

  $('#hideWork').click(function(){
    $('#credentials').fadeOut(250, function(){
      $('#point').fadeIn(250);
    });
  });

  $('#showtracks').mouseenter(function(){
    $('#hug').toggle();
    $('#tracks').toggle();
  });
  $('#showtracks').mouseleave(function(){
    $('#hug').toggle();
    $('#tracks').toggle();
  })
})