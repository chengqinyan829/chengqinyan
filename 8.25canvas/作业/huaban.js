/*
* @Author: 程钦妍
* @Date:   2017-08-28 18:57:22
* @Last Modified by:   程钦妍
* @Last Modified time: 2017-08-31 08:45:57
*/
function Palette(canvas,bottom){
	this.canvas=canvas;
	this.bottom=bottom;
	this.ctx=canvas.getContext("2d");
	this.history=[];
	this.cw=this.canvas.width;
	this.ch=this.canvas.height;
	this.lineWidth='3';
	this.lineCap='round';
	this.fillStyle='#ffcc01';
	this.strokeStyle='red';
	this.style='stroke';
	this.PI=Math.PI;
	this.temp=null;
}
Palette.prototype={
	init:function(){
		this.ctx.lineWidth=this.lineWidth;
		this.ctx.lineCap=this.lineCap;
		this.ctx.fillStyle=this.fillStyle;
		this.ctx.strokeStyle=this.strokeStyle;
	},
	// 直线
	line:function(ox,oy,cx,cy){		
		this.init();
		this.ctx.beginPath();
		this.ctx.moveTo(ox, oy);
		this.ctx.lineTo(cx,cy);
		this.ctx.closePath();
		this.ctx.stroke();
	},
	// 虚线
	dashed:function(ox,oy,cx,cy){
				this.init();
				this.ctx.beginPath();
				this.ctx.moveTo(ox, oy);
				this.ctx.lineTo(cx,cy);
				this.ctx.closePath();
				this.ctx.stroke();
				this.ctx.setLineDash([10,10]);
	},
	// 铅笔
	pencil:function(){
		let that=this;
		this.canvas.onmousedown=function(e){
		let ox=e.offsetX,oy=e.offsetY;
			that.ctx.beginPath();
			if(that.history.length>0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0);
				}
			that.ctx.moveTo(ox, oy);
			that.canvas.onmousemove=function(e){
			let cx=e.offsetX,cy=e.offsetY;			
			that.ctx.lineTo(cx,cy);
			that.ctx.stroke();
			that.ctx.strokeStyle='red';
			}	
			that.canvas.onmouseup=function(){
				that.history.push(that.ctx.getImageData(0, 0, that.cw, that.ch));
				that.canvas.onmousemove=null;
				that.canvas.onmouseup=null;
			}
		}			
	},
	// 几边形
	poly:function(){
		let that=this;
		this.canvas.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;	
			that.canvas.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
				poly(ox,oy,8,r);
			}
			
		}
		that.canvas.onmouseup=function(){
				that.canvas.onmousemove=null;
				// that.canvas.onmouseup=null;
		}
		function poly(x,y,bian,r){	
			let ang = 360 / bian / 180*Math.PI;
			that.init();
			that.ctx.beginPath();
			that.ctx.moveTo(x+r,y);
			for (let i =1;i<bian;i++) {
				that.ctx.lineTo(x+r*Math.cos(ang*i),y+r*Math.sin(ang*i));
			}
			that.ctx.fill();	
		}
	},
	// 圆
	circle:function(){
		let that=this;
		this.canvas.onmousedown=function(e){
		let ox=e.offsetX,oy=e.offsetY;
		that.canvas.onmousemove=function(e){
		let cx=e.offsetX,cy=e.offsetY;
		that.ctx.clearRect(0, 0, that.cw, that.ch);
		let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
		that.init();
		that.ctx.beginPath();
		if(that.history.length>0){
			that.ctx.putImageData(that.history[that.history.length-1],0,0);
		}
		that.ctx.arc(ox, oy, r, 0, 2*that.PI);
		that.ctx.closePath();
		that.ctx.stroke();
		that.ctx[that.style]();			}
		that.canvas.onmouseup=function(){
			that.history.push(that.ctx.getImageData(0, 0, that.cw, that.ch));
			that.canvas.onmousemove=null;
			that.canvas.onmouseup=null;
			}
		}
	},
	// 矩形
	rect:function(){
		let that=this;
		this.canvas.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			that.canvas.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				that.ctx.clearRect(0, 0, that.cw, that.ch);
				that.init();
				that.ctx.beginPath();
				if(that.history.length>0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.width=cx-ox;
				that.height=cy-oy;
				that.ctx.fillRect(ox,oy,that.width,that.height);
				that.ctx.closePath();
				that.ctx.stroke();
			}
			that.canvas.onmouseup=function(){
				that.history.push(that.ctx.getImageData(0, 0, that.cw, that.ch));
				that.canvas.onmousemove=null;
				that.canvas.onmouseup=null;
			}
		}
	},
	// 几角形
	jiiaoxing:function(jiao){
		let that=this;
		let ang=360/(jiao*2)/180*that.PI;
		this.canvas.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
				that.canvas.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					let r=Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
					let r1=r/2;
					that.ctx.clearRect(0, 0, that.cw, that.ch);
					that.init();
					that.ctx.beginPath();
					if(that.history.length>0){
						that.ctx.putImageData(that.history[that.history.length-1],0,0)
					}
					that.ctx.moveTo(ox+r,oy);
					for(i=1;i<(jiao*2);i++){
						if(i%2){
							that.ctx.lineTo(ox+r1*Math.cos(ang*i),oy+r1*Math.sin(ang*i));
						}else{
							that.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
						}
					}
					that.ctx.closePath();
					that.ctx.stroke();
					// that.ctx[that.style]();
				}
				that.canvas.onmouseup=function(){
					that.history.push(that.ctx.getImageData(0, 0, that.cw, that.ch));
					that.canvas.onmousemove=null;
					that.canvas.onmouseup=null;
				}
			}
		},

		draw:function(type){
			let that=this;
			this.canvas.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			that.canvas.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				that.ctx.clearRect(0, 0, that.cw, that.ch);
				if(that.history.length>0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0);
				}
				that[type](ox,oy,cx,cy);			
			that.canvas.onmouseup=function(){
				that.history.push(that.ctx.getImageData(0, 0, that.cw, that.ch));
				that.canvas.onmousemove=null;
				that.canvas.onmouseup=null;
				}
			}
		}
		},
		// 橡皮
		eraser:function(){
			let that=this;
			this.canvas.onmousedown=function(){
				that.canvas.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					that.ctx.clearRect(cx, cy, 30, 30);
				}
				that.canvas.onmouseup=function(){
					if(that.history.length>0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0);
				}
				that.history.push(that.ctx.getImageData(0, 0, that.cw, that.ch));	
					that.onmouseup=null;
				}
			}
		},
		// 返回
		back:function(){
			if(this.history.length>=1){
				let img=this.history.pop();
				this.ctx.putImageData(img,0,0);
			}else{
				this.ctx.clearRect(0, 0, this.cw, this.ch);
				this.history=[];
			}
		},
		// 文字
		font:function(){
			let that=this;
			this.canvas.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				let divs=document.createElement('div');
				divs.style.cssText=`
					width:100px;height:30px;border:1px solid #ccc;position:absolute;
					left:${ox}px;top:${oy}px;
				`;
				divs.contentEditable=true;
				that.bottom.appendChild(divs);
				that.canvas.onmousedown=null;

				let lefts,tops;
				divs.onmousedown=function(e){
					let ox=e.clientX,oy=e.clientY;
					let ol=divs.offsetLeft,ot=divs.offsetTop;
					that.canvas.onmousemove=function(e){
						let cx=e.clientX,cy=e.clientY;
						lefts=cx-ox+ol;
						tops=cy-oy+ot;
						divs.style.left=`${lefts}px`;
						divs.style.top=`${tops}px`;
					}
					divs.onmouseup=function(){
						that.canvas.onmousemove=null;
						this.onmouseup=null;
					}
				}
				// 失去焦点时候
				divs.onblur=function(){
				let bc=this.innerText;
				that.bottom.removeChild(divs);
				that.ctx.textAlign='center';
				that.ctx.textBaseLine='middle';
				that.ctx.font='bold 20px sans-serif';
				that.ctx.fillText(bc,lefts,tops);
				}
			}
		},
		// 反向
		revers:function(){
			let imgDate=this.ctx.getImageData(0,0,this.cw,this.ch);
			let data=imgDate.data;
			for(let i=0;i<data.length;i+=4){
				data[i]=255-data[i];
				data[i+1]=255-data[i+1];
				data[i+2]=255-data[i+2];
			}
			this.ctx.putImageData(imgDate,0,0);
		},
		//裁切
		caiqie:function(clip){
		let that=this;
		this.canvas.onmousedown=function(e){
			//起点
			let ox = e.offsetX,oy = e.offsetY;
			let w,h,minX,minY;
			that.canvas.onmousemove = function(e){
				//移动的位置
				let cx = e.offsetX,cy = e.offsetY;
				w=Math.abs(ox-cx);
				h=Math.abs(oy-cy);
				minX=cx > ox ? ox : cx;
				minY=cy > oy ? oy : cy;
				clip.style.cssText=`
					display:block;
					width:${w}px;height:${h}px;
					left:${minX}px;top:${minY}px;
				`;				
			}
			that.canvas.onmouseup=function(){
				that.temp=that.ctx.getImageData(minX,minY,w,h);
				that.ctx.clearRect(minX,minY,w,h);
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch 
));
				that.ctx.putImageData(that.temp,minX,minY);
				that.canvas.onmousemove=null;
				that.canvas.onmouseup=null;
				that.drag(minX,minY,w,h,clip);
			}
		}

	},
		//裁切拖动
		drag:function(minX,minY,w,h,clip){
			let that =this;
			this.canvas.onmousemove = function(e){
				//移动的位置
				let ox = e.offsetX,oy = e.offsetY;
				if (ox>minX&&ox<minX+w&&oy>minY&&oy<minY+h) {
					that.canvas.style.cursor='move';
				} else {
					that.canvas.style.cursor='default';
				}	
			}
			this.canvas.onmousedown=function(e){
				let ox = e.offsetX,oy = e.offsetY;
				that.canvas.onmousemove = function(e){
					let cx = e.offsetX,cy = e.offsetY;

					let lefts=cx-ox+minX,tops=cy-oy+minY;
					clip.style.left=`${lefts}px`;
					clip.style.top=`${tops}px`;
					//设置边界
					if (lefts<=0) {
						lefts=0;
					}
					if (lefts>=that.cw+w) {
						lefts=that.cw+w;
					}
					if (tops<=0) {
						tops=0;
					}
					if (tops>=that.ch +h) {
						tops=that.ch+h;
					}
					if (that.history.length>0) {
						that.ctx.putImageData(that.history[that.history.length-1],0,0)
					}
					console.log(that.temp)
					that.ctx.putImageData(that.temp,lefts,tops);
				}
				that.canvas.onmouseup=function(){
					clip.style.cssText=`
					display:block;
					`;
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch 
	));				
					that.temp=null;	
					that.canvas.style.cursor='default';			
					that.canvas.onmousemove=null;
					that.canvas.onmouseup=null;
					that.canvas.onmousedown=null;
				}
			}
		},
		
}