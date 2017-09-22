/*
* @Author: 程钦妍
* @Date:   2017-08-10 19:01:30
* @Last Modified by:   程钦妍
* @Last Modified time: 2017-08-21 08:44:44
*/

window.onload=function(){
	// 侧导航右拉
	let ce1=document.getElementsByClassName('ce1')[0];
	let ce11=document.getElementsByClassName('ce11')[0];
	let lis=ce11.getElementsByTagName('li');

	let lunbos1=document.getElementsByClassName('mx-lunbo')[0];
	let lbtn=document.getElementsByClassName('mx12-left')[0];
	let rbtn=document.getElementsByClassName('mx12-right')[0];

	let lunbo1=document.getElementsByClassName('tj-lunbo')[0];
	let lbtn1=document.getElementsByClassName('tj12-left')[0];
	let rbtn1=document.getElementsByClassName('tj12-right')[0];

	// 家电点击事件
	// 热门
	let dj1s=document.querySelectorAll('.dj1');
	let rms=document.querySelectorAll('.rm');
	let q=0;
	for(let i=0;i<rms.length;i++){
		rms[i].onmouseenter=function(){
			dj1s[q].classList.remove('blockIndex');
			dj1s[i].classList.add('blockIndex');
			rms[q].classList.remove('rmbiankuang');
			rms[i].classList.add('rmbiankuang');
			q=i;
			console.log(q);
		}
	}
	// 出行
	let dj2s=document.querySelectorAll('.dj2');
	let cxs=document.querySelectorAll('.cx');
	let q1=0;
	for(let i=0;i<cxs.length;i++){
		cxs[i].onmouseenter=function(){
			dj2s[q1].classList.remove('blockIndex');
			dj2s[i].classList.add('blockIndex');
			cxs[q].classList.remove('rmbiankuang');
			cxs[i].classList.add('rmbiankuang');
			q1=i;
			console.log(q1);
		}
	}


	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			// console.log(2)
			let cell1=this.getElementsByClassName('k-right1')[0];
			// console.log(1)
			cell1.style.display='block';
			}
			lis[i].onmouseleave=function(){
			// console.log(2)
			let cell1=this.getElementsByClassName('k-right1')[0];
			// console.log(1)
			cell1.style.display='none';
			}
	}
		
		let cels=document.getElementsByClassName('lunbo')[0];
		let lunbos=cels.getElementsByTagName('li');
		let circles=document.getElementsByClassName('circle')[0];
		let circle1=circles.getElementsByTagName('li');

		let back=document.getElementsByClassName('ce13');
		let forward=document.getElementsByClassName('ce14');

		let kuang1s=document.getElementsByClassName('kuang1');
		let klas=document.getElementsByClassName('kla');

		let num=0;
		// for(let i=0;i<circle1.length;i++){
		// 	circle1[i].onclick=function(){
		// 		lunbos[num].style.display='none';
		// 		circle1[i].style.background='gray';
		// 		lunbos[i].style.display='block';
		// 		circle1[num].style.background='white';
		// 		num = i;
		// 		console.log(i);
		// 	}
		// }

//自动轮播
		back.onclick =fn;
		forward.onclick =fn1;
		let t=0;
		t=setInterval(fn,1000);
		
		ce1.onmouseenter=function(){
			clearInterval(t);
		}
		ce1.onmouseleave=function(){
			t=setInterval(fn,1000);
		}
		function fn(){
			num++;
			if(num==lunbos.length){
				num=0;
			}
			for(let i=0;i<lunbos.length;i++){
				lunbos[i].style.display='none';
				circle1[i].style.background='gray';
			}
			lunbos[num].style.display='block';
			circle1[num].style.background='white';
		}

		function fn1(){
			num--;
			if(num == -1){
				num=lunbos.length - 1;
			}
			for(let i=0;i<lunbos.length;i++){
				lunbos[i].style.display='none';
				circle1[i].style.background='gray';
			}
			lunbos[num].style.display='block';
			circle1[num].style.background='white';
		}
		
		// 导航下拉
		let mid1s=document.getElementsByClassName('mid1')[0];
		let fist1s=mid1s.getElementsByTagName('li');
		for(let i=0;i<fist1s.length;i++){
		fist1s[i].onmouseenter=function(){
			// console.log(2)
			let aa=this.getElementsByClassName('first1-1')[0];
			// console.log(1)
			aa.style.display='block';
			}
			fist1s[i].onmouseleave=function(){
			// console.log(2)
			let aa=this.getElementsByClassName('first1-1')[0];
			// console.log(1)
			aa.style.display='none';
			}
		}


// 两屏轮播
			let num1=0;
			lbtn.onclick=function(){
				if(num1==3){
					return;
				}
				num1++;
				// this.disabled=true;
				lunbos1.style.marginLeft=`${-num1*1226}px`;

			}

			rbtn.onclick=function(){
				if(num1==0){
					console.log(num1)
					return;
				}
				num1--;
				// this.disabled=true;
				lunbos1.style.marginLeft=`${-num1*1226}px`;
				console.log(num1);
			}
		
			lbtn1.onclick=function(){
				this.disabled=true;
				lunbo1.style.marginLeft='-1240px';
			}
			rbtn1.onclick=function(){
				this.disabled=true;
				lunbo1.style.marginLeft=0;
			}


		let nr=document.getElementsByClassName('nr3')[0];
		let nr1=nr.getElementsByClassName('pp');
		let cirs=document.getElementsByClassName('nr37')[0];
		let cir1=cirs.getElementsByTagName('div');
		let numx=0;
		for(let i=0;i<cir1.length;i++){
			cir1[i].onclick=function(){
				nr1[numx].style.display='none';
				cir1[i].style.background='gray';
				nr1[i].style.display='block';
				cir1[numx].style.background='#ff6700';
				numx = i;
				console.log(i);
			}
		}

		}