$(document).ready(function () {

    $('#buy').click(function(){
        $.get('/session', {}, function(result){
            
        });
    });

    $('#send').click(function(){
        if($('#rating').val() == "" || $('#comment').val() == "")
            $('#error').text("please fill up all fields");
        else if($('#rating').val() > 5 || $('#rating').val() < 0)
            $('#error').text("review score must be between 0 to 5");
        else {
            $.get('/session', {}, function(result){
                /*TODO: 
                append to comments
                add review to user's and product's db*/
            });
        }
    });
});