$(function(){
	
	$(".registhome-terrace-con1>div").hover(function(){
		$(this).css("background","#ff7d75");
	},function(){
		$(this).css("background","#f6f6f6");
	})


	$(".registhome-service-con1").hover(function(){
		$(this).addClass("go").siblings().removeClass("go");
		
	})
	
	
	
	
})
