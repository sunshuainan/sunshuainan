/**
 * Created by Administrator on 2017/7/15.
 */
window.onload = function(){
    var aFactory = document.getElementsByClassName("factory");
    var aSpan = document.getElementsByClassName("span");
    var oUl = document.getElementsByClassName("mask_ul")[0];
    var oLeft = document.getElementsByClassName("mask_left")[0];
    var oRight = document.getElementsByClassName("mask_right")[0];
    var oMask = document.getElementsByClassName("mask")[0];
    var aLi = oUl.children;
    oUl.innerHTML += oUl.innerHTML;
    oUl.style.width = aLi[0].offsetWidth * aLi.length + "px";
    console.log(oUl.innerHTML)
    var n = 0;
    var timer = null;
    oLeft.onclick = function(){
        fun();
    }
    function fun(){
        clearInterval(timer);
        timer = setInterval(function(){
            n -= 10;
            if(n<-oUl.offsetWidth/2){
                n = 0;
            }
            oUl.style.left = n + "px";
        },50)
    }
    fun();
    oRight.onclick = function(){
        clearInterval(timer);
        timer = setInterval(function(){
            n += 10;
            if(n>0){
                n = -oUl.offsetWidth/2;
            }
            oUl.style.left = n + "px";
        },50)
    }
    oUl.onmouseover = function(){
        clearInterval(timer);
    }
    oUl.onmouseout = function(){
        fun();
    }
    aFactory[0].onmouseover = function(){
        aSpan[0].style.display = "block";
    }
    aFactory[0].onmouseout = function(){
        aSpan[0].style.display = "none";
    }
    aFactory[1].onmouseover = function(){
        aSpan[1].style.display = "block";
    }
    aFactory[1].onmouseout = function(){
        aSpan[1].style.display = "none";
    }
    aFactory[2].onmouseover = function(){
        aSpan[2].style.display = "block";
    }
    aFactory[2].onmouseout = function(){
        aSpan[2].style.display = "none";
    }

   
     $(".submenu_yd").hover(function(){
			$(".block").stop().slideDown(300);
		},function(){
			$(".block").stop().slideUp(300);
		})
	 
	 
	  $(".submenu_gy").hover(function(){
			$(".blockaaa").stop().slideDown(300);
		},function(){
			$(".blockaaa").stop().slideUp(300);
		})
	 
}
