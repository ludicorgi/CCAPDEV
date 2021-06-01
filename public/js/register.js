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
        else if(!($.isNumeric(ccNo)) ||  !($.isNumeric(sNo))){
            $('#error').text('Credit Card and Security Number must be valid numerals');
        }
        else{
            $.get('/regAcc', {fn:fn, ln:ln, gender:gender, email:email, password:password, ccNo:ccNo, sNo:sNo, ExpDate:ExpDate, address:address}, function(result){});
            $('#error').text('Registered successfully');
            $('#fn').val("");
            $('#ln').val("");
            $('#gender').val("");
            $('#email').val("");
            $('#password').val("");
            $('#ccNo').val("");
            $('#sNo').val("");
            $('#ExpDate').val("");
            $('#address').val("");
        }
    });

    $('#email').keyup(function () {
        var email = $('#email').val();

        $.get('/regEmail', {email : email}, function(result){
            if(result.email == email){
                $('#error').text('email already in use');
                $('#email').css('background-color', '#e36363');
                $("#register").prop('disabled', true);
            }
            else{
                $('#email').css('background-color', '#dfdfdf');
                $("#register").prop('disabled', false);
                $('#error').text('');
            }
        });
    });
});