window.onload=function(){
	let song=document.querySelector('.song');
	let singer=document.querySelector('.singer');
	let lyric=document.querySelector('.lyric');
	let pause=document.querySelector('.icon-bofangqizanting');
	let bofan=document.querySelector('.icon-bofangqibofang');
	let anniu=document.querySelectorAll('.pause');
	let audio=document.querySelector('audio');
	// 滚动条
	let ract=document.querySelector('.ract');
	let jindu=document.querySelector('.jindu');
	// 时间
	let time=document.querySelector('.time');
	let cur = time.querySelector('.cur');
	let dur = time.querySelector('.dur');
	// 音量
	let yinl=document.querySelector('.yinl');
	let service=document.querySelector('.service');
	let dian=document.querySelector('.dian');
	
	render(database[0]);
	function render(date){
		song.innerText=date.songs;
		singer.innerText=date.name;
		audio.src=date.src;
		lyric.innerText='';
		for(let i=0;i<date.lyrics.length;i++){
			lyric.innerHTML+=`<li>${date.lyrics[i].lyric}</li>`;
		}
	} 
 
	// 暂停按钮
	pause.onclick=function(){
		if(audio.paused){
			audio.play();
			anniu[0].style.display='block';
			anniu[1].style.display='none';
		}else{
			audio.pause();
			anniu[0].style.display='none';
			anniu[1].style.display='block';
		}
	}

	bofan.onclick=function(){
		if(audio.paused){
			audio.play();
			anniu[0].style.display='block';
			anniu[1].style.display='none';
		}else{
			audio.pause();
			anniu[0].style.display='none';
			anniu[1].style.display='block';
		}
	}

	// 滚动条
	audio.ontimeupdate=function(){
		let ct = Time(audio.currentTime);
		//进度条百分比
		let bili=audio.currentTime/audio.duration;
		// ${bili*100}%
		jindu.style.width=`${bili*100}%`;
		//更新时间	获取时间转化成秒
		cur.innerText = ct;
	}
		function Time(date){
  		let m = Math.floor(date/60) > 10? Math.floor(date/60): `0${Math.floor(date/60)}`;
  		let s = Math.floor(date%60) > 10? Math.floor(date%60): `0${Math.floor(date%60)}`;
  		return `${m}:${s}`;
  	}

  	//音量按钮
	//设置声音(不能是负数)
	dian.onmousedown=function(e){
		e.stopPropagation();
		let ox = e.clientX;
		let left = yinl.offsetLeft;
		document.onmousemove=function(e){
			e.stopPropagation();
       	  	e.preventDefault();
			let cx = e.clientX;
			let lefts = cx-ox+left;
	       	  if(lefts<-5){
	       	  	lefts=0;
	       	  }
	       	  if(lefts>100){
	       	  	lefts=100;
	       	  }
       	 	dian.style.lefts=`${lefts}px`;
       	  	// console.log(lefts)
       	  	service.style.width=`${lefts-5}px`;
       	  	audio.yinl=lefts/100;
		}
		dian.onmouseup=function(){
			// audio.volume = lefts+7/100;
			dian.onmousedown = null;
			document.onmousemove = null;
		}
	}

}