$(document).ready(function () {

    $('#user_signin').click(function(){
        var email = $('#user_email').val();
        var password = $('#user_password').val();

        if(email == "" | password == ""){
            $('#error').text('Fill up all fields');
        }
        else{
            $.get('/logAcc', {email:email, password:password}, function(result){
                if(result.email != undefined)
                    window.location.assign('/');
                else $('#error').text("Invalid credentials");
            });
        }
    });
});