
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
        }, linear);
    })
})