$(document).ready(function () {





    $('#warnung span').hover(function () {
        console.log("hovvrin!");

        $('.translator').text($(this).attr('id'));

    });

    $('.warnung').mouseout(function () {

        $('.translator').text('');


    });
});