
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
        var mail = $("#mail").val()        
        var address = $("#address").val()
        $(".popup").prepend(`
        <div class="inform">
            <a href="#">x</a>
            <input type="button" value="OK" id="ok"/>
            <input type="button" value="Chỉnh sửa" id="fix"/>
            <div class="notice">
                <h5>Thông tin liên hệ</h5>
                <h5>Họ và tên: ${name}</h5>
                <h5>Số điện thoại: ${phone}</h5>
                <h5>Email: ${mail}</h5>
                <h5>Địa chỉ: ${address}</h5>
                *<h5> Chúng tôi sẽ liên hệ với bạn thông qua số điện thoại: ${phone}, vui lòng đợi</h5>
            </div>
          </div>   
        `)
    })
    $(".popup").on("click", ".inform a, #ok", function(){
        event.preventDefault()
        $(this).parent().remove()
    })
})