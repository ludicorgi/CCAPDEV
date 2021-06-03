$(document).ready(function () {

    $('#user_signin').click(function(){
        var email = $('#user_email').val();
        var password = $('#user_password').val();

        if(email == "" | password == ""){
            $('#error').text('Fill up all fields');
        }
        else{
            //TODO: make admin credentials more secure
            if(email == "admin" && password == "admin"){
                window.location.assign('/admin');
            }
            else{
                 $.get('/logAcc', {email:email, password:password}, function(result){
                    if(result.email != undefined)
                        window.location.assign('/edit_profile');
                    else $('#error').text("Invalid credentials");
                });
            }
        }
    });
});