function increment() {
    document.getElementById('demoInput').stepUp();
 }
 function decrement() {
    document.getElementById('demoInput').stepDown();
 }

$(document).ready(function () {

    $('#demoInput').keyup(function(){
        var max = parseInt(document.getElementById("demoInput").max);
        if ($(this).val() > max){
           $(this).val(max);
        }
     });

    $('#buy').click(function(){
        $.get('/session', {}, function(result){
            var email = result.email;
            console.log(result.email);
            let params = new URLSearchParams(document.location.search.substring(1));
            let itemNo = params.get("itemNo");
            let quantity = $('#demoInput').val();
            //TODO: get quantity of products added
            $.get('/addcart', {email : email, itemNo: itemNo, quantity:quantity}, function(result){
                console.log(result);
                if(result){
                    console.log('dwdwede');
                }
                    $('#errorproduct').text('Added to Cart Successfully');
            });
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

                $('#rating').val("");
                $('#comment').val("");
                
                setTimeout(function() {
                    location.reload();
                }, 500);
            });
        }
    });

    $(".delete").click(function(){
        var user = $(this).siblings(".user").text();
        var rating = $(this).siblings("u").children(".rating").text();
        var comment = $(this).siblings(".desc").text();
        
        $.get('/session', {}, function(result){
            email = result.email;

            let params = new URLSearchParams(document.location.search.substring(1));
            let itemNo = params.get("itemNo");

            $.get('/comdel', {itemNo:itemNo, user:user, email: email, rating:rating, comment:comment}, function(result){
                if(result == "successful delete") $(this).closest('.review').remove();
                location.reload();
            });
        });
    });
});