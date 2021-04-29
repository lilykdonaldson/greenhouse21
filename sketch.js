let img;
function preload() {
  img = loadImage('assets/graphic.png');
}

function setup() {
	if(windowWidth>800){
		img.resize(windowWidth*0.6, 0);
		createCanvas(windowWidth*0.94, img.height*1.1);
	}
	else{
		img.resize(windowWidth*0.95, 0);
		createCanvas(windowWidth, img.height*1.1);
	}
  background('grey');
  
  image(img, (windowWidth/2)-(img.width/1.7), 0);
}

function draw() {
	ellipse(100,100,20,20)
}