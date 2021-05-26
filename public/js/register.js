$(document).ready(function () {

    $('#register').click(function(){
        var fn = $('#fn').val();
        var ln = $('#ln').val();
        var gender = $('#gender').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var ccNo = $('#ccNo').val();
        var sNo = $('#sNo').val();
        var ExpDate = $('#ExpDate').val();
        var address = $('#address').val();

        if(fn == "" | ln == "" | gender == "" | email == "" | password == "" | ccNo == "" | sNo == "" | ExpDate == "" | address == ""){
            $('#error').text('Fill up all fields');
        }
        else{
            $.get('/regAcc', {fn:fn, ln:ln, gender:gender, email:email, password:password, ccNo:ccNo, sNo:sNo, ExpDate:ExpDate, address:address}, function(result){});
            $('#error').text('Registered successfully');
        }
    });

    $('#email').keyup(function () {
        var email = $('#email').val();

        $.get('/regEmail', {email : email}, function(result){
            if(result.email == email){
                $('#error').text('email already in use');
                $('#email').css('background-color', '#e36363');
            }
            else{
                $('#email').css('background-color', '#dfdfdf');
            }
        });
    });
});