$('#cursor').teletype({
  text: ['_', ' '],
  delay: 0,
  pause: 500
});

$(function() {
  //Cache the window object
  var $window = $(window);

  //Parallax background effect
  $('section[data-type="background"]').each(function() {
    var $bgobj = $(this); // assigning the object

    $(window).scroll(function() {
      // scroll the background at var speed
      // the yPos is a negative value because we're scrolling in upwards.

      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      //Put together the final background position
      var coords = '50% '+ yPos + 'px';

      //Move the background
      $bgobj.css({ backgroundPosition: coords });


    }); // end window scroll
  });
});