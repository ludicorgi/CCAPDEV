$(document).ready(function () {
    //check itemno match
    $('#itemno').keyup(function () {
        var itemNo = $('#itemno').val();

        $.get('/checkitemno', { itemNo: itemNo }, function (result) {
            //if matching itemno, enable edit button
            if (result.itemNo == itemNo) {
                $('#addprod').prop('disabled', true);
                $('#editprod').prop('disabled', false);
            }
            //else, enable add button bc item does not exist yet
            else {
                $('#addprod').prop('disabled', false);
                $('#editprod').prop('disabled', true);
            }
        });
    });

    //add product
    $('#addprod').click(function () {
        var itemno = $('#itemno').val();
        var prodname = $('#prodname').val();
        var company = $('#company').val();
        var qty = $('#qty').val();
        var price = $('#price').val();
        var tags = $('#tags').val();
        var imgurl = $('#imgurl').val();
        var itemdesc = $('#itemdesc').val();

        if (itemno == "" || prodname == "" || company == "" || qty == "" || price == "" || tags == "" || imgurl == "" || itemdesc == "") {
            //fill out all fields
            console.log('Empty');
            $('#msg').text('All fields are not filled out!'); 
        }
        else {
            $.get('/addprod', {itemno: itemno, prodname: prodname, company: company, qty: qty, price: price, tags: tags, imgurl: imgurl, itemdesc: itemdesc}, function() {});
            
            $('#itemno').val('');
            $('#prodname').val('');
            $('#company').val('');
            $('#qty').val('');
            $('#price').val('');
            $('#tags').val('');
            $('#imgurl').val('');
            $('#itemdesc').val('');
            $('#msg').text('Product is successfully added!'); 

            console.log('Success');
        }

    });

    //edit product
    $('#editprod').click(function () {
        var itemno = $('#itemno').val();
        var prodname = $('#prodname').val();
        var company = $('#company').val();
        var qty = $('#qty').val();
        var price = $('#price').val();
        var tags = $('#tags').val();
        var imgurl = $('#imgurl').val();
        var itemdesc = $('#itemdesc').val();

        if (itemno == "" || prodname == "" || company == "" || qty == "" || price == "" || tags == "" || imgurl == "" || itemdesc == "") {
            //fill out all fields
            console.log('Empty');
            $('#msg').text('All fields are not filled out!');
        }
        else {
            $.get('/editprod', {itemno: itemno, prodname: prodname, company: company, qty: qty, price: price, tags: tags, imgurl: imgurl, itemdesc: itemdesc}, function() {});
            
            $('#itemno').val('');
            $('#prodname').val('');
            $('#company').val('');
            $('#qty').val('');
            $('#price').val('');
            $('#tags').val('');
            $('#imgurl').val('');
            $('#itemdesc').val('');
            $('#msg').text('Product is successfully edited!');

            console.log('Success');
        }
    });

    //delete product
    $('#productstable').on('click', '.delprod', function () {
        
        var info = $(this).closest("tr").children(); //get row details
        var itemno = $(info[0]).text(); //get itemno of current row
        $(this).closest("tr").remove(); //remove row
        
        //call del function
        $.get('/delprod', {itemNo : itemno}, function(){});
        
        console.log("Delete " + itemno);
    });

   
})
