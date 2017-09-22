/*
* @Author: 程钦妍
* @Date:   2017-08-12 17:01:23
* @Last Modified by:   程钦妍
* @Last Modified time: 2017-09-12 10:51:51
*/

window.onload=function(){
	let big=document.getElementsByClassName('header-right')[0];
	let bbs=big.getElementsByClassName('bb')[0];

	let asides=document.getElementsByTagName('aside')[0];
	let lis=asides.getElementsByTagName('li');

	let lunbos=document.getElementsByClassName('lunbo')[0];
	let liss=lunbos.getElementsByTagName('li');
	let circles=document.getElementsByClassName('circle')[0];
	let circle1=circles.getElementsByTagName('li');
	let num=0;

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
	
		for(let i=0;i<lis.length;i++){
			lis[i].onmouseenter=function(){
			let cell1=this.getElementsByClassName('ce')[0];
			cell1.style.display='block';
		}
		lis[i].onmouseleave=function(){
			let cell1=this.getElementsByClassName('ce')[0];
			cell1.style.display='none';
			}
		}
	
		let t=0;
		t=setInterval(fn,1000);
		function fn(){
			num++;
			if(num==liss.length){
				num=0;
			}		

			for(let i=0;i<liss.length;i++){
				liss[i].style.display='none';
				circle1[i].style.background='gray';
			}
			liss[num].style.display='block';
			circle1[num].style.background='white';
		}

}	