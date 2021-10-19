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
        
        if($(this).scrollTop() >= 80){
            $("#goToTop").show("slow");
            $(".product-menu").css({"position": "fixed", "top": "60px"})
        }
        else{
            $("#goToTop").hide("slow");
            $(".product-menu").css({"position": "relative", "top": "0"})
        }
    })
    $("#goToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
    $(".product-content:not(:first-child())").hide()
    $(".product-menu a").click(function(){
        event.preventDefault()
        var tab = $(this).attr("href")
        $(".product-content").hide()
        $(tab).show()
    })
    $(".foot-product a").click(function(){
        event.preventDefault()
        var tab = $(this).attr("href")
        $(".product-content").hide()
        $(tab).show()
        $("html, body").animate({
            scrollTop: 0
        }, 0)
    })
})