

$(document).ready(function() {

	$(".profileBtn").on("click", function(event){
		event.preventDefault();

		
		var newPost ={
			companyName: this.value.trim()
		}; 

		submitPost(newPost, newPost.companyName);

	});




function submitPost(post, search) {
    $.post("/api/companies", post).then(function() {
      window.location.href = "/profile?companyName="+search;
    });
  }




});