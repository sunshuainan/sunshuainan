/**
 * Created by 孙帅男 on 2017/7/15.
 */

$(function(){
    // var Img = document.getElementById("distribution_banner").style.width = document.documentElement.clientWidth+"px";
    $(".distribution_banner").css({
        "width":$(window).width()+"px"
    });
    console.log($(window).width())
    // 导航hover
       $(".list_xia").hover(function(){
       	    $("distribution_nav_xia_list").css("display","block")
       },function(){
       	   $("distribution_nav_xia_list").css("display","none")
       })
        //     $(".distribution_nav_xia_list").css(
        //         {
        //             "display":"block"
        //         }
        //     ),function () {
        //     $(".distribution_nav_xia_list").css(
        //         {
        //             "display":"none"
        //         }
        //     );
        //
        // }
    )
})