window.onload=function(){
	$(".accept").click(function(){
		var time=10
		$(".accept").val(time+"(s)")
		var timer=setInterval(function(){
			time--
			$(".accept").val(time+"(s)")
			if(time==0){
				$(".accept").val("获取短信验证码")
				clearInterval(timer)
			}
		},1000)
		
		
	})
	
}
