$(function(){
	// 侧导航
	$("aside ul li a").hover(function(){
		$(".ce").css({"display":"none"})
		$(this).next(".ce").css({"display":"block"})
	})
	$("aside").mouseleave(function(){
		$(".ce").css({"display":"none"})
	});
	// 轮播
	let num=0;
	let t;
	t=setInterval(function(){
		fn(0);
	},2000)
	// 当鼠标移到banner图上，清除自动轮播，鼠标离开，继续动起来
	$(".lunbo li").mouseenter(function(){
		clearInterval(t);
	})
	$(".lunbo li").mouseleave(function(){
		t=setInterval(function(){
			fn(0);
		},2000);
	})

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
		$(".circle ul li").css("background","#ccc")
		lis.eq(num).animate({"opacity":1},function(){
			lis.css({"z-index":10})
		})
		$(".circle ul li").eq(num).css("background","#fff")
	}

	// 固定定位
	// 获取浏览器的高度
	let bh=window.innerHeight;
	// 获取楼层
	let floorh=document.querySelectorAll('section.floor');
	// 定义数组，把遍历出来的值给了数组
	let aa=[];
	floorh.forEach(element=>{
		aa.push(element.offsetTop);
	});
	let sli=document.querySelectorAll('.floors>li');
	// 4、记录当前对应的楼层
	let guding=document.querySelector('.guding')
	let nth=0;
	let sFlag=true;
	sli.forEach(function(element,index){
		element.onclick=function(){
			animate(document.body,{scrollTop:aa[index]});
		}
	})
// 屏幕滚动事件
	window.onscroll=function(){	
		// 获取滚动条在页面中的高度
		let gh=document.body.scrollTop;
		// 1、获取slide的li元素	
		// 5、点击
		
		// 兼容
		// document.documentElement.scrollTop;		
		// 遍历一个楼层所对应距离
		aa.forEach(function(value,index){	
			if(bh+gh >=value+300){
				// 2、移除li的属性
				// console.log(nth);
				// let imgs=floorh[index].getElementsByTagName('img');
				//index下标,当前楼层图片获取出来（拿回来）
				
				console.log(1)
				sli[nth].classList.remove('active');
				// 3、给li添加，利用下标
				sli[index].classList.add('active');		
					console.log(sli[index])
				nth = index;
			}
		})

		if(gh>500){
			if(sFlag){
				sFlag=false;
				animate(guding,{top:0})
			}
		}
		else if(gh<500){
			if(!sFlag){
				sFlag=true;
				animate(guding,{top:-60})
			}
		}

	}

})