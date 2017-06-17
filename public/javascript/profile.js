$(document).ready(function() {


	//prevent default for btn that brings up modal
	$("#reviewBtn").on("click", function(event){
		event.preventDefault();
		});

	//go back to localy stored URL
	$("#backBtn").on("click",function(){
		event.preventDefault();

		var lastPage = localStorage.getItem("lastPage");

		console.log(lastPage);
		window.location.href = lastPage;
	});

//replace " " with + in order to put company in route
var companyTitleLong= $("#exampleModalLongTitle").text();
companyTitle=companyTitleLong.replace(/\s+/g, "+");
     console.log(companyTitle);


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
      	thisCompany: $("#exampleModalLongTitle").text(),
        currentEmployee: employmentStatus,
        rating: $("#rating").val(),
        q1: $("#overallReview").val().trim(),
        q2: $("#pros").val().trim(),
        q3: $("#cons").val().trim(),
        q4: $("#applicantAdvice").val().trim(),
        q5: $("#employerAdvice").val().trim()
      };

 	
    
      
     submitPost(newReview, companyTitle);

     
	});


//create function to post to the API
  function submitPost(Post, route) {
    $.post("/reviews", Post).then(function() {
        window.location.href = "/profile?companyName="+route;
    });
  };


  var oneStar = 0;
  var twoStar = 0;
  var threeStar = 0;
  var fourStar = 0;
  var fiveStar = 0;


  $.get("/api/reviews/"+companyTitle).then(function(result){
  	console.log(result);
  	for(i=0; i< result.length; i++){
	  	if(result[i].rating === 1){
			oneStar += 1;
		}else if(result[i].rating === 2){
			twoStar += 1;
		}else if(result[i].rating === 3){
			threeStar += 1;
		}else if(result[i].rating === 4){
			fourStar += 1;
		}else if(result[i].rating === 5){
			fiveStar += 1;
		}
	};

	console.log(oneStar)

  }).then(function(){






var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['1 (worst)', "2", "3", "4", "5 (best)"],
        datasets: [{
            label: '# of Votes',
            data: [oneStar, twoStar, threeStar, fourStar, fiveStar],
            backgroundColor: [
              'rgba(247,0,68,1)',
                'rgba(247,133,0, 1)',
                'rgba(246,214,0, 1)',
                'rgba(6,111,165, 1)',
                'rgba(17,205,134, 1)'
                
            ],
            borderColor: [
                'rgba(255,255,255, 1)',
                'rgba(255,255,255, 1)',
                'rgba(255,255,255, 1)',
                'rgba(255,255,255, 1)',
                'rgba(255,255,255, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
    	responsive: true,
    	legend:{
    		position: "top"
    	},
    	title:{
    		display:true,
    		text: "Total Ratings for "+companyTitleLong

    	},
    	animation:{
    		animateScale: true,
    		animateRotate: true
    	},
    	cutoutPercentage: 50
    	

    }
});



});









});
