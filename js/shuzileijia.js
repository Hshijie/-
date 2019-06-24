// 川菜页
    $(function () {
        for (var i = 0; i < $(".eye >img").length; i++) {
            var ran = Math.floor(Math.random() * 1000 + 1)
            $('.caipic>img').eq(i).text(ran)
        }
        $(".caipic>img").click(function () {
            var num = $(this).next().text()
            num++;
            $(this).next().text(num);
        });
    });
// 首页
$(function () {
    for (var i = 0; i < $(".dianzhanjiayi").length; i++) {
        var ran = Math.floor(Math.random() *100+1)
        $('.dianzhanjiayi').eq(i).text(ran)
    }
    $(".love").click(function () {
        var num = $(this).next().text()
        num++;
        $(this).next().text(num);
    });
});