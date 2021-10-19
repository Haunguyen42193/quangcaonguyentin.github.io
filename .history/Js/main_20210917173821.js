
$(document).ready(function() {
    $("#goToTop").hide()
    $(window).scroll(function() {
        
        if($(this).scrollTop() >= 80)
            $("#goToTop").show("slow");
        else
            $("#goToTop").hide("slow");

    })
    $("#goToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
    $(".popup").hide()
    $("#submit").click(function(){
        $(".popup").fadeIn(1000)
    })
    $(".popup > a").click(function(){
        $(this).parent.remove()
    })
})