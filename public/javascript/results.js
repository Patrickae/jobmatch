

$(document).ready(function() {

	$(".profileBtn").on("click", function(event){
		event.preventDefault();

		localStorage.setItem("lastPage", document.URL)
		
		var clickedComp = $(this).attr("value");

		clickedComp = clickedComp.replace(/([&])+/g, "and");


		var newPost ={
			companyName: clickedComp
		}; 

		console.log(newPost.companyName);

		submitPost(newPost, newPost.companyName);

	});




function submitPost(post, search) {
    $.post("/api/companies", post).then(function() {
      window.location.href = "/profile?companyName="+search;
    });
  }




});