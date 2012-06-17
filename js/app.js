$(document).ready(function() {
  $('#rsvpsubmit').submit(function() {
    var user = new StackMob.User($(this).serialize());
    user.create({
      success: function(model) {
        $('#formcontainer').hide();
        $('#rsvpsubmitted').show();  
      },
      error: function(model, response) {
        console.debug('problem');
      }
    });
    
    return false;
  });
});
