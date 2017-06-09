$(document).ready(function() {

	  // create an object with the data submited
  $("#submit-review").on("click", function(event) {
      event.preventDefault();

      var employmentStatus;

      if($("#employment").val() == "Current Employee"){
        employmentStatus = true;
      }else{
        employmentStatus = false;
        }; 

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



  function submitPost(Post) {
    $.post("/api/reviews/", Post, function() {
      window.location.href = "/reviews";
    });
  }

});