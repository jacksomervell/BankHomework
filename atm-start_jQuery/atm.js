//add clicks to the boxes
//if you input it and click deposit adds to the main box - do for current account
//if you input and withdraw it takes away from main box - do for current account
//do botb the above for savings
//link the two one-way - if you take away from current overdrawn, it takes form savings.
//


$(document).ready(function(){
  $('#deposit1').on('click', function(e) {
    console.log('hello');
    $('#balance1').text(("$")+($("#amount1")).val());
    // $('#balance1').html('<span>$</span>')
  });
})

$(document).ready(function(){
  $('#withdraw1').on('click', function(e) {
    console.log('hello');
  });
})


