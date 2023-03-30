$(document).ready(function () {
    $("nav .lv1").mouseenter(function () {

        $(this).find("ul,lv2").stop().slideDown();

    })
    $("nav ul .lv1").mouseleave(function () {

        $(".lv2").stop().slideUp();

    })
    $(".notice li:nth-child(1)").click(function () {

        $(".popUpbox").show();

    })
    $(".popUpBox button").click(function () {

        $(".popUpbox").hide();

    })
    // tap 
    $(".tapMenu li").click(function () {
        var id=$(this).index()

        $(".tapItem >*").hide(),removeClass("on");
        $(".tapItem >*").eq(idx),show(),addClass("on");
        
        $(".tapMenu li").removeClass("on");
        $(this).addClass('on')

    })



});