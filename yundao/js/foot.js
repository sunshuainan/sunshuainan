$(function(){
	$(".foot-ul li").click(function(){	
		$(this).addClass("foot-click").siblings().removeClass("foot-click");
	})
	
	$(".nav ul>li").click(function(){	
		$(this).addClass("head-click").siblings().removeClass("head-click");
		
		if($(".nav ul li").eq(1).hasClass("head-click")){
					
			$(this).html('<a href="#">云道商城<img src="../img/up.png"/></a>');
		}else{
					
			$(".nav ul li").eq(1).html('<a href="#">云道商城<img src="../image/down.png"/></a>');
		}

	})
	
	$(".nav span").click(function(){	
		$(this).css("color","#65a4f8");
	})
	
	
	$(".nav span").hover(function(){
		$(this).html("用户名称"+"<img src='../img/up.png'/>");
		$(this).css("color","#65a4f8");
		
	},function(){
		$(this).html("用户名称"+"<img src='../image/down.png'/>");
		$(this).css("color","#333");
	})
	
	
	
	
})