$(document).ready(function() {
    $(".intro > .logo").addClass(" wow animate__zoomIn")
    $(".intro-content > p").addClass(" wow animate__slideInUp")
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
})
function init(){
    var a = ["lily3.jpg", "Kimhien.jpg", "Vencen.jpg", "Tuart1.jpg"]
    var i = 0;
    var img = document.querySelector(".intro-content-img img")
    setInterval(function(){
            img.src =  "images/" + a[i]
            i++;
            if(i == 4)
                i = 0;
    }, 3000)
}