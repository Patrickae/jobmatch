

$(document).ready(function() {

	$(".profileBtn").on("click", function(event){
		event.preventDefault();

		//local store current url for nav use
		localStorage.setItem("lastPage", document.URL)
		

		var clickedComp = $(this).attr("value");
		//replace & with and because the route doesnt like it
		clickedComp = clickedComp.replace(/([&])+/g, "and");


		var newPost ={
			companyName: clickedComp
		}; 

		console.log(newPost.companyName);
		//send as post
		submitPost(newPost, newPost.companyName);

	});


	$("#navSearch").on("click", function(){
		event.preventDefault();
		//save entries as variables
	var position = $("#navKeyWord").val().trim();

	var location = $("#navLocation").val().trim();

	var level = $("#navLevel").val();
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



$(".companyWell").on("click", function(event){
		event.preventDefault();

		//local store current url for nav use
		localStorage.setItem("lastPage", document.URL)
		

		var clickedComp = $(this).attr("value");
		//replace & with and because the route doesnt like it
		clickedComp = clickedComp.replace(/([&])+/g, "and");


		window.location.href = "/profile?companyName="+clickedComp;

	});






function submitPost(post, search) {
    $.post("/api/companies", post).then(function() {
      window.location.href = "/profile?companyName="+search;
    });
  }




});