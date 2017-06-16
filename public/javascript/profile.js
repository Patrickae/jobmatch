$(document).ready(function() {

	$("#reviewBtn").on("click", function(event){
		event.preventDefault();
		});



  $("#submit-review").on("click", function(event) {
      event.preventDefault();

      var employmentStatus;
//set the employment status to a boolean value
      if($("#employment").val() == "Current Employee"){
        employmentStatus = true;
      }else{
        employmentStatus = false;
        }; 

var companyTitle= $("#exampleModalLongTitle").text();
//save info as an onject to sent to the api
      var newReview = {
      	thisCompany: $("#exampleModalLongTitle").text(),
        currentEmployee: employmentStatus,
        rating: $("#rating").val(),
        q1: $("#overallReview").val().trim(),
        q2: $("#pros").val().trim(),
        q3: $("#cons").val().trim(),
        q4: $("#applicantAdvice").val().trim(),
        q5: $("#employerAdvice").val().trim()
      };

 		companyTitle=companyTitle.replace(/\s+/g, "+");
     	 console.log(companyTitle);
    
      
      submitPost(newReview, companyTitle);

     
	});


//create function to post to the API
  function submitPost(Post, route) {
    $.post("/reviews", Post).then(function() {
        window.location.href = "/profile?companyName="+route;
    });
  };

});
