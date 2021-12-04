$(document).ready(function() {
  $('#moreWork').click(function(e){
    swapDiv($('#credentials'), $('#falcon'))
    e.preventDefault();
  });

  $('#hideWork').click(function(e){
    swapDiv($('#falcon'), $('#credentials'))
    e.preventDefault();
  });

  $('#showtracks').mouseenter(function(){
    $('#mtb').toggle();
    $('#tracks').toggle();
  });
  $('#showtracks').mouseleave(function(){
    $('#mtb').toggle();
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