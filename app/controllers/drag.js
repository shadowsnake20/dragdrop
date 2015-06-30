
var Draggable = require('ti.draggable');

var win = Ti.UI.createWindow({
	backgroundColor:'white',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true
});


var rel = 0;
var newLeft = 0;
var newTop = 0;

var image1 = Ti.UI.createImageView({
		    image: '/images/colorear/alegria/alegria1.png',
		    left:'5%', top:'35%',
		    width:'20%', height:'20%'
		  });
var image2 = Ti.UI.createImageView({
		    image: '/images/colorear/miedo/miedo2.png',
		    left:'25%', top:'35%',
		    width:'20%', height:'20%'
		  });
		  
var image3 = Ti.UI.createImageView({
		    image: '/images/colorear/miedo/miedo3.png',
		    left:'45%', top:'35%',
		    width:'20%', height:'20%'
		  });
		  
var image4 = Ti.UI.createImageView({
		    image: '/images/colorear/miedo/miedo4.png',
		    left:'65%', top:'35%',
		    width:'20%', height:'20%'
		  });
		  
var image5 = Ti.UI.createImageView({
		    image: '/images/colorear/rabia/enojo10.png',
		    left:'5%', top:'65%',
		    width:'20%', height:'20%'
		  });
		  
var image6 = Ti.UI.createImageView({
		    image: '/images/colorear/tristeza/pena2.png',
		    left:'25%', top:'65%',
		    width:'20%', height:'20%'
		  });
		  
var image7 = Ti.UI.createImageView({
		    image: '/images/colorear/tristeza/pena9.png',
		    left:'45%', top:'65%',
		    width:'20%', height:'20%'
		  });
		  
var image8 = Ti.UI.createImageView({
		    image: '/images/colorear/tristeza/pena5.png',
		    left:'65%', top:'65%',
		    width:'20%', height:'20%'
		  });
		  
win.add(image1);
win.add(image2);
win.add(image3);
win.add(image4);
win.add(image5);
win.add(image6);
win.add(image7);
win.add(image8);

var imageTest = Draggable.createView({
			backgroundImage: '/images/colorear/rojo.png',
		    left:'85%', top: '50%',
		    width:'10%',
			height:'18%',
});

win.add(imageTest);

imageTest.addEventListener('start', function(e){
	Ti.API.info('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
	Ti.API.info('Event "start"');
	Ti.API.info('left: '+e.left);
	Ti.API.info('top:  '+e.top);
	Ti.API.info('center:'+JSON.stringify(e.center));
});

imageTest.addEventListener('move', function(e){
	Ti.API.info('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
	Ti.API.info('Event "move"');
	Ti.API.info('left: '+e.left);
	Ti.API.info('top:  '+e.top);
	Ti.API.info('center:'+JSON.stringify(e.center));
});


imageTest.addEventListener('end', function(e){
	Ti.API.info('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
	Ti.API.info('Event "end"');
	Ti.API.info('left: '+e.left);
	Ti.API.info('top:  '+e.top);
	Ti.API.info('directionVertical: '+ e.directionVertical);
	Ti.API.info('center:'+JSON.stringify(e.center));
	/*****************************************************/
	var p = {x: e.left, y: e.top};
    var tp = win.convertPointToView(p, image5);
    
			ancho = Titanium.Platform.displayCaps.platformWidth;
			alto = Titanium.Platform.displayCaps.platformHeight;
			
	/*****************************************************/
		if((-0.02*ancho)<=tp.x && tp.x<=(0.15*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.20*alto)){
					image5.backgroundColor="red";
					alert('Muy bien!!!!');
		}
	
});


win.open();
