$(function(){
	//自动轮播
	let num=0;
	let t;
	fn(0);
	t = setInterval(function(){
		fn(0);
	},1500);
	//按键右边
	$('.kuang1').click(function(){
		fn(0);
	});
	$('.kuang').click(function(){
		fn(1);
	});

	//当鼠标移到banner图上，清除自动轮播，鼠标离开，继续动起来
	$('.tu').mouseenter(function(){
		clearInterval(t);
	})
	$('.tu').mouseleave(function(){
		t = setInterval(function(){
			fn(0);
		},1500);
	})

	//右
	function fn(a){
	var lis = $(".tu ul li");
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
	lis.eq(num).animate({"opacity":1},function(){
			lis.css({"z-index":10})
		})
	}
})