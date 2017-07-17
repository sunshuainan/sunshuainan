window.onload = function() {
	$(".aw").hover(function() {
		$(this).css("display", "block").find(".block").stop().slideToggle()
		$(".aw img:nth-of-type(2)").css("display", "block")
	}, function() {
		$(this).css("display", "block").find(".block").stop().slideToggle()
		$(".aw img:nth-of-type(2)").css("display", "none")
	})

}