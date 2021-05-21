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
});