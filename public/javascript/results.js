

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




function submitPost(post, search) {
    $.post("/api/companies", post).then(function() {
      window.location.href = "/profile?companyName="+search;
    });
  }




});