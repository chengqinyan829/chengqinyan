/*
* @Author: 程钦妍
* @Date:   2017-08-28 18:57:22
* @Last Modified by:   程钦妍
* @Last Modified time: 2017-08-30 16:00:08
*/
window.onload=function(){
	let line=document.querySelector('.line');
	let dashed=document.querySelector('.dashed');
	let pencil=document.querySelector('.pencil');
	let poly=document.querySelector('.poly');
	let circle=document.querySelector('.circle');
	let rect=document.querySelector('.rect');
	let jiiaoxing=document.querySelector('.jiiaoxing');
	let eraser=document.querySelector('.eraser');
	let back=document.querySelector('.back');
	let miaobian=document.querySelectorAll('.miao');
	let font=document.querySelector('.font');
	let save=document.querySelector('.save');
	let revers=document.querySelector('.revers');
	let caiqie=document.querySelector('.caiqie');
	let clip=document.querySelector('.clip');

	let gets=document.querySelectorAll('.gets');
	let active=document.querySelector('.active');

	let canvas=document.querySelector('canvas');
	let bottom=document.querySelector('.right-bottom');
	let p=new Palette(canvas,bottom);

	let inputs=document.querySelectorAll('input');
	// 直线
	line.onclick=function(){
		bs();
		this.classList.add('active');
		p.draw('line');
	}
	// 虚线
	dashed.onclick=function(){
		bs();
		this.classList.add('active');
		p.draw('dashed');
	}
	// 铅笔
	pencil.onclick=function(){
		bs();
		this.classList.add('active');
		p.pencil();
	}
	// 几边形
	poly.onclick=function(){
		bs();
		this.classList.add('active');
		p.poly(8);
	}
	// 圆
	circle.onclick=function(){
		bs();
		this.classList.add('active');
		p.circle();
	}
	// 矩形
	rect.onclick=function(){
		bs();
		this.classList.add('active');
		p.rect();
	}
	// 几角形
	jiiaoxing.onclick=function(jiao){
		bs();
		this.classList.add('active');
		p.jiiaoxing(5);
	}
	// 橡皮
	eraser.onclick=function(){
		bs();
		this.classList.add('active');
		p.eraser();
	}
	// 返回
	back.onclick=function(){
		bs();
		this.classList.add('active');
		p.back();
	}
	// 点击变色
	function bs(){
		for(let i=0;i<gets.length;i++){
			gets[i].classList.remove('active');
		}
	}
	// 颜色块
	miaobian.forEach(element=>{
		element.onclick=function(){
			p.style=this.id;
		}
	})

	inputs.forEach((element,index)=>{
		element.onchange=function(){
			if(index==0){
				p.fillStyle=this.value;
			}
			else if(index==1){
				p.strokeStyle=this.value;
			}
		}
	})
	// 文字
	font.onclick=function(){
		bs();
		this.classList.add('active');
		p.font();
	}
	// 保存
	save.onclick=function(){
		bs();
		this.classList.add('active');
		save.href=canvas.toDataURL('image/png');
		save.download='a.png';
	}
	// 反向
	revers.onclick=function(){
		p.revers()
	}
	// 裁切
	caiqie.onclick=function(){
		p.caiqie(clip)
	}
}
// save.href=canvas.toDataURL('')	//文件的格式
// save.download='';	//下载文件的名称 