window.addEventListener('load', function(){
	let box=document.querySelector('div.box');
	let imgbox=document.querySelector('ul.imgbox');
	let imgW=box.offsetWidth;
	let ox=0,offsetL=0;
	box.addEventListener('touchstart',function(e){
		let touches = e.changedTouches[0];
        ox = touches.clientX;
        offsetL = imgbox.offsetLeft;
        imgbox.style.transition = 'none';
	},false)

	box.addEventListener('touchmove',function(e){
		let touches = e.changedTouches[0];
        let mx = touches.clientX;
        let lefts = offsetL + (mx - ox);
        imgbox.style.marginLeft = `${lefts}px`;
	},false)
	box.addEventListener('touchend',function(e){
		let n = Math.round(imgbox.offsetLeft / imgW);
        imgbox.style.transition = '0.5s';
        imgbox.style.marginLeft = `${n * imgW}px`;
	},false)
},false)