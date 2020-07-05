$(document).ready(function () {

    //Stop  typing
    $('.spin').prop('disabled', 'true')

    //spinner input    
    var minimum = 1;
    var maxmum = 10;
    var spinner;
    var price;
    var i;
    var j;
    var intPrice;
    var total;
    var name = $('.card-title');
    var food = [];
    var sum;
    calculate();

    //make a node list
    var node = document.getElementsByClassName('title');
    var sidePrice = document.getElementsByClassName('price2');
    for (var i = 0; i < name.length; ++i) {
        food.push(name[i].innerHTML);
        //        priceData.push(sidePrice[i].innerHTML);

    }

    for (let k = 0; k < node.length; k++) {
        node[k].innerHTML = food[k];
    }



    $('.plus').click(function () {
        var productPrice = $(this).parents('.card-body').find('.price').text();
        //        conver price from string into int
        var intPrice = parseInt(productPrice);
        //get attr value
        var attrValue = $(this).parents('.card-body').find('.total-price').attr('number');
        if ($(this).prev('.spin').val() == maxmum) {
            return false;
        } else {
            $(this).prev('.spin').val(parseInt($(this).prev('.spin').val()) + 1);
            spinner = $(this).prev('.spin').val();
            total = intPrice * spinner;
            $(this).parents('.card-body').find('.total-price').html(total);
            var value = $(this).parents('.card-body').find('.total-price').text();
            $(this).parents('.input-group').children('.report').show(1000);
            $(this).next('.report').find('.count').html(spinner);
            $(attrValue).html(value);
            calculate();


        }
    });


    //    Decreasment

    $('.minus ').click(function () {
        var productPrice = $(this).parents('.card-body').find('.price').text();
        //        conver price from string into int
        var intPrice = parseInt(productPrice);
        //get attr value
        var attrValue = $(this).parents('.card-body').find('.total-price').attr('number');
        if ($(this).next('.spin').val() == minimum || $(this).next('.spin').val() == 0) {
            return false
        } else {
            $(this).next('.spin').val(parseInt($(this).next('.spin').val()) - 1);
            spinner = $(this).next('.spin').val();
            total = intPrice * spinner;
            $(this).parents('.card-body').find('.total-price').html(total);
            var value = $(this).parents('.card-body').find('.total-price').text();
            $(this).parents('.input-group').children('.report').show(1000);
            $(this).parents('.input-group').children('.report').find('.count').html(spinner);
            $(attrValue).html(value);
            calculate();

        }
    });
    // end spinner input    


    $('.remove').click(function () {
        $(this).parent('div.card').remove();

        var delete_no = $(this).attr("deleteProduct");
        $(delete_no).remove();
    });


    // subtotal

    function calculate() {
        var priceData = [];
        var sum = 0;
        $(".price2").each(function () {
            var stringPrice = $(this).text();
            var intNum = parseInt(stringPrice);
            priceData.push(intNum);
        });
        for (let x = 0; x < priceData.length; x++) {
            sum = sum + priceData[x];
        }
        //        console.log(sum);
        $(".subtotal-price").text('$' + sum);

        var tax = parseInt($(".value").text());
        var taxValue = sum * (tax / 100);
        var finalTotal = sum + taxValue;
        //        console.log(finalTotal);

        $(".final").text(finalTotal);

    }

    $('.insert').click(function () {

        var code = $(".code").val();
        var subtotal = $(".final").text();
        var subtotalInt = parseInt(subtotal);
        var sale;
        var percent = parseInt($('.value').text());
        if (code == 'AC6') {

            sale = subtotalInt * (percent / 100)
            $('.discount').text("$" + sale);

        } else {
            alert("Invalid Promo Code");
            finalprice = sale;
        }

    });

});
