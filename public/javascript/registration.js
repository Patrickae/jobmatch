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
      level:     $("#level").val()
      
    };

    console.log(newUser)
    submitNewUser(newUser);

	});

 function submitNewUser(Post) {
  $.post("api/user/", Post, function(){
    window.location.href = "/search";
  });
 }


//Empty input fields
$("#firstName").val("");
$("#lastName").val("");
$("#email").val("");
$("#location").val("");


});
