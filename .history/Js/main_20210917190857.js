
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
        var name = $("#name")
        var phone = $("#phone")
        var mail = $("#mail")        
        var address = $("#address")
        alert(typeof(phone.val()))
        if(!isNaN(name.val()) || !isNaN(phone.val()) || !isNaN(mail.val()) || !isNaN(address.val()))
        {
            if(!isNaN(name.val()))
                name.css({"outline": "2px solid red"})
            else
                name.css({"outline": "none"})
            if(isNaN(phone.val()))
                phone.css({"outline": "2px solid red"})
            else
                phone.css({"outline": "none"})
            if(!isNaN(mail.val()))
                mail.css({"outline": "2px solid red"})
            else
                mail.css({"outline": "none"})
            if(!isNaN(address.val()))
                address.css({"outline": "2px solid red"})
            else
                address.css({"outline": "none"})
            $(".popup").prepend(`
                <div class="informa">
                <input type="button" value="OK" id="ok"/>
                    <div class="notice">
                        <h5>Thông tin có dấu (*) là bắt buộc. <br/>Vui lòng nhập đủ thông tin</h5>
                    </div>
                </div>
            `)
        }
        else{
            $(".popup").prepend(`
            <div class="inform">
                <a href="#">x</a>
                <input type="button" value="OK" id="ok"/>
                <input type="button" value="Chỉnh sửa" id="fix"/>
                <div class="notice">
                    <h5>Thông tin liên hệ</h5>
                    <h5>Họ và tên: ${name.val()}</h5>
                    <h5>Số điện thoại: ${phone.val()}</h5>
                    <h5>Email: ${mail.val()}</h5>
                    <h5>Địa chỉ: ${address.val()}</h5>
                    <h5> Chúng tôi sẽ liên hệ với bạn thông qua số điện thoại: ${phone.val()}. Vui lòng chờ.</h5>
                </div>
            </div>   
            `)
        }
    })
    $(".popup").on("click", ".inform a, #ok", function(){
        event.preventDefault()
        $(this).parent().remove()
    })
})