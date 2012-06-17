$(document).ready(function() {
  $('#rsvpsubmit').submit(function() {
    var obj = $(this).serializeObject();
    obj['username'] = obj['email'];
    obj['password'] = obj['name'];
    
    var user = new StackMob.User();
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
