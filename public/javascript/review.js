$(document).ready(function() {

	  // create an object with the data submited
  $("#submit-review").on("click", function(event) {
      event.preventDefault();

      var employmentStatus;
//set the employment status to a boolean value
      if($("#employment").val() == "Current Employee"){
        employmentStatus = true;
      }else{
        employmentStatus = false;
        }; 


//save info as an onject to sent to the api
      var newReview = {
        currentEmployee: employmentStatus,
        rating: $("#rating").val(),
        q1: $("#overallReview").val().trim(),
        q2: $("#pros").val().trim(),
        q3: $("#cons").val().trim(),
        q4: $("#applicantAdvice").val().trim(),
        q5: $("#employerAdvice").val().trim()
      };

      
      submitPost(newReview);
    
	});


//create function to post to the API
  function submitPost(Post) {
    $.post("/reviews", Post).then(function() {
        // window.location.href = "/search";
    });
  }

});