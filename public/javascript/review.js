$(document).ready(function() {

	  // create an object with the data submited
  $("#submit-review").on("click", function(event) {
      event.preventDefault();

      var newReview = {
        currentEmployee: $("#employment").val(),
        rating: $("#rating").val(),
        q1: $("#overallReview").val().trim(),
        q2: $("#pros").val().trim(),
        q3: $("#cons").val().trim(),
        q4: $("#applicantAdvice").val().trim(),
        q5: $("#employerAdvice").val().trim()
      };

      console.log(newReview);
    
	});

});