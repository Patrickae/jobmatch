$(document).ready(function() {

	  // create an object with the data submited
  $("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newUser = {
      firstName: $("#firstName").val(),
      lastName:  $("#lastName").val(),
      email:     $("#email").val(),
      location:  $("#location").val(),
      employ:    $("#employ").val(),
      level:     $("#level").val(),
      
    };

    console.log(newUser)
    
	});

});