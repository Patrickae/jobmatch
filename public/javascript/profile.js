$(document).ready(function() {

	$("#reviewBtn").on("click", function(event){
		event.preventDefault();
		console.log(this.value)
		
		window.location.href = "/reviews?companyName="+this.value;

	});



});
