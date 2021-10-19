$(document).ready(function() {
    $("div.contact").addClass(" wow animate__bounceInLeft")
    $("div.contact1").addClass(" wow animate__bounceInRight")
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
        }
        else{
            $("#goToTop").hide("slow");
        }
    })
    $("#goToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
    $(".service-contents > .service-content:not(:first-child())").hide()
    $(".service-menu a").click(function(){
        event.preventDefault()
        $(".service-menu a").removeClass()
        $(this).addClass("active")
        var tab = $(this).attr("href")
        $(".service-content").hide()
        $(tab).show()
    })
    $(".subcontent a").click(function(){
        event.preventDefault()
        $(".service-menu a").removeClass()       
        var tab = $(this).attr("href")
        var tab2 = $(".service-menu a").attr("href")
        if(tab == tab2)
            {
                $(tab2).addClass("active")
            }
        $(".service-content").hide()
        $(tab).show()
    })
})