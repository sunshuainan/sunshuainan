$(function(){
	$(".foot-ul li").click(function(){	
		$(this).addClass("foot-click").siblings().removeClass("foot-click");
	})
	
	$(".nav ul>li").click(function(){	
		$(this).addClass("head-click").siblings().removeClass("head-click");
		
		if($(".nav ul li").eq(1).hasClass("head-click")){
					
			$(this).html('<a href="#">云道商城<img src="../img/icon_down.png"/></a>');
		}else{
					
			$(".nav ul li").eq(1).html('<a href="#">云道商城<img src="../img/icon_down.png"/></a>');
		}

	})
	
	$(".nav span").hover(function(){
		$(this).html("用户名称"+"<img src='../img/icon_top.png'/>");
		$(this).css("color","#65a4f8");
		
	},function(){
		$(this).html("用户名称"+"<img src='../img/icon_top.png'/>");
		$(this).css("color","#333");
	})
	
	
	//轮播
	       var i=0;
				var clone=$(".consult_banner .consult_img li").first().clone()
				$(".consult_banner .consult_img li").append(clone)
				var size=$(".consult_banner .consult_img>li").size()
				console.log(size)
				
				

			    $(".consult_banner img").css({
			    	"width":$(window).width()+"px"
			    })
				function moveL(){
						i++
						if(i==size){
							$(".consult_banner .consult_img").css({left:0})
							i=0;
							
						}
						$(".consult_banner .consult_img").stop().animate({left:i*-$(window).width()},500)
					
				
				}
				
				function moveR(){
					i--
					if(i==-1){
						$(".consult_banner .consult_img").stop().css({left:-(size-1)*2000})
						i=size-2
					}
					$(".consult_banner .consult_img").stop().animate({left:i*-2000},500)
					$(".consult_banner .consult_num li").eq(i).addClass("aaa").siblings().removeClass("aaa")
				}
				
				var timer=setInterval(moveL,1500)
				
				$(".consult_banner .consult_num").click(function(){
					var index=$(this).index()
					$(".banner .img").stop().animate({left:index*-2000},500)
					$(this).addClass("on").siblings().removeClass("on")	
				})
				
				$(".consult_banner").hover(function(){
					clearInterval(timer)
				},function(){
					timer=setInterval(moveL,1500)
				})

	//下拉菜单
	
	$(".counswall-head li").hover(function(){
			$(this).children(".head-show").stop().slideDown(300);
		},function(){
			$(this).children(".head-show").stop().slideUp(300);
		})

	
	
})