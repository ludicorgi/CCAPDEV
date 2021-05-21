$(document).ready(function () {

    $('#user_signin').click(function(){
        var email = $('#user_email').val();
        var password = $('#user_password').val();

        if(email == "" | password == ""){
            $('#error').text('Fill up all fields');
        }
        else{
            $.get('/logAcc', {email:email, password:password}, function(result){
                console.log(result.email + email);

                if(result.email != undefined)
                    $('#error').text("Logged in successfully");
                else $('#error').text("Invalid credentials");
            });
        }
    });
});