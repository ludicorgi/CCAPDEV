$(document).ready(function () {

    $('#buy').click(function(){
        $.get('/session', {}, function(result){
            
        });
    });

    $('#send').click(function(){
        var rating = $('#rating').val();
        var comment = $('#comment').val();

        if(rating == "" || comment == "")
            $('.error').text("please fill up all fields");
        else if(rating > 5 || rating < 0)
            $('.error').text("review score must be between 0 to 5");
        else {
            $.get('/session', {}, function(result){
                user = result.fn + " " + result.ln;
                email = result.email;

                let params = new URLSearchParams(document.location.search.substring(1));
                let itemNo = params.get("itemNo");

                $.get('/comment', {itemNo:itemNo, user:user, email: email, rating:rating, comment:comment}, function(){});
            });
        }
    });
});