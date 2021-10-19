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
        var content = $(this)
        var a = ["service.html#tab1", "service.html#tab2", "service.html#tab3", "service.html#tab4"]
        if(content.attr("href") == a[2])
        {   
            $(a[2]).css("border", "2px solid red")
            $("#sv-ct").hide()
            $("service.html#Hd").show()
        }
    })
})