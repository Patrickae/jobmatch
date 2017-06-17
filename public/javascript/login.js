$(document).ready(function() {


    // create an object with the data submited
    $("#login-btn").on("click", function() {
        event.preventDefault();

        console.log($("#login-email").val())
        var lgUser = {

            email:     $("#login-email").val(),
            location:  $("#login-passwrd").val()

        };

        console.log(lgUser);
        // loginUser(lgUser);

    });

    function loginUser(Post) {
        console.log("here", Post);
        $.post("api/login", Post, function(){
            console.log("here again");
            window.location.href = "/search";
        });
    };


    // $("#login-email").val("");
    // $("#login-passwrd").val("");




});
