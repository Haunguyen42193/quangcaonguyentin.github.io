
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
        var name = $("#name").val()

        $(".popup").fadeIn(1000).prepend(`
        <h3>Họ và tên: ${name}</h3>
        `)
    })
    $(".popup > a, #ok").click(function(){
        event.preventDefault()
        $(this).parent().fadeOut(1000)
    })
})