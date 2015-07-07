var win = Titanium.UI.createWindow({
    backgroundColor:'white',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true
});
 
var htmlstrng='<html>
				<body>
					<img src="images/animacion/rabia1.gif"  style="width: 30%; height: auto;"/>
					<img src="images/animacion/rabia2.gif"  style="width: 30%; height: auto; right:40%"/>
				</body>
			</html>';


var gifView = Titanium.UI.createWebView({
	 top:'0%', 
	 left:'0%', 
	 html:htmlstrng 
}); 

win.add(gifView);

win.addEventListener("open", function () {
    setTimeout(function(){
    	drag = Alloy.createController('drag');
    	win.close();
    	}, 10000);
});


win.open();