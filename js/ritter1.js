
$(document).ready(function() {




    $('.btn-warning').hover(function(){
        $('.jesteye').removeClass('hidden');
        $('.jesteye').removeClass('fader');

    });
    $('.btn-warning').mouseleave(function(){
      if(!clicked){
      $('#jesteye').addClass('fader');}
    });
    
    $('.btn-warning').click(function(){
        clicked = true;
        $('.btn-warning').addClass('hidden');
        $('.input-group').removeClass('hidden');
        $('.jesteye').removeClass('hidden');
        $('.jesteye').removeClass('fader');
      
            // $('html, body').animate({
            //     scrollTop: $(".du-bist").offset().top
            // }, 2000);
       
   
        });

        
        $('.eyes').tilt({
            scale: 1.1
        });
    
    
        $("#eye1").hover(
    
            function () {
                console.log("hover1");
                $('.selectedLv').css("background-image", "url('./images/v1.png')");
                $('.levelDescription').text(`Vorsicht: Diese App ändert das Bewusstsein`);
            }
        );
        $("#eye2").hover(
            function () {
                console.log("hover2");
                $('.selectedLv').css("background-image", "url('./images/v2.png')");
                $('.levelDescription').text('Eine Theorie über Hypnose (Hinweis: Es ist nicht was du denkst; es ist was du denkst.)');
            }
        );
        $("#eye2").click(function(){

        });

        $("#eye3").hover(
            function () {
                console.log("hover3");
                $('.selectedLv').css("background-image", "url('./images/v3.png')");
    
                $('.levelDescription').text('Technologie, Magie und Realität: ein praktischer Rahmen');
            }
        );
        $("#eye4").hover(
            function () {
                console.log("hover4");
                $('.selectedLv').css("background-image", "url('./images/v4.png')");
    
                $('.levelDescription').text('Psychische Energie: Berühre die Welt mit deinem Gehirn');
            }
        );
        $("#eye5").hover(
            function () {
                console.log("hover3");
                $('.selectedLv').css("background-image", "url('./images/v5.png')");
                $('.levelDescription').text('Kann jemand auf Deutsch auf Englisch denken? (Spoiler: \'No. \')');
            }
        );
        $("#eye6").hover(
            function () {
                console.log("hover3");
                $('.selectedLv').css("background-image", "url('./images/v6.png')");
    
                $('.levelDescription').text('Den hypnotischen Bildschirm durchstechen (ohne das Gerät zu beschädigen)');
            }
        );
        $("#eye7").hover(
            function () {
                console.log("hover3");
                $('.selectedLv').css("background-image", "url('./images/v7.png')");
                $('.levelDescription').text('Weniger falsch sein: Selbst, Ego & der Prozess, unseren Geist zu verändern');
            }
        );
        $("#eye8").hover(
            function () {
                console.log("hover3");
                $('.selectedLv').css("background-image", "url('./images/v8.png')");
                $('.levelDescription').text('Pfad des Narren');
            }
        );

   

});


