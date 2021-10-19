
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
        var phone = $("#phone").val()
        $(".popup").fadeIn(1000).prepend(`
        <div class="notice">
            <h5>Họ và tên: ${name}</h5>
            <h5>Số điện thoại: ${phone}
        </div>    
        `)
    })
    $(".popup > a, #ok").click(function(){
        event.preventDefault()
        $(this).parent().fadeOut(200)
    })
})