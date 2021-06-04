$(document).ready(function () {
    $('#confirm_order').click(function () {
        var fn = $('#fn').val();
        var ln = $('#ln').val();
        var email = $('#email').val();
        var address = $('#address').val();
        var zipcode = $('#zipcode').val();

        if (fn == "" || ln == "" || email == "" || address == "" || zipcode == "") {
            //fill out all fields
            $('#error').text('All fields are not filled out!');
        }
        else {
            $('#error').text('Success!');
            $.get('/session', {}, function(result){
                email = result.email;
                
                //$.get('purchase', {email: email}, function() {});

                //empty cart
                $.get('emptycart', {email: email}, function() {});
            }); 
        }
    });
})