

$(document).ready(function() {



	$("#companySearchBtn").on("click", function(){

		//save entries as variables
	var position = $("#positionSearch").val().trim();

	var location = $("#citySearch").val().trim();

		//set to all lowercase

	position = position.replace(/\s+/g, "").toLowerCase();
	location = location.replace(/\s+/g, "").toLowerCase();

		//redirect to search results
		window.location.href = "/results/" + location + "/" + position;




	});




});