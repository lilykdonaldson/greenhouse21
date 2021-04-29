let img;
function preload() {
  img = loadImage('assets/graphic.png');
}

function setup() {
	// if(windowWidth>800){
	// 	img.resize(windowWidth*0.8, 0);
	// 	createCanvas(windowWidth*0.94, img.height*1.1);
	// }
	// else{
		img.resize(1000, 0);
		createCanvas(1200, img.height*1.1);
	//}
}

function draw() {
	background('grey');
	image(img, (1400/2)-(img.width/1.6), 0);
	fill('#F4851F');
	strokeWeight(1);
	stroke(0);
	textAlign(CENTER);
	textSize(15);
	console.log(mouseX,mouseY);
	//Grow Lights Hit Point
	ellipse(342,227,20,20);
	ellipse(276,343,20,20);
	ellipse(836,243,20,20);
	ellipse(493,757,20,20);
	ellipse(802,789,20,20)
	strokeWeight(1.5);
	stroke('#F4851F');
	let d = dist(mouseX, mouseY,342,227);
  	if (d < 10) {
  		line(342,227, 223,133);
    	ellipse(342,227,25,25);
    	rect(155,120,100,25);
    	fill(255);
    	strokeWeight(0);
		text('Grow Lights', 205,137);
		fill('#F4851F');
		strokeWeight(1.5);
  	}
  	//IoT Hit Point
	d = dist(mouseX, mouseY,276,343);
  	if (d < 10) {
    	ellipse(276,343,25,25);
  	}
  	//Data Dashboard
	d = dist(mouseX, mouseY,836,243);
  	if (d < 10) {
    	ellipse(836,243,25,25);
  	}
    //Community
	d = dist(mouseX, mouseY,493,757);
  	if (d < 10) {
    	ellipse(493,757,25,25);
  	}
  	//Business
	d = dist(mouseX, mouseY,802,789);
  	if (d < 10) {
    	ellipse(802,789,25,25);
  	}
}

