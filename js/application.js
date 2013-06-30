$(document).ready(function() {
  $('#moreWork').click(function(e){
    swapDiv($('#credentials'), $('#point'))
    e.preventDefault();
  });

  $('#hideWork').click(function(e){
    swapDiv($('#point'), $('#credentials'))
    e.preventDefault();
  });

  $('#showtracks').mouseenter(function(){
    $('#hug').toggle();
    $('#tracks').toggle();
  });
  $('#showtracks').mouseleave(function(){
    $('#hug').toggle();
    $('#tracks').toggle();
  })

  $('#domainShow').click(function(e){
    swapDiv($('#domains'), $('#bio'))
    e.preventDefault();
  }) 

  $('#bioShow').click(function(e){
    swapDiv($('#bio'), $('#domains'))
    e.preventDefault();
  })

  function swapDiv(divIn, divOut){
    divOut.fadeOut(250, function(){
      divIn.fadeIn(250);
    });
  };
})