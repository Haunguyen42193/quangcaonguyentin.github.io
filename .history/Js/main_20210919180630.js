
$(document).ready(function() {
    $("#goToTop").hide()
    $(window).scroll(function() {
        
        if($(this).scrollTop() >= 80)
            $("#goToTop").show("slow");
        else
            $("#goToTop").hide("slow");
        if($(this).scrollTop() >= 80)
            $(".list").css({"position": "fixed", "top": "60px", "right": "7.5%", "z-index": "9", "width": "17%"})
        else
            $(".list").css({"position": "relative", "top": "0px", "right": "0", "width": "20%"})
    })
    $("#goToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
    var name = $("#name")
    var phone = $("#phone")
    var mail = $("#mail")        
    var address = $("#address")
    $(".inform").hide()
    $("#submit").click(function(){
        
        if(!name.val()[0])
                name.css({"outline": "2px solid red"})
            else
                name.css({"outline": "none"})
            if(!phone.val()[0])
                phone.css({"outline": "2px solid red"})
            else
                phone.css({"outline": "none"})
            if(!mail.val()[0])
                mail.css({"outline": "2px solid red"})
            else
                mail.css({"outline": "none"})
            if(!address.val()[0])
                address.css({"outline": "2px solid red"})
            else
                address.css({"outline": "none"})
        if(!name.val()[0] || !phone.val()[0] || !mail.val()[0] || !address.val()[0])
        {
            
            $(".popup").prepend(`
                <div class="informa">
                    <a href="#" id="close">x</a>
                    <div class="notice">
                        <h5>Thông tin có dấu (*) là bắt buộc. <br/>Vui lòng nhập đủ thông tin</h5>
                    </div>
                </div>
            `)
        }
        else{
            $(".popup").prepend(`
            <div class="inform">
                <a href="#" id="close">x</a>
                <input type="button" value="OK" id="ok"/>
                <input type="button" value="Chỉnh sửa" id="fix"/>
                <div class="notice">
                    <h5>Thông tin liên hệ</h5>
                    <h5>Họ và tên: ${name.val()}</h5>
                    <h5>Số điện thoại: ${phone.val()}</h5>
                    <h5>Email: ${mail.val()}</h5>
                    <h5>Địa chỉ: ${address.val()}</h5>
                    <h5> Chúng tôi sẽ liên hệ với bạn thông qua số điện thoại: ${phone.val()}.</h5>
                </div>
            </div>   
            `)
        }
    })
    $(".popup").on("click", "#close, #fix", function(){
        event.preventDefault()
        $(this).parent().remove()
    })
    $(".popup").on("click", "#ok", function(){
        event.preventDefault()
        $(this).parent().remove()
        $(".popup").prepend(`
            <div class="informa">
                <a href="#" id="close">x</a>
                <div class="notice">
                    <h5>Chúng tôi sẽ liên hệ tới bạn trong thời gian sớm nhất.</h5>
                </div>
            </div>
        `)
    })
    
    
})
function init(){
    var a = ["lily3.jpg", "Vencen.jpg", "Tuart1.jpg"]
    var i = 0;
    var img = document.querySelector(".intro-content-img img")
    var pre = document.getElementById("previous")
    var next = document.getElementById("next")
    setInterval(function(){
            img.src =  "images/" + a[i]
            i++;
            if(i == 3)
                i = 0;
    }, 3000)

}