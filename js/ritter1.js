
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
                $('.selectedLv').css("background-image", "url('./images/julian.png')");
                $('.levelDescription').text(`Julian`);
            }
        );
        $("#eye2").hover(
            function () {
                console.log("hover2");
                $('.selectedLv').css("background-image", "url('./images/victor.png')");
                $('.levelDescription').text('Victor');
            }
        );
        $("#eye2").click(function(){
            $('.levelDescription').addClass('fader');
            $('#daemonStar').addClass('fader');
            $('#kungfu').removeClass('hidden');
        });

        $("#eye3").hover(
            function () {
                console.log("hover3");
                $('.selectedLv').css("background-image", "url('./images/chickie.png')");
    
                $('.levelDescription').text('Chickie');
            }
        );
        $("#eye4").hover(
            function () {
                console.log("hover4");
                $('.selectedLv').css("background-image", "url('./images/imr.png')");
    
                $('.levelDescription').text('Imr');
            }
        );
        $("#eye5").hover(
            function () {
                console.log("hover3");
                $('.selectedLv').css("background-image", "url('./images/niha.png')");
                $('.levelDescription').text('Niha');
            }
        );
        $("#eye6").hover(
            function () {
                console.log("hover3");
                $('.selectedLv').css("background-image", "url('./images/v7.png')");
    
                $('.levelDescription').text('Empty');
            }
        );
        $("#eye7").hover(
            function () {
                console.log("hover3");
                $('.selectedLv').css("background-image", "url('./images/v7.png')");
                $('.levelDescription').text('Empty');
            }
        );
        $("#eye8").hover(
            function () {
                console.log("hover3");
                $('.selectedLv').css("background-image", "url('./images/v7.png')");
                $('.levelDescription').text('Empty');
            }
        );

   

});


