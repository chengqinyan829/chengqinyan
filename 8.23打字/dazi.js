/*
* @Author: 程钦妍
* @Date:   2017-08-23 09:06:20
* @Last Modified by:   程钦妍
* @Last Modified time: 2017-08-23 22:16:06
*/
// 属性：哪些字符、个数、速度、得分、关卡、生命、减分
// 方法：开始、消除、产生字符（个数、哪些字符）、下一关、重新开始
// 产生字符表、定义长度
// 游戏开始，产生字符
// 宽和高、修改位置
// 
//掉下来
//调用drop、数组、将元素插入数组中
//drop中，时间函数
//箭头函数没有arguments，不能当做构造函数，由定义决定
//if
//大于等于500时，将body中的that.elements移出
//that.elements.splce(i,1);
//that.getChar();再调用一次
//if(页面的元素小于this.length)
function Game(){
	this.charSheet=[
	['Q','img/q.png'],
	['W','img/w.png'],
	['E','img/e.png'],
	['R','img/r.png'],
	['T','img/t.png'],
	['Y','img/y.png'],
	['U','img/u.png'],
	['I','img/i.png'],
	['O','img/o.png'],
	['P','img/p.png'],
	['A','img/a.png'],
	['S','img/s.png'],
	['D','img/d.png'],
	['F','img/f.png'],
	['G','img/g.png'],
	['H','img/h.png'],
	['J','img/j.png'],
	['K','img/k.png'],
	['L','img/l.png'],
	['Z','img/z.png'],
	['X','img/x.png'],
	['C','img/c.png'],
	['V','img/v.png'],
	['B','img/b.png'],
	['N','img/n.png'],
	['M','img/m.png'],
	];
	this.length=5;
	this.elements=[];
	this.speed=10;
	this.score=0;
	this.gq=10;
	this.scores=document.querySelector('span');
	this.position=[];
}
Game.prototype={
	start:function(){
		this.getChars(this.length);
		this.drop();
		this.key();
	},
	getChars:function(length){
		for(let i=0;i<length;i++){
			// 循环产生一个
			this.getChar();
		}
	},
	getChar:function(){
		// 得到随机的下标
		let num;
		let divs=document.createElement('div');
		let lefts;		
		let tops=Math.random()*100;
		do{
			num=Math.floor(Math.random()*this.charSheet.length);
		}while(this.checkRepeat(num));
		do{
			lefts=(innerWidth-400)*Math.random()+200;
		}while(this.checkPosition(lefts));
		divs.classList.add('box');
		// 将内容插进去			
		divs.style.cssText=
		`top:${tops}px;left:${lefts}px;
		background-image:url(${this.charSheet[num][1]});
		`;
		document.body.appendChild(divs);
		divs.innerText=this.charSheet[num][0];
		this.elements.push(divs);
		this.position.push(lefts);
	},
	checkRepeat:function(num){
		return this.elements.some(value=>
		value.innerText==this.charSheet[num][0])
	},
	checkPosition:function(lefts){
		return this.position.some(function(value){

		return Math.abs(value-lefts)<50;
		})
	},
	drop:function(){
		let that=this;
		this.t=setInterval(function(){
			for(let i=0;i<that.elements.length;i++){
 				let tops=that.elements[i].offsetTop;
 				that.elements[i].style.top=`${tops+that.speed}px`;
 				if(tops>=500){
 					document.body.removeChild(that.elements[i]);
 					that.elements.splice(i,1);
 					that.position.splice(i,1);
 				}
			}
			if(that.elements.length<that.length){
				that.getChar();
			}
		},300)
	},
		// 键盘事件
		// 键盘按下的时候，转换为字符串
		// 循环（char==that.elements[i].innerTEXT)从页面中删掉
	key:function(){
		let that=this;
		document.onkeydown=function(e){
			let char=String.fromCharCode(e.keyCode);
			for(let i=0;i<that.elements.length;i++){
				if(char==that.elements[i].innerText){
					that.score++;
					that.scores.innerText=that.score;
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);
					that.position.splice(i,1);
					if(that.score==that.gq){
						that.next();
					}
				}
			}
		}
	},
	next:function(){
		clearInterval(this.t);
			for(let i=0;i<this.elements.length;i++){
				document.body.removeChild(this.elements[i]);
		}
		this.elements=[];
		this.position=[];
		this.length++;
		this.gq+=10;
		this.start();
	}
}
// main中得分、生命	js添加分值   keydown if中++ 对象	obj.innerText=score
// 关卡如果分值等于关卡，that.next();
// 下一关事件：将时间函数停下，将它成为属性this.t=时间函数
// 清楚时间函数clearInterval()
// 页面清除：循环
// 数组清空成为空数组	this.length++;关卡+=10（每加一关加10）再调用一下start
// 
// confirm（）去重复字母、去重复的水平方向重叠、
// 用dowhile	num移入	checkRepeat(num)判断是否重复
// 加重复方法
// num (this.charSheet[num];	this.elements[i].innerText)
// this.elements.some(function(value){
	// return value.innerText==this.charSheet[num];
// })
// 位置Math.abs(value-left)<50	添加
// 删掉位置
// 
// 逗号选中成为二维数组['Q','']	