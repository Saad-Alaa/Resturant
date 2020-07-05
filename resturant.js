$(document).ready(function () {

    // creat smooth scrolling to links in navbar 
    $("li a").on('click', function (e) {


        var myId = $(this).attr('id');

        var section = "#" + myId + 1;

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 900, function () {

        });

    });
    //    scroll to top 
    //
    var scrollToTop = $('.scroll-to-top');


    $(window).scroll(function () {

        if ($(window).scrollTop() >= 600) {

            scrollToTop.fadeIn(400);

        } else {

            scrollToTop.fadeOut(400);

        }

    });

    $(scrollToTop).click(function (e) {

        e.preventDefault();

        $('html , body').animate({

            scrollTop: 0

        }, 1200);

    })


    var menue = [
        ['Meat', 'Beaf slice', 'steak', 'kapap'],
        ['Checkin', 'syrian chicken', 'grilled chicken', 'crispy chicken'],
        ['Soup', 'proukly soup', 'vegtables soup', 'chicken soup'],
        ['Desert', 'waffel', 'cheese cake', 'choclate cake']
        ['Vegetables', 'Normal salad', 'cheese salad', 'greek salad'],
    ];


    //start popup function

    $('.sort').click(function () {

        var Value = $(this).text();
        console.log(Value);
        for (var i = 0; i < menue.length; i++) {
            //            console.log(Value);
            //                console.log(menue[i][0]);
            for (var x = 0; x < menue[i].length; x++) {
                if (menue[i][0] == Value) {
                    console.log("test");
                    $('.popup').fadeIn();
                    var name = $(this).text();
                    $('.gatogery').text(name);
                    menue[i].shift();
                    $('.inner .text').text(menue[i]);
                };
            }
        }

    });





    //    $('.sort').click(function () {
    //
    //        var attValue = $(this).attr('kind');
    //        for (var i = 0; i < menue.length; i++) {
    //            for (var x = 0; x < menue[i].length; x++) {
    //                var test = menue.indexOf(menue[i]);
    //                if (attValue == menue.indexOf(menue[i])) {
    //                    $('.popup').fadeIn();
    //                    var name = $(this).text();
    //                    $('.gatogery').text(name)
    //                    $('.inner .text').text(menue[i]);
    //
    //                }
    //            }
    //        }
    //
    //    });
    //end popup function


    //    //start popup function
    //    $('.sort').click(function () {
    //
    //        var attValue = $(this).attr('kind');
    //
    //        for (var i = 0; i < menue.length; i++) {
    //            for (var x = 0; x < menue[i].length; x++) {
    //                if (attValue == menue[i][0]) {
    //
    //                    $('.popup').fadeIn();
    //                    var name = $(this).text();
    //                    $('.gatogery').text(name)
    //                    $('.inner .text').text(menue[i]);
    //
    //                }
    //            }
    //        }
    //
    //    });
    //    //end popup function


    $('.inner .out').click(function () {

        $('.popup').fadeOut();

    });
});
