$(document).ready(function() {
    console.log('document is ready: hallo world');



    $('#abar1').onclick(function(){
    
        console.log('abar1 click');
        $('.ritter1').style.display('none');
        $('.ritter2').style.display('block');
    
    });

});


