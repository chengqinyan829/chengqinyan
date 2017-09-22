$(function(){
	// 菜单
	$(".ce11 ul li a").hover(function(){
		$(".k-right1").css({"display":"none"})
		$(this).next(".k-right1").css({"display":"block"})
	})
	$(".ce11").mouseleave(function(){
		$(".k-right1").css({"display":"none"})
	})

	// 导航下拉
	$(".mid1 li a").hover(function(){
		$(".first1-1").css({"display":"none"})
		$(this).next(".first1-1").css({"display":"block"})
	})
	$(".mid1").mouseleave(function(){
		$(".first1-1").css({"display":"none"})
	})
	// t=setInterval(fn,2000)
	// function fn(){
	// 	num++;
	// 	$(".lunbo ul li a img").css({"opacity":0,"z-index":0});
	// 	$(".lunbo ul li a img").eq(num).css({"opacity":1,"z-index":233});
	// }
	// 
	// 	console.log($(".ce14"))
	// 自动轮播
	let num=0;
	let t;
	 // 按键
	$(".ce13").click(function(){
		fn(1);
	});
	$(".ce14").click(function(){
		fn(0);
	});

	t=setInterval(function(){
		fn(0);
	},2000);
	// 当鼠标移到banner图上，清除自动轮播，鼠标离开，继续动起来
	$(".lunbo li").mouseenter(function(){
		clearInterval(t);
	})
	$(".lunbo li").mouseleave(function(){
		t=setInterval(function(){
			fn(0);
		},2000);
	})
	// 右
	function fn(a){
		var lis=$(".lunbo li")
		if(a==0){
			num++;
			if(num==lis.length){
				num=0;
			}
		}else if(a==1){
			num--;
			if(num==-1){
				num=lis.length-1;
			}
		}
		lis.css({
			opacity:0,
			"z-index":0
		})
		$(".circle li").css("background","#333")
		lis.eq(num).animate({"opacity":1},function(){
			lis.css({"z-index":222})
		})
		$(".circle li").eq(num).css("background","#fff")

	}
})