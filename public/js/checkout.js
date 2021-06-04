$(document).ready(function () {
    $('#confirm_order').click(function () {
         $.get('/session', {}, function(result){
                email = result.email;
                
                //$.get('purchase', {email: email}, function() {});

                //empty cart
                $.get('emptycart', {email: email}, function() {});
         }); 
    });
})