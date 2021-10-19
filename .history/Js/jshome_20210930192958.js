$(document).ready(function() {
    $("div.info-product > div.product, div.feedback-content, div.foot-contacts > div > h2").addClass(" wow animate__backInUp")
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
    $(".subcontent a").click(function(){
        var tab1 = $(".service-menu #tab1")
        var tab2 = $(".service-menu #tab2")
        var tab3 = $(".service-menu #tab3")
        var tab4 = $(".service-menu #tab4")
        if(this.attr("rel") === tab1.attr("href"))
            tab1.addClass("active")
            if(this.attr("rel") === tab2.attr("href"))
            tab2.addClass("active")
            if(this.attr("rel") === tab3.attr("href"))
            tab3.addClass("active")
    })
})