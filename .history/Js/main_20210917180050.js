
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
    $(".inform").hide()
    $("#submit").click(function(){
        var name = $("#name").val()
        var phone = $("#phone").val()
        $(".popup").fadeIn(1000).prepend(`
        <div class="inform">
            <a href="#">x</a>
            <input type="button" value="OK" id="ok"/>
            <input type="button" value="Chỉnh sửa" id="fix"/>
          </div>   
        `)
    })
    $(".popup").on("click", ".popup > a, #ok", function(){
        event.preventDefault()
        $(this).parent().remove()
    })
})