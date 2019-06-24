$(".lihideshow")
    .filter(":odd")
    .hide()
    .end()
    .filter(":even")
    .hover(
        function () {
            $(this).toggleClass("active")
                .next().stop(true,true).slideToggle();
        }
    );

window.onload=function(){

}
$("#lihideshow-f").eq(0).mouseover();

// $("#lihideshow-f").trigger("mouseover");
