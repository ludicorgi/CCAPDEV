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

    $(".delete").click(function(){
        var user = $(this).siblings(".user").text();
        var rating = $(this).siblings("u").children(".rating").text();
        var comment = $(this).siblings(".desc").text();
        $(this).closest('.review').remove();
        
        $.get('/session', {}, function(result){
            email = result.email;

            let params = new URLSearchParams(document.location.search.substring(1));
            let itemNo = params.get("itemNo");

            $.get('/comdel', {itemNo:itemNo, user:user, email: email, rating:rating, comment:comment}, function(){});
        });
    });
});