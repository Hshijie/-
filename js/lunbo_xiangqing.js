
//移动图片位置  略居中
var num=3;
$(".nav-lie-pic").css({
    'margin-left':"-375px"
});
// 左右箭头切换
//点击左边切换
$("#nav-lie-left").click(function(){
    //如果点击一次next
    if(num<6){
        num=num+1;
    }else{
        num=0;
    }
    var movePx=num*-125+"px";
    $(".nav-lie-pic").animate({"marginLeft":movePx},500);
    // $("ul li").eq(num).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
    return false;
})
// 点击右边切换
$("#nav-lie-right").click(function(){
    if(num>0){
        num=num-1;
    }else{
        num=6;
    }
    var movePx=num*-125+"px";
    $(".nav-lie-pic").animate({"marginLeft":movePx},500);
    // $("ul li").eq(num).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
    return false;
})


// 点击事件1

// // 点击事件2
// <code class="language-javascript">$(document).ready(function(){
// <span style="color:#ff0000;"> var imgList1 = $("#showimg-left-section div ul li").length;
//     $("#showimg-left-section div span:eq(0)").click(function(){
//         var a = parseInt($(this).attr("data-index"));
//         if(a == 0){
//             a = imgList1 - 1;
//         } else {
//             a = a-1;
//         }
//         move(a);
//     });
//     $("#showimg-left-section div span:eq(1)").click(function(){
//         var b = parseInt($(this).attr("data-index"));
//         if(b == imgList1-1){
//             b = 0;
//         } else {
//             b = b+1;
//         }
//         move(b);
//     });</span>  
//     function move(N){
//         $("#showimg-left-section div ul li:eq("+N+")").show().siblings().hide();
//         $("#showimg-left-section .btn-img li:eq("+N+")").addClass("active").siblings().removeClass("active");
//         $("#showimg-left-section div span").attr("data-index",N);
//     }
//     $("#showimg-left-section .btn-img li").click(function(){
//         var c = $(this).index();
//         move(c);
//     })
// })</code>  
