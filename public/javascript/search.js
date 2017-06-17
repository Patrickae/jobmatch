

$(document).ready(function() {



	$("#jobSearchBtn").on("click", function(){

		//save entries as variables
	var position = $("#position").val().trim();

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
		window.location.href = "/results?location=" + location + "&keyword=" + position + "&joblevel=" + level;


	});

	//receive a list of companies by searching 
	$("#companySearchBtn").on("click", function(){

		var searchedCompany = $("#companySearch").val().trim();

		searchedCompany = searchedCompany.replace(/\s+/g, "+").toLowerCase();

		window.location.href = "/companies?company="+searchedCompany;

	});




});