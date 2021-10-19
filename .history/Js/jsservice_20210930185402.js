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
        var content = $(this).attr("href")
        var tab1 = $(".service-menu #tab1")
        var tab2 = $(".service-menu #tab2")
        var tab3 = $(".service-menu #tab3")
        var tab4 = $(".service-menu #tab4")
        $(".service-menu a").removeClass()
        if(content === tab1.attr("href"))
            tab1.addClass("active")
        if(content === tab2.attr("href"))
            tab2.addClass("active")
        if(content === tab3.attr("href"))
            tab3.addClass("active")
        if(content === tab4.attr("href"))
            tab4.addClass("active")
        $(".service-content").hide()
        $(content).show()
    })
    $(".foot-service a").click(function(){
        event.preventDefault()             
        var content = $(this).attr("href")
        var tab1 = $(".service-menu #tab1")
        var tab2 = $(".service-menu #tab2")
        var tab3 = $(".service-menu #tab3")
        var tab4 = $(".service-menu #tab4")
        $(".service-menu a").removeClass()
        if(content === tab1.attr("href"))
            tab1.addClass("active")
        if(content === tab2.attr("href"))
            tab2.addClass("active")
        if(content === tab3.attr("href"))
            tab3.addClass("active")
        if(content === tab4.attr("href"))
            tab4.addClass("active")
        $(".service-content").hide()
        $(content).show()
        $("html, body").animate({
            scrollTop: 0
        }, 5000);
    })
})