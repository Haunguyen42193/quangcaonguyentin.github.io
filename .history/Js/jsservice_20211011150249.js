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
        if(content === tab1.children().attr("href"))
            tab1.children().addClass("active")
        if(content === tab2.children().attr("href"))
            tab2.children().addClass("active")
        if(content === tab3.children().attr("href"))
            tab3.children().addClass("active")
        if(content === tab4.children().attr("href"))
            tab4.children().addClass("active")
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
        if(content === tab1.children().attr("href"))
            tab1.children().addClass("active")
        if(content === tab2.children().attr("href"))
            tab2.children().addClass("active")
        if(content === tab3.children().attr("href"))
            tab3.children().addClass("active")
        if(content === tab4.children().attr("href"))
            tab4.children().addClass("active")
        $(".service-content").hide()
        $(content).show()
        $("html, body").animate({
            scrollTop: 0
        },2000);
    })
    var x = location.hash;
    $(".service-menu a").removeClass()
    if(x === "#tab1")
    {
        $(".service-menu #tab1").children().addClass("active")
        $(".service-content").hide()
        $(content).show()
    }
    else if(x === "#tab2")
    {
        $(".service-menu #tab2").children().addClass("active")
        $(".service-content").hide()
        var a= $(".service-menu #tab2").children().attr("href")
        alert(a)
        $(ashow()
    }
    else if(x === "#tab3")
    {
        $(".service-menu #tab3").children().addClass("active")
        $(".service-content").hide()
        $(content).show()
    }
    else if(x === "#tab4")
    {
        $(".service-menu #tab4").children().addClass("active")
        $(".service-content").hide()
        $(content).show()
    }
})