let img;
let popupMode = false;
let pos = 25;
let whoClicked;
function preload() {
  img = loadImage('assets/graphic.png');
}

function setup() {
	// if(windowWidth>800){
	// 	img.resize(windowWidth*0.8, 0);
	// 	createCanvas(windowWidth*0.94, img.height*1.1);
	// }
	// else{
		//img.resize(1000, 0);
	createCanvas(1200, img.height*1.1);
	//}
	//console.log(img.width);
}

function draw() {
	background(240);
	image(img, (1400/2)-(img.width/1.6), 0);
	fill('#F4851F');
	strokeWeight(1);
	stroke(0);
	textAlign(CENTER);
	textSize(15);
	ellipse(342,227,20,20);
	ellipse(276,343,20,20);
	ellipse(836,243,20,20);
	ellipse(493,757,20,20);
	ellipse(802,789,20,20)
	strokeWeight(1.5);
	stroke('#F4851F');
	if(!popupMode){
		//Grow Lights Hover
		let d = dist(mouseX, mouseY,342,227);
	  	if (d < 10) {
	  		line(342,227, 223,133);
	    	ellipse(342,227,25,25);
	    	rect(155,120,120,25);
	    	fill(255);
	    	strokeWeight(0);
			text(' Grow Lights ➤ ', 215,137);
			fill('#F4851F');
			strokeWeight(1.5);
	  	}
	  	//Sensors Hover 
		d = dist(mouseX, mouseY,276,343);
	  	if (d < 10) {
	  		line(276,343, 155,334);
	    	ellipse(276,343,25,25);
	    	rect(65,320,90,25);
	    	fill(255);
	    	strokeWeight(0);
			text(' Sensors ➤ ', 112,338);
			fill('#F4851F');
			strokeWeight(1.5);
	  	}
	  	//Data Dashboard Hover
		d = dist(mouseX, mouseY,836,243);
	  	if (d < 10) {
	    	line(836,243, 982,140);
	    	ellipse(836,243,25,25);
	    	rect(982,130,145,25);
	    	fill(255);
	    	strokeWeight(0);
			text(' Data Dashboard ➤ ',1055,147);
			fill('#F4851F');
			strokeWeight(1.5);
	  	}
	    //Community Hover
		d = dist(mouseX, mouseY,493,757);
	  	if (d < 10) {
	    	line(493,757, 221,674);
	    	ellipse(493,757,25,25);
	    	rect(221,674,120,25);
	    	fill(255);
	    	strokeWeight(0);
			text(' Community ➤ ',283,692);
			fill('#F4851F');
			strokeWeight(1.5);
	  	}
	  	//Business Hover
		d = dist(mouseX, mouseY,802,789);
	  	if (d < 10) {
	    	line(802,789, 892,664);
	    	ellipse(802,789,25,25);
	    	rect(892,654,120,25);
	    	fill(255);
	    	strokeWeight(0);
			text(' Business ➤ ',954,672);
			fill('#F4851F');
			strokeWeight(1.5);
	  	}
	}
  	textSize(20);
  	fill('#474562');
  	strokeWeight(0);
  	text('Click the orange dots to learn more, or read the full whitepaper below.',586,1081);
  	fill('#474562');
  	rect(519,1104,170,40);
  	fill('#6f6c91');
  	rect(515,1100,170,40);
  	fill(255);
  	text('Whitepaper',598,1126);
  	if (mouseX>515&&mouseX<(515+170)&&mouseY>1100&&mouseY<(1100+40)) {
  		stroke('#474562');
  		strokeWeight(8);
  		fill('#6f6c91');
	  	rect(515,1100,170,40);
	  	strokeWeight(0);
	  	fill(255);
	  	text('Whitepaper ➤',598,1126);
  	}
  	if(popupMode){
  		fill('rgba(10,10,10, 0.5)');
  		strokeWeight(0);
  		rect(0,0,1200,img.height*1.1);
  		fill(255);
  		if(pos<25){
  			pos=25;
  		}
  		else if(pos>(img.height*1.1)-600){
  			pos = (img.height*1.1)-600;
  		}
  		rect(300,pos,600,550);
  		fill(0);
  		ellipse(875,pos+20,25,25);
  		fill('red');
  		text('X',875,pos+27);
  		fill(0);
  		textAlign(LEFT);
  		if(whoClicked=="lights"){
			let s = '    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat eros ut elit ultrices finibus. Fusce sagittis mi vitae enim interdum pharetra. Fusce maximus, dui quis tincidunt sagittis, massa est tincidunt mauris, et tempus leo ipsum nec sem. In non nisl consequat, lobortis magna eu, accumsan augue. Pellentesque tincidunt enim sit amet ipsum suscipit, in porta turpis commodo. Curabitur aliquam purus turpis, vel imperdiet augue luctus at. Duis ut semper sapien, et placerat sem. Aliquam posuere sem at sagittis dignissim. Donec vitae pulvinar neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In semper neque viverra sagittis rhoncus. Aenean rutrum lorem vel nulla molestie aliquam.\n   Donec venenatis, leo ut mattis ornare, justo magna tempor velit, vitae rutrum turpis arcu in ipsum. Duis ultricies rhoncus eleifend. Ut imperdiet finibus sapien interdum cursus. Etiam dui lectus, cursus eu quam sit amet, dictum gravida tellus. Phasellus nec tellus a neque venenatis imperdiet. Nullam eget augue dolor. Aenean in purus id tortor efficitur.';
			text(s, 325,pos+35, 550, 525);
  		}
  		else if(whoClicked=="sensors"){

  		}
  		else if(whoClicked=="data"){
  			
  		}
  		else if(whoClicked=="community"){
  			
  		}
  		else if(whoClicked=="business"){
  			
  		}
  	}

}
function mousePressed() {
	//Grow Lights Hit Point
	let d = dist(mouseX, mouseY,342,227);
  	if (d < 10) {
  		popupMode = true;
  		whoClicked = "lights";

  	}
  	//Sensors Hit Point
	d = dist(mouseX, mouseY,276,343);
  	if (d < 10) {
  		popupMode = true;
  		whoClicked = "sensors";
  	}
  	//Data Dashboard Hit Point
	d = dist(mouseX, mouseY,836,243);
  	if (d < 10) {
  		popupMode = true;
    	whoClicked = "data";
  	}
    //Community Hit Point
	d = dist(mouseX, mouseY,493,757);
  	if (d < 10) {
  		popupMode = true;
    	whoClicked = "community";
  	}
  	//Business Hit Point
	d = dist(mouseX, mouseY,802,789);
  	if (d < 10) {
  		popupMode = true;
    	whoClicked = "business";
  	}
  	if (mouseX>515&&mouseX<(515+170)&&mouseY>1100&&mouseY<(1100+40)) {
  		window.open("https://www.google.com", '_blank');
  	}
  	if(popupMode){
  		d = dist(mouseX, mouseY,875,pos+20);
  		if (d<12.5){
  			popupMode = false;
  		}
  	}
  	
}

function mouseWheel(event) {
  pos += event.delta;
}