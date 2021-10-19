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
    $(".product-content:not(:fisrt-child())").hide()
    
    $(".product-menu > ul > li a").click(function(){
        event.preventDefault()
        $("html, body").animate({
            scrollTop: 0
        }, 0);
    })
    // var tab=["#led", "#alu", "#hd", "mica"]
    // var x = location.hash;
    // for (var i = 0; i <= 3; i++)
    // {
    //     if(x === tab[i])
    //     {
    //         $(".product-content").hide()
    //         var a = $(tab[i])
    //         $(a).show()
    //     }
    // }
})