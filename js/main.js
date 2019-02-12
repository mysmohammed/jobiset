  $(document).ready(function(){
   

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 500) {
            //clearHeader, not clearheader - caps H
            $("nav").addClass("bg-light");
        }else{
            $("nav").removeClass("bg-light");
        }
    });







});