$(document).ready(function() {
    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
    wow.init();
    $("#goToTop").hide()
    $(window).scroll(function() {
        
        if($(this).scrollTop() >= 90){
            $("#goToTop").show("slow");
            $(".product-menu").css({"position": "fixed", "top": "60px"})
        }
        else{
            $("#goToTop").hide("slow");
            $(".product-menu").css({"position": "relative"})
        }
    })
    $("#goToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
    $(".product-menu > ul > li a").click(function(){
        event.preventDefault()
        $("html, body").animate({
            scrollTop: 0
        }, 0);
    })
})