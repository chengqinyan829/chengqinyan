var ShareTip = function() { 
	
}
ShareTip.prototype.sharetoqqzone=function(title,url,picurl)  
{  
 var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+title+'&url='+url+'&pics='+picurl;  
 window.open(shareqqzonestring,'newwindow','height=400,width=400,top=100,left=100');  
}  