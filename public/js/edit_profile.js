$(document).ready(function () {

    $('#edit').click(function(){
        $('.inputbox').prop('disabled', false);
        $('#email').prop('disabled', true);
        $('#save').prop('disabled', false);
    });

    $('#save').click(function(){
        $('.inputbox').prop('disabled', true);
        $('#save').prop('disabled', true);

        var fn,ln,gender,ccNo,ExpDate,address,imgURL;

        if ($('#fn').val() == "")
           fn = $('#fn').attr('placeholder');
        else fn = $('#fn').val();
        
        if ($('#ln').val() == "")
            ln = $('#ln').attr('placeholder');
        else ln = $('#ln').val();

        if ($('#gender').val() == "")
           gender = $('#gender').attr('placeholder');
        else gender = $('#gender').val();

        if ($('#ccNo').val() == "")
           ccNo = $('#ccNo').attr('placeholder');
        else ccNo = $('#ccNo').val();

        if ($('#sNo').val() == "")
           sNo = $('#sNo').attr('placeholder');
        else sNo = $('#sNo').val();

        if ($('#ExpDate').val() == "")
           ExpDate = $('#ExpDate').attr('placeholder');
        else ExpDate = $('#ExpDate').val();

        if ($('#address').val() == "")
           address = $('#address').attr('placeholder');
        else address = $('#address').val();

        if ($('#imgURL').val() == "")
            imgURL = $('#imgURL').attr('placeholder');
        else imgURL = $('#imgURL').val();

        $.get('/editdetails',{fn:fn, ln:ln, gender:gender, ccNo: ccNo, sNo: sNo, ExpDate:ExpDate, address:address, imgURL: imgURL}, function(){});
        $('body').load('/edit_profile');
    });
});