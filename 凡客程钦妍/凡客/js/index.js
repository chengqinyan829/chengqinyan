/*
* @Author: 程钦妍
* @Date:   2017-08-10 22:34:52
* @Last Modified by:   程钦妍
* @Last Modified time: 2017-08-18 16:48:46
*/

$(function(){
	let banner=$('.lunbo')[0];
	let lis=$('li',banner);
	let width=banner.offsetWidth;

	let t;
	let now=0,next=0;
	t =setInterval(function(){
		move();
	},2000);
	function move(){
		next++;
		if(next==lis.length){
			next=0;
		}
		lis[next].style.left=`${width}px`;
		animate(lis[now],{left:-width});
		animate(lis[next],{left:0});
		now=next;
	}
});