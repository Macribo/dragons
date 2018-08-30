$(document).ready(function() {

clicked = false;
    console.log('document is ready: hallo world');

    console.log(name);
    $(document).keypress(function(e) {
        if(e.which == 13) {
       
    let name = $('#name-input').val();
    console.log(name);
            $('.erwachsene').addClass('hidden');
            $('#ich-bin2').removeClass('hidden');
            $('.jestem').css("background-image","url(./images/");



}
    });

    $('#abar1').click(function(){
        console.log('abar1 click');
        $('.ritter1').style.display('none');
        $('.ritter2').style.display('block');
    
    });

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
      
            $('html, body').animate({
                scrollTop: $(".du-bist").offset().top
            }, 2000);
       
   
        });


   

});


