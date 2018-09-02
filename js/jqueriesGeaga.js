$(document).ready(function () {


    function refreshTranslator() {


        let normalTextColor = '#ff9a01';//$('h3').css('color');


        $('#warnung span').hover(function () {
            console.log("hovvrin!");

            $('.translator').text($(this).attr('id'));
            $(this).css('color','yellow');

        });

        $('.warnung').mouseout(function () {

            $('.translator').text('');
            $('#warnung span').css('color',normalTextColor);


        });

    }
    refreshTranslator();


    clicked = false;

    console.log(name);


    //player enters name and presses enter
    $(document).keypress(function (e) {
        if (e.which == 13) {

            let name = $('#name-input').val();
            $('.input-group').addClass('hidden');
            //hide current graphic
            $('#jesteye').addClass('fader');
            $('.jestem').addClass('fader');

            $('#jesteye').addClass('fader');
            $('.jestem').addClass('fader');
            $('.warnung').html("");
            //wait a sec, then start narrative
            setTimeout(function () {
                
            $('.warnung').html('<h3 id="warnung"><span id="It will be easy">Es wird leicht sein,</span><br/><span id="to speak German"> Deutsch zu sprechen,</span><br/> <span id="When I in German">wenn ich auf Deutsch</span><br/><span id="think"> denken</span><span id="can"> kann.</span>');

            refreshTranslator();

            }, 1000);
            setTimeout(function () {
                
                $('#warnung').append('<br/><br/><span id="This app">Diese App </span><span id="helps learners">hilft Lernenden </span><br/><span id="think in the target language">denke in der Zielsprache. </span>');
    
                refreshTranslator();
    
                }, 3000);

            

        }
    });






    
});