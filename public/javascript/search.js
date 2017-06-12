

$(document).ready(function() {



	$("#jobSearchBtn").on("click", function(){

		//save entries as variables
	var position = $("#positionSearch").val().trim();

	var location = $("#citySearch").val().trim();

	var level = $("#level").val();
		//set to all lowercase

	position = position.replace(/\s+/g, "+").toLowerCase();
	location = location.replace(/\s+/g, "+").toLowerCase();
	level = level.replace(/\s+/g, "_").toLowerCase();

	if(level == "Any"){
		level = "";
	};


		//redirect to search results
		window.location.href = "/results/" + location + "/" + position + "/" + level;




	});




});