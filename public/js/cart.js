$(document).ready(function($) {
    $('.delete').click(function () {
        const parent = $(this).parent().parent()[0];
        const id = parent.firstElementChild.value;

        $.post('/deletecart', {id : id}, function(success) {
            if (success) {
                parent.remove();
            }
        });
    });
});
